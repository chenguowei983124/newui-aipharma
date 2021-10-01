<template>
    <!-- 検索枠 -->
    <div class="flex">
        <!-- pcの場合 -->
        <div
            class="flex-auto hidden md:block mid:block"
            :class="[isDetailButtonClick ? 'h-54' : 'h-24']"
        >
            <search-bar
                @isDetailClick="getDetailClick"
                :form="$constant.formList.PVD"
            ></search-bar>
        </div>
        <!-- SPの場合 -->
        <div class="flex-auto h-30 block md:hidden mid:hidden">
            <div
                :class="[
                    $store.getters.getIsMenuClick
                        ? 'mt-12.5'
                        : 'fixed w-full top-12.5 z-20',
                ]"
            >
                <search-bar @isDetailClick="getDetailClick"></search-bar>
            </div>
        </div>
        <!-- spの場合、ヘッダー、検索枠の位置を替える -->
        <div
            class="block md:hidden mid:hidden"
            :class="[isDetailButtonClick ? 'h-65' : 'h-40']"
        ></div>
    </div>
    <div class="flex border-b-2 border-blue-200 mt-20 md:mt-5 md:h-20">
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div class="flex flex-col justify-center">
            <div class="flex flex-row space-x-2">
                <div class="text-googleTitle notoSansJpAndTwentyBold">症例</div>
                <div class="hidden md:block mid:block">トレンドタグ</div>
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
                        hidden
                        md:block
                        mid:block
                    "
                    v-for="item in torenndoTab"
                    :key="item"
                >
                    {{ item }}
                </div>
            </div>
        </div>
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
    </div>

    <div class="flex pt-8">
        <div class="flex-grow max-h-full min-w-min block"></div>

        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-270">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-preavoids-main></search-preavoids-main>
            </div>
        </div>

        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
    <div
        class="block mid:hidden md:hidden"
        :class="[
            $store.getters.getGoodMessageBox
                ? 'block mt-2 w-full fixed z-20 bottom-20'
                : 'hidden',
        ]"
    >
        <good-message-box></good-message-box>
    </div>
    <div
        :class="[
            $store.getters.getCommentMessageBox
                ? 'block fixed w-full top-1/4 z-99'
                : 'hidden',
        ]"
    >
        <!-- <div class="bg-blue-400">464645646465</div> -->
        <comment-message-box class=""></comment-message-box>
    </div>
</template>

<script>
import CommentMessageBox from '../components/messageBox/commentMessageBox.vue'
import GoodMessageBox from '../components/messageBox/goodMessageBox.vue'
import searchBar from '../components/search/searchBar.vue'
import searchPreavoidsMain from "../components/searchPreavoids/searchPreavoidsMain.vue"

export default {
  components: {
    CommentMessageBox,
    GoodMessageBox, searchBar, searchPreavoidsMain
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

