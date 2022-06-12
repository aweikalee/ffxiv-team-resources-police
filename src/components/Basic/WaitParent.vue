<template>
  <NCard
    v-if="show"
    class="wait-parent"
    :style="{
      backgroundColor: themeVars.cardColor,
    }"
  >
    <NResult v-if="maybeError.loading" title="等待主窗口连接中...">
      <template #icon>
        <NSpin />
      </template>
    </NResult>

    <NResult
      v-else
      title="连接失败"
      description="无法连接主窗口，请重新从主窗口打开"
      status="error"
      size="small"
    >
      <NSpace justify="center">
        <NButton @click="close">关闭</NButton>
      </NSpace>
    </NResult>
  </NCard>
</template>

<script lang="ts" setup>
import { postMessage, useMessageLoading } from '@/utils'
import { useTimeout } from '@vueuse/core'
import { useThemeVars } from 'naive-ui'

const show = useTimeout(100)
const maybeError = useMessageLoading()

const themeVars = useThemeVars()

function close() {
  postMessage(window.opener, '@close', {})
  window.close()
}
</script>

<style lang="less" scoped>
.wait-parent {
  overflow: auto;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  :deep(.n-card__content) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
