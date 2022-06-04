<template>
  <n-form ref="formRef" :label-width="80" :model="form" :rules="rules">
    <n-form-item path="ability" label="技能名称">
      <n-input v-model:value="form.ability" placeholder="输入技能名称" />
    </n-form-item>

    <n-form-item path="source" label="使用者名称">
      <n-input v-model:value="form.source" placeholder="输入使用者名称">
        <template #suffix>
          <n-switch
            v-model:value="form.isHostile"
            :rail-style="
              ({ checked }) =>
                checked
                  ? { background: 'var(--a-error-color)' }
                  : { background: 'var(--a-info-color)' }
            "
          >
            <template #checked>敌</template>
            <template #unchecked>友</template>
          </n-switch>
        </template>
      </n-input>
    </n-form-item>

    <n-form-item path="phase" label="阶段">
      <n-select v-model:value="form.phase" :options="phaseOptions" clearable />
    </n-form-item>

    <n-form-item path="timestamp" label="使用时间">
      <n-input v-model:value="form.timestamp" />
    </n-form-item>
  </n-form>
</template>

<script lang="tsx" setup>
import { dayjs } from '@/utils'
import { FormInst, FormRules, NInput } from 'naive-ui'

export type ITimelineReferenceFormIns = {
  validate: () => Promise<ITimelineReference>
}

type ITimelineReferenceForm = Omit<ITimelineReference, 'timestamp'> & {
  timestamp: string
}

const props = defineProps<{
  initForm: Partial<ITimelineReference>
  phases: ITimelinePhase[]
}>()

/* 表单基础 */
const form = ref<ITimelineReferenceForm>({
  _id: 0,
  _type: 'reference',
  phase: 0,
  ability: '',
  source: '',
  isHostile: false,
  ...props.initForm,
  timestamp: dayjs.duration(props.initForm.timestamp ?? 0).format('mm:ss.SSS'),
})

const rules: FormRules = {
  ability: [
    {
      required: true,
      message: '技能名不能为空',
      trigger: 'blur',
    },
  ],

  source: [
    {
      required: true,
      message: '使用者名称不能为空',
      trigger: 'blur',
    },
  ],

  isHostile: [
    {
      required: true,
      type: 'boolean',
      message: '是敌是友？不能为空',
      trigger: 'blur',
    },
  ],

  phase: [
    {
      required: true,
      type: 'number',
      message: '阶段不能为空',
      trigger: 'blur',
    },
  ],

  timestamp: [
    {
      required: true,
      message: '使用时间不能为空',
      trigger: 'blur',
    },
    {
      validator(rule, value: string) {
        const duration = stringToDuration(value).format('mm:ss.SSS')

        if (duration !== value) {
          return new Error('时间格式不正确，请按 mm:ss.SSS 的形式输入时间')
        }

        return true
      },
      trigger: 'blur',
    },
  ],
}

const formRef = ref<FormInst | null>(null)
async function validate() {
  return new Promise<ITimelineReference>((resolve, reject) => {
    formRef.value?.validate((errors) => {
      if (errors) {
        const error = errors?.[0]?.[0]
        window.$message.error(error?.message ?? '数据验证失败')
        reject(error)
        return
      }

      resolve({
        ...form.value,
        timestamp: stringToDuration(form.value.timestamp).asMilliseconds(),
      })
    })
  })
}

/* 阶段选择器 */
const phaseOptions = computed(() => {
  return props.phases.map((phase, index) => {
    return {
      label: phase.name || `P${index + 1}`,
      value: index,
    }
  })
})

/* 其他 */
defineExpose<ITimelineReferenceFormIns>({
  validate,
})

function stringToDuration(value: String) {
  const match = value?.match(/^([0-9]{2})\:([0-5][0-9])\.([0-9]{3})$/)

  return dayjs.duration({
    minutes: Number(match?.[1]) ?? 0,
    seconds: Number(match?.[2]) ?? 0,
    milliseconds: Number(match?.[3]) ?? 0,
  })
}
</script>

<style lang="less" scoped></style>
