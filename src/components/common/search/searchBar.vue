<template>
    <div class="relative h-full z-99">
        <div :class="searchBarFixedClass">
            <div :class="searchBarStyleCless">
                <!-- 左青背景 -->
                <div :class="searchBarProStyleClass"></div>
                <!-- 中青背景 -->
                <div :class="searchBarMidStyleClass">
                    <!-- class="pb-2.5 md:pb-0" -->
                    <div :class="searchBarClass">
                        <!-- 検索条件リスト -->
                        <search-dropdown
                            @getCheckedId="getCheckId"
                            :checkedID="Number(checkId)"
                            class="h-10 flex-none hidden md:block"
                        ></search-dropdown>
                        <!-- //@change="getNewInput($event)" -->
                        <!-- 検索条件入力 -->
                        <input
                            v-model="searchValueInput"
                            :class="sreachBarSPInputClass"
                            type="text"
                            placeholder="キーワードを入力"
                        />
                        <!-- pc -->
                        <input
                            v-model="searchValueInput"
                            :class="sreachBarPCInputClass"
                            type="text"
                            :placeholder="pcPlaceholder"
                            @input="input"
                        />
                        <!-- 検索ボタン -->
                        <button
                            @click="searchClick"
                            :class="sreachBarButtonClass"
                        >
                            <!-- 検索ボタンのアイコン -->
                            <div class="flex justify-center h-6">
                                <search-svg class="h-6 w-6"></search-svg>
                            </div>
                        </button>
                    </div>
                    <!-- DIナレッジシェア -->
                    <div
                        :class="
                            detailDisp ? 'block' : 'hidden group-hover:block'
                        "
                        v-if="checkId == 1 && form != $constant.formList.TOP"
                    >
                        <search-di-knowledge
                            ref="diDetail"
                            @tagValue="getOwnTagValue"
                            :searchButtonClick="searchClick"
                        ></search-di-knowledge>
                    </div>
                    <!-- 組織内DI記録詳細条件 -->
                    <div
                        :class="
                            detailDisp ? 'block' : 'hidden group-hover:block'
                        "
                        v-if="checkId == 2 && form != $constant.formList.TOP"
                    >
                        <!-- v-bind:message="parentMsg" -->
                        <search-detail
                            ref="ownDetail"
                            @isOrgDetailClick="getIsOrgDetailClick"
                            @tagValue="getOwnTagValue"
                            :searchButtonClick="searchClick"
                            v-on:inputClearValue="showMsg"
                        ></search-detail>
                    </div>
                    <!-- 症例詳細条件 -->
                    <div
                        :class="
                            detailDisp ? 'block' : 'hidden group-hover:block'
                        "
                        v-if="checkId == 3 && form != $constant.formList.TOP"
                    >
                        <search-preavoids
                            :searchButtonClick="searchClick"
                        ></search-preavoids>
                    </div>
                    <!-- 掲示板 -->
                    <div
                        class="hidden group-hover:block"
                        v-if="checkId == 6 && form != $constant.formList.TOP"
                    >
                        <search-bbs-detail
                            ref="inptBbsDetail"
                            @isDetailClick="getIsDetailClick"
                            @clearSearchWordEvent="clearSearchWord"
                            :searchButtonClick="searchClick"
                        ></search-bbs-detail>
                    </div>

                    <!-- お知らせ -->
                    <div
                        class="hidden group-hover:block"
                        v-if="checkId == 7 && form != $constant.formList.TOP"
                    >
                        <search-edi-detail
                            ref="inptEdiDetail"
                            @isDetailClick="getIsDetailClick"
                            @clearSearchWordEvent="clearSearchWord"
                            :searchButtonClick="searchClick"
                        ></search-edi-detail>
                    </div>
                </div>
                <!-- 右青背景 -->
                <div :class="searchBarProStyleClass"></div>
            </div>
            <div :class="searchBarStyleClessMid">
                <!-- 左青背景 -->
                <!-- <div :class="searchBarProStyleClass"></div> -->
                <search-preavoid-title
                    v-if="form == this.$constant.formList.PVD"
                ></search-preavoid-title>
                <search-bbs-title-bar
                    v-if="form == this.$constant.formList.BBS"
                ></search-bbs-title-bar>
                <search-edi-title-bar
                    v-if="form == this.$constant.formList.EDI"
                ></search-edi-title-bar>
                <!-- <div :class="searchBarProStyleClass"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import searchDropdown from '../../common/search/searchDropdown.vue'
