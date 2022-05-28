import { logLine } from '@/utils'
import { createEmptyReference, referenceStorage } from './referenceStorage'

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
    if (item._type !== 'log') {
      throw new Error(
        `记录的类型不是 log, [${item._id}]: ${item.ability}(${item.source})`
      )
    }

    const _list = list.value[item._phase] ?? (list.value[item._phase] = [])

    let i = 0
    for (; i < _list.length; i += 1) {
      const row = _list[i]
      if (item.timestamp <= row.timestamp) continue
      break
    }
    _list.splice(i, 0, logLine.toReference(item))

    state.save(current.value)
  },

  remove(item: ITimeline) {
    if (item._type !== 'reference') {
      throw new Error(
        `记录的类型不是 reference, [${item._id}]: ${item.ability}(${item.source})`
      )
    }

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
})

export const reference = readonly(state) as typeof state
