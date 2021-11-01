<template>
    <div>
        <send-reset-password-mail-main></send-reset-password-mail-main>
    </div>
</template>

<script>
import sendResetPasswordMailMain from '../components/login/sendResetPasswordMailMain.vue'

export default {
    components: {
        sendResetPasswordMailMain,
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
