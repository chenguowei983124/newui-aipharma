<template>
    <!-- 検索枠 -->
    <div class="flex">
        <!-- pcの場合 -->
        <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
            <!-- @detailDisp="getDetailDisp" -->
            <search-bar
                :form="$constant.formList.PVD"
                @isDetailClick="getDetailClick"
            ></search-bar>
        </div>

        <!-- spの場合、ヘッダー、検索枠の位置を替える -->
        <div class="h-50 md:h-52.5"></div>
    </div>
    <div class="flex border-b-2 border-blue-200 mt-20 md:mt-5 h-10 md:h-15">
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div class="flex w-full md:w-191.25 justify-between pr-2 md:pr-0">
            <div
                class="
                    text-googleTitle
                    notoSansJpAndTwentyBold
                    font-black
                    flex-none
                    pl-2
                    md:pl-0
                    w-12
                "
            >
                症例
            </div>
            <div class="flex flex-row space-x-2">
                <button
                    class="
                        rounded
                        border-b-2 border-pink-800
                        bg-pink-600
                        text-white
                        notoSansJpAndFourteenMedium
                        w-17
                        h-7.5
                        px-1
                    "
                >
                    症例登録
                </button>
                <button
                    class="
                        rounded
                        border-b-2 border-blue-900
                        bg-blue-700
                        text-white
                        notoSansJpAndFourteenMedium
                        w-20
                        h-7.5
                        px-1
                    "
                >
                    下書き一覧
                </button>
                <button
                    class="
                        rounded
                        border-b-2 border-blue-900
                        bg-blue-700
                        text-white
                        notoSansJpAndFourteenMedium
                        w-13
                        h-7.5
                        px-1
                    "
                >
                    入出力
                </button>
            </div>
        </div>
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
    </div>
    <!-- 内容 -->
    <div class="flex pt-8">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-1 ml-1 w-full md:w-245">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-preavoids-main></search-preavoids-main>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
    <!-- トレンドタグ -->
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
                <div>{{ 'トレンドタグ' }}</div>
                <div class="flex flex-wrap mt-2">
                    <div
                        class="
                            h-6
                            notoSansJpAndTwelveRegular
                            pl-1
                            pr-1
                            text-center
                            mr-1
                            cursor-pointer
                            underline
                        "
                        @click="sendMsgToParent(item)"
                        v-for="item in $store.getters
                            .getOrganizationSeartorenndoTab.torenndoTab"
                        :key="item"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import searchBar from '../components/common/search/searchBar.vue'
import searchPreavoidsMain from "../components/searchPreavoids/searchPreavoidsMain.vue"

export default {
  components: {
    searchBar, searchPreavoidsMain
  },
  props: {},
  data() {
    return {
      isMenuOpen: true,
      isDetailButtonClick: false,
    };
  },
  methods: {
    // 詳細条件ボタン押下区分を取得
    getDetailClick: function (data) {

      this.isDetailButtonClick = data
    }
  },
  created() {

  }
}
</script>

