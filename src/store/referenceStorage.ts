import {
  getStorage,
  logLine,
  removeStorage,
  setStorage,
  stringToRegexp,
  pick,
  uncreateKey,
} from '@/utils'

let id = 0
let phaseId = 0
let abilityId = 0

const state = reactive({
  list: getInitList(),

  get(id: number): IReference {
    const find = id ? state.list.find((i) => i.id === id) : null

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
    let find = state.list.find((v) => v.id === item.id)
    if (find) {
      removeStorage(find._key)
      find.title = item.title
      find.updatedAt = Date.now()
    } else {
      find = {
        id: createId(),
        _key: '',
        title: item.title,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }

      state.list.push(find)
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
    const index = state.list.findIndex((v) => v.id === id)
    if (~index) {
      const [value] = state.list.splice(index, 1)
      removeStorage(value._key)
    }
  },
})

export const referenceStorage = readonly(state) as typeof state

export function createId() {
  while (true) {
    id += 1
    if (!state.list.find((v) => v.id === id)) {
      return id
    }
  }
}

export function createPhaseId() {
  return phaseId++
}

export function createAbilityId() {
  return abilityId++
}

export function createPhase(): ITimelinePhase {
  return {
    _id: createPhaseId(),
    name: '',
    regexp: '',
    _regexp: new RegExp(''),
  }
}

export function createAbility(): ITimelineAbility {
  return {
    _id: createAbilityId(),
    name: '',
  }
}

export function stringifyKey(item: IReferenceKey & IReferenceKeyExtra) {
  const obj = pick(item, ['id', 'title', 'updatedAt', 'createdAt'])
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

export function createEmptyReference(): IReference {
  return {
    id: 0,
    title: '',
    phases: [],
    list: [],
    abilities: [],
  }
}
