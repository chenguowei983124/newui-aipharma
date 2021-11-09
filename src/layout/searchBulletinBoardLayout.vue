<template>
    <!-- 検索枠 -->
    <div id="searchBulletinBoardLayout ">
        <div class="group">
            <!-- pcの場合 -->
            <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
                <search-bar
                    class=""
                    :form="$constant.formList.BBS"
                    @isDetailClick="getDetailDisp"
                    @detailDisp="getScroll"
                ></search-bar>
            </div>

            <!-- spの場合、ヘッダー、検索枠の位置を替える -->
            <div
                :class="[
                    isDetailButtonClick
                        ? 'hidden group-hover:block h-50 '
                        : 'hidden group-hover:block h-30',
                ]"
                v-if="!isScroll"
            ></div>
        </div>
        <div
            class=""
            :class="[
                isScroll
                    ? isDetailButtonClick
                        ? 'h-96'
                        : 'h-72'
                    : isDetailButtonClick
                    ? 'h-70'
                    : 'h-72',
            ]"
        ></div>
        <div id="BBS-Contents" class="flex h-312.5">
            <div class="flex-grow max-h-full min-w-min block"></div>

            <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-245">
                <div class="flex">
                    <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                        <bbs-list
                            :class="[
                                dispFlg
                                    ? 'hidden md:w-full md:flex-grow md:block'
                                    : 'flex-grow w-full',
                            ]"
                            @clickItemEvent="openDetail"
                        ></bbs-list>
                    </div>
                    <div
                        class="
                            md:ml-2 md:mt-2 md:border-l-2
                            mb-6
                            md:border-blueline
                        "
                        v-if="dispFlg"
                    ></div>
                    <div
                        class="
                            grid grid-cols-1
                            gap-1
                            md:space-y-3.75
                            flex-grow
                            w-full
                            md:ml-2 md:w-132.5 md:flex-none
                        "
                        v-if="dispFlg"
                    >
                        <bbs-talking
                            class="
                                flex-grow
                                w-full
                                md:ml-2 md:w-132.5 md:flex-none
                            "
                            @close="getClose"
                            :id="id"
                            v-if="dispFlg"
                        ></bbs-talking>
                    </div>
                </div>
            </div>
            <div class="flex-grow max-h-full min-w-min block"></div>
        </div>
    </div>
</template>

<script>
import bbsList from '../components/searchBBS/searchBulletinBoardMain.vue'
import bbsTalking from '../components/searchBBS/searchBBSTalking.vue'
import searchBar from '../components/common/search/searchBar.vue'
export default {
    components: { bbsList, bbsTalking, searchBar },

    props: {},
    data() {
        return {
            isDetailButtonClick: true,
            isScroll: true,
            dispFlg: false,
            id: '',
        }
    },
    mounted() {},
    methods: {
        // 詳細条件ボタン押下区分を取得
        getDetailDisp: function (data) {
            console.log('asdf')
            this.isDetailButtonClick = data
        },
        getScroll: function (value) {
            this.isScroll = value
        },
        openDetail(val) {
            this.id = val
            this.dispFlg = true
        },
        getClose(value) {
            this.dispFlg = value
        },
        getUnpublish() {
            const params = {
                publish: false,
                timestamp: new Date().getTime(),
            }
            this.$router.push({
                path: '/searchBulletinBoard',
                query: params,
            })
        },
    },
    created() {},
}
</script>
