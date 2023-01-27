<script setup lang="ts">
import { useDropzone } from "vue3-dropzone";

const emit = defineEmits(["fileUpload"]);

const onDrop = (acceptFiles: Array<File>, rejectReasons: Array<File>) => {
  if (rejectReasons.length > 0) {
    console.log("files rejected", rejectReasons);
  }
  emit("fileUpload", acceptFiles);
};

const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
  onDrop,
});
</script>
<template>
  <div class="p-5 mb-4 text-center bg-light rounded-3">
    <div v-bind="getRootProps()">
      <input v-bind="getInputProps()" />
      <h1 class="display-5 fw-bold" v-if="isDragActive">
        Drop the files here ...
      </h1>
      <h1 class="display-5 fw-bold" v-else>
        Drag 'n' drop some files here, or click to select files.
      </h1>
    </div>
    <button class="mt-3 btn btn-primary btn-lg" @click="open">
      Select files
    </button>
  </div>
</template>
