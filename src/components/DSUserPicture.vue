<template>
  <v-avatar align-self="center" class="profile" color="grey" size="124">
    <v-img align-self="center" :src="src"></v-img>
  </v-avatar>
</template>

<script>
export default {
  name: "DSUserPIcture",
  props: {
    src: {
      type: String,
    },
  },
};
</script>