<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import DropZone from "@/components/Dropzone.vue";
import File from "@/components/FileHandler.vue";
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
      <File />
      <File />
      <File />
      <File />
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
