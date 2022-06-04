<template>
  <n-card v-if="form" style="height: 100vh">
    <Form ref="formRef" :init-form="form" :phases="phases" />

    <template #footer>
      <n-space justify="center">
        <n-button @click="cancel">取消</n-button>
        <n-button
          type="primary"
          @click="submit"
          :loading="submitLoading.loading"
          >保存</n-button
        >
      </n-space>
    </template>
  </n-card>

  <n-space
    v-else-if="showPlaceholder"
    justify="center"
    align="center"
    style="min-height: 100vh"
  >
    <n-result v-if="maybeError.loading" title="等待以太连接中...">
      <template #icon>
        <n-spin />
      </template>
    </n-result>

    <n-result
      v-else
      title="以太连接失败"
      description="以太浓度过低，请重新从主界面打开"
      status="error"
      size="small"
    />
  </n-space>
</template>

<script setup lang="ts">
import { useTimeout } from '@vueuse/core'
import { useMessage, postMessage, useMessageLoading } from '@/utils/useMessage'
import Form, { ITimelineReferenceFormIns } from './Form.vue'

const form = ref<Partial<ITimelineReference>>()
const phases = ref<ITimelinePhase[]>([])

const showPlaceholder = useTimeout(100)
const maybeError = useMessageLoading()

const formRef = ref<ITimelineReferenceFormIns>()

// 获取初始数据
postMessage(window.opener!, 'reference-row@loaded', {})
useMessage('reference-row@loaded:replay', (data) => {
  form.value = data.form ?? {}
  phases.value = data.phases
})

// 提交表单
const submitLoading = useMessageLoading({
  onTimeout() {
    window.$message.error('保存失败，无法连接宿主页面')
  },
  immediate: false,
})
async function submit() {
  const form = await formRef.value?.validate()!
  postMessage(window.opener, 'reference-row@save', form)
  submitLoading.start()
}
useMessage('reference-row@save:replay', () => {
  submitLoading.stop()
  window.close()
})

/* 其他 */
function cancel() {
  postMessage(window.opener, 'reference-row@close', {})
  window.close()
}
</script>

<style lang="less" scoped></style>
