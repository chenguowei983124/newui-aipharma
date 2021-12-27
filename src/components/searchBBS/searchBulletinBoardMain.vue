<template>
    <div class="" id="div_postList">
        <div class="flex justify-end mb-2" v-if="postList.length != 0">
            <vue-single-select
                class="w-42.5 cursor-pointer"
                :name="'patientGenderList'"
                :default-value="$store.getters.getSort"
                :default-input-attribs="{ tabindex: 1 }"
                :default-options="$constant.singleSelectItem"
                @selected="doSort"
                :leftLableDisp="false"
                buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0 border-b-2 border-notice"
                inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                  border border-transparent focus:outline-none"
            ></vue-single-select>
        </div>
        <div v-else></div>
        <mescroll-vue
            class="h-screen-63 md:h-screen-65 overflow-y-scroll"
            ref="mescroll"
            :up="mescrollUp"
        >
            <div class="relative">
                <div class="" v-if="postList.length != 0">
                    <div v-for="(article, index) in postList" :key="index">
                        <result-detail-row
                            class="searchResult_bbsDetail_blue mt-2"
                            :row="article"
                            :index="index"
                            :itemClick="clickItem"
                        >
                        </result-detail-row>
                    </div>
                </div>
                <div v-else class="flex justify-center text-lg mt-20">検索結果がありません。キーワードを変更してお試しください。</div>
            </div>
        </mescroll-vue>
    </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
import bbsTalking from './searchBBSTalking.vue'
import resultDetailRow from '../common/searchResult/resultBBS.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'

