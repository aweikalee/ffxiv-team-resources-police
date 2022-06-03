<template>
  <n-config-provider
    :theme="darkTheme"
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <ThemeProxy>
      <slot></slot>

      <n-message-provider :container-style="{ top: '40px' }">
        <MountMessage />
      </n-message-provider>

      <n-dialog-provider>
        <MountDialog />
      </n-dialog-provider>
    </ThemeProxy>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import ThemeProxy from '@/components/Basic/ThemeProxy.vue'
import MountMessage from '@/components/Basic/MountMessage.vue'
import MountDialog from '@/components/Basic/MountDialog.vue'
</script>

<style lang="less">
body {
  background-color: #282c34;
  color: #abb2bf;
  margin: 0;
  padding: 0;
}
</style>
