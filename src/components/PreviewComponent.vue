<template>
  <div v-if="form" class="container pa-4">
    <v-row class="">
      <v-col class="mb-6"
        ><h2>{{ form.name }}</h2></v-col
      >
    </v-row>
    <div v-for="item in form.fields" :key="item.order">
      <v-col v-if="item.type == 'number' || item.type == 'string'" class="mb-n8"
        ><v-text-field
          :label="item.name"
          variant="solo"
          bg-color="var(--secondary-color-light, #f6f6f6)"
          flat
          class=""
          rounded="lg"
          :type="item.type"
          single-line
          ><template #label v-if="item.required">
            <span class="red-text"><strong>* </strong></span>{{ item.name }}
          </template></v-text-field
        ></v-col
      >
      <v-col v-else class="mb-n8"
        ><v-select
          :items="item.options"
          :multiple="item.isMultiselect"
          :label="item.name"
          rounded="lg"
          ><template #label v-if="item.required">
            <span class="red-text"><strong>* </strong></span>{{ item.name }}
          </template></v-select
        ></v-col
      >
    </div>
    <v-row class="mt-5">
      <v-col>
        <v-checkbox
          base-color="var(--primary-color, #3ea748)"
          color="var(--primary-color, #3ea748)"
          density="compact"
          label="Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности"
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-row
      ><v-col align="center"
        ><STButton
          btnWidth="160px"
          btnHeight="50px"
          class="mt-2"
          btnText="Отправить"
        ></STButton></v-col
    ></v-row>
  </div>
</template>
<script>
import STButton from "./basic-components/STButton.vue";

export default {
  components: { STButton },
  props: {
    form: {
      type: Object,
      default: null,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-checkbox >>> .v-selection-control {
  align-items: flex-start;
  justify-content: space-evenly;
}

.v-checkbox >>> .v-label {
  align-items: flex-start;
  justify-content: space-evenly;
}

.v-text-field >>> .v-label {
  margin-inline-start: 30px !important;
}

.container {
  background-color: white;
  border-radius: 20px;
  max-height: 85vh;
  overflow-y: auto;
}

.red-text {
  color: red;
}
</style>
