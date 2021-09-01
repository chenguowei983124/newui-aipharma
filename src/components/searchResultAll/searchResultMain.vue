<template>
    <div class="font-NotoSansJp font-bold text-xl">
        検索結果：{{ $store.getters.getSearchValue }}
    </div>

    <div class="h-full space-y-2.5 md:space-y-3.75">
        <resut-tag headerStyle="7" title1="DI ナレッジシェア">
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="
                    $store.getters.searchAllDiKnowledge.searchAllDiKnowledge
                "
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['Certainty']"
            >
            </result-detail-row>
        </resut-tag>
        <resut-tag headerStyle="7" title1="組織内 DI 記録（Q&A）">
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="
                    $store.getters.searchAllSearchAllOrganizationDidDocument
                "
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>
        <resut-tag headerStyle="7" title1="症例（プレアボイド）">
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="$store.getters.searchAllPreAvoid"
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>

        <resut-tag headerStyle="7" title1="DI 辞書">
            <result-detail-row class="searchResult_detail_blue">
                <div class="h-15 font-bold">Coming Soon…</div>
            </result-detail-row>
        </resut-tag>

        <resut-tag headerStyle="7" title1="掲示板">
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="$store.getters.searchAllBulletinBoardInfo"
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>
    </div>
</template>

<script>
import resutTag from '../seachResult/resultTag.vue'
import resultDetailRow from '../seachResult/resultAllDetailRow.vue'
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
