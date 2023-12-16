<template>
  <v-row class="pa-0 ma-0">
    <v-col cols="3" class="pa-0 ma-0 curtain">
      <div class="side-menu-container">
        <v-col class="d-flex justify-center mt-16">
          <div class="flex-container mt-1">
            <div>
              <img :src="logoSrc" alt="TPU logo" />
              <div class="menu mt-6">
                <router-link
                  :to="{ path: '/forms-list/forms' }"
                  class="nav-link"
                  active-class="active-link"
                  ><ArrowLeftIcon class="prepend-icon"
                    >arrowLeftSrc</ArrowLeftIcon
                  >Назад</router-link
                >
                <a class="nav-link dummy-link mt-10" @click.prevent=""
                  >Тип формы</a
                >
                <a class="nav-link dummy-link" @click.prevent="">Сущности</a>
                <router-link
                  :to="{
                    name: 'fields',
                    params: { id: $route.params.id },
                    query: { tab: 'fields' },
                  }"
                  class="nav-link"
                  active-class="active-link"
                  >Поля</router-link
                >
                <a class="nav-link dummy-link" @click.prevent=""
                  >Правила показа полей</a
                >
                <a class="nav-link dummy-link" @click.prevent=""
                  >Другие настройки</a
                >
              </div>
            </div>
            <div class="flex-spacer"></div>
            <div class="side-menu-footer mb-5">
              <STButton
                btnText="Скрипт"
                variant="outlined"
                textColor="var(--primary-color, #3ea748)"
                class="mb-n3"
                :fontWeight="500"
                @click="previewForm"
              ></STButton>
            </div>
            <div class="side-menu-footer">
              <STButton
                btnWidth="160px"
                btnHeight="50px"
                class="mt-2"
                btnText="Сохранить"
                @click="saveForm"
              ></STButton>
            </div>
          </div>
        </v-col>
      </div>
    </v-col>
    <v-col cols="5" class="pa-0 ma-0 main-view-col-container">
      <div class="main-view-container">
        <div class="router-view-container" style="overflow-y: auto">
          <router-view></router-view>
        </div>
      </div>
    </v-col>
    <v-col cols="4" class="pa-0 ma-0 curtain">
      <div class="">
        <div class="preview-container">
          <PreviewComponent :form="currentForm"></PreviewComponent>
        </div></div
    ></v-col>
  </v-row>
</template>

<script>
import logoSrc from "../assets/logo.png";
import STButton from "../components/basic-components/STButton.vue";
import ArrowLeftIcon from "../components/icon-components/ArrowLeftIcon.vue";
import PreviewComponent from "@/components/PreviewComponent.vue";

export default {
  components: {
    STButton,
    ArrowLeftIcon,
    PreviewComponent,
  },
  data() {
    return {
      logoSrc: logoSrc,
      currentForm: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.currentForm = this.$store.state.forms.find((o) => o.id === id);
  },
  methods: {
    /**
     * Метод открывает форму на новой странице
     */
    previewForm() {
      const serializedObject = encodeURIComponent(
        JSON.stringify(this.currentForm)
      );
      const url = `${
        window.location.origin + process.env.BASE_URL
      }#/preview?serializedObject=${serializedObject}`;
      window.open(url, "_blank");
    },

    saveForm() {
      this.$router.push("/forms-list/forms");
    },
  },
};
</script>

<style scoped>
.curtain {
  background-color: var(--primary-color, #3ea748);
}

.side-menu-container {
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

.main-view-col-container {
  background-color: var(--primary-color, #3ea748);
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

.prepend-icon {
  margin-right: 8px;
}

.flex-spacer {
  flex-grow: 1;
}

.side-menu-footer {
  margin-bottom: 70px;
}

.main-view-container {
  overflow: hidden;
  border-radius: 0 10px 10px 0;
  background-color: #f9f9f9;
  height: 100vh;
}

.router-view-container {
  padding-top: 8.5vh;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100vh;
}

.preview-container {
  padding-top: 8.5vh;
  padding-left: 12%;
  padding-right: 12%;
}
</style>
