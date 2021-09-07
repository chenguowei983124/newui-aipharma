<template>
    <div class="searchResultAllTitleAndValue mt-7.5 md:mt-12.5">
        検索結果：{{ $store.getters.getSearchValue }}
    </div>

    <div class="h-full space-y-2.5 md:space-y-3.75">
        <resut-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="DI ナレッジシェア"
            titleStyle="bulletinBoardInfoTitle"
            titleURL="\"
        >
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
        <resut-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="組織内 DI 記録（Q&A）"
            titleStyle="bulletinBoardInfoTitle"
            titleURL="\"
            rightStyle="count"
            :countTitle="
                '該当：' +
                $store.getters.searchAllSearchAllOrganizationDidDocument.count +
                '件'
            "
            countStyle="searchResultAllCountLable"
        >
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="
                    $store.getters.searchAllSearchAllOrganizationDidDocument
                        .SearchAllOrganizationDidDocument
                "
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>
        <resut-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="症例（プレアボイド）"
            titleStyle="bulletinBoardInfoTitle"
            titleURL="\"
            rightStyle="count"
            :countTitle="
                '該当：' + $store.getters.searchAllPreAvoid.count + '件'
            "
            countStyle="searchResultAllCountLable"
        >
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="$store.getters.searchAllPreAvoid.searchAllPreAvoid"
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>

        <resut-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="DI 辞書"
            titleStyle="bulletinBoardInfoTitle"
            titleURL="\"
            rightStyle="count"
            countTitle="該当：9999件"
            countStyle="searchResultAllCountLable"
        >
            <result-detail-row class="searchResult_detail_blue">
                Coming soon
            </result-detail-row>
        </resut-tag>

        <resut-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="掲示板"
            titleStyle="bulletinBoardInfoTitle"
            titleURL="\"
            rightStyle="count"
            :countTitle="
                '該当：' +
                $store.getters.searchAllBulletinBoardInfo.count +
                '件'
            "
            countStyle="searchResultAllCountLable"
        >
            <result-detail-row
                class="searchResult_detail_blue"
                :sites="
                    $store.getters.searchAllBulletinBoardInfo.bulletinBoardInfo
                "
                :sub1="['group']"
                :sub2="['titleHeightAuto']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>
        <google-item></google-item>
        <pharmaceuticals-item></pharmaceuticals-item>
        <jstage-item></jstage-item>
    </div>
</template>

<script>
import resutTag from '../searchResult/resultTag.vue'
import resultDetailRow from '../searchResult/resultAllDetailRow.vue'
import carousel from '../searchResult/carousel.vue'
import googleItem from '../searchResult/googleItem.vue'
import pharmaceuticalsItem from '../searchResult/pharmaceuticalsItem.vue'
import jstageItem from '../searchResult/jstageItem.vue'
export default {
  components: {
    resutTag, resultDetailRow, carousel, googleItem, pharmaceuticalsItem, jstageItem
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
