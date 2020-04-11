<template lang="pug">
    div(
        v-if="isSpinner"
        class="spinner text-center")
        v-progress-circular(
            :size="70"
            :width="7"
            color="secondary"
            indeterminate)
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'spinner',
        computed: mapState(['isSpinner'])
    }
</script>

<style lang="scss" scoped>
    .spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
