import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DropZone from "@/components/Dropzone.vue";

describe("DropZone", () => {
  it("renders properly", () => {
    const wrapper = mount(DropZone);
    expect(wrapper.text()).toContain(
      "Drag 'n' drop some files here, or click to select files. "
    );

    expect(wrapper.find("button").text()).toContain("Select files");
  });
});
