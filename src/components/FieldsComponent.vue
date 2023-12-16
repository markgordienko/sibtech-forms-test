<template>
  <div>
    <v-row class="mb-n2">
      <v-col><h1>Поля</h1></v-col>
    </v-row>
    <v-row class="mb-n4">
      <v-col><h2>Скрытые поля</h2></v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col align="center"
        ><STButton
          class="justify-content-left"
          :appendIcon="plusIcon"
          btnText="Добавить поле"
          btnHeight="71px"
          btnWidth="100%"
          variant="outlined"
          textColor="var(--primary-color)"
          dotted
        ></STButton
      ></v-col>
    </v-row>
    <v-row class="mt-10"
      ><v-col><h2>Поля</h2></v-col>
    </v-row>
    <transition-group name="fade" mode="out-in">
      <div v-for="item in fields" :key="item.order">
        <div
          v-if="item.type == 'number' || item.type == 'string'"
          style="max-height: 150px"
        >
          <v-row class="mb-n6">
            <v-col class=""
              ><p>{{ item.name }}</p></v-col
            >
            <v-col align="right" class=""
              ><STButton
                btnWidth="120px"
                btnHeight="25px"
                variant="text"
                textColor="var(--primary-color, #3ea748)"
                :fontWeight="500"
                btnText="Удалить поле"
                density="compact"
                @click="deleteField(item)"
              ></STButton
            ></v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-row class="mb-n10">
            <v-col>
              <v-text-field
                variant="solo"
                label="Поле"
                bg-color="white"
                flat
                rounded="lg"
                v-model="item.name"
                single-line
              ></v-text-field
            ></v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-row class="">
            <v-col class="">
              <v-checkbox
                density="compact"
                label="Сделать поле обязательным"
                v-model="item.required"
              ></v-checkbox
            ></v-col>
          </v-row>
        </div>
        <div v-else class="" style="max-height: 150px">
          <v-row
            ><v-col align="right" class="">
              <STButton
                btnWidth="120px"
                btnHeight="25px"
                variant="text"
                textColor="var(--primary-color, #3ea748)"
                :fontWeight="500"
                btnText="Удалить поле"
                density="compact"
                rounded="lg"
                @click="deleteField(item)"
              ></STButton></v-col
          ></v-row>
          <v-spacer></v-spacer>
          <v-row
            ><v-col class="pt-0"
              ><v-select
                :items="item.options"
                :multiple="item.isMultiselect"
                :label="item.name"
                single-line
                bg-color="white"
              ></v-select></v-col
          ></v-row>
          <v-spacer></v-spacer>
          <v-row class="mt-0">
            <v-col class="mt-n8">
              <v-checkbox
                density="compact"
                label="Сделать поле обязательным"
                v-model="item.required"
              ></v-checkbox
            ></v-col>
          </v-row>
        </div>
      </div>
    </transition-group>
    <v-row class="mt-4">
      <v-col align="center"
        ><STButton
          class="justify-content-left"
          :appendIcon="plusIcon"
          btnText="Добавить поле"
          btnHeight="71px"
          btnWidth="100%"
          variant="outlined"
          textColor="var(--primary-color)"
          dotted
          @click="modalOpen = !modalOpen"
        ></STButton
      ></v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col align="center"
        ><STButton
          class="justify-content-left"
          :appendIcon="plusIcon"
          btnText="Добавить страницу формы"
          btnHeight="71px"
          btnWidth="100%"
          variant="outlined"
          textColor="var(--primary-color)"
          dotted
        ></STButton
      ></v-col>
    </v-row>
    <AddFieldModalComponent
      v-model:modalOpen="modalOpen"
    ></AddFieldModalComponent>
  </div>
</template>

<script>
import STButton from "../components/basic-components/STButton.vue";
import PlusIcon from "./icon-components/PlusIcon.vue";
import AddFieldModalComponent from "./AddFieldModalComponent.vue";

export default {
  components: { STButton, AddFieldModalComponent },
  data() {
    return {
      plusIcon: PlusIcon,
      fields: [],
      modalOpen: false,
      currentForm: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.currentForm = this.$store.state.forms.find((o) => o.id === id);
    this.fields = this.currentForm.fields;
  },
  methods: {
    createForm() {
      // здесь должна быть какая-то логика операции log out
      this.$router.push("/create-form");
    },
    closeModal() {
      this.modalOpen = false;
    },
    deleteField(item) {
      const index = this.fields.indexOf(item);
      if (index > -1) {
        // only splice array when item is found
        this.fields.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.justify-content-left {
  justify-content: left;
}
</style>
