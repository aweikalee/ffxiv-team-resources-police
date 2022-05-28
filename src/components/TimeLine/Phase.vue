<template>
  <template v-for="(group, index) in renderList" :key="group.phase">
    <div class="timeline__phase">
      <div class="timeline__time">
        <div class="timeline__time-row">
          {{ dayjs.duration(group.timestamp).format('mm:ss') }}
        </div>
        <div
          class="timeline__time-row end-time"
          v-if="group.reference.length > 1 || group.log.length > 1"
        >
          {{ dayjs.duration(group.endTimestamp).format('mm:ss') }}
        </div>
      </div>

      <div class="timeline__container">
        <div class="timeline__col">
          <TimelineRow
            v-for="item in group.reference"
            :key="item._id"
            :data="item"
          />
        </div>

        <div class="timeline__col">
          <TimelineRow v-for="item in group.log" :key="item._id" :data="item" />
        </div>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { options } from '@/store'
import { dayjs } from '@/utils'

import TimelineRow from './Row.vue'

const props = defineProps<{
  reference?: ITimelineReference[]
  logs?: ITimelineLog[]
}>()

const renderList = computed(() => {
  const queue = ([props.reference, props.logs] as ITimeline[][])
    .reduce((res, list) => {
      return res.concat(list)
    }, [])
    .sort((a, b) => {
      return a.timestamp - b.timestamp
    })

  const renderList = []

  function createGroup(item: ITimeline): {
    [key in ITimelineType]: ITimeline[]
  } & {
    timestamp: number
    endTimestamp: number
  } {
    return {
      timestamp: item.timestamp,
      endTimestamp: item.timestamp,
      reference: [],
      log: [],
    }
  }

  let lastItem = null as ITimeline | null
  let lastGroup: ReturnType<typeof createGroup>
  while (queue.length) {
    const item = queue.shift()
    if (!item) continue
    if (!lastItem) lastItem = item

    if (item.timestamp < lastItem.timestamp + options.groupThreshold) {
      lastItem = item
    } else {
      lastItem = item
      lastGroup = createGroup(item)
      renderList.push(lastGroup)
    }

    if (!lastGroup!) {
      lastGroup = createGroup(item)
      renderList.push(lastGroup)
    }

    lastGroup[item._type].push(item)
    lastGroup.endTimestamp = item.timestamp
  }

  return renderList
})
</script>
