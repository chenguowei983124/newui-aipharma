<template>
    <div class="h-full space-y-2.5 md:space-y-3.75">
        <resut-tag headerStyle="1" title1="お知らせ" title2="掲示板">
            <div class="tab-a1 hidden">
                <result-detail-row
                    class="searchResult_detail_blue"
                    :sites="$store.getters.topNoticeInfo"
                >
                </result-detail-row>
            </div>
            <div class="tab-a2 hidden">
                <result-detail-row
                    class="searchResult_detail_blue"
                    :sites="$store.getters.topBulletinBoardInfo"
                >
                </result-detail-row>
            </div>
        </resut-tag>
        <resut-tag headerStyle="2" title1="掲示板">
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="$store.getters.topBulletinBoardInfo"
            >
            </result-detail-row>
        </resut-tag>
        <resut-tag headerStyle="3" title1="学会情報" urlLink="123"
            ><result-detail-row
                class="searchResult_detail_gray"
                :sites="$store.getters.topScientifiSocietyInfo.details"
                proDetailStyle="style2"
                midDetailStyle="style2"
                bakDetailStyle="style2"
                lineStyle="grayline"
            >
                <carousel class="mt-7 md:mt-3 mb-3"></carousel>
                <carousel-vertical
                    class="block md:hidden -mt-8"
                ></carousel-vertical> </result-detail-row
        ></resut-tag>

        <resut-tag
            class="searchResult_header_bg_gray searchResult_header_font_noto_16"
            headerStyle="4"
            title1="PMDA"
            ><result-detail-row
                class="searchResult_detail_gray"
                lineStyle="grayline"
                :sites="$store.getters.topPMDAInfo"
            >
            </result-detail-row
        ></resut-tag>
        <div
            class="
                md:grid md:grid-cols-2
                space-y-2 space-x-0
                md:space-y-0 md:space-x-4
            "
            headerStyle="3"
            title1="PMDA"
        >
            <resut-tag headerStyle="5" title1="医薬品更新情報"
                ><result-detail-row class="searchResult_detail_gray">
                    <div class="h-15 font-bold">Coming Soon…</div>
                </result-detail-row></resut-tag
            >
            <resut-tag headerStyle="5" title1="Topics"
                ><result-detail-row class="searchResult_detail_gray">
                    <div class="h-15 font-bold">Coming Soon…</div>
                </result-detail-row></resut-tag
            >
        </div>

        <resut-tag headerStyle="3" title1="その他の情報" urlLink=""
            ><result-detail-row
                class="
                    searchResult_detail_gray
                    md:flex
                    justify-between
                    md:space-x-4 md:space-y-0
                    space-y-2 space-x-0
                    md:p-4
                    p-2
                "
            >
                <div class="w-full border-2 h-20 bg-grayline">動画</div>
                <div class="w-full border-2 h-20 bg-grayline">
                    企業一覧
                </div></result-detail-row
            ></resut-tag
        >
    </div>
</template>

<script>
import resutTag from '../seachResult/resultTag.vue'
import resultDetailRow from '../seachResult/resultDetailRow.vue'
import carousel from '../seachResult/carousel.vue'
import carouselVertical from '../seachResult/carouselVertical.vue'

export default {
  components: {
    resutTag, resultDetailRow, carousel, carouselVertical
  },
  props: {},
  data() {
    return {


    };
  },
  couputed: {},
  watch: {},
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
</style>
