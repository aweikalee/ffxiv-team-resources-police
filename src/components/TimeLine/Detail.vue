<template>
  <NForm ref="formRef" :label-width="80">
    <NFormItem label="基本信息">
      [{{ dayjs.duration(detail.timestamp).format('mm:ss.SSS') }}]
      {{ detail.ability }} ({{ detail.source }})
    </NFormItem>

    <NFormItem
      v-if="isLog(detail) && detail._abilityType === 'aoe' && !detail._miss"
      label="范围"
    >
      <NSpace>
        <NTag v-for="{ id, name } in detail._targets" :key="id">{{
          name
        }}</NTag>
      </NSpace>
    </NFormItem>
  </NForm>
</template>

<script lang="ts" setup>
import { dayjs } from '@/utils'

import { isLog } from './utils'

defineProps<{
  detail: ITimeline
}>()
</script>
