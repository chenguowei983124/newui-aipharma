<template>
    <div class="space-y-4">
        <div
            class="flex flex-wrap mt-7.5 md:mt-8 md:mx-5 space-y-1 md:space-y-0"
        >
            <div
                class="
                    w-93.75
                    md:w-25
                    font-NotoSansJp
                    text-base
                    md:text-xl
                    font-bold
                "
            >
                検索結果：
            </div>
            <div
                class="
                    flex-auto flex flex-row
                    font-NotoSansJp
                    text-lg
                    md:text-xl
                    font-bold
                "
            >
                <div
                    v-for="item in $store.getters
                        .getSearchAllOrganizationDidDocument.searchWords"
                    :key="item"
                    class="mr-2"
                >
                    {{ item }}
                </div>
            </div>
        </div>
        <!-- <div
            class="
                searchResultAllTitleAndValue
                mt-7.5
                md:mt-8 md:mx-5
                flex flex-row
            "
        >
            <div class="">検索結果：</div>
            <div
                v-for="item in $store.getters
                    .getSearchAllOrganizationDidDocument.searchWords"
                :key="item"
                class="mr-2"
            >
                {{ item }}
            </div>
        </div> -->

        <div class="h-full space-y-2.5 md:space-y-3.75">
            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorBlue"
                title="DI ナレッジシェア"
                titleStyle="bulletinBoardInfoTitle"
                titleURL="\"
            >
                <!-- :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['certainty']" -->
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchDiKnowledge"
                    :sites="AAAA"
                    :sub1="['keyword']"
                    :sub2="['question']"
                    :sub3="['certainty']"
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
                    $store.getters.getSearchAllOrganizationDidDocument
                        .allCount +
                    '件'
                "
                countStyle="searchResultAllCountLable"
            >
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchOrganization"
                    :sites="
                        $store.getters.getSearchAllOrganizationDidDocument
                            .details
                    "
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['status', 'date', 'view']"
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
                    '該当：' +
                    $store.getters.getSearchAllPreAvoid.allCount +
                    '件'
                "
                countStyle="searchResultAllCountLable"
            >
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchPreavoids"
                    :sites="$store.getters.getSearchAllPreAvoid.details"
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['status', 'date', 'view']"
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
                titleURL="\searchBulletinBoard"
                rightStyle="count"
                :countTitle="
                    '該当：' +
                    $store.getters.getSearchAllBulletinBoardInfo.allCount +
                    '件'
                "
                countStyle="searchResultAllCountLable"
            >
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchBulletinBoard"
                    :sites="
                        $store.getters.getSearchAllBulletinBoardInfo.details
                    "
                    :sub1="['group']"
                    :sub2="['titleHeightAuto']"
                    :sub3="['status', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>

            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorGray"
                title="Google"
                titleStyle="pdmaInfoTitle"
                rightStyle="icon"
                iconUrl="https://www.google.co.jp/"
            >
                <result-external-linkdetail-row
                    :sites="$store.getters.getSearchAllGoogleInfo.details"
                ></result-external-linkdetail-row>
            </resut-tag>

            <!-- <google-item></google-item> -->
            <pharmaceuticals-item></pharmaceuticals-item>
            <jstage-item></jstage-item>
        </div>
    </div>
</template>

<script>
import resutTag from '../common/searchResult/resultTag.vue'
import resultDetailRow from '../common/searchResult/resultAllDetailRow.vue'
import resultExternalLinkdetailRow from '../common/searchResult/resultExternalLinkdetailRow.vue'
import carousel from '../common/searchResult/carousel.vue'
import googleItem from '../common/searchResult/googleItem.vue'
import pharmaceuticalsItem from '../common/searchResult/pharmaceuticalsItem.vue'
import jstageItem from '../common/searchResult/jstageItem.vue'
export default {
  components: {
    resutTag,
    resultDetailRow,
    resultExternalLinkdetailRow,
    carousel,
    googleItem,
    pharmaceuticalsItem,
    jstageItem,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    AAAA: {
      get: function () {
        var BBBB = []
        console.log("this.$store.getters.getSearchAIDiKnowledge", this.$store.getters.getSearchAIDiKnowledge)

        if (this.$store.getters.getSearchAIDiKnowledge != undefined) {
          if (Object.keys(this.$store.getters.getSearchAIDiKnowledge).length !== 0) {
            BBBB.push(this.$store.getters.getSearchAIDiKnowledge)
          }
        }

        // console.log(BBBB)
        if (this.$store.getters.getSearchAllDiKnowledge.details != undefined) {
          if (Object.keys(this.$store.getters.getSearchAllDiKnowledge.details).length !== 0) {
            for (var i in this.$store.getters.getSearchAllDiKnowledge.details) {
              BBBB.push(this.$store.getters.getSearchAllDiKnowledge.details[i])
            }
          }
        }

        // console.log("222", BBBB)
        return BBBB
      },
      //   set: function (newValue) {
      //     this.innerValue = newValue
      //   },
    },
  },
  methods: {
    async getDispData() {
      if (this.$route.query.searchKey != undefined) {
        this.$store.dispatch(
          'saveSearchValue',
          this.$route.query.searchKey
        )
      } else {
        this.$store.dispatch('saveSearchValue', '')
      }

      this.$store.dispatch('searchALLLDiKnowledgeInfo')
      this.$store.dispatch('searchAIDiKnowledgeInfo')
      this.$store.dispatch('searchALLLOrganizationInfo')
      this.$store.dispatch('searchALLLPreAvoidInfo')
      this.$store.dispatch('searchALLBulletinBoardInfo')
      this.$store.dispatch('searchGoogleInfo')
    },
  },
  watch: {
    $route: function () {
      if (this.$route.path != '/searchResultAll') {
        return
      }
      if (JSON.stringify(this.$route.query.searchKey) == '{}') {
        this.$store.dispatch('saveSearchValue', '')
      }
      if (JSON.stringify(this.$route.query) !== '{}') {
        this.$store.dispatch(
          'saveSearchValue',
          this.$route.query.searchKey
        )
      }
      this.$store.dispatch('searchALLLDiKnowledgeInfo')
      this.$store.dispatch('searchAIDiKnowledgeInfo')
      this.$store.dispatch('searchALLLOrganizationInfo')
      this.$store.dispatch('searchALLLPreAvoidInfo')
      this.$store.dispatch('searchALLBulletinBoardInfo')
      this.$store.dispatch('searchGoogleInfo')
    },
  },
  mounted() {
    this.getDispData()
  },
}
</script>
<style scoped></style>
