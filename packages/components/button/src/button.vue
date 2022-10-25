<script setup lang="ts">
import { ref } from "vue"
import {buttonProps,buttonEmits} from './button'
import { useNamespace } from 'pk/hooks/use-namespace'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const ns = useNamespace('button')
const _ref = ref<HTMLButtonElement>()


const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

defineExpose({
  ref: _ref
})

</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NVButton'
})
</script>
<template>
  <button 
    ref="_ref"
    :class="[ 
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('disabled',disabled),
      ns.is('loading',loading),
      ns.is('plain',plain),
      ns.is('text',text),
      ns.is('round',round),
      ns.is('circle',circle),
      ns.is('has-bg',bg)
    ]"
    :aria-disabled="disabled || loading"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
    >
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot></slot>
  </button>
</template>
<style scoped lang='scss'>
@import '../style/index.scss'
</style>
