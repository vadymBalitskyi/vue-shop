<template lang="pug">
    v-footer(
        absolute
        class="font-weight-medium"
        color="primary")
        v-col(
            class="text-center"
            cols="12")
            span(class="footer__title") {{ new Date().getFullYear() }} — <strong>sample-shop</strong>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    .footer {
        &__title {
            color: #fff;
        }
    }
</style>