<template>
  <v-dialog v-model="isOpen" max-width="500" @keydown.enter="addField">
    <v-card class="custom-modal">
      <v-card-title class="custom-modal-title">
        Добавление поля
        <v-btn
          flat
          variant="text"
          icon
          class="modal-button"
          @click="closeModal"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-radio-group v-model="selectedOption" inline>
          <v-radio value="number" label="Число"></v-radio>
          <v-radio value="string" label="Строка"></v-radio>
          <v-radio value="select" label="Список"></v-radio>
        </v-radio-group>
      </v-card-text>

      <div
        class="px-5"
        v-if="selectedOption === 'number' || selectedOption === 'string'"
      >
        <v-row>
          <v-col>
            <v-text-field
              variant="solo"
              label="Имя поля"
              bg-color="#e0e0e0"
              flat
              rounded="lg"
              v-model="fieldName"
              autofocus
            ></v-text-field
          ></v-col>
        </v-row>
      </div>
      <div v-else class="px-5">
        <v-row>
          <v-col cols="7">
            <v-text-field
              variant="solo"
              label="Вопрос поля"
              bg-color="#e0e0e0"
              flat
              rounded="lg"
              v-model="fieldName"
              autofocus
            ></v-text-field
          ></v-col>
          <v-col cols="5"
            ><v-checkbox
              label="Множественный выбор"
              v-model="isMultiselect"
            ></v-checkbox></v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-for="index in multiselectValues.length"
              :key="index"
              variant="solo"
              label="Наименование варианта выбора"
              bg-color="#e0e0e0"
              flat
              rounded="lg"
              v-model="multiselectValues[index - 1]"
              class="mt-n3"
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row class="mt-n10">
          <v-col align="right"
            ><v-btn
              flat
              variant="text"
              icon
              class="modal-button"
              @click="multiselectValues.push('')"
            >
              <PlusIcon></PlusIcon> </v-btn
          ></v-col>
          <v-col align="left">
            <v-btn
              flat
              variant="text"
              icon
              class="modal-button"
              :disabled="multiselectValues.length == 1"
              @click="
                if (multiselectValues.length > 1) multiselectValues.pop();
              "
            >
              <MinusIcon></MinusIcon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <v-card-actions>
        <v-btn @click="addField" color="var(--primary-color, #3ea748)"
          >Добавить</v-btn
        ></v-card-actions
      >
    </v-card>
  </v-dialog>
</template>

<script>
import PlusIcon from "./icon-components/PlusIcon.vue";
import MinusIcon from "./icon-components/MinusIcon.vue";

export default {
  components: { PlusIcon, MinusIcon },
  props: {
    modalOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: "number",
      fieldName: "",
      multiselectValues: [""],
      isMultiselect: false,
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.modalOpen;
      },
      set(value) {
        this.init();
        this.$emit("update:modalOpen", value);
      },
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    /**
     * Метод инициализирует значения полей по-умолчанию
     */
    init() {
      this.selectedOption = "number";
      this.fieldName = "";
      this.multiselectValues = [""];
      this.isMultiselect = false;
    },

    /**
     * Метод добавляет поле в форму
     */
    addField() {
      const id = this.$route.params.id;
      let currentForm = this.$store.state.forms.find((o) => o.id === id);
      currentForm.fields.push({
        type: this.selectedOption,
        name: this.fieldName,
        options: this.multiselectValues,
        reqired: false,
        isMultiselect: this.isMultiselect,
        order: currentForm.fields.length,
      });
      this.closeModal();
    },

    /**
     * Метод закрывает модальное окно
     */
    closeModal() {
      this.init();
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.v-radio-group >>> .v-selection-control-group {
  justify-content: space-evenly;
}

.custom-modal {
  background-color: var(--secondary-color-light, #f6f6f6);
}

.custom-modal-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-button {
  color: var(--primary-color, #3ea748);
  padding: 4px;
}

.modal-button:hover {
  background-color: transparent;
}
</style>
