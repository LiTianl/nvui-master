<script setup lang="ts">
import { cardProps } from './card'
import { useNamespace } from '../../../hooks/use-namespace'

const ns = useNamespace('card')
defineProps(cardProps)
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NvCard'
})
</script>
<template>
  <div :class="[ns.b(), ns.m(shadow), ns.is('button', button)]">
    <div><slot></slot></div>
    <div v-if="$slots.hide" class="hide">
      <slot name="hide"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../style/index.scss';
</style>
