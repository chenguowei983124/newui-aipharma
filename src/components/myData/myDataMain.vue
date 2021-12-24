<template>
    <div>
        <div class="flex border-b-2 border-unlineblue">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
            <div class="flex flex-col w-full md:w-191.25 mx-2 md:mx-0">
                <div class="flex justify-between pb-5 md:pb-3">
                    <div class="pt-4">
                        <div
                            class="
                                text-googleTitle
                                notoSansJpAndTwentyBlack
                                md:notoSansJpAndTwentyFourBold
                                lm:notoSansJpAndTwentyFourBold
                                md:text-2xl
                            "
                        >
                            マイデータ
                        </div>
                    </div>
                    <div class="pt-5">
                        <div class="flex justify-center">
                            <button
                                class="
                                    orangeButtonColors
                                    rounded-md
                                    notoSansJpAndFourteenBold
                                    text-white text-center
                                    w-29.5
                                    h-8
                                    flex
                                    items-center
                                    px-3
                                    space-x-1
                                "
                                @click="onChange"
                            >
                                <div>
                                    <div>マイページ</div>
                                </div>
                                <div>
                                    <mypage-mydata-change
                                        fill="rgb(255, 255, 255)"
                                        stroke="rgb(255, 255, 255)"
                                        class="w-3 h-3 mt-0.5"
                                    ></mypage-mydata-change>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
        <div class="flex">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>

            <!-- 中央 -->
            <div
                class="w-full"
                :class="[
                    $route.path === '/myData/org' ? 'md:w-191.25' : 'md:w-245',
                ]"
            >
                <div class="flex justify-center">
                    <div class="md:w-191.25">
                        <!-- 機能切替ボタン -->
                        <div class="flex mt-5">
                            <div class="flex justify-center">
                                <button
                                    class="
                                        mydataGrayButtonColors
                                        notoSansJpAndFourteenBold
                                        rounded-md
                                        w-45
                                        h-10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                    :class="[
                                        $route.path === '/myData/org'
                                            ? 'bg-notice'
                                            : 'bg-grayline',
                                    ]"
                                    @click="onOrgClick"
                                >
                                    <div>
                                        <my-data-btn-org
                                            class="w-6 h-6 mr-2"
                                        ></my-data-btn-org>
                                    </div>
                                    <div>
                                        <div>所属内DI 記録</div>
                                    </div>
                                </button>
                            </div>
                            <div class="flex justify-center ml-4">
                                <button
                                    class="
                                        mydataGrayButtonColors
                                        rounded-md
                                        notoSansJpAndFourteenBold
                                        w-45
                                        h-10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                    @click="onPvdClick"
                                    :class="[
                                        $route.path === '/myData/pvd'
                                            ? 'bg-notice'
                                            : 'bg-grayline',
                                    ]"
                                >
                                    <div>
                                        <my-data-btn-pvd
                                            class="w-5 h-6 mr-2"
                                        ></my-data-btn-pvd>
                                    </div>
                                    <div>
                                        <div>症例（プレアボイド）</div>
                                    </div>
                                </button>
                            </div>
                            <div class="flex justify-center ml-4">
                                <button
                                    class="
                                        mydataGrayButtonColors
                                        notoSansJpAndFourteenBold
                                        rounded-md
                                        w-45
                                        h-10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                    @click="onBbsClick"
                                    :class="[
                                        $route.path === '/myData/bbs'
                                            ? 'bg-notice'
                                            : 'bg-grayline',
                                    ]"
                                >
                                    <div>
                                        <my-data-btn-bbs
                                            class="w-8.5 h-6.5 mr-2"
                                        ></my-data-btn-bbs>
                                    </div>
                                    <div>
                                        <div>掲示板</div>
                                    </div>
                                </button>
                            </div>
                            <div class="flex justify-center ml-4">
                                <button
                                    class="
                                        mydataGrayButtonColors
                                        notoSansJpAndFourteenBold
                                        rounded-md
                                        w-45
                                        h-10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                    :class="[
                                        $route.path === '/myData/list'
                                            ? 'bg-notice'
                                            : 'bg-grayline',
                                    ]"
                                    @click="onListClick"
                                >
                                    <div>
                                        <my-data-btn-list
                                            class="w-9 h-5 mr-2"
                                        ></my-data-btn-list>
                                    </div>
                                    <div>
                                        <div>下書き一覧</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <!-- 検索バー -->
                        <div
                            class="
                                bg-backgroundMainSearch
                                items-center
                                flex
                                mt-5
                                p-2
                            "
                        >
                            <!-- pc -->
                            <input
                                v-model="inputKeyword"
                                class="
                                    h-10
                                    w-full
                                    notoSansJpAndTwelveRegular
                                    flex-grow
                                    pl-4
                                    placeholder-gray-500
                                    focus:placeholder-opacity-0
                                    rounded-none
                                    border-transparent
                                    focus:border-transparent
                                    focus:outline-none
                                    focus:ring-1
                                    focus:ring-326EB5Lins
                                "
                                @keydown.enter="searchClick"
                                type="text"
                                placeholder="キーワード"
                                @input="input"
                            />
                            <!-- 検索ボタン -->
                            <button
                                class="
                                    border-b-2 border-personInformationButton
                                    bg-searchBunnon
                                    hover:bg-top
                                    active:bg-personInformationButton
                                    text-white
                                    rounded-none rounded-r-sm
                                    md:rounded-none md:rounded-tr md:rounded-br
                                    w-10
                                    md:w-17.5
                                    h-10
                                    flex-none
                                "
                                @click="searchClick"
                                :class="' ' + '  '"
                            >
                                <!-- 検索ボタンのアイコン -->
                                <div class="flex justify-center h-6">
                                    <search-svg class="h-6 w-6"></search-svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <my-data-organinzation
                        :freeword="inputKeyword"
                        v-if="$route.path === '/myData/org'"
                    ></my-data-organinzation>
                    <my-data-preavoids
                        :freeword="inputKeyword"
                        v-if="$route.path === '/myData/pvd'"
                    ></my-data-preavoids>
                    <my-data-bbs-main
                        :freeword="inputKeyword"
                        v-if="$route.path === '/myData/bbs'"
                    ></my-data-bbs-main>
                    <my-data-list
                        :freeword="inputKeyword"
                        v-if="$route.path === '/myData/list'"
                    ></my-data-list>
                </div>
            </div>

            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
    </div>
