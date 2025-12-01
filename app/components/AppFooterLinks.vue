<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
    <AppFooterList
      :list="{
        title: 'Popular Playlists',
        items: ['Prettier', 'GitLens', 'Live Share'],
      }"
    />

    <AppFooterList
      :list="{
        title: 'Configurations',
        items: ['Settings', 'Keyboard Shortcuts', 'Code Snippets'],
      }"
    />

    <AppFooterList
      :list="{
        title: 'Social',
        items: ['YouTube', 'Telegram', 'GitHub'],
      }"
    />
  </div>
</template>
