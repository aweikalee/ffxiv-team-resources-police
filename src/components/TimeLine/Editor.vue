<template></template>

<script lang="ts" setup>
import { reference } from '@/store'
import { useMessage, postMessage, useOpenWindow } from '@/utils/useMessage'

const props = defineProps<{
  detail: ITimeline
}>()

const emit = defineEmits<{
  (e: 'success'): void
  (e: 'cancel'): void
}>()

useOpenWindow('./reference-row.html', {
  width: 400,
  height: 500,
})

useMessage('reference-row@loaded', (_, { source }) => {
  postMessage(source!, 'reference-row@loaded:replay', {
    phases: toRaw(reference.current.phases),
    form: toRaw(props.detail) as ITimelineReference,
  })
})

useMessage('reference-row@save', (data, e) => {
  postMessage(e.source!, 'reference-row@save:replay', {})

  reference.update(data)
  window.$message.success('编辑成功')
  emit('success')
})

useMessage('reference-row@close', () => {
  emit('cancel')
})
</script>
