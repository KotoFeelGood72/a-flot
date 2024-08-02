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
import AfNav from "../components/AfNav.vue";

const props = defineProps({
  footer: {
    type: Boolean,
    default: true,
  },
});
</script>
