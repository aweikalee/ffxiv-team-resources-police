type IAbilityType = 'single' | 'aoe' | 'unknown'

type ILogLine = {
  // 21|[timestamp]|[sourceId]|[source]|[id]|[ability]|[targetId]|[target]|[flags]|[damage]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[targetCurrentHp]|[targetMaxHp]|[targetCurrentMp]|[targetMaxMp]|[?]|[?]|[targetX]|[targetY]|[targetZ]|[targetHeading]|[currentHp]|[maxHp]|[currentMp]|[maxMp]|[?]|[?]|[x]|[y]|[z]|[heading]|[sequence]|[targetIndex]|[targetCount]
  // 22|[timestamp]|[sourceId]|[source]|[id]|[ability]|[targetId]|[target]|[flags]|[damage]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[?]|[targetCurrentHp]|[targetMaxHp]|[targetCurrentMp]|[targetMaxMp]|[?]|[?]|[targetX]|[targetY]|[targetZ]|[targetHeading]|[currentHp]|[maxHp]|[currentMp]|[maxMp]|[?]|[?]|[x]|[y]|[z]|[heading]|[sequence]|[targetIndex]|[targetCount]
  _abilityType: IAbilityType
  _miss: boolean
  timestamp: string
  sourceId: string
  source: string
  abilityId: string
  ability: string
  targetId: string
  target: string
}

type ITimelineType = 'reference' | 'log'

type ITimelineLog = {
  /* 运行时 */
  _type: 'log'
  _id: string // 唯一标识
  _timestamp: number // 真实时间戳
  _phase: number // 阶段

  _cd: number // 技能冷却时间
  _lastUse: number // 最后一次使用时间戳
  _targets: { id: string; name: string }[] // 技能目标
  _abilityType: IAbilityType // 技能类型
  _miss: boolean // 是否 miss

  /* 必要内容 */
  isHostile: boolean // 是否为敌对
  timestamp: number // 当前阶段的时间戳
  abilityId: string // 技能ID
  ability: string // 技能名称
  sourceId: string // 使用者ID
  source: string // 使用者名称
}

type ITimelineReference = {
  _id: number
  _type: 'reference'
} & Pick<
  ITimelineLog,
  'isHostile' | 'timestamp' | 'abilityId' | 'ability' | 'sourceId' | 'source'
>

type ITimeline = ITimelineLog | ITimelineReference

type ITimelinePhase = {
  _id: number
  name: string
  regexp: string
  _regexp: RegExp
}

type ITimelineAbility = {
  _id: number
  name: string
  cd?: number
}

type IReferenceKey = {
  id: number
  title: string
}

type IReferenceKeyExtra = {
  _key: string // 用于精准删除旧数据
  createdAt: number
  updatedAt: number
}

type IReferenceValue = {
  phases: ITimelinePhase[]
  list: ITimelineReference[][]
  abilities: ITimelineAbility[]
}

type IReference = IReferenceKey & IReferenceValue
