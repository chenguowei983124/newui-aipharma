<template>
    <!-- 検索枠 -->
    <div class="group">
        <!-- pcの場合 -->
        <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
            <!-- @detailDisp="getDetailDisp" -->
            <search-bar
                :form="$constant.formList.PVD"
                @isDetailClick="getDetailClick"
                @detailDisp="getScroll"
                @checkId="checkIdMsg"
            ></search-bar>
        </div>
        <div :class="fixedHoverHight"></div>
        <!-- spの場合、ヘッダー、検索枠の位置を替える -->
    </div>
    <div :class="fixedHight"></div>
    <div class="flex justify-center pt-2.5 pb-2.5 border-b-2 border-recruitment">
            <search-preavoid-title></search-preavoid-title>
        </div>
    <!-- 内容 -->
        <div
        class="flex mt-12 md:mt-10 pr-2 md:pr-0 justify-center"
        :class="isDetailButtonClick ? '' : 'mt-20 md:mt-20'"
    >
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
            <span>症例の全体件数</span>
            <span class="mx-1">:</span>
            <span class="mr-4">123456</span>
            <span class="border-l border-pageblue"> </span>
            <span class="ml-4">公開件数</span>
            <span class="mx-1">:</span>
            <span class="">12345</span>
        </div>
    </div>
    <div class="flex">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-1 ml-1 w-full md:w-245">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-preavoids-main></search-preavoids-main>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
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
                <!-- @click="sendMsgToParent(item)" -->
                <div>{{ 'トレンドキーワード' }}</div>
                <div class="flex flex-wrap mt-2">
                    <div
                        class="
                            underline
                            mr-2
                            notoSansJpAndTwelveRegular
                            text-center
                            hidden
                            md:block
                            mid:block
                            cursor-pointer
                        "
                        v-for="item in $store.getters.getTrendKeywords"
                        :key="item"
                    >
                        {{ item.label }}
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
import searchPreavoidTitle from '../components/common/search/searchPreavoidTitle.vue'

export default {
    components: {
        searchBar,
        searchPreavoidsMain,
        searchPreavoidTitle
    },
    props: {},
    data() {
        return {
            name: 'fixedHight',
            name: 'fixedHoverHight',
            isDetailButtonClick: true,
            isScroll: true,
            // すべて 選択
            ischeckIdMsg: '3',
        }
    },
    computed: {
        fixedHight() {
            let css = ''
            // h-30 => h-40 「h-10　追加する」
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
                            css = 'h-74.5 md:h-63'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'h-112.5 md:h-93.75'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'h-82.5 md:h-72'
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
                    css = 'hidden group-hover:block h-43.75 md:h-30'
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
    methods: {
        // 詳細条件ボタン押下区分を取得
        getDetailClick: function (data) {
            this.isDetailButtonClick = data
        },
        // DropDown 選択したアイテムＩＤ取得
        checkIdMsg: function (data) {
            this.ischeckIdMsg = data
        },
        // スクロール
        getScroll: function (value) {
            this.isScroll = value
        },
    },
    created() {
        this.$store.dispatch(
            'setSearchWord',
            sessionStorage.getItem('searchWord')
        )
    },
    mounted() {
        // this.$store.dispatch('setTrendKeywords')
    },
}
</script>
