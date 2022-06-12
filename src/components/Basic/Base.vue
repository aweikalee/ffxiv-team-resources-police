<template>
  <NConfigProvider
    :theme="darkTheme"
    :theme-overrides="themeOverrides"
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <ThemeProxy>
      <slot></slot>

      <NMessageProvider :container-style="{ top: '40px' }">
        <MountMessage />
      </NMessageProvider>

      <NDialogProvider>
        <MountDialog />
      </NDialogProvider>
    </ThemeProxy>
  </NConfigProvider>
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
