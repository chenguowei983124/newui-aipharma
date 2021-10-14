<template>
    <div>
        <!-- <div class="hidden md:block mid:block bg-red-400">44646546546545</div> -->
        <div class="block md:hidden mid:hidden">
            <div
                class="
                    flex flex-row
                    h-21
                    bg-gray-500
                    justify-center
                    items-center
                "
            >
                <div class="flex justify-start space-x-2">
                    <div class="w-82.5 h-3/4 border-0 px-0.5">
                        <textarea
                            type="text"
                            class="text-xs w-80 focus:outline-none"
                            placeholder="理由をお聞かせください（任意）"
                        />

                        <!-- <div class="text-xs">理由をお聞かせください（任意）</div> -->
                        <!-- <div class="text-xs text-red-600">
                    ※コメントは管理者に送信されます
                </div> -->
                        <div class="flex justify-between pr-2">
                            <div class="text-xs text-red-600">
                                ※コメントは管理者に送信されます
                            </div>
                            <button class="bg-gray-600 text-white text-xs">
                                送信
                            </button>
                        </div>
                    </div>
                    <div class="cursor-pointer" @click="openGoodMessageBox">
                        <x-icon-svg></x-icon-svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import xIconSvg from '../../components/common/svgImage/xIconSvg.vue'
export default {
    components: { xIconSvg },
    data() {
        return {}
    },
    methods: {
        openGoodMessageBox() {
            // console.log(this.$store.getters.getGoodMessageBox)
            this.$store.dispatch(
                'setGoodMessageBox',
                !this.$store.getters.getGoodMessageBox
            )
        },
    },
}
</script>

<style></style>
