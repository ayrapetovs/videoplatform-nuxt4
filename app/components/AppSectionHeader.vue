<template>
  <div class="container max-w-screen-sm">
    <h2 class="text-center text-2xl font-bold sm:text-4xl dark:text-white">
      {{ title }}
    </h2>
    <p
      class="mt-1 text-center text-gray-600 sm:mt-2 sm:text-lg dark:text-gray-300"
    >
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; desc: string }>()
</script>
