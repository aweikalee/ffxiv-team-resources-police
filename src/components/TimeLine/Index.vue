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

    <n-modal
      v-model:show="showDetail"
      style="width: 600px"
      preset="card"
      title="详情"
      closable
      :auto-focus="false"
    >
      <TimelineDetail v-if="detail" :detail="detail" />

      <template #footer>
        <n-space justify="end">
          <n-button @click="showDetail = false">关闭</n-button>
          <n-button
            v-if="detail?._type === 'reference'"
            type="primary"
            @click="openEditor"
            >编辑</n-button
          >
        </n-space>
      </template>
    </n-modal>

    <WaitNext v-model:show="showEditor">
      <TimelineEditor
        v-if="detail"
        :detail="detail"
        @success="showEditor = false"
        @cancel="showEditor = false"
      />
    </WaitNext>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import { combat, reference, logs } from '@/store'

import WaitNext from '@/components/Basic/WaitNext.vue'
import TimeLinePhase from './Phase.vue'
import TimelineDetail from './Detail.vue'
import TimelineEditor from './Editor.vue'

import { INJECT_KEY } from './inject'

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

/* 查看详情 */
const showDetail = ref(false)
const detail = ref<ITimeline>()
provide(INJECT_KEY, {
  openDetail(item) {
    showDetail.value = true
    detail.value = item
  },
})

/* 编辑详情 */
const showEditor = ref(false)
function openEditor() {
  showDetail.value = false
  showEditor.value = true
}
</script>

<style lang="less">
@import url(./style.less);
</style>
