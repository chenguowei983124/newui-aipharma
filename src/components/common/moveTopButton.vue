<template>
    <div v-show="isDisp" class="fixed block bottom-5 z-99">
        <transition
            enter-active-class="transition duration-500 ease-in-out transform"
            enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-500 ease-in-out transform"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
        >
            <div
                class="
                    h-15
                    w-15
                    flex
                    justify-center
                    items-center
                    cursor-pointer
                    hover:opacity-50
                    active:opacity-50
                "
                @click="toTop"
            >
                <button
                    class="
                        h-15
                        w-15
                        bg-toTop
                        text-white
                        rounded-full
                        z-99
                        justify-center
                        items-center
                        flex
                    "
                    @click="toTop"
                >
                    <moveTopTriangle class="h-3.75 w-6 mb-1"></moveTopTriangle>
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
import moveTopTriangle from '../common/svgImage/moveTopTriangle.vue'
export default {
    components: { moveTopTriangle },
    emits: ['toTop'],
    data() {
        return { srcoll: 0 }
    },
    mounted() {
        window.addEventListener('scroll', this.moveTop)
    },
    methods: {
        toTop() {
            let currentScroll = document.documentElement.scrollTop,
                int = setInterval(frame, 6)
            function frame() {
                if (0 > currentScroll) {
                    clearInterval(int)
                } else {
                    currentScroll = currentScroll - 1000
                    document.documentElement.scrollTop = currentScroll
                }
            }
        },
        moveTop: function () {
            this.srcoll =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop
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
                if (this.srcoll > 100) {
                    return true
                } else {
                    return false
                }
                // return true
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
