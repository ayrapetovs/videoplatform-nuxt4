<template>
  <div
    class="col-span-1 grid gap-2 sm:gap-4 md:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3"
  >
    <PlaylistGridItem
      :playlist="playlist"
      v-for="playlist in playlists"
      :key="playlist.title"
    />
  </div>
</template>

<script setup>
const playlists = [
  {
    title: 'Prettier',
    desc:
      'Automatically format your code to ensure consistent style across your project.',
    tags: ['Utility', 'Formatting'],
  },
  {
    title: 'GitLens',
    desc:
      'Supercharge Git within VS Code with commit visualization and blame annotations.',
    tags: ['Development', 'Collaboration'],
  },
  {
    title: 'Live Share',
    desc:
      'Real-time collaborative development from the comfort of your favorite editor.',
    tags: ['Development', 'Collaboration'],
  },
  {
    title: 'ESLint',
    desc:
      'Find and fix problems in your JavaScript/TypeScript code automatically.',
    tags: ['Development', 'Debugging'],
  },
  {
    title: 'Code Runner',
    desc:
      'Run code snippets in multiple programming languages with a single click.',
    tags: ['Development', 'Utility'],
  },
  {
    title: 'REST Client',
    desc:
      'Send HTTP requests and view responses directly in Visual Studio Code.',
    tags: ['Development', 'Utility'],
  },
  {
    title: 'Code Spell Checker',
    desc:
      'Catch common spelling errors in your source code and documentation.',
    tags: ['Utility', 'Documentation'],
  },
  {
    title: 'Docker',
    desc: 'Manage Docker containers and images directly from VS Code.',
    tags: ['Development', 'Integration'],
  },
]
</script>

<style lang="scss" scoped></style>
