<template>
    <!-- 検索枠 -->
    <div class="group">
        <!-- pcの場合 -->
        <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
            <search-bar
                ref="searchbar"
                :form="$constant.formList.DI"
                @isDetailClick="getDetailDisp"
                @detailDisp="getScroll"
                @checkId="checkIdMsg"
            ></search-bar>
        </div>
        <div :class="fixedHoverHight"></div>
    </div>
    <div :class="fixedHight"></div>
    <!-- 内容 -->
    <div class="flex border-b-2 border-recruitment md:h-20">
        <!-- 左 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div class="flex flex-col w-full md:w-191.25 justify-center">
            <div class="flex flex-row space-x-2 items-center my-2 md:my-0">
                <div
                    class="
                        text-googleTitle text-xl
                        md:text-2xl
                        font-NotoSansJp font-bold
                        flex-none
                        pl-2
                        md:pl-0
                    "
                >
                    DI ナレッジシェア
                </div>
                <div
                    class="
                        hidden
                        md:block
                        mid:block
                        text-sm
                        flex-none
                        font-NotoSansJp
                        text-tags
                    "
                >
                    トレンドタグ
                </div>
                <div class="flex flex-wrap mr-1 text-tags">
                    <div
                        class="tagsCss hidden md:block mid:block mt-1.25"
                        @click="searchTag(value.name)"
                        v-for="(value, key, index) in $store.getters
                            .getOrganizationSeartorenndoTab"
                        :key="index"
                    >
                        # {{ value.name }}
                    </div>
                </div>
            </div>
        </div>
        <!-- 右 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
    </div>
    <div class="flex mt-2 pr-2 md:pr-0 justify-center">
        <div
            class="
                w-full
                md:w-192.5
                flex
                justify-end
                text-view text-xs
                font-NotoSansJp
            "
        >
            <div>DIナレッジシェアの全体件数</div>
            <div class="mx-1">:</div>
            <div class="mr-1">123456</div>
        </div>
    </div>
    <div class="flex pt-8">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-di-knowledge-ai
                    ref="mainAi"
                    v-on:listenToChildEventAi="showMsgToParent"
                ></search-di-knowledge-ai>
                <search-di-knowledge-main
                    ref="mainDi"
                    @clickAi="clickAi"
                    v-on:listenToChildEventDi="showMsgToParent"
                    :exeSearchRefishOpts="refishTagList"
                ></search-di-knowledge-main>
                <div>
                    <di-knowledge-init
                        v-on:listenToChildEventDiInit="showMsgToParent"
                    ></di-knowledge-init>
                </div>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
    <!-- good-message-box -->
    <div
        :class="[
            $store.getters.getGoodMessageBox
                ? 'block mt-2 w-full fixed z-20 bottom-20'
                : 'hidden',
        ]"
    >
        <good-message-box></good-message-box>
    </div>
</template>

<script>
import GoodMessageBox from '../components/common/messageBox/goodMessageBox.vue'
import searchBar from '../components/common/search/searchBar.vue'
import SearchDiKnowledgeMain from '../components/diKnowledge/searchDiKnowledgeMain.vue'
import DiKnowledgeInit from '../components/diKnowledge/diKnowledgeInit.vue'
import SearchDiKnowledgeAi from '../components/diKnowledge/searchDiKnowledgeAi.vue'

