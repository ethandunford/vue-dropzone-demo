<script setup lang="ts">
import { ref, computed, propType, Prop } from "vue";
import { FileState } from "@/app/core";
// import type { FileState } from "@/app/core";

const emit = defineEmits(["remove", "upload"]);

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

const isDisabled = computed(() => {
  return props.state === FileState.Uploading || props.disabled;
});

const isUploading = computed(() => {
  return props.state === FileState.Uploading;
});

const messageStyle = computed(() => {
  if (props.state === FileState.Error) {
    return "text-danger";
  }

  if (props.state === FileState.Success) {
    return "text-success";
  }

  return "";
});
</script>
<template>
  <div class="g-3 mb-4">
    <div class="row">
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
          :disabled="isDisabled"
          v-model="newFileName"
        />
      </div>
      <div class="col-auto">
        <button
          type="submit"
          class="btn btn-danger mb-3"
          :cy-data="`btn-remove-${id}`"
          :disabled="isDisabled"
          @click="emit('remove', id)"
        >
          Remove
        </button>
      </div>
      <div class="col-auto">
        <button
          type="submit"
          class="btn btn-success mb-3"
          :cy-data="`btn-upload-${id}`"
          :disabled="isDisabled"
          @click="emit('upload', { id, newFileName })"
        >
          Upload
          <div
            class="spinner-border"
            role="status"
            style="height: 15px; width: 15px"
            v-if="isUploading"
          ></div>
        </button>
      </div>
    </div>
    <div class="row" :class="[messageStyle]">
      <div class="col">
        {{ message }}
      </div>
    </div>
  </div>
</template>
