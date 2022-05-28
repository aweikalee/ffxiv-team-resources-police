const state = reactive({
  isActive: false,
  duration: '',
  zoneName: '',

  phase: 0,
  setPhase(value: number) {
    state.phase = value
  },

  phaseStartTime: Date.now(),
  setPhaseStartTime(value: number) {
    state.phaseStartTime = value
  },
})

export const combat = readonly(state)

export function useCombat() {
  let lastEncounter: any
  function update(data: any) {
    const Encounter = data.Encounter

    state.isActive = data.isActive === 'true' || data.isActive === true

    if (Encounter) {
      if (Encounter.CurrentZoneName || state.duration) {
        state.zoneName = Encounter.CurrentZoneName
        state.duration = Encounter.duration
        lastEncounter = Encounter
      } else if (lastEncounter) {
        state.zoneName = lastEncounter.CurrentZoneName
        state.duration = lastEncounter.duration
      }
    } else {
      state.zoneName = ''
      state.duration = ''
    }
  }

  onMounted(() => {
    window.addOverlayListener('CombatData', update)
  })
  onUnmounted(() => {
    window.removeOverlayListener('CombatData', update)
  })

  return state
}
