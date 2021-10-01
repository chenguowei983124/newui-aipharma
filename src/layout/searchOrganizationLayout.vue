<template>
    <!-- 検索枠 -->
    <div class="flex">
        <!-- pcの場合 -->
        <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-0">
            <search-bar
                :form="$constant.formList.OWN"
                @detailDisp="getDetailDisp"
                @isDetailClick="getDetailClick"
            ></search-bar>
        </div>

        <div class="h-65"></div>
    </div>
    <!-- 内容 -->
    <div class="flex border-b-2 border-blue-200 mt-33.5 md:mt-5 md:h-20">
        <!-- 左 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div class="flex flex-col w-full md:w-191.25 justify-center">
            <div class="flex flex-row space-x-2 items-center">
                <div
                    class="
                        text-googleTitle
                        notoSansJpAndTwentyBold
                        font-black
                        flex-none
                        pl-2
                        md:pl-0
                    "
                >
                    組織内 DI 記録（Q&A）
                </div>
                <div class="hidden md:block mid:block text-sm flex-none">
                    トレンドタグ
                </div>
                <div class="flex flex-wrap space-x-1">
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
        </div>
        <!-- 右 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
    </div>
    <div class="flex pt-8">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <!-- :class="[
                        $store.getters.getIsOrganizationSearch
                            ? 'block'
                            : 'hidden',
                    ]" -->
                <div>
                    <search-organization-main></search-organization-main>
                </div>
                <!-- <div>465456</div> -->
                <div><organization-init></organization-init></div>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
    <!-- good-message-box -->
    <div
        :class="[
            $store.getters.getGoodMessageBox
                ? 'block mt-2 w-full fixed z-20 bottom-20'
                : 'hidden',
        ]"
    >
        <good-message-box></good-message-box>
    </div>
    <!-- comment-message-box -->
    <div
        :class="[
            $store.getters.getCommentMessageBox
                ? 'block fixed w-full top-1/4 z-99'
                : 'hidden',
        ]"
    >
        <comment-message-box class=""></comment-message-box>
    </div>
</template>

<script>
import CommentMessageBox from '../components/messageBox/commentMessageBox.vue'
import GoodMessageBox from '../components/messageBox/goodMessageBox.vue'
import searchBar from '../components/search/searchBar.vue'
import searchOrganizationMain from "../components/organization/searchOrganizationMain.vue"
import OrganizationInit from '../components/organization/organizationInit.vue'

export default {
  components: {
    CommentMessageBox,
    GoodMessageBox, searchBar, searchOrganizationMain, OrganizationInit
  },

  props: {},
  data() {
    return {
      isMenuOpen: true,
      isDetailButtonClick: false,
      torenndoTab: ["#ロキソニン", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ"]
    };
  },
  methods: {
    // ========================================
    // 詳細条件ボタン押下区分を取得
    // ========================================
    getDetailClick: function (data) {
      this.isDetailButtonClick = data
    },
    // ========================================
    // 詳細条件表示・非表示取得
    // ======================================== 
    getDetailDisp: function (value) {
      console.log(value)
      this.detailDisp = value
    }
  },
  created() {

  }
}
</script>

