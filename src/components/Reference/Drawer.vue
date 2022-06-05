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
      <n-tabs v-model:value="actvieTab" type="segment" animated>
        <n-tab-pane
          v-for="tab in tabs"
          :name="tab.name"
          :tab="tab.name"
          :key="tab.name"
        >
          <n-list>
            <n-list-item
              class="reference-list__drawer-item"
              v-for="item in tab.list"
              :key="item.id"
              @click="selectReference(item)"
            >
              <n-space vertical>
                <div>
                  <svg
                    v-if="item.id === reference.current.id"
                    class="reference-list__drawer-item--active"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M630.048 387.76l191.712 27.872c12.88 1.904 24.272 10.128 29.056 23.84 3.424 11.744 0.16 24.16-8.528 32.768l-0.144 0.16-140.4 137.12 32.528 190.208c2.304 13.04-3.488 25.328-14.192 32.72-10.96 7.424-26.784 8.16-38.464 2.224l-167.632-88.4-167.28 88.384c-11.84 6.128-27.36 5.456-37.6-1.568-10.336-6.496-17.968-18-15.264-33.328l32.64-190.32-140.544-137.2c-8.912-8.848-12.448-21.968-8.048-33.744 4.416-12.56 15.616-20.832 28.608-22.784l191.856-27.952 83.488-169.648c6.08-12.08 18.928-19.264 32.32-19.264 13.6 0 26.768 7.2 32.496 19.456l83.392 169.44z m-6.992 47.488a46.832 46.832 0 0 1-35.84-25.792l-73.008-148.4-73.184 148.688a47.536 47.536 0 0 1-35.408 25.456l-164.368 23.968 119.04 116.192c11.2 10.784 16.24 26.384 13.6 41.6l-28.096 163.904 146.416-77.376a47.648 47.648 0 0 1 43.84 0.16l146.288 77.12-28-163.68c-2.624-15.2 2.432-30.72 13.488-41.52l119.232-116.48-164-23.84z"
                    ></path>
                  </svg>
                  {{ item.title }}
                </div>
                <div>
                  [{{ dayjs(item.updatedAt).format('MM-DD HH:mm') }}]
                  {{ item.zoneName }}
                </div>
              </n-space>

              <template #suffix>
                <n-space vertical>
                  <n-button
                    type="primary"
                    size="tiny"
                    secondary
                    @click.stop="openEditor(item)"
                    >编辑</n-button
                  >

                  <n-button
                    type="error"
                    size="tiny"
                    secondary
                    @click.stop="remove(item)"
                    >删除</n-button
                  >
                </n-space>
              </template>
            </n-list-item>
          </n-list>
        </n-tab-pane>
      </n-tabs>

      <template #footer>
        <n-button type="primary" @click="openEditor()">新建</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>

  <WaitNext v-model:show="showEditor">
    <ReferenceEditor
      v-if="editorForm"
      :detail="editorForm"
      @success="onSuccess"
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

function onSuccess(id: number) {
  showEditor.value = false
  if (id === reference.current.id) {
    reference.restore(id)
  }
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

const tabs = computed(() => [
  {
    name: '当前区域',
    list: referenceStorage.currentZoneList,
  },
  {
    name: '全部',
    list: referenceStorage.list,
  },
])
const actvieTab = ref(tabs.value[0].name)

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
    cursor: pointer;
    padding: 8px;
    user-select: none;

    &:hover {
      background-color: rgba(#999, 0.2);
    }

    &:active {
      opacity: 0.8;
    }

    .reference-list__drawer-item--active {
      fill: var(--a-primary-color);
      width: 1.5em;
      vertical-align: -0.3em;
    }
  }
}
</style>
