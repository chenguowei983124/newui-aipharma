<template>
    <!-- Organization init -->
    <div class="flex flex-col">
        <div class="h-full space-y-2.5 md:space-y-3.75">
            <resut-tag
                headerStyle="titleBgColorGray"
                title="新着Q＆A"
                titleStyle="newQaInfoTitle"
                titleURL="/"
            >
                <result-detail-row
                    class="searchResult_detail_gray"
                    :sites="
                        $store.getters.getSearchAllOrganizationDidDocument
                            .details
                    "
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['states', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>
            <resut-tag
                headerStyle="titleBgColorGray"
                title="よく見られているQ＆A &nbsp; &nbsp; &nbsp;  - 最近 1 ヶ月-"
                titleStyle="newQaInfoTitle"
                titleURL="/"
            >
                <result-detail-row
                    class="searchResult_detail_gray"
                    :sites="
                        $store.getters.getSearchAllOrganizationDidDocument
                            .details
                    "
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['states', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>
        </div>
        <div
            class="
                rounded
                border-2 border-blueline
                bg-cardViewCount
                mt-2.5
                md:mt-3.75
                p-2
            "
        >
            <div>{{ 'トレンドタグ' }}</div>
            <div class="flex flex-wrap">
                <div
                    class="
                        rounded-full
                        border-2 border-gray-400
                        bg-gray-100
                        h-6
                        notoSansJpAndTwelveRegular
                        pl-1
                        pr-1
                        text-center
                    "
                    v-for="item in torenndoTab"
                    :key="item"
                >
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ResutTag from '../searchResult/resultTag.vue'
import ResultDetailRow from '../searchResult/resultAllDetailRow.vue'
export default {
  components: { ResutTag, ResultDetailRow },
  data() {
    return {
      torenndoTab: ["#ロキソニン", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ"],
    }
  }
}
</script>

<style>
</style>