</template>

<script>
import externalLink from '../common/svgImage/extarnalLink.vue'
import iconRight from '../common/svgImage/iconRight.vue'
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import searchSvg from '../common/svgImage/searchSvg.vue'
import myDataOrganinzation from './myDataOrganinzation.vue'
import mypageMydataChange from '../../components/common/svgImage/mypageMydataChange.vue'
import myDataBtnOrg from '../../components/common/svgImage/myDataBtnOrg.vue'
import myDataBtnPvd from '../../components/common/svgImage/myDataBtnPvd.vue'
import myDataBtnBbs from '../../components/common/svgImage/myDataBtnBbs.vue'
import myDataBtnList from '../../components/common/svgImage/myDataBtnList.vue'
import myDataPreavoids from './myDataPreavoids.vue'
import myDataBbsMain from './myDataBbsMain.vue'
import myDataList from './myDataList.vue'
export default {
  components: {
    externalLink,
    iconRight,
    TriangleDownSvg,
    searchSvg,
    myDataOrganinzation,
    myDataPreavoids,
    mypageMydataChange,
    myDataBtnOrg,
    myDataBtnPvd,
    myDataBtnBbs,
    myDataBtnList,
    myDataBbsMain,
    myDataList
  },
  props: {},
  data() {
    return { inputKeyword: '' }
  },
  computed: {},
  watch: {
    $route: function () {
      if (this.$route.path === '/myData/org' ||
        this.$route.path === '/myData/pvd' ||
        this.$route.path === '/myData/bbs' ||
        this.$route.path === '/myData/list') {
        this.inputKeyword = this.$route.query.search

      }


    },
  },
  methods: {
    // マイページに遷移
    onChange() {
      this.$router.push('/myPage')
    },
    // 所属内に遷移
    onOrgClick() {
      this.$router.push('/myData/org')
    },
    // 症例に遷移
    onPvdClick() {
      this.$router.push('/myData/pvd')
    },
    // 掲示板に遷移
    onBbsClick() {
      this.$router.push('/myData/bbs')
    },
    // 下書き一覧に遷移
    onListClick() {
      this.$router.push('/myData/list')
    },
    // 検索ボタン押下
    searchClick() {
      let params = {
        search: this.inputKeyword,
        timestamp: new Date().getTime(),
      }
      this.$router.push({
        path: localStorage.getItem("to"),
        query: params,
      })
    }
  },
  mounted() {
    // キーワード設定
    if (localStorage.getItem("from") === '/myPage' || localStorage.getItem("from") === '/myHome') {
      this.inputKeyword = ""
    } else {
      this.inputKeyword = this.$route.query.Keyword
    }
    this.searchClick()
  },
}
</script>
<style scoped></style>
