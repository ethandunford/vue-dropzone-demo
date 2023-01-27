<script lang="ts">
import { useDropzone } from "vue3-dropzone";

export default {
  name: "UseDropzoneDemo",
  setup() {
    function onDrop(acceptFiles, rejectReasons) {
      console.log(acceptFiles);
      console.log(rejectReasons);
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    return {
      getRootProps,
      getInputProps,
      ...rest,
    };
  },
};
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
