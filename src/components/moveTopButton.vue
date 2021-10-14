<template>
    <div v-show="isDisp" class="fixed block bottom-5 z-99">
        <div
            class="h-15 w-15 flex justify-center items-center cursor-pointer"
            @click="toTop"
        >
            <svg
                id="_211012_ai_pharma_parts"
                data-name="211012_ai_pharma_parts"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                class="hover:opacity-50 active:opacity-50"
            >
                <circle class="cls-1" cx="60" cy="60" r="60" />
                <polygon
                    class="cls-2"
                    points="60 41.47 36 71.47 84 71.47 60 41.47"
                />
            </svg>
        </div>
        <!-- <button
            class="
                h-15
                w-15
                bg-toTop
                text-white
                rounded-full
                hover:opacity-50
                active:opacity-50
                flex
                justify-center
                items-center
            "
            @click="toTop"
        >
            <triangle-svg class=""></triangle-svg>
        </button> -->
    </div>
</template>

<script>
export default {
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
                    currentScroll = currentScroll - 12
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
