<script setup lang="ts">
// defineOptions({
//   name: 'Button'
// })
/**
 * 接收传过来的值
 *
 * @param size 定义按钮的大小 可选值为 'large' | 'middle' | 'small' | 'mini'
 * @param type 定义按钮的类型 默认不填
 */
defineProps({
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'default'
  }
})
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name:'NVButton'
})
</script>

<template>
  <button  :class="[size, type]">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot></slot>
  </button>
</template>
