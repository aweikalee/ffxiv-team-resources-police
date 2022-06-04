import { logLine, createEmptyReference } from '@/utils'
import { referenceStorage } from './referenceStorage'

const current = ref<IReference>(createEmptyReference())

const list = computed(() => current.value.list)

const state = reactive({
  current,

  save(data: IReference) {
    return referenceStorage.set(data)
  },
  // TODO: 节流 save

  restore(id: number) {
    current.value = referenceStorage.get(id)
  },

  add(item: ITimeline) {
    const _list = list.value[item.phase] ?? (list.value[item.phase] = [])

    let i = 0
    for (; i < _list.length; i += 1) {
      const row = _list[i]
      if (item.timestamp <= row.timestamp) continue
      break
    }
    _list.splice(i, 0, logLine.toReference(item))

    state.save(current.value)
  },

  remove(item: ITimelineReference) {
    for (let i = 0; i < list.value.length; i += 1) {
      const phase = list.value[i]
      for (let j = 0; j < phase.length; j += 1) {
        const row = phase[j]
        if (row._id === item._id) {
          phase.splice(j, 1)
          state.save(current.value)
          return
        }
      }
    }

    throw new Error(
      `找不到记录, [${item._id}]: ${item.ability}(${item.source})`
    )
  },

  update(item: ITimelineReference) {
    if (item._id) state.remove(item)
    state.add(item)
  },
})

export const reference = readonly(state) as typeof state
