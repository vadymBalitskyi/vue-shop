<template lang="pug">
    v-card
        v-snackbar(
            v-model="snackbar.state"
            :color="color[snackbar.abbr]"
            :multi-line="mode === 'multi-line'"
            :timeout="timeout"
            :vertical="mode === 'vertical'"
            :top="y === 'top'"
            :right="x === 'right'"
            :bottom="y === 'bottom'"
            :left="x === 'left'"
            type="success")
            span {{ snackbar.msg }}
            v-btn(
                icon
                color="white"
                @click="snackbar.state = false")
                v-icon mdi-close
</template>

<script>
    export default {
        data: () => ({
            color: {
                success: '#4caf50',
                error: '#ff5252',
                warning: '#fb8c00',
                info: '#2196f3'
            },
            y: 'top',
            x: 'right',
            timeout: 2000,
            mode: 'multi-line',
        }),
        computed: {
            snackbar: {
                get() {
                    return this.$store.state.snackbar;
                },
                set(newValue) {
                    return this.$store.commit('setSnackbar', newValue);
                }
            },
        }
    }
</script>
