<template>
  <n-form ref="formRef" :label-width="80" :model="form" :rules="rules">
    <n-form-item label="标题" path="title">
      <n-input v-model:value="form.title" placeholder="输入标题" />
    </n-form-item>

    <n-form-item label="阶段" path="phase">
      <n-data-table
        :columns="phaseColumns"
        :data="form.phases"
        :row-key="(row) => row._id"
      />
    </n-form-item>
    <n-space justify="center" :style="{ paddingBottom: '20px' }">
      <n-button type="primary" @click="addPhaseRow">增加阶段</n-button>
    </n-space>

    <n-form-item label="记录技能" path="abilities">
      <n-data-table
        :columns="abilitiesColumns"
        :data="form.abilities"
        :row-key="(row) => row._id"
      />
    </n-form-item>
    <n-space justify="center">
      <n-button type="primary" @click="addAbilitiesRow">增加技能</n-button>
    </n-space>
  </n-form>
</template>

<script lang="tsx" setup>
import { createPhase, createAbility, createEmptyReference } from '@/store'
import {
  DataTableColumns,
  FormInst,
  FormRules,
  NButton,
  NInput,
  NInputNumber,
} from 'naive-ui'

export type IReferenceFormIns = {
  validate: () => Promise<IReference>
}

const props = defineProps<{
  initForm?: IReference
}>()

/* 表单基础 */
const form = ref<IReference>(
  props.initForm
    ? {
        id: props.initForm.id,
        title: props.initForm.title,
        phases: props.initForm.phases.map((v) => ({ ...v })),
        list: props.initForm.list.map((v) => [...v]),
        abilities: props.initForm.abilities.map((v) => ({ ...v })),
      }
    : createEmptyReference()
)

const rules: FormRules = {
  zone: {
    required: true,
    message: '区域不能为空',
    trigger: 'blur',
  },
  title: [
    {
      required: true,
      message: '标题不能为空',
      trigger: 'blur',
    },
  ],
  phases: {
    type: 'array',
    required: true,
    message: '阶段不能为空',
  },
  abilities: [
    {
      type: 'array',
      required: true,
      message: '记录技能不能为空',
      defaultField: [
        {
          type: 'object',
          fields: {
            name: {
              required: true,
              message: '技能名称不能为空',
            },
            cd: {
              validator(rule: any, value?: number) {
                if (!value) return true
                if (value < 0 || !Number.isInteger(value)) {
                  return new Error('冷却时间必须是正整数')
                }
                return true
              },
            },
          },
        },
      ],
    },
  ],
}

const formRef = ref<FormInst | null>(null)
async function validate() {
  return new Promise<IReference>((resolve, reject) => {
    formRef.value?.validate((errors) => {
      if (errors) {
        reject(errors?.[0]?.[0])
        return
      }

      resolve(form.value)
    })
  })
}

/* 阶段相关 */
function addPhaseRow() {
  form.value.phases.push(createPhase())
}
function removePhaseRow(index: number) {
  window.$dialog.warning({
    title: '警告',
    content: `删除会清空该阶段的所有数据，确认要删除吗？`,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      form.value.phases.splice(index, 1)
      form.value.list.splice(index, 1)
    },
  })
}

const phaseColumns: DataTableColumns<IReference['phases'][0]> = [
  {
    title: '阶段名',
    key: 'name',
    minWidth: 100,
    render: (row) => {
      return (
        <NInput
          value={row.name}
          onUpdateValue={(v) => (row.name = v)}
          placeholder="输入阶段名"
        />
      )
    },
  },
  {
    title: '匹配内容/正则',
    key: 'regexp',
    minWidth: 160,
    render: (row, index) => {
      return index > 0 ? (
        <NInput
          value={row.regexp}
          onUpdateValue={(v) => (row.regexp = v)}
          placeholder="输入匹配内容/正则"
        />
      ) : null
    },
  },
  {
    title: '操作',
    key: 'action',
    minWidth: 100,
    render: (row, index) => {
      return index > 0 ? (
        <NButton type="error" quaternary onClick={() => removePhaseRow(index)}>
          {() => '删除'}
        </NButton>
      ) : null
    },
  },
]

/* 技能列表相关 */
function addAbilitiesRow() {
  form.value.abilities.push(createAbility())
}
function removeAbilitiesRow(index: number) {
  form.value.abilities.splice(index, 1)
}

const abilitiesColumns: DataTableColumns<IReference['abilities'][0]> = [
  {
    title: '技能名称',
    key: 'name',
    minWidth: 100,
    render: (row, index) => {
      return (
        <NInput
          value={row.name}
          onUpdateValue={(v) => (row.name = v)}
          placeholder="请输入标准技能名称"
        />
      )
    },
  },
  {
    title: '冷却时间(ms)',
    key: 'cd',
    minWidth: 120,
    render: (row, index) => {
      return (
        <NInputNumber
          value={row.cd}
          onUpdateValue={(v) => (row.cd = v ? v : undefined)}
          placeholder="请输入冷却时间"
          step={5000}
        />
      )
    },
  },
  {
    title: '操作',
    key: 'action',
    minWidth: 100,
    render: (row, index) => {
      return (
        <NButton
          type="error"
          quaternary
          onClick={() => removeAbilitiesRow(index)}
        >
          {() => '删除'}
        </NButton>
      )
    },
  },
]

defineExpose<IReferenceFormIns>({
  validate,
})
</script>

<style lang="less" scoped></style>
