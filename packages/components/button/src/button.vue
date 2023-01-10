<script setup lang="ts">
import { ref } from 'vue'
import { buttonProps, buttonEmits } from './button'
import { useNamespace } from '@nv/hooks'

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
  name: 'NvButton'
})
</script>
<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.m(animation),
      ns.is('disabled', disabled),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('text', text),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('has-bg', bg)
    ]"
    :aria-disabled="disabled || loading"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <div v-if="icon || $slots.icon" class="icon">
      <nv-icon :icon-class="icon"></nv-icon>
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </button>
</template>
<style scoped lang="scss">
@import '../style/index.scss';
</style>
