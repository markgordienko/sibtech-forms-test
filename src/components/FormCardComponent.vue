<template>
  <div class="form-card-container">
    <div v-if="formCard !== null">
      <v-row>
        <v-col cols="8"
          ><h2>{{ formCard.name }}</h2></v-col
        >
        <v-col cols="4" align="right">
          <STButton
            btnWidth="179px"
            btnHeight="42px"
            variant="outlined"
            textColor="var(--primary-color, #3ea748)"
            :fontWeight="500"
            btnText="Редактировать"
            @click="editForm"
          ></STButton>
        </v-col>
      </v-row>
      <v-row class="mt-n4">
        <v-col>
          <p>Автор: {{ formCard.author }}</p>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col cols="6" style="align-self: flex-end"
          ><p>Дата создания: {{ formCard.creationDate }}</p></v-col
        >
        <v-col cols="6" align="right">
          <STButton
            btnWidth="179px"
            btnHeight="42px"
            variant="text"
            textColor="var(--primary-color, #3ea748)"
            :fontWeight="500"
            btnText="Удалить"
            @click="deleteForm"
          ></STButton
        ></v-col>
      </v-row>
    </div>
    <div v-else><h1>Что-то пошло не так :(</h1></div>
  </div>
</template>

<script>
import STButton from "./basic-components/STButton.vue";

export default {
  components: {
    STButton,
  },
  props: {
    formCard: {
      type: Object,
      default: null,
    },
  },
  methods: {
    /**
     * Метод удаляет форму
     */
    deleteForm() {
      this.$store.dispatch("deleteForm", this.formCard);
    },

    /**
     * Метод открывает страницу редактирования формы
     */
    editForm() {
      this.$router.push({
        name: "formCreation",
        params: { id: this.formCard.id },
      });
    },
  },
};
</script>

<style scoped>
.form-card-container {
  background: white;
  border-radius: 15px;
  padding: 25px 27px;
}
p {
  color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1px;
  opacity: 0.5;
}
</style>
