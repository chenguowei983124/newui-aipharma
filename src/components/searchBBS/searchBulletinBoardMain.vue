<template>
    <!-- <div class="w-full pt-12 h-191.25 ">aa</div> -->
    <!-- <div class="mx-auto pt-12 h-312.5" id="div_postList"> -->

    <div class="mx-auto h-screen-60 md:h-screen-70" id="div_postList">
        <div class="flex justify-end mb-2">
            <vue-single-select
                class="w-42.5"
                :name="'patientGenderList'"
                :default-value="'created_at-desc'"
                :default-input-attribs="{ tabindex: 1 }"
                :default-options="singleSelectItem"
                @selected="doSort"
                :leftLableDisp="false"
                buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                  border border-transparent focus:outline-none"
            ></vue-single-select>
        </div>
        <mescroll-vue class="overflow-y-scroll" ref="mescroll" :up="mescrollUp">
            <div class="relative mb-8">
                <div class="">
                    <div v-for="(article, index) in postList" :key="index">
                        <result-detail-row
                            class="searchResult_bbsDetail_blue mt-2"
                            :row="article"
                            :itemClick="clickItem"
                        >
                        </result-detail-row>
                    </div>
                </div>
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
            singleSelectItem: [
                { value: 'created_at-desc', title: '投稿日が新しい順' },
                { value: 'created_at-asc', title: '投稿日が古い順' },
            ],

            mescroll: null,
            //mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
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
        async doSearch(pgNo = 1) {
            // console.log('doSearch', this.params, this.$store.getters.getOidcCode)
            const PAGE_LIMIT = 10
            Object.assign(this.params, { division: 'BBS' })
            console.log('watch', this.params)
            const queryStringData = {
                page: pgNo,
                limit: PAGE_LIMIT,
                filter: this.params,
            }
            // this.$serve.getPostList(queryStringData).then((response) => {
            //   console.log('getPostList-result', response.data)
            //   if (pgNo == 1) {
            //     this.postList = response.data.data
            //   } else {
            //     this.postList = this.postList.concat(response.data.data)
            //   }
            //   this.pagination = response.data.pagination
            // })
            const response = await this.$serve.getPostList(queryStringData)
            console.log('getPostList-result', response.data)
            if (pgNo == 1) {
                this.postList = this.formatPostList(response.data.data)
            } else {
                this.postList = this.formatPostList(response.data.data)
            }
            this.pagination = response.data.pagination
        },
        formatPostList(data) {
            let list = this.postList
            console.log('formatPostList', list)
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
                }
                list.push(listDetail)
            }

            return list
        },
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
    },
    created() {},
    mounted() {
        this.$store.getters.getBBSDropDowninfo
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
