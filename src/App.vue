<template>
  <n-config-provider :theme="darkTheme" inline-theme-disabled>
    <ThemeProxy>
      <TheMain />

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
import { darkTheme } from 'naive-ui'
import ThemeProxy from '@/components/Basic/ThemeProxy.vue'
import TheMain from '@/components/TheMain.vue'
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

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
}
</style>
