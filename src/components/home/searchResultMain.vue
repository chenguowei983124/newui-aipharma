<template>
    <div class="h-full space-y-4">
        <resut-tag headerStyle="1" title1="お知らせ" title2="掲示板">
            <div class="tab-a1 hidden">
                <result-detail-row :sites="$store.getters.topNoticeInfo">
                </result-detail-row>
            </div>
            <div class="tab-a2 hidden">
                <result-detail-row :sites="$store.getters.topBulletinBoardInfo">
                </result-detail-row>
            </div>
        </resut-tag>

        <resut-tag headerStyle="2" title1="掲示板">
            <result-detail-row :sites="$store.getters.topBulletinBoardInfo">
            </result-detail-row>
        </resut-tag>

        <resut-tag headerStyle="3" title1="学会情報"
            ><result-detail-row
                :sites="$store.getters.topScientifiSocietyInfo.details"
                proDetailStyle="style2"
                midDetailStyle="style2"
                bakDetailStyle="style2"
            >
                <carousel></carousel> </result-detail-row
        ></resut-tag>

        <resut-tag headerStyle="4" title1="PMDA"
            ><result-detail-row :sites="$store.getters.topPMDAInfo">
            </result-detail-row
        ></resut-tag>
    </div>
</template>

<script>
import resutTag from '../seachResult/resultTag.vue'
import resultDetailRow from '../seachResult/resultDetailRow.vue'
import carousel from '../seachResult/carousel.vue'
export default {
  components: {
    resutTag, resultDetailRow, carousel
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
