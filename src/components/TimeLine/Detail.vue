<template>
  <NForm ref="formRef" :label-width="80">
    <NFormItem label="基本信息">
      [{{ dayjs.duration(detail.timestamp).format('mm:ss.SSS') }}]
      {{ detail.ability }} ({{ detail.source }})

      {{ getDamage(detail.damage, detail.flags) }}
    </NFormItem>

    <NFormItem
      v-if="isLog(detail) && detail._abilityType === 'aoe' && !detail._miss"
      label="范围"
    >
      <NSpace>
        <NTag v-for="{ id, name, damage, flags } in detail._targets" :key="id">
          {{ name }}
          {{ getDamage(damage, flags) }}
        </NTag>
      </NSpace>
    </NFormItem>
  </NForm>
</template>

<script lang="ts" setup>
import { dayjs } from '@/utils'

import { isLog } from './utils'

defineProps<{
  detail: ITimeline
}>()

enum DamageType {
  Piercing = 0x00020000, // 突刺
  Slashing = 0x00010000, // 斩击
  Blunt = 0x00030000, // 打击
  Magic = 0x00050000, // 魔法 75无属性、15火、25冰、55雷
}

function getFlags(flags?: string) {
  const _flags = parseInt(flags || '', 16)
  /**
   * flags 4组数据
   * 20 75 00 03
   * 第1组 表示直暴
   * 第2组 表示伤害类型，第一位是属性、第二位是类型
   * 第3组 未知
   * 第4组 伤害效果 闪避、治疗、伤害 等
   */

  const severity = _flags & 0xf0000000

  return {
    damageType: (() => {
      switch (_flags & 0x000f0000) {
        case 0x00010000:
          return '斩击'
        case 0x00020000:
          return '突刺'
        case 0x00030000:
          return '打击'
        case 0x00050000:
          return '魔法'
        default:
          return '未知'
      }
    })(),
    damageAttribute: (() => {
      switch (_flags & 0x00f00000) {
        case 0x00100000:
          return '火'
        case 0x00200000:
          return '冰'
        case 0x00300000:
          return '风'
        case 0x00400000:
          return '土'
        case 0x00500000:
          return '雷'
        case 0x00700000: // 无属性
          return ''
      }
    })(),
    damageEffect: (() => {
      const effect = _flags & 0x000000ff
      if (0x01 === effect) {
        return '闪避'
      }

      switch (_flags & 0x000000ff) {
        case 0x01:
          return '闪避'
        case 0x02:
          return '完全阻挡'
        case 0x03:
          return '造成伤害'
        case 0x04:
          return '治疗'
        case 0x05:
          return '伤害被阻挡'
        case 0x06:
          return '格挡伤害'
        case 0x07:
          return '无敌'
        case 0x08:
          return '无效'
        case 0x33:
          return '死亡'
      }
    })(),

    isCritical: severity === 0x20000000 || severity === 0x60000000, // 暴击
    isDirect: severity === 0x40000000 || severity === 0x60000000, // 直击
  }
}

function getDamage(damage?: string, flags?: string) {
  if (!damage) return

  let str = damage.padStart(8, '0')
  const a = str.slice(0, 2)
  const b = str.slice(2, 4)
  // const c = str.slice(4, 6)
  const d = str.slice(6, 8)

  str = [d, a, b].join('')
  const num = parseInt(str, 16)

  const { damageType, damageEffect, damageAttribute, isCritical, isDirect } =
    getFlags(flags)

  if (damageEffect) {
    return `<${damageEffect}|${num}${
      isCritical || isDirect
        ? `(${isDirect ? '直' : ''}${isCritical ? '暴' : ''})`
        : ''
    }|${damageType}${damageAttribute ? `(${damageAttribute})` : ''}>`
  }

  return
}
</script>
