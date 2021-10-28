<template>
    <!-- 検索枠 -->
    <div class="flex">
        <!-- pcの場合 -->
        <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
            <!-- @detailDisp="getDetailDisp" -->
            <search-bar
                :form="$constant.formList.PVD"
                @isDetailClick="getDetailClick"
            ></search-bar>
        </div>

        <!-- spの場合、ヘッダー、検索枠の位置を替える -->
        <!-- <div class="h-50 md:h-52.5"></div> -->
        <div class="h-70"></div>
    </div>

    <!-- 内容 -->
    <div class="flex pt-8">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-1 ml-1 w-full md:w-245">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-preavoids-main></search-preavoids-main>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
    <!-- トレンドタグ -->
    <div class="flex pt-8">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-1 ml-1 w-full md:w-191.25">
            <div class="border-t-2 border-gray-300"></div>
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
                            h-6
                            notoSansJpAndTwelveRegular
                            pl-1
                            pr-1
                            text-center
                            mr-1
                            cursor-pointer
                            underline
                        "
                        @click="sendMsgToParent(item)"
                        v-for="item in $store.getters
                            .getOrganizationSeartorenndoTab.torenndoTab"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import searchBar from '../components/common/search/searchBar.vue'
import searchPreavoidsMain from '../components/searchPreavoids/searchPreavoidsMain.vue'

export default {
    components: {
        searchBar,
        searchPreavoidsMain,
    },
    props: {},
    data() {
        return {
            isMenuOpen: true,
            isDetailButtonClick: false,
        }
    },
    methods: {
        // 詳細条件ボタン押下区分を取得
        getDetailClick: function (data) {
            this.isDetailButtonClick = data
        },
    },
    created() {},
}
</script>
