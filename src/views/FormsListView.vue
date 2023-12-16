<template>
  <v-row class="pa-0 ma-0">
    <v-col cols="3" class="pa-0 ma-0 side-menu-col-container">
      <div class="side-menu-container">
        <v-col class="d-flex justify-center mt-16">
          <div class="flex-container">
            <div>
              <img :src="logoSrc" alt="TPU logo" />
              <div class="menu mt-5">
                <router-link
                  :to="{ path: '/forms-list/forms' }"
                  class="nav-link"
                  active-class="active-link"
                  >Формы</router-link
                >
                <a class="nav-link dummy-link" @click.prevent=""
                  >Пользователи</a
                >
              </div>
            </div>
            <div class="flex-spacer"></div>
            <div class="side-menu-footer">
              <STButton
                btnText="Выход"
                variant="outlined"
                textColor="var(--primary-color, #3ea748)"
                class="mb-n3"
                :fontWeight="500"
                @click="logOut"
              ></STButton>
            </div>
          </div>
        </v-col>
      </div>
    </v-col>
    <v-col cols="9" class="pa-0 ma-0">
      <div class="main-view-container">
        <div class="router-view-container">
          <router-view></router-view>
        </div></div
    ></v-col>
  </v-row>
</template>

<script>
import logoSrc from "../assets/logo.png";
import STButton from "../components/basic-components/STButton.vue";

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
     * Метод разлогинивает пользователя
     */
    logOut() {
      // здесь должна быть какая-то логика операции log out
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.side-menu-col-container {
  background-color: var(--secondary-color-light, #f6f6f6);
}

.side-menu-container {
  border-radius: 0 10px 10px 0;
  background-color: white;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100vh;
}

.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-link {
  margin-right: 10px;
  text-decoration: none;
  color: black;
}

.nav-link:hover {
  color: var(--primary-color-dark, #32863a);
}

.active-link {
  color: var(--primary-color, #3ea748);
}

.dummy-link {
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
}

.flex-spacer {
  flex-grow: 1;
}

.side-menu-footer {
  margin-bottom: 70px;
}

.main-view-container {
  overflow-y: auto;
  background-color: var(--secondary-color-light, #f6f6f6);
}

.router-view-container {
  padding-top: 8.5vh;
  padding-left: 6.2vw;
  padding-right: 11.5vw;
  background-color: var(--secondary-color-light, #f6f6f6);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100vh;
}
</style>