export default {
    components: {
        MescrollVue,
        bbsTalking,
        resultDetailRow,
        vueSingleSelect,
    },
    props: {
        detailHeightCss: '',
    },
    data() {
        return {
            firsted: true,
            params: {},
            pagination: {},
            postList: [],
            openIndex: -1,

            mescroll: null,
            mescrollUp: {
                callback: this.upCallback,

                page: {
                    num: 0,
                    size: 20,
                },
                htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
                noMoreSize: 5,

                toTop: {
                    offset: 1000,
                },
                // empty: {
                //     warpId: 'div_postList',
                //     // icon: './static/mescroll/mescroll-empty.png',
                //     tip: 'データがありません。',
                // },
            },
        }
    },
    watch: {
        $route(to, from) {
            console.log('searchBulletinBoardMain watch', to.query)
            if (
                to.path != '/searchBulletinBoard' ||
                from.path != '/searchBulletinBoard'
            )
                return

            if (!!to.query) {
                this.params = to.query
            } else {
                delete this.params.publish
                Object.assign(this.params, to.query)
                Object.assign(this.params, this.$store.getters.getFilterBBS)
            }

            this.mescroll.resetUpScroll()
            this.mescroll.scrollTo(0, 0)
        },
    },
    methods: {
        async doSearch(pgNo = 1) {
            this.initStore()
            if (
                JSON.stringify(this.$route.query) !== '{}' &&
                this.$route.query.id !== undefined
            ) {
                Object.assign(this.params, { id: this.$route.query.id })
                await this.$serve
                    .getPostsrforId(
                        this.$store.getters.getOidcCode,
                        this.$route.query.id
                    )
                    .then((response) => {
                        this.setSearchResult(response, pgNo)
                    })
            } else {
                if (JSON.stringify(this.$route.query) === '{}') {
                    this.resetSearchBar()
                    const PAGE_LIMIT = 20
                    Object.assign(this.params, { division: 'BBS' })
                    const queryStringData = {
                        page: pgNo,
                        limit: PAGE_LIMIT,
                        code: this.$store.getters.getOidcCode,

                        filter: {
                            division: 'BBS',
                            free_text: '',
                            targets: {
                                title: true,
                                content: true,
                                coment: true,
                                creator: true,
                                updater: true,
                                facility: true,
                            },
                            tags: [],
                            scope: '0',
                            create_from: '',
                            create_to: '',
                            publish: false,
                            order: 'created_at-desc',
                        },
                    }
                    await this.$serve
                        .getPostList(queryStringData)
                        .then((response) => {
                            this.setSearchResult(response, pgNo)
                        })
                } else {
                    this.resetSearchBar()
                    const PAGE_LIMIT = 20
                    Object.assign(this.params, { division: 'BBS' })

                    const queryStringData = {
                        code: this.$store.getters.getOidcCode,
                        page: pgNo,
                        limit: PAGE_LIMIT,

                        filter: {
                            division: 'BBS',
                            free_text: this.params.free_text,
                            targets: {
                                title: this.params.checkTitle,
                                content: this.params.checkContent,
                                coment: this.params.checkComment,
                                creator: this.params.checkLastEditor,
                                updater: this.params.checkLastEditor,
                                facility: this.params.checkFacilityName,
                            },
                            tags:
                                this.params.tags === undefined ||
                                this.params.tags === ''
                                    ? []
                                    : this.params.tags.split(','),
                            scope: this.params.scope,
                            create_from: this.params.dateFrom,
                            create_to: this.params.dateTo,
                            publish: false,
                            order: this.params.sort,
                        },
                    }
                    await this.$serve
                        .getPostList(queryStringData)
                        .then((response) => {
                            this.setSearchResult(response, pgNo)
                        })
                }
            }
        },
        setSearchResult(response, pgNo) {
            if (response.data.data.length != 0) {
                if (pgNo == 1) {
                    this.postList = this.formatPostList(response.data.data)
                    if (this.postList.length == 1) {
                        this.clickItem(this.postList[0].id, 0)
                    }
                } else {
                    this.postList = this.formatPostList(response.data.data)
                }
                this.pagination = response.data.pagination
            }
        },
        formatPostList(data) {
            let list = this.postList
            for (let i = 0; i < data.length; i++) {
                let listDetail = {
                    id: data[i].post.id,
                    urlTitle: data[i].post.title,
                    title: data[i].post.content,
                    date: data[i].post.created_at,
                    // group:
                    //     data[i].post.scope == 0
                    //         ? 'ownFacility'
                    //         : data[i].post.scope == 1
                    //         ? 'otherFacility'
                    //         : 'group',
                    // 公開範囲（organization：組織内、whole：全体、 group：グループ　society：学会）
                    group:
                        data[i].post.scope == 0
                            ? 'whole'
                            : data[i].post.scope == 1
                            ? 'organization'
                            : 'group',
                    viewCount: data[i].post.feedback.viewed,
                    notificationType: data[i].post.genre,
                    userName: data[i].post.user_data.user_name,
                    workplace: data[i].post.user_data.workplace,
                    commnetCount: data[i].post.commnet.length,
                    clicked: false,
                }
                list.push(listDetail)
            }

            return list
        },
        doSort(val) {
            if (val !== this.$store.getters.getSort) {
                this.$store.dispatch('setSort', val)
                this.resetRouter()
                delete this.params.publish
                Object.assign(this.params, { order: val })
                this.postList = []
                this.$emit('closeBbsTalking')
            }
        },
        // 初期化検索条件
        initStore() {
            let checkInfo = this.$store.getters.getBbsCheckInfo
            checkInfo.checkTitle = true
            checkInfo.checkContent = true
            checkInfo.checkComment = true
            checkInfo.checkPost = true
            checkInfo.checkLastEditor = true
            checkInfo.checkFacilityName = true
            this.$store.dispatch('setBbsCheckInfo', checkInfo)
            this.$store.dispatch('setSearchWord', '')
            this.$store.dispatch('setSort', 'created_at-desc')
            this.$store.dispatch('setSearchTags', [])
            this.$store.dispatch('setSearchTagsLable', [])
        },
        // リーセット検索バー
        resetSearchBar: function () {
            this.$store.dispatch('setSearchWord', this.$route.query.free_text)
            this.$store.dispatch(
                'setSearchTags',
                this.$route.query.tags === '' ||
                    this.$route.query.tags === undefined
                    ? []
                    : this.$route.query.tags.split(',')
            )
            // 対象期間FROM
            this.$store.dispatch(
                'setDateValueFrom',
                this.$route.query.dateFrom === undefined
                    ? ''
                    : this.$route.query.dateFrom
            )
            // 対象期間TO
            this.$store.dispatch(
                'setDateValueTo',
                this.$route.query.dateTo === undefined
                    ? ''
                    : this.$route.query.dateTo
            )
            // 様式
            this.$store.dispatch(
                'setScopeInfo',
                this.$route.query.scope === undefined
                    ? '0'
                    : this.$route.query.scope
            )
            // 検索対象
            let checkInfo = this.$store.getters.getBbsCheckInfo
            checkInfo.checkTitle =
                this.$route.query.checkTitle === undefined ||
                this.$route.query.checkTitle.toString() === 'true'
                    ? true
                    : false
            checkInfo.checkContent =
                this.$route.query.checkContent === undefined ||
                this.$route.query.checkContent.toString() === 'true'
                    ? true
                    : false
            checkInfo.checkComment =
                this.$route.query.checkComment === undefined ||
                this.$route.query.checkComment.toString() === 'true'
                    ? true
                    : false
            checkInfo.checkPost =
                this.$route.query.checkPost === undefined ||
                this.$route.query.checkPost.toString() === 'true'
                    ? true
                    : false
            checkInfo.checkLastEditor =
                this.$route.query.checkLastEditor === undefined ||
                this.$route.query.checkLastEditor.toString() === 'true'
                    ? true
                    : false
            checkInfo.checkFacilityName =
                this.$route.query.checkFacilityName === undefined ||
                this.$route.query.checkFacilityName.toString() === 'true'
                    ? true
                    : false
            this.$store.dispatch('setBbsCheckInfo', checkInfo)
            this.$store.dispatch(
                'setSort',
                this.$route.query.checkFacilityName === undefined
                    ? 'created_at-desc'
                    : this.$route.query.sort
            )
        },
        resetRouter() {
            let getTimestamp = new Date().getTime()

            let params = {
                free_text: this.$store.getters.getSearchWord,
                checkTitle: this.$store.getters.getBbsCheckInfo.checkTitle,
                checkContent: this.$store.getters.getBbsCheckInfo.checkContent,
                checkComment: this.$store.getters.getBbsCheckInfo.checkComment,
                checkPost: this.$store.getters.getBbsCheckInfo.checkPost,
                checkLastEditor:
                    this.$store.getters.getBbsCheckInfo.checkLastEditor,
                checkFacilityName:
                    this.$store.getters.getBbsCheckInfo.checkFacilityName,
                dateFrom: this.$store.getters.getDateValueFrom,
                dateTo: this.$store.getters.getDateValueTo,
                tags:
                    this.$store.getters.getSearchTags.length === 0
                        ? ''
                        : this.$store.getters.getSearchTags.join(','),
                scope: this.$store.getters.getScope,
                sort: this.$store.getters.getSort,
                timestamp: getTimestamp,
            }
            this.$router.push({
                path: '/searchBulletinBoard',
                query: params,
            })
        },
        clickItem(val, index) {
            if (this.openIndex >= 0) {
                this.postList[this.openIndex].clicked = false
            }

            this.openIndex = index
            this.postList[index].clicked = true
            this.$emit('clickItemEvent', val)
        },
        talkingClosed(deleteFlg) {
            if (this.openIndex != -1) {
                this.postList[this.openIndex].clicked = false
                this.openIndex = -1
            }

            if (deleteFlg !== undefined) {
                this.firsted = true
                this.postList = []
                this.mescroll.resetUpScroll()
                this.mescroll.scrollTo(0, 0)
            }
        },
        async upCallback(page, mescroll) {
            if (this.firsted) {
                console.log(
                    'upCallbackfirsted------------start------',
                    this.$route.query
                )
                this.params = this.$route.query
                await this.doSearch()
                this.firsted = false
            } else {
                console.log('upCallbackSecond--------------start------')
                await this.doSearch(page.num)
            }

            mescroll.endSuccess(
                this.postList.length,
                this.$route.query.id !== undefined
                    ? true
                    : page.num < this.pagination.pages
            )

            this.mescroll = mescroll
        },
    },
    created() {},
    mounted() {
        // this.$store.getters.getBBSDropDowninfo
    },
    unmounted() {
        this.initStore()
    },
}
</script>
<style scoped>
/* .mescroll {
    position: fixed;
    top: 44px;
    bottom: 0;
    height: auto;
} */
</style>
