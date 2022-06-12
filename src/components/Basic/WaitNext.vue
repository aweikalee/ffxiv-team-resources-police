<template>
  <NModal :show="show" preset="card" :closable="false">
    <NResult title="等待下一步..." description="请在子窗口完成下一步操作">
      <template #icon>
        <NSpin />
      </template>

      <NSpace justify="center">
        <NButton type="primary" @click="emit('update:show', false)"
          >取消</NButton
        >
      </NSpace>
    </NResult>

    <slot></slot>
  </NModal>
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
