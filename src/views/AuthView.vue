<template>
  <div class="auth-page-container">
    <div class="auth-form-container">
      <AuthComponent class="auth-form" />
    </div>

    <img
      :src="cubeImgSrc"
      onerror="this.style.display='none'"
      class="unselectable"
      :style="{
        width: '320px',
        position: 'fixed',
        top: '74vh',
        left: '34vw',
        transform: 'rotate(30.89deg)',
        zIndex: '5',
      }"
    />
    <img
      :src="cubeImgSrc"
      onerror="this.style.display='none'"
      class="unselectable"
      :style="{
        width: '455px',
        position: 'fixed',
        top: '32vh',
        left: '53vw',
        transform: 'rotate(30.89deg)',
        zIndex: '6',
      }"
    />
    <img
      :src="cubeImgSrc"
      onerror="this.style.display='none'"
      class="unselectable"
      :style="{
        width: '221px',
        position: 'fixed',
        top: '5vh',
        left: '47vw',
        zIndex: '3',
      }"
    />
    <img
      :src="cubeImgSrc"
      onerror="this.style.display='none'"
      class="unselectable"
      :style="{
        width: '118px',
        position: 'fixed',
        top: '13vh',
        left: '83vw',
        transform: 'rotate(-62.355deg)',
        filter: 'blur(1.5px)',
        zIndex: '2',
      }"
    />
    <img
      :src="cubeImgSrc"
      onerror="this.style.display='none'"
      class="unselectable"
      :style="{
        width: '74px',
        position: 'fixed',
        top: '67vh',
        left: '87vw',
        transform: 'rotate(-62.355deg)',
        filter: 'blur(1.5px)',
        zIndex: '1',
      }"
    />
    <img
      :src="cubeImgSrc"
      onerror="this.style.display='none'"
      class="unselectable"
      :style="{
        width: '283px',
        position: 'fixed',
        top: '82vh',
        left: '79vw',
        transform: 'rotate(98.598deg)',
        filter: 'blur(1.5px)',
        zIndex: '4',
      }"
    />
  </div>
</template>

<script>
import cubeImgSrc from "../assets/png/cube.png";
import AuthComponent from "../components/AuthComponent.vue";

export default {
  components: {
    AuthComponent,
  },
  data() {
    return {
      cubeImgSrc: cubeImgSrc,
    };
  },
};
</script>

<style scoped>
body,
.auth-page-container {
  background-color: var(--primary-color, #3ea748);
  height: 100vh;
}

.auth-form-container {
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
