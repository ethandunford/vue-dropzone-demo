<script setup lang="ts">
import { ref, computed, propType, Prop } from "vue";
import type { FileState } from "@/app/core";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  file: {
    type: File,
    required: true,
  },
  state: {
    type: String as propType<FileState>,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const newFileName = ref<String>("");
const currentFileName = computed(() => {
  return props.file.path;
});
</script>
<template>
  <div class="row g-3 mb-4">
    <div class="col-xs-12 col-sm-3">
      <input
        type="text"
        class="form-control"
        placeholder="Current file name"
        disabled
        :cy-data="`current-file-name-btn-${id}`"
        v-model="currentFileName"
      />
    </div>
    <div class="col-xs-12 col-sm-3">
      <input
        type="text"
        class="form-control"
        placeholder="New file name"
        :cy-data="`new-file-name-btn-${id}`"
        :disabled="disabled"
        v-model="newFileName"
      />
    </div>
    <div class="col-auto">
      <button
        type="submit"
        class="btn btn-danger mb-3"
        :cy-data="`btn-remove-${id}`"
        :disabled="disabled"
      >
        Remove
      </button>
    </div>
    <div class="col-auto">
      <button
        type="submit"
        class="btn btn-success mb-3"
        :cy-data="`btn-upload-${id}`"
        :disabled="disabled"
      >
        Upload
      </button>
    </div>
  </div>
</template>
