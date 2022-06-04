<template></template>

<script lang="ts" setup>
import { reference, referenceStorage } from '@/store'
import { useMessage, postMessage, useOpenWindow } from '@/utils'

const props = defineProps<{
  detail: IReference
}>()

const emit = defineEmits<{
  (e: 'success'): void
  (e: 'cancel'): void
}>()

useOpenWindow('./reference.html', {
  width: 600,
  height: 600,
})

useMessage('reference@loaded', (_, { source }) => {
  postMessage(source!, 'reference@loaded:replay', {
    form: toRaw(props.detail),
  })
})

useMessage('reference@save', (data, e) => {
  postMessage(e.source!, 'reference@save:replay', {})

  referenceStorage.set(data)
  window.$message.success('编辑成功')
  emit('success')

  if (props.detail.id === reference.current.id) {
    reference.restore(props.detail.id)
  }
})

useMessage('@close', () => {
  emit('cancel')
})
</script>
