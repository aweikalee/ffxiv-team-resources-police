<template>
  <n-card
    v-if="form"
    :title="form.id ? '编辑' : '新建'"
    style="min-height: 100vh"
  >
    <Form ref="formRef" :init-form="form" :zone-name="zoneName" />

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

  <WaitParent v-else="showPlaceholder" />
</template>

<script setup lang="ts">
import { useMessage, postMessage, useMessageLoading } from '@/utils/useMessage'

import WaitParent from '@/components/Basic/WaitParent.vue'
import Form, { IReferenceFormIns } from './Form.vue'

const form = ref<Partial<IReference>>()
const zoneName = ref('')

const formRef = ref<IReferenceFormIns>()

// 获取初始数据
postMessage(window.opener!, 'reference@loaded', {})
useMessage('reference@loaded:replay', (data) => {
  form.value = data.form ?? {}
  zoneName.value = data.zoneName || ''
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
  console.log(form)
  postMessage(window.opener, 'reference@save', form)
  submitLoading.start()
}
useMessage('reference@save:replay', () => {
  submitLoading.stop()
  window.close()
})

/* 其他 */
function cancel() {
  postMessage(window.opener, '@close', {})
  window.close()
}
</script>

<style lang="less" scoped></style>
