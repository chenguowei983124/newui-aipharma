<template>
    <!-- 検索枠 -->
    <div id="searchNotificationLayout">
        <div class="group" v-if="$store.getters.getSearchFlg">
            <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
                <search-bar
                    ref="searchBar"
                    :form="$constant.formList.EDI"
                    @isDetailClick="getDetailDisp"
                    @detailDisp="getScroll"
                    @searchID="getSearchID"
                ></search-bar>
            </div>
            <div
                class="
                    absolute
                    hidden
                    pm:group-hover:block
                    lm:group-hover:block
                    w-full
                    h-7/10
                    mt-13
                    z-10
                "
                @click="chickHover"
            ></div>
            <div :class="fixedHoverHight"></div>
        </div>

        <div class="group" v-if="!$store.getters.getSearchFlg">
            <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
                <search-bar
                    ref="searchBar"
                    :form="$constant.formList.EDI"
                    @isDetailClick="getDetailDisp"
                    @detailDisp="getScroll"
                    @searchID="getSearchID"
                ></search-bar>
            </div>
            <div
                class="
                    absolute
                    hidden
                    pm:group-hover:block
                    lm:group-hover:block
                    w-full
                    h-7/10
                    mt-13
                    z-10
                "
                @click="chickHover"
            ></div>
            <div :class="fixedHoverHight"></div>
        </div>

        <div :class="fixedHight"></div>
        <div
            class="absolute w-full h-7/10 mt-13 top-0 z-10"
            :class="hoverHidden ? 'block' : 'hidden'"
        ></div>
        <div
            class="
                flex
                justify-center
                mt-2
                mb-4
                pb-1.75
                border-b-2 border-recruitment
            "
        >
            <search-edi-title-bar></search-edi-title-bar>
        </div>
        <div class="flex h-screen-70">
            <div class="flex-grow min-w-min block"></div>

            <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-245">
                <div :class="[dispFlg ? 'flex' : '']">
                    <div
                        class="
                            grid grid-cols-1
                            pm:flex-auto
                            gap-1
                            pm:space-y-3.75
                        "
                    >
                        <notification-list
                            :class="[
                                dispFlg
                                    ? 'hidden pm:w-full pm:flex-grow pm:block lg:w-full lg:flex-grow lg:block'
                                    : 'flex-grow w-full',
                            ]"
                            ref="notificationList"
                            :detailHeightCss="detailHeightCss"
                            @clickItemEvent="openDetail"
                            @closeNotificationTalking="closeDispFlg"
                        ></notification-list>
                    </div>
                    <div
                        class="
                            pm:ml-2 pm:mt-0 pm:border-l-2
                            md:border-l-2 md:border-grayline
                            pm:border-grayline
                            hidden
                            pm:block
                        "
                        v-if="dispFlg"
                    ></div>
                    <div
                        class="
                            grid grid-cols-1
                            gap-1
                            w-full
                            pm:space-y-3.75 pm:ml-2 pm:w-132.5 pm:flex-none
                        "
                        v-if="dispFlg"
                    >
                        <notification-talking
                            class="
                                flex-grow
                                w-full
                                pm:ml-2 pm:w-132.5 pm:flex-none
                            "
                            ref="notificationTalking"
                            @close="getClose"
                            @resetBbsRouter="resetBbsRouter"
                            :id="id"
                            :detailHeightCss="detailHeightCss"
                            :exeSearchRefishOpts="exeSearchMultiSelectRefishOpt"
                            v-if="dispFlg"
                        >
                        </notification-talking>
                    </div>
                </div>
            </div>
            <div class="flex-grow block"></div>
        </div>
    </div>
</template>

<script>
import notificationList from '../components/searchNotification/searchNotificationMain.vue'
import notificationTalking from '../components/searchNotification/searchNotificationTalking.vue'
import searchBar from '../components/common/search/searchBar.vue'
import searchEdiTitleBar from '../components/common/search/searchEdiTitleBar.vue'
export default {
    components: {
        notificationList,
        notificationTalking,
        searchBar,
        searchEdiTitleBar,
    },
    computed: {
        fixedHight() {
            let css = ''
            if (this.ischeckIdMsg == '6' || this.ischeckIdMsg == '7') {
                if (this.isDetailButtonClick) {
                    css = 'h-34 md:h-32'
                } else {
                    css = 'h-30 md:h-32'
                }
            } else {
                if (this.isScroll) {
                    if (this.isDetailButtonClick) {
                        if (
                            this.ischeckIdMsg == '0' ||
                            this.ischeckIdMsg == '4' ||
                            this.ischeckIdMsg == '5'
                        ) {
                            css = 'h-34 md:h-32.5'
                        } else if (this.ischeckIdMsg == '1') {
                            css = 'h-74.5 md:h-65'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'h-112.5 md:h-93.75'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'h-80 md:h-72'
                        } else {
                            css = 'h-74.5 md:h-70'
                        }
                    } else {
                        if (
                            this.ischeckIdMsg == '0' ||
                            this.ischeckIdMsg == '4' ||
                            this.ischeckIdMsg == '5'
                        ) {
                            css = 'h-48 md:h-32.5'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'h-55 md:h-46'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'h-86.25 md:h-69'
                        } else if (this.ischeckIdMsg == '1') {
                            css = 'h-80 md:h-70'
                        } else {
                            css = 'h-48 md:h-64'
                        }
                    }
                } else {
                    if (this.isDetailButtonClick) {
                        css = 'h-30 md:h-48'
                    } else {
                        css = 'h-30 md:h-48'
                    }
                }
            }
            console.log('css', css)
            return css
        },
        fixedHoverHight() {
            let css = ''
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
                            css = 'hidden group-hover:block h-48 md:h-48'
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
            isScroll: true,
            dispFlg: false,
            id: '',
            ischeckIdMsg: '7',
            hoverHidden: false,
        }
    },
    mounted() {},
    methods: {
        chickHover() {
            console.log('hover', this.hoverHidden)
            this.hoverHidden = !this.hoverHidden
            if (this.hoverHidden) {
                setTimeout(this.chickHover, 10)
            }
        },
        // 詳細条件ボタン押下区分を取得
        getDetailDisp: function (data) {
            this.isDetailButtonClick = data
        },
        getSearchID(value) {
            this.ischeckIdMsg = value
        },
        getScroll: function (value) {
            this.isScroll = value
        },
        openDetail(val) {
            this.id = val
            if (this.dispFlg === true) {
                this.$refs.notificationTalking.doSearch()
            }

            this.dispFlg = true
        },
        exeSearchMultiSelectRefishOpt() {
            this.$refs.searchBar.$refs.inptBbsDetail.$refs.mult.refreshOptions()
        },
        getClose(value, deleteFlg) {
            this.dispFlg = value
            this.$refs.notificationList.talkingClosed(deleteFlg)
        },
        closeDispFlg() {
            this.dispFlg = false
        },
        resetBbsRouter() {
            this.$refs.notificationList.doSearch()
        },
    },
    created() {},
}
</script>
