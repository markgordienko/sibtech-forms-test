<template>
  <v-row class="mb-0 mr-0">
    <v-col>
      <div class="flex-container">
        <div>
          <img :src="logoSrc" alt="TPU logo" />
          <h1 class="mt-6">Авторизация</h1>
          <v-text-field
            label="Логин"
            variant="solo"
            bg-color="var(--secondary-color-light, #f6f6f6)"
            flat
            class="mt-8 mb-n3"
            rounded="lg"
          ></v-text-field>
          <v-text-field
            label="Пароль"
            variant="solo"
            type="password"
            bg-color="var(--secondary-color-light, #f6f6f6)"
            flat
            rounded="lg"
          ></v-text-field>
          <STButton
            btnWidth="160px"
            btnHeight="50px"
            class="mt-2"
            btnText="Вход"
            @click="logIn"
          ></STButton>
        </div>
        <div class="flex-spacer"></div>
        <div class="auth-form-footer">
          <p>
            Если возникла проблема, то можете написать
            <a href="https://youtu.be/dQw4w9WgXcQ?t=43" target="_blank"
              >Алёне из Сибтеха</a
            >
          </p>

          <p class="mt-2">
            С любовью, ваш
            <a href="https://sibteh.org/" target="_blank">Сибтех</a>
          </p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import logoSrc from "../assets/logo.png";
import STButton from "./basic-components/STButton.vue";

export default {
  components: {
    STButton,
  },
  data() {
    return {
      logoSrc: logoSrc,
    };
  },
  methods: {
    /**
     * Метод авторизует пользователя
     */
    logIn() {
      // здесь должна быть какая-то логика авторизации
      this.$router.push("/forms-list");
    },
  },
};
</script>

<style scoped>
.v-text-field >>> .v-label {
  margin-inline-start: 30px !important;
}

.v-text-field >>> .v-input__control {
  height: 70px;
  width: 24.3vw;
}
@media (max-width: 900px) {
  .v-text-field >>> .v-input__control {
    width: 70%;
  }
}

.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.flex-spacer {
  flex-grow: 1;
}

.auth-form-footer {
  width: 260px;
  margin-bottom: 50px;
}
</style>
