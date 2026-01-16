<template>
  <NPopselect :options="options" @update:value="onPopChange">
    <NButton type="primary" round size="tiny">调试</NButton>
  </NPopselect>
</template>

<script setup lang="ts">
import { combat, logs, reference } from '@/store'
import { dayjs, logLine } from '@/utils'
import { SelectMixedOption } from 'naive-ui/es/select/src/interface'

const CHARACTER_NAMES = [
  '阿尔菲诺',
  '阿莉塞',
  '雅·修特拉',
  '桑克瑞德',
  '于里昂热',
  '古·拉哈·提亚',
  '埃斯蒂尼安',
  '塔塔露',
  '可露儿',
]

let now = Date.now()
function toISOString(now: number) {
  return dayjs(now).toISOString()
}

function randomAbilities() {
  return (
    randomPick(reference.current.abilities) ?? {
      _id: 0,
      name: '未知',
      cd: 0,
    }
  )
}

const MOCK_ABILITY = [
  () => {
    const source = randomPick(CHARACTER_NAMES)
    const ability = randomAbilities()
    return [
      `21|${toISOString(now)}|${source}|${source}|${ability._id}|${
        ability.name
      }|BOSS|BOSS|flags|${Math.floor(
        Math.random() * 10000000
      )}|?|?|?|?|?|?|?|?|?|?|?|?|?|?|targetCurrentHp|targetMaxHp|targetCurrentMp|targetMaxMp|?|?|targetX|targetY|targetZ|targetHeading|currentHp|maxHp|currentMp|maxMp|?|?|x|y|z|heading|sequence|targetIndex|targetCount`,
    ]
  },
  () => {
    const source = randomPick(CHARACTER_NAMES)
    const ability = randomAbilities()

    const target = randomPickArray(
      CHARACTER_NAMES,
      Math.floor(Math.random() * 9)
    )
    if (target.length) {
      return target.map(
        (name) =>
          `22|${toISOString(now)}|${source}|${source}|${ability._id}|${
            ability.name
          }|${name}|${name}|flags|${Math.floor(
            Math.random() * 10000000
          )}|?|?|?|?|?|?|?|?|?|?|?|?|?|?|targetCurrentHp|targetMaxHp|targetCurrentMp|targetMaxMp|?|?|targetX|targetY|targetZ|targetHeading|currentHp|maxHp|currentMp|maxMp|?|?|x|y|z|heading|sequence|targetIndex|targetCount`
      )
    } else {
      return [
        `22|${toISOString(now)}|${source}|${source}|${ability._id}|${
          ability.name
        }|${
          logLine.MISS_ID
        }|?|flags|damage|?|?|?|?|?|?|?|?|?|?|?|?|?|?|targetCurrentHp|targetMaxHp|targetCurrentMp|targetMaxMp|?|?|targetX|targetY|targetZ|targetHeading|currentHp|maxHp|currentMp|maxMp|?|?|x|y|z|heading|sequence|targetIndex|targetCount`,
      ]
    }
  },
]

function randomPick<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function randomPickArray<T>(array: T[], length: number): T[] {
  const arr = [...array]
  const res: T[] = []
  for (let i = 0; i < length && arr.length; i += 1) {
    const index = Math.floor(Math.random() * arr.length)
    const [item] = arr.splice(index, 1)
    res.push(item)
  }
  return res
}

function mockData(amount: number) {
  for (let i = 0; i < amount; i += 1) {
    now += Math.floor(Math.random() * 10000)
    const logLines = randomPick(MOCK_ABILITY)()
    logLines.forEach((rawLine) => {
      logs.addLogLine(
        { line: rawLine.split('|'), rawLine },
        {
          startTimestamp: combat.phaseStartTime,
          phase: combat.phase,
        }
      )
    })
  }
}

const options: SelectMixedOption[] = [
  {
    label: '1条数据',
    value: '1条数据',
    onClick: () => mockData(1),
  },
  {
    label: '10条数据',
    value: '10条数据',
    onClick: () => mockData(10),
  },
  {
    label: '下一阶段',
    value: '下一阶段',
    onClick: () => {
      combat.setPhase(combat.phase + 1)
      combat.setPhaseStartTime(now)
    },
  },
]

function onPopChange(_: any, option: any) {
  option.onClick?.()
}
</script>

<style lang="less" scoped></style>
