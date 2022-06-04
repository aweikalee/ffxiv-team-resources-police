<template>
  <div class="the-body">
    <TheHeader />

    <TimeLine class="the-timeline" />
  </div>
</template>

<script setup lang="ts">
import { useCombat, combat, logs, reference } from '@/store'
import { dayjs } from '@/utils'

import TimeLine from './TimeLine/Index.vue'
import TheHeader from './TheHeader.vue'

useCombat()

watch(
  () => [combat.isActive],
  () => {
    if (!combat.isActive) return

    logs.clear()
  },
  {
    immediate: true,
  }
)

/* 战斗开始与结束 */
watch(
  () => combat.isActive,
  (value) => {
    if (value) {
      /* 开始 */
      combat.setPhase(0)

      // 设置战斗开始时间
      let offset = 0
      if (combat.duration) {
        // 战斗可能早已开始 需要对时间进行补偿
        const [mm, ss] = combat.duration.split(':')
        offset = dayjs
          .duration(0)
          .add({
            minutes: +mm,
            seconds: +ss,
          })
          .asMilliseconds()
      }
      combat.setPhaseStartTime(Date.now() - offset)
    }
  }
)

watch(
  () => combat.zoneName,
  (zoneName) => {
    // TODO: 获取关联参考时间轴
  }
)

function onLogLine(data: any) {
  if (!combat.isActive) return

  // 更新阶段
  const nextPhase = reference.current.phases[combat.phase + 1]
  if (nextPhase?._regexp?.test(data.rawLine)) {
    combat.setPhase(combat.phase + 1)
    combat.setPhaseStartTime(Date.now())
  }

  // 更新技能
  logs.addLogLine(data, {
    startTimestamp: combat.phaseStartTime,
    phase: combat.phase,
  })
}

onMounted(() => {
  window.addOverlayListener('LogLine', onLogLine)
  window.startOverlayEvents()
})
onUnmounted(() => {
  window.removeOverlayListener('LogLine', onLogLine)
})
</script>

<style lang="less" scoped>
.the-body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  border: 1px solid #000;
  background-color: #2c2c32;
}

.the-timeline {
  flex-grow: 1;
  flex-basis: 100%;
}
</style>
