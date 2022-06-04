<template>
  <n-config-provider
    :theme="darkTheme"
    :theme-overrides="themeOverrides"
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
import { darkTheme, zhCN, dateZhCN, GlobalThemeOverrides } from 'naive-ui'
import ThemeProxy from '@/components/Basic/ThemeProxy.vue'
import MountMessage from '@/components/Basic/MountMessage.vue'
import MountDialog from '@/components/Basic/MountDialog.vue'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    cardColor: darkTheme.common.modalColor,
  },
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>
