<template>
  <div class="flex flex-col gap-y-3 sm:gap-y-4">
    <AppFooterListHeading :title="list.title" />
    <ul class="flex flex-col gap-y-1 sm:gap-y-2">
      <AppFooterListItem v-for="item in list.items" :key="item">{{
        item
      }}</AppFooterListItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ list: { title: string; items: string[] } }>()
</script>

<style lang="scss" scoped></style>
