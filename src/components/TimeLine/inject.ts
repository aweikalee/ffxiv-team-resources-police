import { InjectionKey } from 'vue'

export const INJECT_KEY: InjectionKey<{
  openDetail(item: ITimeline): void
}> = Symbol()
