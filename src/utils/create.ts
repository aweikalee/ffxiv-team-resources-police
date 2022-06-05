/**
 * ID规则
 * id === 0 未赋值
 * id > 0 有效ID
 * id < 0 临时ID
 */

let phaseId = 0
export function createPhaseId() {
  return ++phaseId
}

let abilityId = 0
export function createAbilityId() {
  return ++abilityId
}

let tempId = 0
export function createTempId() {
  return tempId--
}

export function createPhase(
  overwrite?: Partial<ITimelinePhase>
): ITimelinePhase {
  return {
    _id: 0,
    name: '',
    regexp: '',
    _regexp: new RegExp(''),
    ...overwrite,
  }
}

export function createAbility(
  overwrite?: Partial<ITimelineAbility>
): ITimelineAbility {
  return {
    _id: 0,
    name: '',
    ...overwrite,
  }
}

export function createEmptyReference(
  overwrite?: Partial<IReference>
): IReference {
  return {
    id: 0,
    title: '',
    zoneName: '',
    phases: [createPhase()],
    list: [],
    abilities: [],
    ...overwrite,
  }
}
