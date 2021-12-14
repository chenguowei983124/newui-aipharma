<template>
    <div class="flex w-full md:w-192.5 justify-between mt-2 pr-2 md:pr-0">
        <div
            class="
                flex
                text-googleTitle
                font-NotoSansJp
                text-xl
                md:text-2xl
                font-black
                flex-none
                pl-2
                md:pl-0
            "
        >
            症例
            <span class="text-xxs md:text-2xl pt-2.5 md:pt-0"
                >（プレアボイド）</span
            >
        </div>
        <div class="flex flex-row space-x-2">
            <button
                class="
                    rounded
                    border-b-2 border-pink-800
                    bg-pink-600
                    text-white
                    notoSansJpAndFourteenMedium
                    w-17
                    h-7.5
                    px-1
                "
            >
                症例登録
            </button>
            <button
                class="
                    rounded
                    border-b-2 border-blue-900
                    bg-blue-700
                    text-white
                    notoSansJpAndFourteenMedium
                    w-20
                    h-7.5
                    px-1
                "
            >
                下書き一覧
            </button>
            <button
                class="
                    rounded
                    border-b-2 border-blue-900
                    bg-blue-700
                    text-white
                    notoSansJpAndFourteenMedium
                    w-13
                    h-7.5
                    px-1
                "
                @click="inputOutClick"
            >
                入出力
            </button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {}
    },
    couputed: {},
    watch: {},
    methods: {
        inputOutClick() {
            this.$router.push({
                path: '/preavoidsInputOut',
            })
        },
    },
    created() {},
}
</script>
<style scoped></style>
