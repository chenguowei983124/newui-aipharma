<template>
    <!-- 検索枠 -->
    <div class="flex">
        <!-- pcの場合 -->
        <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
            <search-bar
                ref="searchbar"
                :form="$constant.formList.PVD"
                @detailDisp="getDetailDisp"
                @isDetailClick="getDetailClick"
                @searchResult="getSearchResult"
                :searchValueInput="$store.getters.getSearchWord"
            ></search-bar>
        </div>

        <div class="h-50 md:h-52.5"></div>
    </div>
    <div>
        <div class="flex max-h-screen">
            <a
                class=""
                :class="[dispFlg ? 'w-2/5' : 'flex-grow']"
                @click="dispFlg = !dispFlg"
            >
                <bbs-list></bbs-list>
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
import bbsList from '../components/searchBBS/searchPreavoidsMain.vue'
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
        getClose(value) {
            console.log(value)
            this.dispFlg = value
        },
    },
    created() {},
}
</script>
