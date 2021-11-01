<template>
    <div class="">
        <div class="flex flex-row h-screen justify-center">
            <div class="flex flex-col justify-between">
                <div></div>
                <send-reset-passwork-mail-layout></send-reset-passwork-mail-layout>
                <home-bottom-template></home-bottom-template>
            </div>
        </div>
    </div>
</template>

<script>
import sendResetPassworkMailLayout from '../layout/sendResetPasswordMailLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: { sendResetPassworkMailLayout, homeBottomTemplate },
    props: {},
    watch: {},
    methods: {},
    created() {},
}
</script>
