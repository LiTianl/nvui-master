<script setup lang="ts">
import Example from './demo/example.vue'
import SourceCode from './demo/source-code.vue'
import { computed, ref } from 'vue'
const props = defineProps<{
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const showType = ref(false)

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
        <nv-icon icon-class="copy"></nv-icon>
        <nv-icon @click="showType = !showType" icon-class="code"></nv-icon>
      </div>
      <div v-show="showType" class="container-code">
        <SourceCode :source="source"></SourceCode>
        <div @click="showType = false" class="container-tool-close">
          <nv-icon icon-class="top"></nv-icon>
          <span>隐藏代码</span>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
div[class*='language-'] {
  border-radius: 0 !important;
}
.container {
  border: 1px solid;
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 30px;
  .container-tool-btns {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 5px;
    height: 2.5rem;
    line-height: 2.5;
    border-top: 1px solid;
    & > .svg-icon {
      margin: 0 5px;
    }
  }
  .container-code {
    overflow: hidden;
    .container-tool-close {
      text-align: center;
      border-top: 1px solid;
      height: 3rem;
      line-height: 3;
      cursor: pointer;
      & > span {
        padding-left: 8px;
      }
    }
  }
}
</style>
