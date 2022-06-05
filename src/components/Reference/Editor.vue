<template></template>

<script lang="ts" setup>
import { cloneDeep } from 'lodash'
import { referenceStorage } from '@/store'
import { useMessage, postMessage, useOpenWindow } from '@/utils'

const props = defineProps<{
  detail: IReference
}>()

const emit = defineEmits<{
  (e: 'success', id: number, data: IReference): void
  (e: 'cancel'): void
}>()

useOpenWindow('./reference.html', {
  width: 600,
  height: 600,
})

useMessage('reference@loaded', (_, { source }) => {
  postMessage(source!, 'reference@loaded:replay', {
    form: cloneDeep(props.detail),
  })
})

useMessage('reference@save', (data, e) => {
  postMessage(e.source!, 'reference@save:replay', {})

  const id = referenceStorage.set(data)
  window.$message.success('保存成功')
  emit('success', id, data)
})

useMessage('@close', () => {
  emit('cancel')
})
</script>
