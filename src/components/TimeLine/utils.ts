export const isLog = (data: ITimeline): data is ITimelineLog =>
  data._type === 'log'

export const isReference = (data: ITimeline): data is ITimelineReference =>
  data._type === 'reference'
