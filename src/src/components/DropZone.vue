<script setup lang="ts">
import { reactive } from "vue";
import { useDropzone } from "vue3-dropzone";

const emit = defineEmits(["fileUpload"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    required: true,
  },
});

function onDrop(acceptFiles: Array<File>, rejectReasons: Array<File>) {
  if (!props.disabled) {
    if (rejectReasons.length > 0) {
      console.log("files rejected", rejectReasons);
    }
    emit("fileUpload", acceptFiles);
  }
}

const options = reactive({
  onDrop,
});

const {
  getRootProps,
  getInputProps,
  isDragActive,
  isFocused,
  isDragReject,
  open,
} = useDropzone(options);
</script>
<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="text-center" v-if="!disabled">
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
    <div v-else class="d-flex align-items-center justify-content-center">
      <h1 class="display-5 fw-bold" style="margin-right: 1rem">
        Uploading files
      </h1>
      <div
        class="spinner-border"
        role="status"
        style="height: 30px; width: 30px"
      ></div>
    </div>
  </div>
</template>