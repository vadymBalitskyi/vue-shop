<template lang="pug">
    v-dialog(
        v-model="dialog"
        width="700")
        template(v-slot:activator="{ on }")
            v-badge(
                avatar
                overlap)
                template(v-slot:badge)
                    v-avatar(v-if="cart.length > 0")
                        span {{ cart.length }}
                v-btn(
                    icon
                    color="secondary"
                    v-on="on")
                        v-icon mdi-cart

        v-card
            template(v-if="cart.length >= 1")
                CartItem(
                    v-for="(product, index) of cart"
                    :key="index"
                    :product="product"
                    :index="index")
                v-list-item
                    v-list-item-content
                        v-row(
                            justify="space-between"
                            align="center")
                            v-col(md="auto")
                                h3 Total:
                            v-col(md="auto")
                                h3 {{ cartTotal | usDollar }}
                        v-row(justify="end")
                            v-col(md="auto")
                                v-btn(
                                    @click="clear"
                                    color="warning"
                                    class="mr-2"
                                    ) Clear
                                v-btn(
                                    @click="buy"
                                    color="success"
                                    ) Buy
            template(v-else)
                h3(class="subtitle-1 d-flex justify-center py-5")
                    v-icon(class="mr-1") mdi-cart
                    span Cart is empty
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import {usDollar} from '@/plugins/filters'
    import CartItem from '@/components/cart/CartItem'

    export default {
        name: "Cart",
        data: () => ({
            dialog: false
        }),
        components: {CartItem},
        filters: {usDollar},
        computed: mapGetters(['cart', 'cartTotal']),
        methods: {
            ...mapMutations([
                'setPurchases',
                'clearCart',
                'clearCartTotal'
            ]),
            buy() {
                this.setPurchases();
                this.clear();
            },
            clear() {
                this.clearCart();
                this.clearCartTotal();
            }
        }
    }
</script>
