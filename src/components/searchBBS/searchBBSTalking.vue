<template>
    <div class="mx-auto h-screen-60 md:h-screen-70" id="div_postList">
        <div class="flex justify-between h-10 border-b-2 border-blueline">
            <div class="notoSansJpAndTwentyBold">スレッド</div>
            <div class="h-10 w-10 mt-2" @click="closeClick">
                <x-icon-svg
                    defaultClass="h-6 w-6"
                    defaultStrokeWidth="3"
                    color="#65bbe5"
                ></x-icon-svg>
            </div>
        </div>
        <!-- " -->
        <div
            class="overflow-y-scroll"
            :class="[dispEditor ? 'h-7/10' : 'h-9/10']"
        >
            <div class="mt-4">
                <div v-if="postList.length > 0">
                    <div>
                        <div class="flex">
                            <div>
                                <div class="flex justify-between">
                                    <div class="flex">
                                        <result-detail-row-item
                                            itemType="1"
                                            :typeKB="postList[0].group"
                                            v-if="
                                                postList[0].group != undefined
                                            "
                                        ></result-detail-row-item>
                                        <result-detail-row-item
                                            itemType="2"
                                            addStyle="ml-2"
                                            :itemValue="postList[0].date"
                                            v-if="postList[0].date != undefined"
                                        ></result-detail-row-item>
                                    </div>

                                    <result-detail-row-item
                                        itemType="1"
                                        :typeKB="postList[0].notificationType"
                                        v-if="
                                            postList[0].notificationType !=
                                            undefined
                                        "
                                        addStyle="flex justify-center items-center mr-1.25 md:flex-none border-t-2 "
                                    ></result-detail-row-item>
                                </div>
                                <div class="mt-2 notoSansJpAndFourteenRegular">
                                    {{ postList[0].urlTitle }}
                                </div>
                                <div class="flex">
                                    <div
                                        class="
                                            rounded-full
                                            h-12.5
                                            w-12.5
                                            bg-backgroundMainSearch
                                        "
                                    >
                                        <img
                                            class="rounded-full"
                                            src="../../assets/image/image.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ml-3 mt-2">
                                        <div
                                            class="notoSansJpAndSixteenRegular"
                                        >
                                            {{ postList[0].userName }}
                                        </div>
                                        <div class="notoSansJpAndTwelveRegular">
                                            {{ postList[0].workplace }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    class="
                                        h-8
                                        w-8
                                        border-2
                                        rounded
                                        text-center
                                        p-0.5
                                        bg-gray-100
                                    "
                                >
                                    ・・・
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 notoSansJpAndFourteenRegular">
                        {{ postList[0].title }}
                    </div>
                    <div class="mt-2 flex justify-between">
                        <div>ロキソニンの用途は</div>
                        <div class="flex items-end">
                            <result-detail-row-item
                                itemType="4"
                                itemTitle=" view"
                                :itemValue="postList[0].viewCount.toString()"
                                v-if="postList[0].viewCount != undefined"
                            ></result-detail-row-item>
                            <button
                                class="
                                    flex
                                    items-center
                                    justify-end
                                    h-7.5
                                    w-14
                                    rounded
                                    text-white
                                    bg-whole
                                "
                            >
                                <div class="mr-3">
                                    {{ postList[0].feedback.good }}
                                </div>
                                <good class="h-4 w-4 mr-1"></good>
                            </button>
                            <button
                                class="
                                    flex
                                    justify-end
                                    items-center
                                    h-7.5
                                    w-14
                                    rounded
                                    text-white
                                    bg-red-400
                                    ml-1
                                "
                            >
                                <div class="mr-3">
                                    {{ postList[0].feedback.bad }}
                                </div>
                                <bad class="h-4 w-4 mr-1"></bad>
                            </button>
                        </div>
                    </div>

                    <div
                        class="mt-3 ml-10 border-t-2 border-blueline"
                        v-for="(items, index) in postList[0].commnet"
                        :key="index"
                    >
                        <div class="ml-2">
                            <div class="mt-2 flex justify-between">
                                <div class="flex">
                                    <div
                                        class="
                                            rounded-full
                                            h-12.5
                                            w-12.5
                                            bg-backgroundMainSearch
                                        "
                                    >
                                        <img
                                            class="rounded-full"
                                            src="../../assets/image/image.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ml-3 mt-2">
                                        <div
                                            class="notoSansJpAndSixteenRegular"
                                        >
                                            {{ items.user_data.user_name }}
                                        </div>
                                        <div class="notoSansJpAndTwelveRegular">
                                            {{ items.user_data.workplace }}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="
                                            h-8
                                            w-8
                                            border-2
                                            rounded
                                            text-center
                                            p-0.5
                                            bg-gray-100
                                        "
                                    >
                                        ・・・
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 notoSansJpAndFourteenRegular">
                                {{ items.content }}
                            </div>
                            <div class="flex justify-between items-end mt-2">
                                <div>{{ items.updated_at }}</div>
                                <div class="flex items-end">
                                    <result-detail-row-item
                                        itemType="4"
                                        itemTitle=" view"
                                        :itemValue="
                                            postList[0].viewCount.toString()
                                        "
                                        addStyle="md:ml-2.5 md:flex-none"
                                        v-if="
                                            postList[0].viewCount != undefined
                                        "
                                    ></result-detail-row-item>
                                    <button
                                        class="
                                            flex
                                            items-center
                                            justify-end
                                            h-7.5
                                            w-14
                                            rounded
                                            text-white
                                            bg-whole
                                        "
                                    >
                                        <div class="mr-3">
                                            {{ postList[0].feedback.good }}
                                        </div>
                                        <good class="h-4 w-4 mr-1"></good>
                                    </button>
                                    <div
                                        class="
                                            flex
                                            justify-end
                                            items-center
                                            h-7.5
                                            w-14
                                            rounded
                                            text-white
                                            bg-red-400
                                            ml-1
                                        "
                                    >
                                        <div class="mr-3">
                                            {{ postList[0].feedback.bad }}
                                        </div>
                                        <bad class="h-4 w-4 mr-1"></bad>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div
                class="border-2 h-8"
                @click="dispEditor = !dispEditor"
                v-if="!dispEditor"
                v-html="InputComment.toString().split('\n')[0]"
            ></div>
            <div v-if="dispEditor">
                <editor
                    api-key="qph8nbd0u6yvubz8os1ghqw2txzvs1uq3qng582s4w0t63vp"
                    initialValue="<p>Initial editor content</p>"
                    v-model="InputComment"
                    :init="{
                        selector: 'textarea#drive-demo',

                        height: 130,
                        menubar: false,
                        statusbar: false,
                        //content_style: `p{line-height: 1;} body {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;line-height: 1.0; margin: 1rem;}`,
                        //content_css: '/mycontent.css',
                        plugins:
                            'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
                        toolbar:
                            'myButton | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image table media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                        //tinydrive_token_provider: 'http://localhost:8002/jwt',
                        images_upload_handler: images_upload_handler,
                    }"
                />
                <div
                    class="
                        flex
                        justify-end
                        space-x-2
                        h-10
                        border-2
                        items-center
                        pr-2
                    "
                >
                    <button
                        class="
                            flex
                            items-center
                            justify-end
                            h-7.5
                            w-17.5
                            rounded
                            text-white
                            bg-gray_e6e6e6
                        "
                        @click="dispEditor = !dispEditor"
                    >
                        <div class="mr-3 notoSansJpAndFourteenBold">閉じる</div>
                    </button>
                    <button
                        class="
                            flex
                            items-center
                            justify-end
                            h-7.5
                            w-17.5
                            rounded
                            text-white
                            bg-whole
                        "
                    >
                        <div class="mr-3 notoSansJpAndFourteenBold">送信</div>
                        <send-message-icon-svg></send-message-icon-svg>
                        <!-- <good class="h-4 w-4 mr-1"></good> -->
                    </button>
                </div>
            </div>
        </div>
        <!-- </mescroll-vue> -->
    </div>
