<template>
  <div>
    <AfCustomHeader />
    <slot />
    <AfCustomFooter v-if="footer" />
  </div>
</template>

<script setup>
import AfCustomHeader from "../components/AfCustomHeader.vue";
import AfCustomFooter from "../components/AfCustomFooter.vue";

const props = defineProps({
  footer: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
body {
  background-color: #eaecf7;
}
</style>
