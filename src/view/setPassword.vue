<template>
    <div class="">
        <div class="flex flex-row h-screen justify-center">
            <div class="flex flex-col justify-between">
                <div></div>
                <set-password-layout></set-password-layout>
                <home-bottom-template></home-bottom-template>
            </div>
        </div>
    </div>
</template>

<script>
import setPasswordLayout from '../layout/setPasswordLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: { setPasswordLayout, homeBottomTemplate },
    props: {},
    watch: {},
    methods: {},
    created() {},
}
</script>
