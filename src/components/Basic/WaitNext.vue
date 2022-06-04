<template>
  <n-modal :show="show" preset="card" :closable="false">
    <n-result title="等待下一步..." description="请在子窗口完成下一步操作">
      <template #icon>
        <n-spin />
      </template>

      <n-space justify="center">
        <n-button type="primary" @click="emit('update:show', false)"
          >取消</n-button
        >
      </n-space>
    </n-result>

    <slot></slot>
  </n-modal>
</template>

<script lang="ts" setup>
defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()
</script>

<style lang="less" scoped></style>
