<template>
    <div class="flex border-b-2 border-unlineblue">
        <!-- 左 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div class="flex w-full md:w-191.25 mx-2 md:mx-0">
            <div
                class="
                    text-googleTitle
                    notoSansJpAndTwentyBlack
                    cs:text-2xl
                    pt-2.5
                    pb-2.5
                    pr-5
                    md:pt-5 md:pb-5
                "
            >
                症例（プレアボイド）データ入出力
            </div>
        </div>
        <!-- 右 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
    </div>
    <div class="flex overflow-auto">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-none mr-2.5 ml-2.5 w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-2">
                <prevoidsExport></prevoidsExport>
            </div>
            <div class="grid grid-cols-1 gap-1 md:space-y-2">
                <preavoids-import></preavoids-import>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../common/dateRange/litepie-datepicker.vue'
import prevoidsExport from './preavoidsExport.vue'
import PreavoidsImport from './preavoidsImport.vue'

export default {
    components: {
        vueSingleSelect,
        litepieDatepicker,
        prevoidsExport,
        PreavoidsImport,
    },
    data() {
        return {}
    },

    methods: {},

    computed: {},
    mounted() {},
}
</script>

<style></style>
