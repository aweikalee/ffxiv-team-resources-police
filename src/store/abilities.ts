import { reference } from './reference'

const map = computed(() => {
  const map = new Map()
  reference.current.abilities.forEach((ability) => {
    map.set(ability.name, ability)
  })
  return map
})

const state = reactive({
  map,
  get(name: string) {
    return map.value.get(name)
  },
})

export const abilities = state
