import { logLine } from '@/utils'
import { abilities } from './abilities'

const state = reactive({
  list: [] as ITimelineLog[][],
  lastUpdate: 0,

  add(item: ITimelineLog, phase: number) {
    const { list } = state

    const _list = list[phase] ?? (list[phase] = [])

    _list.push(item)
  },

  clear() {
    state.list = []
  },

  getLast() {
    const { list } = state
    for (let i = list.length - 1; i >= 0; i -= 1) {
      const phase = list[i]
      if (phase.length) return phase[phase.length - 1]
    }
  },

  getLastAbility(item: Partial<ITimelineLog>) {
    const { list } = state

    for (let i = list.length - 1; i >= 0; i -= 1) {
      const phase = list[i]
      for (let j = phase.length - 1; j >= 0; j -= 1) {
        const row = phase[j]
        if (row.ability === item.ability && row.source === item.source)
          return row
      }
    }
  },

  addLogLine(
    data: any,
    { phase, startTimestamp }: { phase: number; startTimestamp: number }
  ) {
    const { line } = data

    const ll = logLine.toObject(line)
    if (!ll) return

    let ability: ITimelineAbility | void
    if (abilities.map.size) {
      ability = abilities.get(ll.ability)
      if (!ability) return
    } else {
      // 当技能表为空 则记录所有技能
      ability = {
        _id: 0,
        name: ll.ability,
      }
    }

    const log = logLine.toLog(ll, {
      startTimestamp,
    })
    log._cd = ability.cd ?? 0
    log.phase = phase

    // 最后一次使用记录
    const lastAbility = state.getLastAbility(log)
    log._lastUse = lastAbility?._timestamp ?? 0

    if (log._abilityType === 'aoe') {
      const last = state.getLast()
      if (
        last &&
        last.ability === log.ability &&
        last.source === log.source &&
        last._timestamp === log._timestamp
      ) {
        last._targets.push(...log._targets)
        return
      }
    }

    state.add(log, phase)

    state.lastUpdate = Date.now()
  },
})

export const logs = readonly(state) as typeof state
