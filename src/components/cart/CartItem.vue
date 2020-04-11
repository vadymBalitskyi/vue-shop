<template lang="pug">
    v-list-item
        v-list-item-avatar(
            tile
            size="80"
            color="grey")
            v-img(:src="getImgUrl( product.url )")
        v-list-item-content(class="content")
            v-row(
                no-gutters
                justify="space-between"
                align="center")
                v-col(cols="6")
                    span {{ product.title }}
                v-col(class="d-flex justify-space-between align-center" cols="4")
                    div(class="d-flex justify-space-between align-center")
                        v-btn(
                            icon
                            :disabled="product.count <= 1"
                            @click="decrease(product)")
                            v-icon mdi-minus
                        div(class="mx-2")
                            input(
                                :value="product.count"
                                type="number"
                                class="input"
                                @input="input({ product, count: $event.target.value })")
                        v-btn(
                            icon
                            @click="increase(product)")
                            v-icon mdi-plus
                    div
                        v-btn(
                            color="error"
                            icon
                            @click="removeProductFromCart(product)")
                            v-icon mdi-close
                v-col(class="price d-flex justify-end") {{ multiplyPriceToCount( product.price, product.count ) | usDollar }}
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import {getImgUrl} from '@/plugins/helpers'
    import {usDollar} from '@/plugins/filters'

    export default {
        name: "CartItem",
        props: {
            product: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        filters: {usDollar},
        computed: mapGetters([
            'cart',
            'cartTotal',
            'calcTotal'
        ]),
        methods: {
            ...mapMutations([
                'increase',
                'decrease',
                'input',
                'removeProductFromCart'
            ]),
            getImgUrl,
            multiplyPriceToCount(price, count) {
                return price * count
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        overflow: visible;
    }

    .input {
        max-width: 50px;
        height: 24px;
        text-align: center;
        border: 1px solid #ccc;
        /* Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        &[type=number] {
            -moz-appearance: textfield;
        }
    }
</style>