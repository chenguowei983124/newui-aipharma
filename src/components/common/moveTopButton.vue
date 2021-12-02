<template>
    <div v-show="isDisp" class="fixed block bottom-5 z-99">
        <div
            class="h-15 w-15 flex justify-center items-center cursor-pointer"
            @click="toTop"
        >
            <button
                class="h-15 w-15 bg-toTop text-white rounded-full z-99"
                @click="toTop"
            >
                ▲
            </button>

            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="60" />
                <polygon points="60 41.47 36 71.47 84 71.47 60 41.47" />
            </svg> -->
            <!-- class="hover:opacity-50 active:opacity-50" -->
            <!-- id="_211012_ai_pharma_parts"
                data-name="211012_ai_pharma_parts" -->
            <!-- class="cls-2" -->
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    emits: ['toTop'],
    data() {
        return {}
    },

    methods: {
        toTop() {
            let currentScroll = document.documentElement.scrollTop,
                int = setInterval(frame, 6)
            function frame() {
                if (0 > currentScroll) {
                    clearInterval(int)
                } else {
                    currentScroll = currentScroll - 48
                    document.documentElement.scrollTop = currentScroll
                }
            }
        },
    },
    computed: {
        isDisp: function () {
            if (
                this.$router.currentRoute.value.name != 'login' &&
                this.$router.currentRoute.value.name != 'error' &&
                this.$router.currentRoute.value.name != 'notfound' &&
                this.$router.currentRoute.value.name != '404' &&
                this.$router.currentRoute.value.name !=
                    'sendResetPasswordMail' &&
                this.$router.currentRoute.value.name != 'sendResetPassword' &&
                this.$router.currentRoute.value.name != 'setPassword' &&
                this.$router.currentRoute.value.name != 'searchBulletinBoard' &&
                this.$router.currentRoute.value.name != 'newBbsRecord' &&
                this.$router.currentRoute.value.name != 'searchNotification' &&
                this.$router.currentRoute.value.name != 'newEdiRecord' &&
                this.$router.currentRoute.value.name
            ) {
                return true
            } else {
                return false
            }
        },
    },
}
</script>
<style scoped>
.cls-1 {
    fill: #f09600;
}
.cls-2 {
    fill: #fff;
}
</style>
