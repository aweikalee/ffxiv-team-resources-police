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
      if (state.duration) {
        state.duration = Encounter.duration
        lastEncounter = Encounter
      } else if (lastEncounter) {
        state.duration = lastEncounter.duration
      }
    } else {
      state.duration = ''
    }
  }

  function updateZoneName(data: any) {
    state.zoneName = data.zoneName
  }

  onMounted(() => {
    window.addOverlayListener('CombatData', update)
    window.addOverlayListener('ChangeZone', updateZoneName)
  })
  onUnmounted(() => {
    window.removeOverlayListener('CombatData', update)
    window.removeOverlayListener('ChangeZone', updateZoneName)
  })

  return state
}
