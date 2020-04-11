<template lang="pug">
    header(class="header")
        v-container
            v-row(align="center")
                v-col
                    router-link(to="/")
                        span(class="logo") sample-shop
                Cart
</template>

<script>
    import Cart from '@/components/cart/Cart'

    export default {
        name: "Header",
        components: { Cart }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables';

    .header {
        background-color: $primary;
    }
    .logo{
        color: #fff;
    }
</style>