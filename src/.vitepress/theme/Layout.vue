<template>
  <section class="w-full py-4 flex justify-center items-center px-10">
      <section :key="route.path" class="flex-1 prose md:prose-lg max-w-4xl w-full prose-theme-purple selection:bg-blueGray-900/10 selection:text-blueGray-900 p-6 bg-white pb-40 bg-white" id="grid-main">
        <Content />
      </section>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
const route = useRoute();
</script>
