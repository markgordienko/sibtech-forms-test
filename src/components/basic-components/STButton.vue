<template>
  <v-btn
    flat
    variant="flat"
    color="var(--primary-color, #3ea748)"
    class="text-none btn-text"
    :class="{ dotted: dotted, medium: fontWeight > 450 }"
    rounded="lg"
    :style="{
      width: btnWidth,
      height: btnHeight,
      color: textColor,
      fontWeight: fontWeight,
    }"
  >
    {{ btnText }}
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
  },
};
</script>

<style scoped>
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
