<template>
    <!-- 検索枠 -->
    <div id="searchBulletinBoardLayout ">
        <div class="group">
            <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
                <search-bar
                    ref="searchBar"
                    class=""
                    :form="$constant.formList.BBS"
                    @isDetailClick="getDetailDisp"
                    @detailDisp="getScroll"
                ></search-bar>
            </div>

            <div :class="fixedHoverHight" v-if="!isScroll"></div>
        </div>

        <div :class="fixedHight"></div>
        <div class="flex h-screen-72">
            <div class="flex-grow min-w-min block"></div>

            <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-245">
                <div class="flex">
                    <div
                        class="
                            grid grid-cols-1
                            md:flex-auto
                            gap-1
                            md:space-y-3.75
                        "
                    >
                        <bbs-list
                            :class="[
                                dispFlg
                                    ? 'hidden md:w-full md:flex-grow md:block'
                                    : 'flex-grow w-full',
                            ]"
                            ref="bbsList"
                            :detailHeightCss="detailHeightCss"
                            @clickItemEvent="openDetail"
                            @closeBbsTalking="closeDispFlg"
                        ></bbs-list>
                    </div>
                    <div
                        class="
                            md:ml-2 md:mt-22 md:border-l-2 md:border-blueline
                        "
                        v-if="dispFlg"
                    ></div>
                    <div
                        class="
                            grid grid-cols-1
                            gap-1
                            md:space-y-3.75 md:ml-2 md:w-132.5 md:flex-none
                        "
                        v-if="dispFlg"
                    >
                        <bbs-talking
                            class="
                                flex-grow
                                w-full
                                md:ml-2 md:w-132.5 md:flex-none
                            "
                            ref="talking"
                            @close="getClose"
                            @resetBbsRouter="resetBbsRouter"
                            :id="id"
                            :detailHeightCss="detailHeightCss"
                            :exeSearchRefishOpts="exeSearchMultiSelectRefishOpt"
                            v-if="dispFlg"
                        >
                        </bbs-talking>
                    </div>
                </div>
            </div>
            <div class="flex-grow block"></div>
        </div>
    </div>
</template>

<script>
import bbsList from '../components/searchBBS/searchBulletinBoardMain.vue'
import bbsTalking from '../components/searchBBS/searchBBSTalking.vue'
import searchBar from '../components/common/search/searchBar.vue'
export default {
    components: { bbsList, bbsTalking, searchBar },
    computed: {
        fixedHight() {
            let css = ''
            if (this.isScroll) {
                if (this.isDetailButtonClick) {
                    css = 'h-36 md:h-36'
                } else {
                    css = 'h-36 md:h-48'
                }
            } else {
                if (this.isDetailButtonClick) {
                    css = 'h-48 md:h-48'
                } else {
                    css = 'h-48 md:h-48'
                }
            }
            console.log('css', css)
            return css
        },
        fixedHoverHight() {
            let css = ''
            if (this.isDetailButtonClick) {
                css = 'hidden group-hover:block h-66 md:h-52'
            } else {
                css = 'hidden group-hover:block h-46 md:h-32'
            }

            console.log('css', css)
            return css
        },
        detailHeightCss() {
            let css = ''
            if (this.isDetailButtonClick) {
                css = '-mb-96 md:-mb-96'
            } else {
                css = '-mb-121 md:-mb-96'
            }

            console.log('css', css)
            return css
        },
    },
    props: {},
    data() {
        return {
            isDetailButtonClick: true,
            isScroll: false,
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
            // this.isScroll = value
        },
        openDetail(val) {
            console.log('openDetail', val)
            this.id = val
            if (this.dispFlg === true) {
                this.$refs.talking.doSearch()
            }

            this.dispFlg = true
        },
        exeSearchMultiSelectRefishOpt() {
            this.$refs.searchBar.$refs.inptBbsDetail.$refs.mult.refreshOptions()
        },
        getClose(value, deleteFlg) {
            this.dispFlg = value
            this.$refs.bbsList.talkingClosed(deleteFlg)
        },
        closeDispFlg(){
            this.dispFlg = false
        },
        resetBbsRouter(){
            this.$refs.bbsList.resetRouter()
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
