import { pick } from '.'
import { dayjs } from './dayjs'

export const ENEMY_OR_PET = /^40/
export const MISS_ID = 'E0000000'

function getType(line: string[]): IAbilityType {
  if (line[0] === '21') return 'single'
  if (line[0] === '22') return 'aoe'
  return 'unknown'
}

function isMiss(line: string[]) {
  return line[6] === MISS_ID
}

export function toObject(line: string[]): ILogLine | void {
  switch (line[0]) {
    case '21':
    case '22':
      // 21|[timestamp]|[sourceId]|[source]|[id]|[ability]|[targetId]|[target]|[flags]|[damage]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[targetCurrentHp]|[targetMaxHp]|[targetCurrentMp]|[targetMaxMp]|[?]|[?]|[targetX]|[targetY]|[targetZ]|[targetHeading]|[currentHp]|[maxHp]|[currentMp]|[maxMp]|[?]|[?]|[x]|[y]|[z]|[heading]|[sequence]|[targetIndex]|[targetCount]
      // 22|[timestamp]|[sourceId]|[source]|[id]|[ability]|[targetId]|[target]|[flags]|[damage]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[targetCurrentHp]|[targetMaxHp]|[targetCurrentMp]|[targetMaxMp]|[?]|[?]|[targetX]|[targetY]|[targetZ]|[targetHeading]|[currentHp]|[maxHp]|[currentMp]|[maxMp]|[?]|[?]|[x]|[y]|[z]|[heading]|[sequence]|[targetIndex]|[targetCount]
      return {
        _abilityType: getType(line),
        _miss: isMiss(line),
        timestamp: line[1],
        sourceId: line[2],
        source: line[3],
        abilityId: line[4],
        ability: line[5],
        targetId: line[6],
        target: line[7],
      }
  }
}

let logId = 0
export function toLog(
  line: ILogLine | string[],
  other: { startTimestamp: number }
): ITimelineLog {
  const logLine = Array.isArray(line) ? toObject(line)! : line

  const _timestamp = dayjs(logLine.timestamp).valueOf()
  const timestamp = _timestamp - other.startTimestamp

  return {
    /* 运行时 */
    _type: 'log',
    _id: `L${logId++}`,
    _timestamp,
    _cd: 0,
    _lastUse: 0,
    _targets: [
      {
        id: logLine.targetId,
        name: logLine.target,
      },
    ],
    _abilityType: logLine._abilityType,
    _miss: logLine._miss,

    /* 必要内容 */
    phase: 0,
    isHostile: ENEMY_OR_PET.test(logLine.sourceId),
    timestamp,
    source: logLine.source,
    ability: logLine.ability,
  }
}

let referenceId = 0
export function toReference(log: ITimeline): ITimelineReference {
  if (log._type === 'reference') return log

  return {
    _type: 'reference',
    _id: referenceId++,
    ...pick(log, ['phase', 'isHostile', 'timestamp', 'ability', 'source']),
  }
}

export function toSaveReference(log: ITimeline) {
  return pick(log, ['phase', 'isHostile', 'timestamp', 'ability', 'source'])
}
