<template>
  <section class="w-full py-4 flex justify-center items-center px-10">
      <section :key="route.path" class="bg-white selection:bg-blueGray-900/10 selection:text-blueGray-900 prose-theme-purple  prose prose-sm max-w-6xl w-full sm:prose-lg md:prose-xl lg:pt-16 md:pt-10 sm:p-8" id="grid-main">
        <Content />
      </section>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
const route = useRoute();
</script>

