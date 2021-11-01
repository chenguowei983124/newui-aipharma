<template>
    <div>
        <set-password-main></set-password-main>
    </div>
</template>

<script>
import setPasswordMain from '../components/login/setPasswordMain.vue'

export default {
    components: {
        setPasswordMain,
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
