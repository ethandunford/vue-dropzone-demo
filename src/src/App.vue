<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import DropZone from "@/components/DropZone.vue";
import File from "@/components/FileHandler.vue";

const rawFiles = ref([1, 2]);
</script>

<template>
  <main>
    <div class="container py-4">
      <AppHeader />
    </div>
    <div class="container">
      <DropZone />
    </div>
    <div class="container py-4">
      <div class="row">
        <h1 class="fw-bold mb-4">Files</h1>
      </div>
      <File v-for="(file, idx) in rawFiles" :key="idx" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  svg {
    margin-right: 1rem;
  }
}
</style>
