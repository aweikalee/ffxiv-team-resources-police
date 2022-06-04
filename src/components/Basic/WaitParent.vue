<template>
  <n-card
    v-if="show"
    class="wait-parent"
    :style="{
      backgroundColor: themeVars.cardColor,
    }"
  >
    <n-result v-if="maybeError.loading" title="等待主窗口连接中...">
      <template #icon>
        <n-spin />
      </template>
    </n-result>

    <n-result
      v-else
      title="连接失败"
      description="无法连接主窗口，请重新从主窗口打开"
      status="error"
      size="small"
    >
      <n-space justify="center">
        <n-button @click="close">关闭</n-button>
      </n-space>
    </n-result>
  </n-card>
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
