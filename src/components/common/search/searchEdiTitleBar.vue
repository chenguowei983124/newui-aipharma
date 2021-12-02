<template>
    <div class="flex w-full md:w-192.5 justify-between pr-2 md:pr-0">
        <div
            class="
                text-googleTitle
                font-NotoSansJp
                text-xl
                md:text-2xl
                font-black
                flex-none
                pl-2
                md:pl-0
                w-30
            "
        >
            お知らせ
        </div>
        <div class="flex flex-row space-x-2">
            <button
                class="
                    rounded
                    border-b-2 border-pink-800
                    bg-redFF145A
                    text-white
                    notoSansJpAndFourteenMedium
                    w-17
                    h-7.5
                    px-1
                "
                @click="ediClick"
            >
                投　稿
            </button>
            <button
                class="
                    rounded
                    border-b-2 border-blue-900
                    bg-blue326EB3
                    text-white
                    notoSansJpAndFourteenMedium
                    w-20
                    h-7.5
                    px-1
                "
            >
                下書き一覧
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
    watch: {
    },
    methods: {
        ediClick() {
            this.$router.push({
                path: '/newEdiRecord',
            })
        },
    },
    created() {},
}
</script>
<style scoped></style>
