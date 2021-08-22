<template>
  <VTextField
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
    dense
    persistent-placeholder
    rounded
    filled
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
  </VTextField>
</template>

<script>
export default {
  name: "DSInput",
  inheritAttrs: false,
};
</script>
