<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import DropZone from "@/components/DropZone.vue";
import File from "@/components/FileHandler.vue";
import { FileState } from "@/app/core";
import type { FileData, FileHandlerPayload } from "@/app/core";

const rawFiles = ref<Record<number, FileData> | null>(null);

const handleFileUpload = (files: Array<File>) => {
  const _rF: { [key: number]: FileData } = {};
  files.forEach((el, idx) => {
    _rF[idx];
    _rF[idx] = { fileObj: el, state: FileState.New } as FileData;
  });
  rawFiles.value = _rF;
};

const removeFile = (id: number) => {
  if (rawFiles.value) {
    const raw = JSON.parse(JSON.stringify(rawFiles.value));
    delete raw[id];
    rawFiles.value = Object.keys(raw).length > 0 ? raw : undefined;
  }
};

const upload = (payload: FileHandlerPayload) => {
  if (rawFiles.value !== null) {
    console.log("Uploading ==> ", rawFiles.value[payload.id]);

    rawFiles.value[payload.id].state = FileState.Uploading;
    rawFiles.value[payload.id].message = "";

    setTimeout(() => {
      const result = Math.random() < 0.5;

      if (result) {
        rawFiles.value[payload.id].state = FileState.Success;
        rawFiles.value[payload.id].message = "File has been uploaded!";

        setTimeout(() => {
          removeFile(payload.id);
        }, 2000);
      } else {
        rawFiles.value[payload.id].state = FileState.Error;
        rawFiles.value[payload.id].message = "Error uploading file";
      }
    }, 2000);
  }
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
        :id="Number(idx)"
        :file="file.fileObj"
        :state="file.state"
        :message="file.message"
        @remove="removeFile($event)"
        @upload="upload($event)"
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
