<template>
  <n-form ref="formRef" :label-width="80">
    <n-form-item label="基本信息">
      [{{ dayjs.duration(detail.timestamp).format('mm:ss.SSS') }}]
      {{ detail.ability }} ({{ detail.source }})
    </n-form-item>

    <n-form-item
      v-if="isLog(detail) && detail._abilityType === 'aoe' && !detail._miss"
      label="范围"
    >
      <n-space>
        <n-tag v-for="{ id, name } in detail._targets" :key="id">{{
          name
        }}</n-tag>
      </n-space>
    </n-form-item>
  </n-form>
</template>

<script lang="ts" setup>
import { dayjs } from '@/utils'

import { isLog } from './utils'

defineProps<{
  detail: ITimeline
}>()
</script>
