<script setup lang="ts">
import { ref, onBeforeUnmount, onUnmounted } from 'vue'
const value = ref('1234')
onBeforeUnmount(() => {
  console.log('beforemounted:' + value.value)
})

onUnmounted(() => {
  console.log('mounted:' + value.value)
})
</script>
<template>
  <div>
    <nv-button icon="code" circle> </nv-button>
    <nv-card shadow="hover">
      1111111111
      <p>2222</p>
      <p>3333</p>
      <p>2222</p>
      <p>3333</p>
      <template #hide>hhaha</template>
    </nv-card>
  </div>
</template>
<style scoped lang="scss"></style>
