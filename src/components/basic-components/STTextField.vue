<template>
  <v-text-field
    variant="solo"
    bg-color="var(--secondary-color, #f6f6f6)"
    flat
    rounded="lg"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    btnWidth: {
      type: String,
      default: "160px",
    },
    btnHeight: {
      type: String,
      default: "50px",
    },
    textColor: {
      type: String,
      default: "white",
    },
    btnText: {
      type: String,
      default: "BUTTON",
    },
    fontWeight: {
      type: Number,
      default: 400,
    },
    dotted: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.v-text-field >>> .v-label {
  margin-inline-start: 30px !important;
}
.appended-icon {
  display: inline-flex;
}
.appended-icon >>> .v-btn__content {
  flex-grow: 1;
  justify-content: space-between;
}
.btn-text {
  font-size: 16px;
  font-style: normal;
  letter-spacing: 0.2px;
  font-smooth: auto;
}
.dotted {
  border-style: dotted;
  border-width: 2px;
}

.medium {
  font-family: Cera Pro-Medium;
}
</style>
