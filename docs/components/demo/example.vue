<script setup>
import { unref, computed, defineAsyncComponent } from 'vue'
const props = defineProps({
  file: {
    type: String,
    required: true
  }
})

const modules = import.meta.glob('../../examples/**/*.vue')
const demos = unref(
  computed(() => {
    let item = {}
    Object.keys(modules).forEach((key) => {
      item[key.replace('../../examples/', '').replace('.vue', '')] =
        modules[key]
    })
    return item
  })
)

const demoslot =
  props.file && demos[props.file]
    ? defineAsyncComponent(demos[props.file])
    : null
</script>

<template>
  <div class="example-showcase">
    <ClientOnly>
      <component :is="demoslot" v-if="demoslot" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
}
</style>
