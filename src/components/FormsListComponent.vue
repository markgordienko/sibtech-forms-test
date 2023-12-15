<template>
  <div>
    <v-row class="mb-10">
      <v-col cols="6"><h1>Формы</h1></v-col>
      <v-col cols="6" align="right">
        <STButton btnText="Создать форму" @click="createForm"></STButton
      ></v-col>
    </v-row>
    <FormCardComponent
      class="mb-7"
      v-for="i in 3"
      :key="i"
      :formCard="{
        id: 1,
        name: 'Форма регистрации участников',
        author: 'user1',
        creationDate: '01.01.23',
      }"
    ></FormCardComponent>
  </div>
</template>

<script>
import FormCardComponent from "@/components/FormCardComponent.vue";
import STButton from "./basic-components/STButton.vue";

export default {
  components: {
    FormCardComponent,
    STButton,
  },
  methods: {
    createForm() {
      // здесь должна быть какая-то логика операции log out
      this.$router.push("/create-form");
    },
  },
};
</script>
