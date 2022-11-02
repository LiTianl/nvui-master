<script setup lang="ts">
import { computed } from 'vue'
import { iconProps } from './icon'

const props = defineProps(iconProps)

const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className
  } else {
    return 'svg-icon'
  }
})

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NvIcon'
})
</script>
<template>
  <svg :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>
<style scoped lang="scss">
@import '../icons/iconfont.css';
.svg-icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
</style>
