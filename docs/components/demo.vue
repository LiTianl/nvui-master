<script setup lang="ts">
import Example from './demo/example.vue'
import SourceCode from './demo/source-code.vue'
import { computed } from 'vue'
const props = defineProps<{
  source: string
  path: string
  rawSource: string
  description?: string
}>()

// 解码
const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)
</script>
<template>
  <ClientOnly>
    <p text="sm" v-html="decodedDescription" />
    <div class="container">
      <div class="container-example">
        <Example :file="path" />
      </div>
      <div class="container-tool-btns">
        <div>copy</div>
        <div>show</div>
      </div>
      <div class="container-code">
        <SourceCode :source="source"></SourceCode>
        <div class="container-tool-close">隐藏代码</div>
      </div>
    </div>
  </ClientOnly>
</template>
<style scoped lang="scss">
.container {
  border: 1px solid;
  border-radius: 6px;
  box-sizing: border-box;
  .container-tool-btns {
    display: flex;
    justify-content: end;
    padding: 0 5px;
    height: 2.5rem;
    line-height: 2.5;
    border-top: 1px solid;
    & > div {
      padding: 0 5px;
    }
  }
  .container-code {
    .container-tool-close {
      text-align: center;
      border-top: 1px solid;
      height: 3rem;
      line-height: 3;
    }
  }
}
</style>
