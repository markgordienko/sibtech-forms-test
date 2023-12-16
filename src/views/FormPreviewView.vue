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
  padding: 20vh 30vw 20vh 30vw;
  height: 100vh;
}

.preview-form-container {
  line-height: normal;
  width: 42.3vw;
  height: 100vh;
  z-index: 10;
  position: absolute;
  border-radius: 0 10px 10px 0;
  background-color: white;
  display: flex;
}
@media (max-width: 900px) {
  .auth-form-container {
    width: 100%;
    border-radius: 0;
  }
}

.auth-form {
  margin-top: 7.7vh;
  margin-left: 10.6vw;
}

.unselectable {
  user-select: none;
}
</style>
