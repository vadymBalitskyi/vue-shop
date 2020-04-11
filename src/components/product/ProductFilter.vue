<template lang="pug">
    v-row
        v-col(
        class="pb-0"
        cols="12")
            h4(class="subtitle-2") Prices:
            v-range-slider(
                v-model="range"
                :max="max"
                :min="min"
                color="secondary"
                hide-details
                class="align-center")
        v-col(
            class="pb-0"
            cols="12"
            sm="12"
            md="6")
            v-text-field(
                :value="range[0]"
                class="mt-0 pt-0"
                type="number"
                color="secondary"
                solo
                @change="$set(range, 0, $event)")
        v-col(
            class="pb-0"
            cols="12"
            sm="12"
            md="6")
            v-text-field(
                :value="range[1]"
                class="mt-0 pt-0"
                type="number"
                color="secondary"
                solo
                @change="$set(range, 1, $event)")
        v-col
            h4(class="subtitle-2") Filters:
            v-checkbox(
                v-model="isMen"
                color="secondary"
                label="men")
            v-checkbox(
                v-model="isWomen"
                class="mt-0"
                color="secondary"
                label="women")
            v-checkbox(
                v-model="isSale"
                class="mt-0"
                color="secondary"
                label="sale")
</template>

<script>
    import {mapGetters} from 'vuex'
    import {minNum, maxNum} from '@/plugins/helpers'

    export default {
        name: "ProductFilter",
        data: () => ({
            min: 0,
            max: 0,
        }),
        computed: {
            ...mapGetters(['products']),
            range: {
                get() {
                    return this.$store.state.products.range;
                },
                set(newValue) {
                    this.$store.commit('setRange', newValue)
                }
            },
            isMen: {
                get() {
                    return this.$store.state.products.isMen;
                },
                set(newValue) {
                    this.$store.commit('setMen', newValue)
                }
            },
            isWomen: {
                get() {
                    return this.$store.state.products.isWomen;
                },
                set(newValue) {
                    this.$store.commit('setWomen', newValue)
                }
            },
            isSale: {
                get() {
                    return this.$store.state.products.isSale;
                },
                set(newValue) {
                    this.$store.commit('setSale', newValue)
                }
            },
        },
        methods: {minNum, maxNum},
        created() {
            const prices = this.products.map(item => item.price);
            [this.min, this.max] = [this.minNum(prices), this.maxNum(prices)];
            this.range = [this.min, this.max];
        }
    }
</script>
