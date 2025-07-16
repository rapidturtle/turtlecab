<script setup lang="ts">
defineProps<{
  title?: string
  icon?: string[]
}>()
</script>

<template>
  <div
    class="relative isolate overflow-hidden rounded-xl bg-white/5 p-6 inset-ring inset-ring-white/5 backdrop-blur-sm"
  >
    <div
      v-if="icon"
      class="bg-primary-500 mb-6 flex size-10 items-center justify-center rounded-full"
    >
      <font-awesome-icon :icon="icon" class="text-white" aria-hidden="true" />
    </div>
    <div class="text-base/7">
      <h3 v-if="title" class="font-semibold text-white">{{ title }}</h3>
      <div class="mt-2 text-stone-400"><slot /></div>
    </div>
  </div>
</template>
