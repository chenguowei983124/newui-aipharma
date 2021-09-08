<template>
    <!-- 検索枠 -->
    <div class="flex">
        <!-- pcの場合 -->
        <div
            class="flex-auto hidden md:block"
            :class="[isDetailButtonClick ? 'h-60 md:h-60' : 'h-36 md:h-36']"
        >
            <search-bar @isDetailClick="getDetailClick"></search-bar>
        </div>

        <!-- SPの場合 -->
        <div
            class="flex-auto h-15 md:h-20 block md:hidden"
            :class="[
                $store.getters.getIsMenuClick
                    ? 'mt-12.5 fixed w-full top-12.5'
                    : 'fixed w-full top-12.5',
            ]"
        >
            <search-bar></search-bar>
        </div>
        <!-- spの場合、ヘッダー、検索枠の位置を替える -->
        <div
            class="block md:hidden"
            :class="[$store.getters.getIsMenuClick ? '' : 'h-27.5']"
        ></div>
    </div>
    <div class="flex border-b-2 border-blue-200 h-20">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex flex-col justify-center">
            <div class="flex flex-row space-x-2">
                <div class="text-googleTitle notoSansJpAndTwentyBold">
                    組織内 DI 記録（Q&A）
                </div>
                <div>トレンドタグ</div>
                <div
                    class="
                        rounded-full
                        border-2 border-gray-400
                        bg-gray-100
                        h-6
                        notoSansJpAndTwelveRegular
                        pl-1
                        pr-1
                        text-center
                    "
                    v-for="item in torenndoTab"
                    :key="item"
                >
                    {{ item }}
                </div>
            </div>
        </div>

        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>

    <div class="flex pt-8">
        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>

        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-organization-main></search-organization-main>
            </div>
        </div>

        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import searchBar from '../components/search/searchDetail.vue'
import searchOrganizationMain from "../components/organization/searchOrganizationMain.vue"

export default {
  components: {
    searchBar, searchOrganizationMain
  },
  props: {},
  data() {
    return {
      isMenuOpen: true,
      isDetailButtonClick: false,
      torenndoTab: ["#ロキソニン", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ"]
    };
  },
  methods: {
    // ========================================
    // 詳細条件ボタン押下区分を取得
    // ========================================
    getDetailClick: function (data) {

      this.isDetailButtonClick = data
    }
  },
  created() {

  }
}
</script>

