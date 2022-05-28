<template>
  <n-popover scrollable placement="bottom" trigger="click">
    <template #trigger>
      <div class="timeline__row" :data-log="isLog(data) ? data._id : undefined">
        <span class="timeline__row-name" :class="{ hostile: data.isHostile }">{{
          data.ability
        }}</span>

        <template v-if="isLog(data) && data._abilityType === 'aoe'">
          <span class="timeline__row-miss" v-if="data._miss">[miss]</span>
          <span class="timeline__row-count" v-else
            >[{{ data._targets.length }}]</span
          >
        </template>

        <span class="timeline__row-offset" v-if="offsetSeconds">{{
          offsetSeconds
        }}</span>

        <span class="timeline__row-source">({{ data.source }})</span>

        <n-button
          v-if="isLog(data)"
          class="timeline__row-fast"
          type="primary"
          circle
          title="加入到参考时间轴"
          @click.stop="reference.add(data)"
        >
          <n-icon size="1em">
            <IconIncrease />
          </n-icon>
        </n-button>

        <n-button
          v-if="isReference(data)"
          class="timeline__row-fast"
          type="error"
          circle
          title="移除"
          @click.stop="reference.remove(data)"
        >
          <n-icon size="1em" class="timeline__row-fast__remove">
            <IconIncrease />
          </n-icon>
        </n-button>
      </div>
    </template>

    <n-space vertical align="center">
      <div class="timeline__time">
        {{ dayjs.duration(data.timestamp).format('mm:ss.SSS') }}
      </div>

      <n-space v-if="isLog(data) && data._abilityType === 'aoe'">
        <n-tag v-for="{ id, name } in data._targets" :key="id">{{
          name
        }}</n-tag>
      </n-space>
    </n-space>
  </n-popover>
</template>

<script setup lang="ts">
import { reference } from '@/store'
import { dayjs } from '@/utils'

import IconIncrease from '@/assets/increase.svg?component'

const props = defineProps<{
  data: ITimeline
}>()

const isLog = (data: any): data is ITimelineLog => data._type === 'log'
const isReference = (data: any): data is ITimelineReference =>
  data._type === 'reference'

const offsetSeconds = computed(() => {
  if (!isLog(props.data)) return

  const { _timestamp, _lastUse, _cd } = props.data
  if (!_timestamp || !_lastUse || !_cd) return ''
  const offset = Math.round((_timestamp - _lastUse - _cd) / 1000)

  if (offset > 0) return `+${offset}s`
  if (offset < 0) return `${offset}s`
  return ''
})
</script>
