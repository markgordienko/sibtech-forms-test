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
      v-for="item in forms"
      :key="item.id"
      :formCard="item"
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
  data: function () {
    return {
      forms: [],
    };
  },
  mounted() {
    if (this.$store.state.forms.length === 0) {
      for (let i = 0; i < 3; i++) {
        this.$store.dispatch("addValueToForms", {
          id: this.uuidv4(),
          name: "Форма регистрации участников",
          author: "user1",
          creationDate: "01.01.23",
          fields: [],
        });
      }
    }
    this.forms = this.$store.state.forms;
  },
  methods: {
    createForm() {
      let id = this.uuidv4();
      let date = new Date();
      this.$store.dispatch("addValueToForms", {
        id: id,
        name: "Форма регистрации участников",
        author: "user1",
        creationDate: date.toLocaleDateString("ru-RU"),
        fields: [],
      });
      this.$router.push({ name: "formCreation", params: { id: id } });
    },

    uuidv4() {
      return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
  },
};
</script>
