<template lang="pug">
    v-container
        v-row
            v-col(cols="3")
                ProductFilter

            v-col(cols="9")
                v-row
                    v-col(
                        v-for="(product, index) in products"
                        :key="product.id"
                        cols="4")
                        ProductItem(
                            :item="product"
                            :index="index")
</template>

<script>
    import {mapGetters} from 'vuex'
    import ProductFilter from '@/components/product/ProductFilter'
    import ProductItem from '@/components/product/ProductItem'

    export default {
        name: "Home",
        components: {ProductItem, ProductFilter},
        computed: mapGetters(['products'])
    }
</script>