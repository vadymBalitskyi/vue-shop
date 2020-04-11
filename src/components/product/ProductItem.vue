<template lang="pug">
    v-card(
        class="cart mx-auto"
        max-width="400"
        height="100%")
        router-link(:to="`/product/${ item.id }`")
            v-img(
                class="white--text align-end"
                :src="getImgUrl( item.url )")
        router-link(:to="`/product/${ item.id }`")
            v-card-title(class="justify-center") {{ item.title }}
            v-card-text(class="text--primary")
                div(class="price") {{ item.price | usDollar }}

        v-card-actions
            v-btn(
                @click="addProductToCart( item )"
                width="100%"
                color="secondary") Add to cart
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {getImgUrl} from '@/plugins/helpers'
    import {usDollar} from '@/plugins/filters'

    export default {
        name: "Product",
        props: {
            item: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        filters: {usDollar},
        computed: mapState(['cart']),
        methods: {
            ...mapActions(['addProductToCart']),
            getImgUrl
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables';

    a {
        text-decoration: none;
    }
    .price {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: $secondary;
    }
    .add-btn {
        &:hover {
            background-color: $secondary;
        }
    }
</style>