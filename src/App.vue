<template lang="pug">
    v-app
        Header
        div(class="view")
            router-view
        Footer
        Snackbar
        Spinner
</template>

<script>
    import Header from './components/main/Header'
    import Footer from './components/main/Footer'
    import Snackbar from "./components/Snackbar"
    import Spinner from "./components/Spinner"

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            Snackbar,
            Spinner,
        }
    };
</script>

<style lang="scss">
    @import '@/assets/styles/main';

    .view {
        padding-bottom: 60px;
    }
</style>