<template>
    <div class="container" v-if="from == 1">
        <input type="radio" name="tab" id="a1" class="hidden" checked />
        <input type="radio" name="tab" id="a2" class="hidden" />
        <div class="flex space-x-2 nav">
            <label
                for="a1"
                class="
                    w-1/2
                    h-10
                    rounded-t-lg
                    text-center
                    md:text-left
                    md:underline
                    md:px-5
                    py-2
                    md:w-full
                    bg-cardViewCount
                    text-googleTitle
                    font-NotoSansJp font-bold
                    text-lg
                "
            >
                <span> お知らせ</span></label
            >
            <label
                for="a2"
                class="
                    w-1/2
                    h-10
                    rounded-t-lg
                    text-center
                    py-2
                    md:hidden
                    bg-cardViewCount
                    text-googleTitle
                    font-NotoSansJp font-bold
                    text-lg
                "
            >
                <span> 掲示板</span></label
            >
        </div>

        <div class="tab-a1 hidden">
            <result-detail-row :sites="sites"> </result-detail-row>
        </div>
        <div class="tab-a2 hidden">
            <result-detail-row :sites="sites1"> </result-detail-row>
        </div>
    </div>
    <div class="container hidden md:block" v-if="from == 2">
        <label
            class="
                flex
                h-10
                rounded-t-lg
                text-center
                py-2
                px-5
                underline
                w-auto
                bg-cardTitle
                text-white
                font-NotoSansJp font-bold
                text-lg
            "
        >
            <span> 掲示板</span></label
        >
        <result-detail-row :sites="sites1"> </result-detail-row>
    </div>
</template>

<script>
import resultDetailRow from './resultDetailRow.vue'
// import bulletinBoardItem from './bulletinBoardItem.vue'

export default {
  components: { resultDetailRow },
  props: { sites: [], sites1: [], from: "" },
  data() {
    return {
    };
  },

}
</script>
<style scoped>
</style>
