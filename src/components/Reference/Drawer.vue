<template>
  <n-drawer
    :show="show"
    @update:show="(v) => emit('update:show', v)"
    placement="right"
    class="reference-list__drawer"
    :auto-focus="false"
    :style="themeVar"
  >
    <n-drawer-content closable title="参考时间轴">
      <n-popover v-for="item in list" scrollable placement="bottom-end">
        <template #trigger>
          <div
            class="reference-list__drawer-item"
            :class="{ active: item.id === reference.current.id }"
            @click="selectReference(item)"
          >
            <div>[{{ item.id }}]{{ item.title }}</div>
            <div>
              创建时间 {{ dayjs(item.createdAt).format('YYYY-MM-DD HH:mm') }}
            </div>
            <div>
              最后更新 {{ dayjs(item.updatedAt).format('YYYY-MM-DD HH:mm') }}
            </div>
          </div>
        </template>

        <n-space>
          <n-button type="primary" secondary @click="openEditor(item)"
            >编辑</n-button
          >

          <n-button type="error" secondary @click="remove(item)">删除</n-button>
        </n-space>
      </n-popover>

      <template #footer>
        <n-button type="primary" @click="openEditor()">新建</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>

  <WaitNext v-model:show="showEditor">
    <ReferenceEditor
      v-if="editorForm"
      :detail="editorForm"
      @success="showEditor = false"
      @cancel="showEditor = false"
    />
  </WaitNext>
</template>

<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'

import { reference, referenceStorage } from '@/store'
import { createEmptyReference, dayjs } from '@/utils'

import WaitNext from '@/components/Basic/WaitNext.vue'
import ReferenceEditor from './Editor.vue'

defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

const list = computed(() => {
  return referenceStorage.list.slice().sort((a, b) => b.createdAt - a.createdAt)
})

/* 选择 */
function selectReference(item: IReferenceKey) {
  reference.restore(item.id)
  emit('update:show', false)
  window.$message.success(`已切换至 ${item.title}`)
}

/* 编辑 */
const showEditor = ref(false)
const editorForm = ref<IReference>()
function openEditor(item?: IReferenceKey) {
  if (item) {
    const data = referenceStorage.get(item.id)
    if (data) {
      editorForm.value = data
    } else {
      window.$message.error(`没有找到 [${item.id}]${item.title}`)
      return
    }
  } else {
    editorForm.value = createEmptyReference()
  }

  showEditor.value = true
}

/* 删除 */
function remove(item: IReferenceKey) {
  window.$dialog.warning({
    title: '警告',
    content: `确定要删除<${item.title}>吗？`,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      referenceStorage.remove(item.id)
      window.$message.success('删除成功')

      if (reference.current.id === item.id) {
        reference.restore(list.value[0]?.id)
      }
    },
  })
}

const themeRef = useThemeVars()
const themeVar = computed(() => {
  const theme = themeRef.value
  return {
    '--a-primary-color': theme.primaryColor,
    '--a-success-color': theme.successColor,
    '--a-error-color': theme.errorColor,
    '--a-warning-color': theme.warningColor,
    '--a-info-color': theme.infoColor,

    '--n-header-padding': '14px 10px',
    '--n-body-padding': '10px 10px',
    '--n-footer-padding': '10px 10px',
  } as any
})
</script>

<style lang="less">
.reference-list__drawer {
  width: 100% !important;
  max-width: 300px;

  .reference-list__drawer-item {
    display: block;
    padding: 4px 6px;
    cursor: pointer;
    text-align: center;
    background-color: rgba(#999, 0.1);

    &:hover {
      background-color: rgba(#999, 0.2);
    }

    &:active {
      opacity: 0.8;
    }

    &.active {
      color: var(--a-primary-color);
    }

    & + .reference-list__drawer-item {
      margin-top: 10px;
    }
  }
}
</style>
