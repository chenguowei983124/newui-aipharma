<template>
    <div class="">
        <div class="flex flex-row h-screen justify-center">
            <div class="flex flex-col justify-between">
                <div></div>
                <send-reset-passwork-layout></send-reset-passwork-layout>
                <home-bottom-template></home-bottom-template>
            </div>
        </div>
    </div>
</template>

<script>
import sendResetPassworkLayout from '../layout/sendResetPasswordLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: { sendResetPassworkLayout, homeBottomTemplate },
    props: {},
    watch: {},
    methods: {},
    created() {},
}
</script>
