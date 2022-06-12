<template>
  <div class="the-header">
    <div class="the-header__title">
      <span class="duration" v-if="combat.duration">{{ combat.duration }}</span>
      <span class="title" v-if="reference.current.title">
        {{ reference.current.title }}
      </span>
      <span v-else>未选择时间轴</span>
    </div>

    <div class="the-header__toolbar">
      <n-space>
        <n-button
          type="primary"
          round
          size="tiny"
          title="选择参考时间轴"
          @click="showReferenceDrawer = true"
        >
          时间轴
        </n-button>

        <n-popselect :options="saveOptions" @update:value="onSavePopChange">
          <n-button type="primary" round size="tiny" title="保存当前战斗">
            保存
          </n-button>
        </n-popselect>

        <Developer />
      </n-space>
    </div>
  </div>

  <!-- 时间轴列表 -->
  <ReferenceDrawer v-model:show="showReferenceDrawer" />

  <!-- 保存 -->
  <WaitNext v-model:show="showSaveAs">
    <ReferenceEditor
      v-if="saveAsForm"
      :detail="saveAsForm"
      @success="onSaveAsSuccess"
      @cancel="showSaveAs = false"
    />
  </WaitNext>
</template>

<script lang="ts" setup>
import { combat, reference, logs } from '@/store'
import { toReference } from '@/utils/logLine'
import { SelectMixedOption } from 'naive-ui/es/select/src/interface'

import DeveloperOrigin from './Basic/Developer.vue'
import WaitNext from './Basic/WaitNext.vue'
import ReferenceDrawer from './Reference/Drawer.vue'
import ReferenceEditor from './Reference/Editor.vue'

// 覆盖保存
function saveReplace() {
  window.$dialog.warning({
    title: '警告',
    content: `确定要覆盖吗？`,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      const id = reference.save({
        ...reference.current,
        list: logs.list as any,
      })
      reference.restore(id)
      window.$message.success('保存成功')
    },
  })
}

// 另存为
const showSaveAs = ref(false)
const saveAsForm = ref<IReference>()

function onSaveAsSuccess(id: number) {
  showSaveAs.value = false
  reference.restore(id)
}

const saveOptions: SelectMixedOption[] = [
  {
    label: '覆盖保存',
    value: '覆盖保存',
    onClick: saveReplace,
  },
  {
    label: '另存为',
    value: '另存为',
    onClick: () => {
      showSaveAs.value = true
      saveAsForm.value = {
        ...reference.current,
        id: 0,
        list: logs.list.map((arr) =>
          (arr ?? []).map((log) => toReference(log))
        ),
      }
    },
  },
]

function onSavePopChange(_: any, option: any) {
  option.onClick?.()
}

/* 时间轴列表 */
const showReferenceDrawer = ref(false)

/* 调试工具 */

const Developer = import.meta.env.DEV ? DeveloperOrigin : () => null
</script>

<style lang="less" scoped>
.the-header {
  flex-shrink: 0;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  overflow: hidden;

  .the-header__title {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .duration {
      color: var(--a-primary-color);
      margin-right: 4px;
    }
  }

  .the-header__toolbar {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    .button {
      cursor: pointer;
      padding: 4px;
      user-select: none;

      &:hover {
        background-color: rgba(white, 0.1);
      }
      &:active {
        background-color: rgba(white, 0.2);
      }
    }
  }
}
</style>
