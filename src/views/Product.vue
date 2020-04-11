<template lang="pug">
    v-container
        v-row(justify="center")
            v-col(cols="10")
                v-row
                    v-col(cols="5")
                        v-card
                            v-img(:src="getImgUrl( product.url )")
                    v-col(cols="7")
                        h3(class="headline mb-3") {{ product.title }}
                        p(class="mb-3") {{ product.text }}
                        p(class="title") {{ product.price | usDollar }}
                        v-btn(
                            @click="addProductToCart( product )"
                            color="secondary") Add to cart
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {getImgUrl} from '@/plugins/helpers'
    import {usDollar} from '@/plugins/filters'

    export default {
        name: "Product-page",
        filters: {usDollar},
        computed: {
            ...mapState(['products']),
            product() {
                const id = this.$route.params.id;
                return this.products.products[id];
            }
        },
        methods: {
            ...mapActions(['addProductToCart']),
            getImgUrl
        }
    }
</script>
