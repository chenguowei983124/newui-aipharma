<template>
    <!-- 検索枠 -->
    <div id="searchBulletinBoardLayout" >
        <!-- pcの場合 -->
        <div id="search-bar" >
            <search-bar
                ref="searchbar"
                :form="$constant.formList.BBS"
                :searchValueInput="$store.getters.getSearchWord"
            ></search-bar>
                <!-- @detailDisp="getDetailDisp"
                @isDetailClick="getDetailClick"
                @searchResult="getSearchResult" -->
        </div>
        <div class="flex justify-between border-b-2 border-blue-200">
            <div class="mx-auto my-5 text-googleTitle notoSansJpAndTwentyBold">
                掲示板
            </div>
            <div class="flex mx-auto my-5">
                <input
                    type="button"
                    class="
                        w-15
                        bg-red-600
                        hover:opacity-50
                        active:bg-bg-gray-200
                        active:opacity-100
                        rounded-md
                        notoSansJpAndTwelveBold
                        text-white
                        border-b-2 border-gray-600
                    "
                    value="投　稿"
                />
                    <!-- @click="onClearItem(base.file, index)" -->
                <input
                    type="button"
                    class="
                        ml-2 w-18
                        bg-blue-600
                        hover:opacity-50
                        active:bg-bg-gray-200
                        active:opacity-100
                        rounded-md
                        notoSansJpAndTwelveBold
                        text-white
                        border-b-2 border-gray-600
                    "
                    value="下書き一覧"
                    @click="getUnpublish"
                />
            </div>
        </div>
        <div id="BBS-Contents" class="flex">
            <a
                class=""
                :class="[dispFlg ? 'w-2/5' : 'flex-grow']"
            >
                <bbs-list
                    @clickItemEvent="openDetail"
                ></bbs-list>
            </a>
            <bbs-talking
                class="w-full flex-grow-0"
                @close="getClose"
                v-if="dispFlg"
            ></bbs-talking>
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
            dispFlg: false,
        }
    },
    mounted() {},
    methods: {
        openDetail(val){
            console.log('openDetail', val)
            this.dispFlg = !this.dispFlg
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
