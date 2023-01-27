<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import DropZone from "@/components/DropZone.vue";
import File from "@/components/FileHandler.vue";
import { FileState, FileData } from "@/app/core";

const rawFiles = ref<Record<number, FileData> | null>(null);

const handleFileUpload = (files: Array<File>) => {
  const _rF: { [key: number]: FileData } = {};
  files.forEach((el, idx) => {
    _rF[idx];
    _rF[idx] = { fileObj: el, state: FileState.New } as FileData;
  });
  rawFiles.value = _rF;
};
</script>

<template>
  <main>
    <div class="container py-4">
      <AppHeader />
    </div>
    <div class="container">
      <DropZone @fileUpload="handleFileUpload($event)" />
    </div>
    <div class="container py-4" v-if="rawFiles">
      <div class="row">
        <h1 class="fw-bold mb-4">Files</h1>
      </div>
      <File
        v-for="(file, idx) in rawFiles"
        :key="idx"
        :id="idx"
        :file="file.fileObj"
        :state="file.state"
        :message="file.message"
      />
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
