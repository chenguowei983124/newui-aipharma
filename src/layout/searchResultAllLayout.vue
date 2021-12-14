<template>
    <!-- 検索枠 -->
    <div class="group">
        <!-- pcの場合 -->
        <div class="fixed flex-auto w-full pt-12.5 md:pt-15 md:top-0 z-30">
            <search-bar
                :form="$constant.formList.ALL"
                @isDetailClick="getDetailDisp"
                @detailDisp="getScroll"
                @checkId="checkIdMsg"
            ></search-bar>
        </div>

        <!-- spの場合、ヘッダー、検索枠の位置を替える -->
        <!-- <div class="h-27.5 md:h-40"></div> -->
        <div :class="fixedHoverHight"></div>
    </div>

    <div :class="fixedHight"></div>
    <div class="flex">
        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>

        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-result-main class="flex-grow"></search-result-main>
            </div>
        </div>

        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import searchBar from '../components/common/search/searchBar.vue'
import searchResultMain from '../components/searchResultAll/searchResultMain.vue'

export default {
    components: {
        searchBar,
        searchResultMain,
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
                            css = 'h-25 md:h-30'
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
    props: {},
    data() {
        return {
            name: 'fixedHight',
            name: 'fixedHoverHight',
            // 詳細条件ボタン押下区分
            isDetailButtonClick: true,
            isScroll: true,
            // すべて 選択
            ischeckIdMsg: '0',
        }
    },
    methods: {
        checkIdMsg: function (data) {
            this.ischeckIdMsg = data
        },
        getScroll: function (value) {
            this.isScroll = value
        },
        getDetailDisp: function (data) {
            this.isDetailButtonClick = data
        },
    },
    created() {},
}
</script>
