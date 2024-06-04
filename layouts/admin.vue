<template>
    <div>
        <AfHeaderColor />
        <slot />

    </div>
</template>

<script setup >
import AfHeaderColor from '~/components/AfHeaderColor.vue';


</script>

<style lang="scss">

body {
    background-color: #fff;
}
</style>