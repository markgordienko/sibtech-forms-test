<template>
  <v-btn
    flat
    variant="flat"
    color="var(--primary-color, #3ea748)"
    class="text-none btn-text custom-btn"
    :class="{
      dotted: dotted,
      medium: fontWeight > 450,
      'appended-icon': appendIcon,
    }"
    rounded="lg"
    :style="{
      width: btnWidth,
      height: btnHeight,
      color: textColor,
      fontWeight: fontWeight,
    }"
  >
    {{ btnText }}
    <component class="" :is="appendIcon" v-if="appendIcon" />
  </v-btn>
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
