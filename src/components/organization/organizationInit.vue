<template>
    <!-- Organization init -->
    <div class="flex flex-col">
        <div class="h-full space-y-2.5 md:space-y-3.75">
            <resut-tag
                headerStyle="titleBgColorGray"
                title="新着Q＆A"
                titleStyle="newQaInfoTitle"
                titleURL=""
            >
                <result-detail-row
                    class="searchResult_detail_gray"
                    :sites="$store.getters.organizationNewQAInfo.details"
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['status', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>
            <resut-tag
                headerStyle="titleBgColorGray"
                title="よく見られているQ＆A &nbsp; &nbsp;- 最近 1 ヶ月-"
                titleStyle="newQaInfoTitle"
                titleURL=""
            >
                <result-detail-row
                    class="searchResult_detail_gray"
                    :sites="
                        $store.getters.organizationLookcarefullyQAInfo.details
                    "
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['status', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>
        </div>
        <div
            class="
                rounded-lg
                border-2 border-blueline
                bg-cardViewCount
                my-2.5
                md:my-3.75
                p-2
                text-sm
                font-NotoSansJp
            "
        >
            <div>{{ 'トレンドタグ' }}</div>
            <div class="flex flex-wrap mt-2">
                <div
                    class="
                        rounded-full
                        border-2 border-gray-300
                        bg-gray-100
                        h-6
                        notoSansJpAndTwelveRegular
                        pl-1
                        pr-1
                        text-center
                        mr-1
                        cursor-pointer
                    "
                    @click="sendMsgToParent(item.label)"
                    v-for="item in $store.getters.getOrganizationSeartorenndoTab
                        .torenndoTab"
                    :key="item"
                >
                    #{{ item.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ResutTag from '../common/searchResult/resultTag.vue'
import ResultDetailRow from '../common/searchResult/resultAllDetailRow.vue'
export default {
    components: { ResutTag, ResultDetailRow },
    methods: {
        // クリック タグ
        sendMsgToParent: function (data) {
            this.$emit('listenToChildEvent', data)
        },
    },
    mounted() {
        ///api/qa/get_trendy_tags
        // this.$store.dispatch('getOrganizationSeartorenndoTab')
    },
}
</script>

<style></style>