import searchSvg from '../../common/svgImage/searchSvg.vue'
import searchDetail from './searchDetail.vue'
import searchDiKnowledge from './searchDiKnowledge.vue'
import searchPreavoids from './searchPreavoids.vue'
import searchBbsTitleBar from './searchBbsTitleBar.vue'
import searchBbsDetail from './searchBbsDetail.vue'
import searchEdiTitleBar from './searchEdiTitleBar.vue'
import searchEdiDetail from './searchEdiDetail.vue'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import searchPreavoidTitle from './searchPreavoidTitle.vue'

export default {
    components: {
        searchDropdown,
        searchSvg,
        searchDetail,
        searchDiKnowledge,
        searchPreavoids,
        searchPreavoidTitle,
        searchBbsTitleBar,
        searchBbsDetail,
        searchEdiTitleBar,
        searchEdiDetail,
        // Swal,
    },
    props: {
        form: {
            type: String,
            default: 'TOP',
        },
        searchbarSelectID: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            scroll: '',
            checkId: this.searchbarSelectID,
            detailDisp: true,
            ownTagVaule: [],
            parentMsg: '',
        }
    },
    watch: {
        checkId: function () {
            this.$emit('searchID', this.checkId)
        },
    },
    mounted() {
        window.addEventListener('scroll', this.menu)
        if (this.$props.form == this.$constant.formList.TOP) {
            this.checkId = 0
        } else if (this.$props.form == this.$constant.formList.ALL) {
            this.checkId = 0
        } else if (this.$props.form == this.$constant.formList.DI) {
            this.checkId = 1
        } else if (this.$props.form == this.$constant.formList.OWN) {
            this.checkId = 2
        } else if (this.$props.form == this.$constant.formList.PVD) {
            this.checkId = 3
        } else if (this.$props.form == this.$constant.formList.BBS) {
            this.checkId = 6
            // this.detailDisp = false
        } else if (this.$props.form == this.$constant.formList.EDI) {
            this.checkId = 7
            // this.detailDisp = false
        }
    },
    destroyed() {
        document.removeEventListener('scroll', this.menu)
    },
    computed: {
        searchValueInput: {
            get: function () {
                return this.$store.getters.getSearchWord
            },
            set: function (value) {
                this.$store.dispatch('setSearchWord', value)
            },
        },
        searchBarFixedClass: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return ''
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return 'fixed w-full lm:w-270'
            } else if (this.$props.form == this.$constant.formList.DI) {
                return 'fixed w-full lm:w-270'
            } else if (this.$props.form == this.$constant.formList.OWN) {
                return 'fixed w-full lm:w-270'
            } else if (this.$props.form == this.$constant.formList.PVD) {
                return 'fixed w-full lm:w-270'
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return 'fixed w-full lm:w-270'
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return 'fixed w-full lm:w-270'
            }
        },
        searchBarClass: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return 'flex '
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return 'flex '
            } else if (this.$props.form == this.$constant.formList.DI) {
                return 'flex'
            } else if (this.$props.form == this.$constant.formList.OWN) {
                return 'flex'
            } else if (this.$props.form == this.$constant.formList.PVD) {
                return 'flex'
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return 'flex  '
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return 'flex'
            }
        },
        searchBarStyleCless: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return 'bg-backgroundMainSearch flex rounded-none mid:rounded-md items-center h-full pt-2.5 pb-2.5 md:pt-5 md:pb-5'
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return 'bg-backgroundMainSearch flex items-center h-full pt-2.5 pb-2.5 md:pt-5 md:pb-5'
            } else if (this.$props.form == this.$constant.formList.DI) {
                return 'bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 '
            } else if (this.$props.form == this.$constant.formList.OWN) {
                if (this.detailDisp == false) {
                    return 'bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 '
                } else {
                    return 'bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-0 md:pb-2.5 rounded-b-lg md:rounded-b-none'
                }
            } else if (this.$props.form == this.$constant.formList.PVD) {
                if (this.detailDisp == false) {
                    return 'bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 rounded-b-lg md:rounded-b-none'
                } else {
                    return 'bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-0 md:pb-2.5 rounded-b-lg md:rounded-b-none'
                }
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return 'bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 md:group-hover:pb-2.5 group-hover:pb-0 md:rounded-b-none '
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return 'bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 rounded-b-lg md:rounded-b-none'
            }
        },
        searchBarStyleClessMid: function () {
            if (
                this.$props.form == this.$constant.formList.PVD ||
                this.$props.form == this.$constant.formList.BBS ||
                this.$props.form == this.$constant.formList.EDI
            ) {
                return 'bg-white flex justify-center items-center h-full w-full pt-2.5 pb-2.5 border-b-2 '
            } else {
                return 'hidden'
            }
        },
        searchBarProStyleClass: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return 'bg-red-400 flex-grow'
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return 'bg-red-400 flex-grow'
            } else if (this.$props.form == this.$constant.formList.DI) {
                return 'hidden'
            } else if (this.$props.form == this.$constant.formList.OWN) {
                return 'hidden'
            } else if (this.$props.form == this.$constant.formList.PVD) {
                return 'hidden'
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return 'flex-grow '
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return 'flex-grow '
            }
        },
        searchBarMidStyleClass: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return 'bg-backgroundMainSearch h-full w-full md:w-191.25 rounded-b-lg md:rounded-none'
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return 'bg-backgroundMainSearch h-full w-180 rounded-b-lg md:rounded-none'
            } else if (this.$props.form == this.$constant.formList.DI) {
                return ' flex-grow md:flex-none  h-full w-180 bg-backgroundMainSearch    '
            } else if (this.$props.form == this.$constant.formList.OWN) {
                return ' flex-grow md:flex-none  h-full w-180'
            } else if (this.$props.form == this.$constant.formList.PVD) {
                return ' flex-grow md:flex-none  h-full w-191.25'
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return ' flex-grow md:flex-none  h-full w-180 bg-backgroundMainSearch   '
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return ' flex-grow md:flex-none  h-full w-180 bg-backgroundMainSearch    '
            }
        },
        pcPlaceholder: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return 'Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます'
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return 'Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます'
            } else if (this.$props.form == this.$constant.formList.OWN) {
                return 'キーワードを入力'
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return 'キーワードを入力'
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return 'キーワードを入力'
            } else if (this.$props.form == this.$constant.formList.DI) {
                return '2単語以上からなる文章を入力　※単語での検索は機能しません'
            }
        },
        sreachBarPCInputClass: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return (
                    'hidden md:block  h-10 w-10/12 ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 rounded-none border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent '
                )
            } else if (this.$props.form == this.$constant.formList.ALL) {
                if (this.checkId != 0) {
                    return (
                        'hidden md:block md:rounded-none md:rounded-r h-10 w-10/12  ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0  border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                } else {
                    return (
                        'hidden md:block md:rounded-none h-10 w-10/12  ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0  border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                }
            } else if (this.$props.form == this.$constant.formList.DI) {
                if (this.checkId == 0) {
                    return (
                        'hidden md:block md:rounded-none h-10 w-10/12  ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0  border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                } else {
                    return (
                        'hidden md:block  h-10 w-10/12  md:rounded-none md:rounded-r ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                }
            } else if (this.$props.form == this.$constant.formList.OWN) {
                if (this.checkId == 0) {
                    return (
                        'hidden md:block md:rounded-none h-10 w-10/12  ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0  border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                } else {
                    return (
                        'hidden md:block h-10 w-10/12 md:rounded-none md:rounded-r ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                }
            } else if (this.$props.form == this.$constant.formList.PVD) {
                if (this.checkId == 0) {
                    return (
                        'hidden md:block md:rounded-none h-10 w-10/12  ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0  border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                } else {
                    return (
                        'hidden md:block  h-10 w-10/12 md:rounded-none md:rounded-r ' +
                        'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                        'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                        'focus:border-transparent '
                    )
                }
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return (
                    'hidden md:block  h-10 w-10/12  rounded-r ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent '
                )
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return (
                    'hidden md:block  h-10 w-10/12  rounded-r ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent '
                )
            }
        },
        sreachBarSPInputClass: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return (
                    'block md:hidden h-10 w-10/12 ml-2.5 ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 rounded-none rounded-l-sm border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent '
                )
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return (
                    'block md:hidden h-10 w-10/12 ml-2.5 ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 rounded-none rounded-l-sm border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent '
                )
            } else if (this.$props.form == this.$constant.formList.DI) {
                return (
                    'block md:hidden h-10 w-10/12 ml-2.5 rounded ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 border border-gray-300 border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent mr-2.5'
                )
            } else if (this.$props.form == this.$constant.formList.OWN) {
                return (
                    'block md:hidden h-10 w-10/12 ml-2.5 rounded ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent mr-2.5'
                )
            } else if (this.$props.form == this.$constant.formList.PVD) {
                return (
                    'block md:hidden h-10 w-10/12 ml-2.5 rounded ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent mr-2.5'
                )
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return (
                    'block md:hidden h-10 w-10/12 ml-2.5 rounded ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent mr-2.5'
                )
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return (
                    'block md:hidden h-10 w-10/12 ml-2.5 rounded ' +
                    'notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 ' +
                    'focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins ' +
                    'focus:border-transparent mr-2.5'
                )
            }
        },
        sreachBarButtonClass: function () {
            if (
                this.$props.form != this.$constant.formList.TOP &&
                this.checkId != 0
            ) {
                return 'hidden'
            } else {
                return (
                    'bg-searchBunnon hover:bg-yellow-400 active:opacity-100 active:bg-personInformationButton' +
                    'text-white rounded-none rounded-r-sm md:rounded-none md:rounded-tr md:rounded-br w-10  md:w-17.5 h-10 flex-none mr-2.5'
                )
            }
        },
    },
    methods: {
        clearSearchWord(val) {
            this.$store.dispatch('setSearchWord', val)
        },
        input: function (e) {
            this.$store.dispatch('setSearchWord', e.target.value)
        },
        getOwnTagValue: function (value) {
            this.ownTagVaule = value
        },

        getNewInput: function (e) {
            sessionStorage.searchValueInput = e.target.value
        },
        showMsg: function (data) {},

        menu: function () {
            this.srcoll =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop
            if (this.srcoll > 0) {
                this.detailDisp = false
            } else {
                this.detailDisp = true
            }
            // }
            this.$emit('detailDisp', this.detailDisp)
        },
        // 検索ボタン押下イベント
        searchClick: function (event) {
            // すべて
            if (this.checkId == 0) {
                let getTimestamp = new Date().getTime()
                let params = {
                    searchKey: this.$store.getters.getSearchWord,
                    timestamp: getTimestamp,
                }
                // // 検索APIを呼び出し(画面入力値)
                // this.$store.dispatch('saveSearchValue', this.searchValueInput)
                // 一括検索結果画面へ遷移
                this.$router.push({
                    path: '/searchResultAll',
                    query: params,
                })
            }
            // DI ナレッジシェア
            else if (this.checkId == 1) {
                if (this.$props.form === this.$constant.formList.DI) {
                    if (
                        Object.keys(this.$store.getters.getorgTagsList).length >
                        0
                    ) {
                        this.$refs.diDetail.$refs.multDi.refreshOptions()
                    }
                }
                let getTimestamp = new Date().getTime()
                let params = {
                    search: this.$store.getters.getSearchWord,
                    tags:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getSearchTags
                            ? this.$store.getters.getSearchTags.join(',')
                            : '',
                    displayed:
                        this.$props.form == this.$constant.formList.TOP
                            ? '20'
                            : this.$store.getters.getMaxCountDI,
                    sort:
                        this.$props.form == this.$constant.formList.TOP
                            ? 'last_updated_at_desc'
                            : this.$store.getters.getSortDI,
                    page: '1',
                    checkQ:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckQDI,
                    checkA:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckADI,
                    checkComment:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckCommentDI,
                    checkAddFileName:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckAddFileNameDI,
                    checkContributor:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckContributorDI,
                    checkLastEditer:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckLastEditerDI,
                    checkFacilityName:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckFacilityNameDI,
                    checkNote:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckNoteDI,
                    timestamp: getTimestamp,
                }
                this.$router.push({
                    path: '/searchDiKnowledge',
                    query: params,
                })
            }
            // 組織内 DI 記録（Q&A）
            else if (this.checkId == 2) {
                console.log('組織内DI記録')
                if (this.$props.form === this.$constant.formList.OWN) {
                    if (
                        Object.keys(this.$store.getters.getorgTagsList).length >
                        0
                    ) {
                        this.$refs.ownDetail.$refs.mult.refreshOptions()
                    }
                }
                let getTimestamp = new Date().getTime()
                let params = {
                    search: this.$store.getters.getSearchWord,
                    // タグ
                    tags:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getSearchTags
                            ? this.$store.getters.getSearchTags.join(',')
                            : '',
                    // 薬の分類
                    medicine:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getMedicineID,
                    // 質問区分
                    qacategory:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getQuestionID,
                    // 施設
                    facility_flag:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getFacilityID,
                    // 表示件数
                    displayed:
                        this.$props.form == this.$constant.formList.TOP
                            ? '20'
                            : this.$store.getters.getMaxCount,
                    // ソート順
                    sort:
                        this.$props.form == this.$constant.formList.TOP
                            ? 'last_updated_at_desc'
                            : this.$store.getters.getSort,
                    // ページ
                    page: '1',
                    // page:
                    //     this.$props.form == this.$constant.formList.TOP
                    //         ? '1'
                    //         : '1',
                    // 検索対象 Q
                    checkQ:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckQ,
                    // 検索対象 A
                    checkA:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckA,
                    // 検索対象 コメント
                    checkComment:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckComment,
                    // 検索対象 添付ファイル名
                    checkAddFileName:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckAddFileName,
                    // 検索対象 投稿者
                    checkContributor:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckContributor,
                    // 検索対象 最終編集者
                    checkLastEditer:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckLastEditer,
                    // 検索対象 施設名
                    checkFacilityName:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckFacilityName,
                    // 検索対象 備考
                    checkNote:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getCheckNote,
                    timestamp: getTimestamp,
                }

                this.$router.push({
                    path: '/searchOrganization',
                    query: params,
                })
            }
            // 症例（プレアボイド）
            else if (this.checkId == 3) {
                if (
                    this.$store.getters.getDateValueFrom != '' &&
                    this.$store.getters.getDateValueTo != ''
                ) {
                    if (
                        this.$store.getters.getDateValueFrom >=
                        this.$store.getters.getDateValueTo
                    ) {
                        this.$swal.fire('', '期間（報告日）入力不正', '')
                        return
                    }
                }
                let getTimestamp = new Date().getTime()
                let params = {
                    search: this.$store.getters.getSearchWord,
                    dateFrom:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getDateValueFrom,
                    dateTo:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getDateValueTo,
                    // 様式
                    styles:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getStyles,
                    // 施設
                    facility_flag:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getFacilityID,
                    // 表示件数
                    displayed:
                        this.$props.form == this.$constant.formList.TOP
                            ? '20'
                            : this.$store.getters.getMaxCount,
                    // ソート順
                    sort:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getSort,
                    timestamp: getTimestamp,
                }
                this.$router.push({
                    path: '/searchPreavoids',
                    query: params,
                })
            }
            // DI 辞書
            else if (this.checkId == 4) {
                this.$router.push('/searchOrganization')
            }
            // 製薬企業情報
            else if (this.checkId == 5) {
                this.$router.push('/searchOrganization')
            }
            // 掲示板
            else if (this.checkId == 6) {
                if (
                    this.$store.getters.getDateValueFrom != '' &&
                    this.$store.getters.getDateValueTo != ''
                ) {
                    if (
                        this.$store.getters.getDateValueFrom >=
                        this.$store.getters.getDateValueTo
                    ) {
                        this.$swal.fire('', '期間（報告日）入力不正', '')
                        return
                    }
                }
                let params = {}
                let getTimestamp = new Date().getTime()
                params = {
                    free_text: this.$store.getters.getSearchWord,
                    checkTitle:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkTitle,
                    checkContent:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkContent,
                    checkComment:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkComment,
                    checkPost:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkPost,
                    checkLastEditor:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo
                                  .checkLastEditor,
                    checkFacilityName:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo
                                  .checkFacilityName,
                    dateFrom:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getDateValueFrom,
                    dateTo:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getDateValueTo,
                    tags:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getSearchTags
                            ? this.$store.getters.getSearchTags.join(',')
                            : '',
                    scope:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getScope,
                    sort:
                        this.$props.form == this.$constant.formList.TOP
                            ? 'created_at-desc'
                            : this.$store.getters.getSort,
                    timestamp: getTimestamp,
                }
                this.$router.push({
                    path: '/searchBulletinBoard',
                    query: params,
                })
                // 掲示板
            } else if (this.checkId == 7) {
                if (
                    this.$store.getters.getDateValueFrom != '' &&
                    this.$store.getters.getDateValueTo != ''
                ) {
                    if (
                        this.$store.getters.getDateValueFrom >=
                        this.$store.getters.getDateValueTo
                    ) {
                        this.$swal.fire('', '期間（報告日）入力不正', '')
                        return
                    }
                }
                let params = {}
                let getTimestamp = new Date().getTime()
                params = {
                    free_text: this.$store.getters.getSearchWord,
                    checkTitle:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkTitle,
                    checkContent:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkContent,
                    checkComment:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkComment,
                    checkPost:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo.checkPost,
                    checkLastEditor:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo
                                  .checkLastEditor,
                    checkFacilityName:
                        this.$props.form == this.$constant.formList.TOP
                            ? true
                            : this.$store.getters.getBbsCheckInfo
                                  .checkFacilityName,
                    dateFrom:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getDateValueFrom,
                    dateTo:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getDateValueTo,
                    tags:
                        this.$props.form == this.$constant.formList.TOP
                            ? ''
                            : this.$store.getters.getSearchTags
                            ? this.$store.getters.getSearchTags.join(',')
                            : '',
                    scope:
                        this.$props.form == this.$constant.formList.TOP
                            ? '0'
                            : this.$store.getters.getScope,
                    sort:
                        this.$props.form == this.$constant.formList.TOP
                            ? 'created_at-desc'
                            : this.$store.getters.getSort,
                    timestamp: getTimestamp,
                }
                this.$router.push({
                    path: '/searchNotification',
                    query: params,
                })
            }
        },
        // DropDown 選択したアイテムＩＤ取得
        getCheckId(value) {
            console.log('checkId', value)
            this.checkId = value
            this.$emit('orgcheckId', value)
            this.$store.dispatch('setDateValueFrom', '')
            this.$store.dispatch('setDateValueTo', '')
        },
        getIsDetailClick(value) {
            this.$emit('isDetailClick', value)
        },
        //  組織内 DI 記録（Q&A）詳細条件 フラグ
        getIsOrgDetailClick(value) {
            this.$emit('isOrgDetailClick', value)
        },
    },
}
</script>

<style></style>
