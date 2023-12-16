<template>
  <div class="preview-page-container">
    <PreviewComponent :form="form"></PreviewComponent>
  </div>
</template>

<script>
import cubeImgSrc from "../assets/png/cube.png";
import PreviewComponent from "@/components/PreviewComponent.vue";

export default {
  components: {
    PreviewComponent,
  },
  props: ["serializedObject"],
  data() {
    return {
      cubeImgSrc: cubeImgSrc,
      form: null,
    };
  },
  mounted() {
    this.form = JSON.parse(this.serializedObject);
  },
};
</script>

<style scoped>
body,
.preview-page-container {
  background-color: var(--primary-color, #3ea748);
  padding: 5vh 30vw 0vh 30vw;
  height: 100vh;
}
</style>
