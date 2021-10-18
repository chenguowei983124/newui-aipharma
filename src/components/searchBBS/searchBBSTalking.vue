<template>
    <div class="container mx-auto pt-12 h-191.25">
        <div class="w-121">
            <div class="flex justify-between h-10 border-b-2 border-blueline">
                <div class="">スレッド</div>
                <div class="h-10 w-10" @click="closeClick">
                    <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                x1="8.042%"
                                y1="0%"
                                x2="65.682%"
                                y2="23.865%"
                                id="a"
                            >
                                <stop
                                    stop-color="#fff"
                                    stop-opacity="0"
                                    offset="0%"
                                />
                                <stop
                                    stop-color="#fff"
                                    stop-opacity=".631"
                                    offset="63.146%"
                                />
                                <stop stop-color="#fff" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)">
                                <path
                                    d="M36 18c0-9.94-8.06-18-18-18"
                                    id="Oval-2"
                                    stroke="url(#a)"
                                    stroke-width="2"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 18 18"
                                        to="360 18 18"
                                        dur="0.9s"
                                        repeatCount="indefinite"
                                    />
                                </path>
                                <circle fill="#fff" cx="36" cy="18" r="1">
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 18 18"
                                        to="360 18 18"
                                        dur="0.9s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>
                        </g>
                    </svg>
                    <x-icon-svg class="bg-blue-400"></x-icon-svg>
                </div>
            </div>
        </div>

        <mescroll-vue
            class="mt-2 h-96"
            ref="mescroll"
            :down="mescrollDown"
            :up="mescrollUp"
            @init="mescrollInit"
        >
            <div class="relative overflow-hidden mb-8">
                <!-- bg-gradient-to-r
                        from-indigo-50
                        to-indigo-100 -->
                <div class="overflow-hidden">
                    <!-- <div
                        class="
                            w-full
                            bg-local bg-cover bg-center
                            overflow-y-scroll
                        "
                    > -->
                    <div
                        class="h-20 border-2 bg-yellow-100"
                        v-for="(article, index) in articles"
                        :key="index"
                        @click="clickItem"
                    >
                        <div>{{ article }}</div>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
        </mescroll-vue>
        <tinymce-edit></tinymce-edit>
    </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
import XIconSvg from '../common/svgImage/xIconSvg.vue'
import tinymceEdit from '../newOrgDIRecord/tinymceEdit.vue'
export default {
    components: { MescrollVue, XIconSvg, tinymceEdit },
    props: {},
    data() {
        return {
            mescroll: null, // mescroll实例对象
            mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
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
                    warpId: 'xxid', //父布局的id (1.3.5版本支持传入dom元素)
                    icon: './static/mescroll/mescroll-empty.png', //图标,默认null,支持网络图
                    tip: '暂无相关数据~', //提示
                },
            },
            articles: [], // 列表数据
            dispFlg: false,
        }
    },
    beforeRouteEnter(to, from, next) {
        // 如果没有配置顶部按钮或isBounce,则beforeRouteEnter不用写
        next((vm) => {
            // 滚动到原来的列表位置,恢复顶部按钮和isBounce的配置
            vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
        })
    },
    beforeRouteLeave(to, from, next) {
        // 如果没有配置顶部按钮或isBounce,则beforeRouteLeave不用写
        // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
        this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
        next()
    },
    watch: {},
    methods: {
        closeClick() {
            console.log('100')
            this.$emit('close', false)
        },
        clickItem() {
            this.dispFlg = !this.dispFlg
        },

        mescrollInit(mescroll) {
            this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
        },
        upCallback(page, mescroll) {
            console.log('aa')
            this.$serve.getTest().then((response) => {
                let aa = response.data.details
                // this.articles = response.data.details
                this.articles = this.articles.concat(aa)
                this.$nextTick(() => {
                    mescroll.endSuccess(this.articles.length)
                })
            })
            // 联网请求
            // axios
            //     .get('xxxxxx', {
            //         params: {
            //             num: page.num, // 页码
            //             size: page.size, // 每页长度
            //         },
            //     })
            //     .then((response) => {
            //         // 请求的列表数据
            //         let arr = response.data
            //         // 如果是第一页需手动置空列表
            //         if (page.num === 1) this.dataList = []
            //         // 把请求到的数据添加到列表
            //         this.dataList = this.dataList.concat(arr)
            //         // 数据渲染成功后,隐藏下拉刷新的状态
            //         this.$nextTick(() => {
            //             mescroll.endSuccess(arr.length)
            //         })
            //     })
            //     .catch((e) => {
            //         // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
            //         mescroll.endErr()
            //     })
        },
        getDetail() {
            this.$serve.getTest().then((response) => {
                this.articles = response.data.details
            })
            console.log(this.articles)
        },
        // handleScrolledToBottem() {
        //     console.log(this.articles)
        // },
    },
    mounted() {
        // this.getDetail()
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