export default {
    components: {
        GoodMessageBox,
        searchBar,
        SearchDiKnowledgeMain,
        DiKnowledgeInit,
        SearchDiKnowledgeAi,
    },

    props: {},
    data() {
        return {
            name: 'fixedHight',
            name: 'fixedHoverHight',
            isScroll: true,
            // すべて 選択
            ischeckIdMsg: '1',
            isDetailButtonClick: true,
        }
    },
    methods: {
        clickAi: function (index, count) {
            this.$refs.mainAi.openDetailDisp(index, count)
        },
        // スクロール
        getScroll: function (value) {
            this.isScroll = value
        },
        refishTagList() {
            if (Object.keys(this.$store.getters.getorgTagsList).length > 0) {
                this.$refs.searchbar.$refs.diDetail.$refs.multDi.refreshOptions()
            }
        },
        // 詳細条件ボタン押下区分を取得
        getDetailDisp: function (data) {
            this.isDetailButtonClick = data
        },
        // DropDown 選択したアイテムＩＤ取得
        checkIdMsg: function (data) {
            this.ischeckIdMsg = data
        },
        // ========================================
        // 詳細条件表示・非表示取得
        // ========================================

        searchTag: function (value) {
            let tagsLable = this.$store.getters.getSearchTagsLable
            tagsLable.push(value)
            this.$store.dispatch('setSearchTagsLable', tagsLable)
            this.$refs.searchbar.$refs.diDetail.$refs.multDi.refreshOptions()
        },
        // init中 クリック タグ
        showMsgToParent: function (data) {
            this.searchTag(data)
        },
    },
    computed: {
        fixedHight() {
            let css = ''
            if (this.ischeckIdMsg == '6' || this.ischeckIdMsg == '7') {
                css = 'h-30 md:h-30'
            } else {
                if (this.isScroll) {
                    if (this.isDetailButtonClick) {
                        if (
                            this.ischeckIdMsg == '0' ||
                            this.ischeckIdMsg == '4' ||
                            this.ischeckIdMsg == '5'
                        ) {
                            css = 'h-30 md:h-30'
                        } else if (this.ischeckIdMsg == '1') {
                            css = 'h-74.5 md:h-62.5'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'h-112.5 md:h-93.75'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'h-80 md:h-70'
                        } else {
                            css = 'h-48 md:h-93.75'
                        }
                    } else {
                        if (
                            this.ischeckIdMsg == '0' ||
                            this.ischeckIdMsg == '4' ||
                            this.ischeckIdMsg == '5'
                        ) {
                            css = 'h-48 md:h-30'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'h-48 md:h-42.5'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'h-86.25 md:h-64'
                        } else {
                            css = 'h-48 md:h-64'
                        }
                    }
                } else {
                    if (this.isDetailButtonClick) {
                        css = 'h-30 md:h-30'
                    } else {
                        css = 'h-30 md:h-30'
                    }
                }
            }
            console.log('css', css)
            return css
        },
        fixedHoverHight() {
            let css = ''
            // v-if="!isScroll"
            if (this.ischeckIdMsg == '6' || this.ischeckIdMsg == '7') {
                if (this.isDetailButtonClick) {
                    css = 'hidden group-hover:block h-60 md:h-50'
                } else {
                    css = 'hidden group-hover:block h-48 md:h-30'
                }
            } else {
                if (!this.isScroll) {
                    if (this.isDetailButtonClick) {
                        if (
                            this.ischeckIdMsg == '0' ||
                            this.ischeckIdMsg == '4' ||
                            this.ischeckIdMsg == '5'
                        ) {
                            css = 'hidden group-hover:block'
                        } else if (this.ischeckIdMsg == '1') {
                            css = 'hidden group-hover:block h-48 md:h-32.5'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'hidden group-hover:block h-48 md:h-63.75'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'hidden group-hover:block h-48 md:h-40'
                        } else {
                            css = 'hidden group-hover:block h-48 md:h-63.75'
                        }
                    } else {
                        if (
                            this.ischeckIdMsg == '0' ||
                            this.ischeckIdMsg == '4' ||
                            this.ischeckIdMsg == '5'
                        ) {
                            css = 'hidden group-hover:block'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'hidden group-hover:block h-48 md:h-15'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'hidden group-hover:block h-48 md:h-34'
                        } else {
                            css = 'hidden group-hover:block h-48 md:h-34'
                        }
                    }
                }
            }
            console.log('css', css)
            return css
        },
    },
    created() {
        let param = sessionStorage.getItem('searchParam')
        this.$store.dispatch(
            'setSearchWord',
            sessionStorage.getItem('searchWord')
        )
    },
}
</script>