</template>

<script>
import XIconSvg from '../common/svgImage/xIconSvg.vue'
import sendMessageIconSvg from '../common/svgImage/sendMessageIconSvg.vue'
import resultDetailRow from '../common/searchResult/resultBBS.vue'
import ResultDetailRowItem from '../common/searchResult/resultDetailRowItem.vue'
import Good from '../common/svgImage/good.vue'
import bad from '../common/svgImage/bad.vue'
import Editor from '@tinymce/tinymce-vue'
import MescrollVue from 'mescroll.js/mescroll.vue'

export default {
    components: {
        XIconSvg,
        Editor,
        sendMessageIconSvg,
        resultDetailRow,
        ResultDetailRowItem,
        Good,
        bad,
        MescrollVue,
    },
    props: {
        detailHeightCss: '',
    },
    data() {
        return {
            postList: [], // 列表数据
            params: {},
            dispFlg: false,
            dispEditor: false,
            InputComment: '',
            mescrollUp: {
                // 上拉加载的配置.
                callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
                //以下是一些常用的配置,当然不写也可以的.
                page: {
                    num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                    size: 10, //每页数据条数,默认10
                },
                htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
                noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
                //避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
                //这就是为什么无更多数据有时候不显示的原因
                toTop: {
                    //回到顶部按钮
                    // src: './static/mescroll/mescroll-totop.png', //图片路径,默认null,支持网络图
                    offset: 1000, //列表滚动1000px才显示回到顶部按钮
                },
                empty: {
                    //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
                    warpId: 'div_postList', //父布局的id (1.3.5版本支持传入dom元素)
                    icon: './static/mescroll/mescroll-empty.png', //图标,默认null,支持网络图
                    tip: '暂无相关数据~', //提示
                },
            },
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter', to, from, next)
        // 如果没有配置顶部按钮或isBounce,则beforeRouteEnter不用写
        next((vm) => {
            // 滚动到原来的列表位置,恢复顶部按钮和isBounce的配置
            vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
        })
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave', to, from, next)
        // 如果没有配置顶部按钮或isBounce,则beforeRouteLeave不用写
        // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
        this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
        next()
    },
    watch: {
        $route(to, from) {
            console.log('searchBulletinBoardMain watch', to.query)
            if (
                to.path != '/searchBulletinBoard' ||
                from.path != '/searchBulletinBoard'
            )
                return

            // if (JSON.stringify(this.$route.query) == '{}') {
            //     this.initStore()
            //     this.$store.dispatch('clearPreavoidsInfo', {})
            // }
            // if (JSON.stringify(this.$route.query) !== '{}') {
            //     this.resetSearchBar()
            //     this.execSearch()
            // }
            if (!!to.query) {
                this.params = to.query
            } else {
                delete this.params.publish
                Object.assign(this.params, to.query)
                Object.assign(this.params, this.$store.getters.getFilterBBS)
                // console.log('getFilterBBS watch',this.$store.getters.getFilterBBS)
            }

            this.mescroll.resetUpScroll()
            this.mescroll.scrollTo(0, 0)
        },
    },
    methods: {
        closeClick() {
            console.log('100')
            this.$emit('close', false)
        },
        // async doSearch(pgNo = 1) {
        //     // console.log('doSearch', this.params, this.$store.getters.getOidcCode)
        //     const PAGE_LIMIT = 10
        //     Object.assign(this.params, { division: 'BBS' })
        //     console.log('watch', this.params)
        //     const queryStringData = {
        //         page: pgNo,
        //         limit: PAGE_LIMIT,
        //         filter: this.params,
        //     }
        //     // this.$serve.getPostList(queryStringData).then((response) => {
        //     //   console.log('getPostList-result', response.data)
        //     //   if (pgNo == 1) {
        //     //     this.postList = response.data.data
        //     //   } else {
        //     //     this.postList = this.postList.concat(response.data.data)
        //     //   }
        //     //   this.pagination = response.data.pagination
        //     // })
        //     const response = await this.$serve.getPostList(queryStringData)
        //     console.log('getPostList-result', response.data)
        //     if (pgNo == 1) {
        //         this.postList = this.formatPostList(response.data.data)
        //     } else {
        //         this.postList = this.formatPostList(response.data.data)
        //     }
        //     this.pagination = response.data.pagination
        // },
        // formatPostList(data) {
        //     let list = this.postList
        //     console.log('formatPostList', list)
        //     for (let i = 0; i < data.length; i++) {
        //         console.log(data)
        //         console.log('item', data[i].post.feedback.viewed)
        //         let listDetail = {
        //             id: data[i].post.id,
        //             urlTitle: data[i].post.title,
        //             title: data[i].post.content,
        //             date: data[i].post.created_at,
        //             group:
        //                 data[i].post.scope == 0
        //                     ? 'ownFacility'
        //                     : data[i].post.scope == 1
        //                     ? 'otherFacility'
        //                     : 'group',
        //             viewCount: data[i].post.feedback.viewed,
        //             notificationType: data[i].post.genre,
        //             userName: data[i].post.user_data.user_name,
        //             workplace: data[i].post.user_data.workplace,
        //             commnetCount: data[i].post.commnet.length,
        //         }
        //         list.push(listDetail)
        //     }

        //     return list
        // },
        doSort(val) {
            delete this.params.publish
            Object.assign(this.params, { order: val })
            // this.doSearch()
            this.mescroll.resetUpScroll()
            this.mescroll.scrollTo(0, 0)
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
            this.$store.dispatch('setSearchTags', [])
        },
        // リーセット検索バー
        resetSearchBar: function () {
            this.$store.dispatch('setSearchWord', this.$route.query.search)
            // 対象期間FROM
            this.$store.dispatch('setDateValueFrom', this.$route.query.dateFrom)
            // 対象期間TO
            this.$store.dispatch('setDateValueTo', this.$route.query.dateTo)
            // 様式
            this.$store.dispatch('setStyles', this.$route.query.styles)
            // 施設
            this.$store.dispatch(
                'setFacilityID',
                this.$route.query.facility_flag
            )

            // 1ページ表示に表示件数設定
            this.$store.dispatch('setMaxCount', this.$route.query.displayed)
            this.preavoidsDateSort = this.$route.query.sort

            this.selectDispNumber = this.$route.query.sort
            if (this.$route.query.displayed == 20) {
                this.organizationCountSort = 0
            } else if (this.$route.query.displayed == 50) {
                this.organizationCountSort = 1
            }
            if (this.$route.query.displayed == 100) {
                this.organizationCountSort = 2
            }
            this.$store.dispatch('setSort', this.$route.query.sort)
            // ページネーション
            this.$store.dispatch('setPage', this.$route.query.page)
        },
        resetRouter() {
            let getTimestamp = new Date().getTime()
            let dispDetailNumber = 20

            if (this.organizationCountSort == 0) {
                dispDetailNumber = 20
            } else if (this.organizationCountSort == 1) {
                dispDetailNumber = 50
            } else if (this.organizationCountSort == 2) {
                dispDetailNumber = 100
            }
            // console.log("dispDetailNumber", dispDetailNumber)
            let params = {
                search: this.$store.getters.getSearchWord,
                dateFrom: this.$store.getters.getDateValueFrom,
                dateTo: this.$store.getters.getDateValueTo,
                styles: this.$store.getters.getStyles,
                facility_flag: this.$store.getters.getFacilityID,
                // displayed: this.$store.getters.getMaxCount,
                displayed: dispDetailNumber,
                sort: this.$store.getters.getSort,
                timestamp: getTimestamp,
            }
            this.$router.push({
                path: '/searchPreavoids',
                query: params,
            })
        },
        clickItem(val) {
            // this.dispFlg = !this.dispFlg
            console.log('aaa', val)
            this.$emit('clickItemEvent', val)
        },

        // mescrollInit(mescroll) {
        //   console.log('mescrollInit', mescroll)
        //   this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
        // },
        async upCallback(page, mescroll) {
            if (this.firsted) {
                console.log('upCallbackfirsted------------start------')
                this.params = this.$route.query
                Object.assign(this.params, this.$store.getters.getFilterBBS)
                Object.assign(this.params, {
                    order: this.singleSelectItem[0].value,
                })
                await this.doSearch()
                this.firsted = false
            } else {
                console.log('upCallbackSecond--------------start------')
                // 最後に到達
                // if (page.num > this.pagination.pages)
                //   return
                await this.doSearch(page.num)
                // this.$serve.getTest().then((response) => {
                //   let aa = response.data.details
                //   // this.postList = response.data.details
                //   this.postList = this.postList.concat(aa)
                //   this.$nextTick(() => {
                //     mescroll.endSuccess(this.postList.length)
                //   })
                // })
            }
            // this.$nextTick(() => {
            mescroll.endSuccess(
                this.postList.length,
                page.num < this.pagination.pages
            )
            console.log(
                'mescroll.endSuccess--------------end------',
                this.postList.length,
                page.num
            )
            // })
            this.mescroll = mescroll
        },
        async doSearch(pgNo = 1) {
            // console.log('doSearch', this.params, this.$store.getters.getOidcCode)
            const PAGE_LIMIT = 10
            Object.assign(this.params, { division: 'BBS' })
            const queryStringData = {
                page: 1,
                id: this.id,
                limit: PAGE_LIMIT,
            }

            const response = await this.$serve.getPostList(queryStringData)
            console.log('getPostList-result', response.data)
            if (pgNo == 1) {
                this.postList = this.formatPostList(response.data.data)
            } else {
                this.postList = this.postList.concat(response.data.data)
            }
            this.pagination = response.data.pagination
        },
        formatPostList(data) {
            let list = []
            for (let i = 0; i < data.length; i++) {
                console.log(data)
                console.log('item', data[i].post.feedback.viewed)
                let listDetail = {
                    id: data[i].post.id,
                    urlTitle: data[i].post.title,
                    title: data[i].post.content,
                    date: data[i].post.created_at,
                    group:
                        data[i].post.scope == 0
                            ? 'ownFacility'
                            : data[i].post.scope == 1
                            ? 'otherFacility'
                            : 'group',
                    viewCount: data[i].post.feedback.viewed,
                    notificationType: data[i].post.genre,
                    userName: data[i].post.user_data.user_name,
                    workplace: data[i].post.user_data.workplace,
                    commnetCount: data[i].post.commnet.length,
                    feedback: data[i].post.feedback,
                    tag: data[i].post.tag,
                    commnet: data[i].post.commnet,
                }
                list.push(listDetail)
            }
            console.log('list', list)
            return list
        },
    },
    created() {},
    mounted() {
        this.doSearch()
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
