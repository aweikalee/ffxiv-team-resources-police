<template>
  <div :style="themeVar">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'

const themeRef = useThemeVars()
const themeVar = computed(() => {
  const theme = themeRef.value
  return {
    '--a-primary-color': theme.primaryColor,
    '--a-success-color': theme.successColor,
    '--a-error-color': theme.errorColor,
    '--a-warning-color': theme.warningColor,
    '--a-info-color': theme.infoColor,
  } as any
})
</script>
