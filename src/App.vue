<template>
  <div id="app">
    <DSWrapper>
      <VMain>
        <VContainer>
          <DSInput
            v-model="myInput"
            label="My Label"
            placeholder="My Placeholder"
          />
        </VContainer>
        <DSButton> Save </DSButton>
        <DSUserPicture
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light.svg"
        />
      </VMain>
    </DSWrapper>
  </div>
</template>

<script>
import DSWrapper from "./components/DSWrapper.vue";
import DSInput from "./components/DSInput.vue";
import DSButton from "./components/DSButton.vue";
import DSUserPicture from "./components/DSUserPicture.vue";

export default {
  name: "App",
  components: {
    DSWrapper,
    DSInput,
    DSButton,
    DSUserPicture,
  },
  data: () => ({
    myInput: "My value",
  }),
};
</script>
