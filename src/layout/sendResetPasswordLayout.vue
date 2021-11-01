<template>
    <div>
        <send-reset-password-main></send-reset-password-main>
    </div>
</template>

<script>
import sendResetPasswordMain from '../components/login/sendResetPasswordMain.vue'

export default {
    components: {
        sendResetPasswordMain,
    },
    props: {},
    data() {
        return {
            isMenuOpen: true,
        }
    },
    watch: {},
    methods: {},
    created() {},
}
</script>
<style scoped></style>
