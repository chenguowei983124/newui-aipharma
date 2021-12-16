<template>
    <!-- 検索枠 -->
    <div id="searchNotificationLayout">
        <div class="group">
            <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
                <search-bar
                    ref="searchBar"
                    :form="$constant.formList.EDI"
                    @isDetailClick="getDetailDisp"
                    @detailDisp="getScroll"
                    @searchID="getSearchID"
                ></search-bar>
            </div>

            <div :class="fixedHoverHight"></div>
        </div>

        <div :class="fixedHight"></div>
        <div class="flex h-screen-72">
            <div class="flex-grow min-w-min block"></div>

            <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-245">
                <div class="flex">
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
                                    ? 'hidden pm:w-full pm:flex-grow pm:block'
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
                        "
                        v-if="dispFlg"
                    ></div>
                    <div
                        class="
                            grid grid-cols-1
                            gap-1
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
export default {
    components: { notificationList, notificationTalking, searchBar },
    computed: {
        fixedHight() {
            let css = ''
            if (this.ischeckIdMsg == '6' || this.ischeckIdMsg == '7') {
                css = 'h-48 md:h-48'
            } else {
                if (this.isScroll) {
                    if (this.isDetailButtonClick) {
                        if (
                            this.ischeckIdMsg == '0' ||
                            this.ischeckIdMsg == '4' ||
                            this.ischeckIdMsg == '5'
                        ) {
                            css = 'h-48 md:h-48'
                        } else if (this.ischeckIdMsg == '1') {
                            css = 'h-74.5 md:h-80'
                        } else if (this.ischeckIdMsg == '2') {
                            css = 'h-112.5 md:h-112.5'
                        } else if (this.ischeckIdMsg == '3') {
                            css = 'h-48 md:h-88.75'
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
        }
    },
    mounted() {},
    methods: {
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
