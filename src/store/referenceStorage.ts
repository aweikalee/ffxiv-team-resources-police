import {
  getStorage,
  logLine,
  removeStorage,
  setStorage,
  stringToRegexp,
  pick,
  uncreateKey,
  createPhaseId,
  createAbilityId,
  createEmptyReference,
} from '@/utils'
import { combat } from './combat'

let id = 0

const list = ref(getInitList())
const currentZoneList = computed(() => {
  return combat.zoneName
    ? list.value.filter((item) => item.zoneName === combat.zoneName)
    : []
})

const state = reactive({
  list,
  currentZoneList,

  get(id: number): IReference {
    const find = id ? list.value.find((i) => i.id === id) : null

    if (!find) {
      return createEmptyReference()
    }

    const key = find._key
    const data = getStorage(key) as IReferenceValue | void

    function transform(data: IReferenceValue, find: IReferenceKey): IReference {
      return {
        ...data,
        id: find.id,
        title: find.title,
        zoneName: find.zoneName,
        phases: (data.phases ?? []).map((v) => ({
          ...v,
          _id: createPhaseId(),
          _regexp: stringToRegexp(v.regexp),
        })),
        list: (data.list ?? []).map((phase) =>
          phase.map((item) => logLine.toReference(item))
        ),
        abilities: (data.abilities ?? []).map((v) => ({
          ...v,
          _id: createAbilityId(),
        })),
      }
    }

    if (data) {
      return transform(data, find)
    } else {
      return createEmptyReference()
    }
  },

  set(
    item: IReference & {
      id?: number
    }
  ) {
    // 更新列表
    let find = list.value.find((v) => v.id === item.id)
    if (find) {
      removeStorage(find._key)
      find.title = item.title
      find.zoneName = item.zoneName
      find.updatedAt = Date.now()
    } else {
      find = {
        id: createId(),
        _key: '',
        title: item.title,
        zoneName: item.zoneName,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }

      list.value.push(find)
    }

    find._key = stringifyKey(find) // 更新 _key

    // 储存
    setStorage(find._key, <IReferenceValue>{
      phases: item.phases.map((phase) => ({
        name: phase.name,
        regexp: phase.regexp,
      })),
      list: item.list.map((phase) =>
        phase.map((v) => logLine.toSaveReference(v))
      ),
      abilities: item.abilities.map((ability) => ({
        name: ability.name,
        cd: ability.cd,
      })),
    })

    return find.id
  },

  remove(id: number) {
    const index = list.value.findIndex((v) => v.id === id)
    if (~index) {
      const [value] = list.value.splice(index, 1)
      removeStorage(value._key)
    }
  },
})

export const referenceStorage = readonly(state) as typeof state

export function createId() {
  while (true) {
    id += 1
    if (!list.value.find((v) => v.id === id)) {
      return id
    }
  }
}

export function stringifyKey(item: IReferenceKey & IReferenceKeyExtra) {
  const obj = pick(item, ['id', 'title', 'zoneName', 'updatedAt', 'createdAt'])
  return JSON.stringify(obj)
}

export function parseKey(key: string) {
  const _key = uncreateKey(key)

  try {
    return typeof _key !== 'undefined' ? JSON.parse(_key!) : undefined
  } catch (err) {}

  return undefined
}

function getInitList() {
  const list: (IReferenceKey & IReferenceKeyExtra)[] = []

  Object.keys(localStorage).forEach((key) => {
    const target = parseKey(key)
    if (target && 'id' in target) {
      target._key = uncreateKey(key)
      list.push(target)
    }
  })

  return list
}
