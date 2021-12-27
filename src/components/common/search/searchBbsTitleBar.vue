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
                w-20
            "
        >
            掲示板
        </div>
        <div class="flex flex-row space-x-2">
            <button
                class="
                    rounded
                    border-b-2 border-pink_78145A
                    bg-browse
                    text-white
                    notoSansJpAndFourteenMedium
                    w-17
                    h-7.5
                    px-1
                "
                @click="bbsRecordClick"
            >
                投 稿
            </button>
            <button
                class="
                    rounded
                    border-b-2 border-blue_283C78
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
    watch: {},
    methods: {
        bbsRecordClick() {
            this.$router.push({
                path: '/newBbsRecord',
            })
        },
    },
    created() {},
}
</script>
<style scoped></style>
