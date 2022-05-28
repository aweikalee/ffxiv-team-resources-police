<template>
  <n-scrollbar ref="el">
    <div class="timeline">
      <div class="timeline__header timeline__header--title">
        <div class="timeline__time">
          <div class="timeline__time-row">时间</div>
        </div>

        <div class="timeline__container">
          <div class="timeline__col">
            <div class="timeline__row">
              <span class="timeline__row-name">参考时间轴</span>
            </div>
          </div>
          <div class="timeline__col">
            <div class="timeline__row">
              <span class="timeline__row-name">当前战斗</span>
            </div>
          </div>
        </div>
      </div>

      <template v-for="(_, phase) in maxPhase">
        <div
          class="timeline__phase-title"
          v-if="phase > 0 ? true : reference.current.phases[phase]?.name"
        >
          {{ reference.current.phases[phase]?.name || `P${phase + 1}` }}
        </div>

        <TimeLinePhase
          :reference="reference.current.list[phase]"
          :logs="logs.list[phase]"
        />
      </template>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import { combat, reference, logs } from '@/store'
import TimeLinePhase from './Phase.vue'

const maxPhase = computed(() => {
  return Math.max(
    reference.current.list.length,
    logs.list.length,
    combat.phase + 1
  )
})

/* 滚动至当前时间 */
const el = ref<any>()
watch(
  () => logs.lastUpdate,
  async () => {
    const last = logs.getLast()
    if (!last) return

    await nextTick()
    const target = document.querySelector(
      `[data-log="${last._id}"]`
    ) as HTMLElement
    const scroll = el.value?.$refs?.scrollbarInstRef?.$refs?.containerRef
    if (!target || !scroll) return

    const top =
      target.offsetTop -
      scroll.offsetTop +
      target.offsetHeight -
      scroll.offsetHeight * 0.7

    el.value.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
)
</script>

<style lang="less">
@import url(./style.less);
</style>
