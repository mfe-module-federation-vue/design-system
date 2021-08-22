<template>
  <VBtn
    :color="color"
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
    dense
    rounded
  >
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </VBtn>
</template>

<script>
export default {
  name: "DSButton",
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>
<style lang="scss" scoped>
.v-btn {
  text-transform: none;
  font-weight: 700;
}
</style>