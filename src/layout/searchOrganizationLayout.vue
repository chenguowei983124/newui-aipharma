<template>
    <div>
        <!-- 検索枠 -->
        <div class="group">
            <!-- pcの場合 -->
            <div class="fixed flex-auto pt-12.5 md:pt-15 md:top-0 z-20 md:z-20">
                <search-bar
                    ref="searchbar"
                    :form="$constant.formList.OWN"
                    @isOrgDetailClick="getOrgDetailClick"
                    @detailDisp="getScroll"
                    v-on:orgcheckId="orgcheckIdMsg"
                ></search-bar>
            </div>

            <!-- spの場合、ヘッダー、検索枠の位置を替える -->
            <div
                :class="[
                    isOrgDetailButtonClick
                        ? 'hidden group-hover:block h-56'
                        : 'hidden group-hover:block h-36',
                ]"
                v-if="!isScroll"
            ></div>
        </div>
        <div
            class=""
            :class="[
                isScroll
                    ? isOrgDetailButtonClick
                        ? 'h-65 md:h-88.75 '
                        : 'h-36 md:h-60 '
                    : isOrgDetailButtonClick
                    ? 'h-20 md:h-40 '
                    : 'h-20 md:h-40 ',
            ]"
        ></div>
        <!-- 内容 -->
        <div class="flex border-b-2 border-blue-200 mt-50 md:mt-10 md:h-18">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
            <div class="flex flex-col w-full md:w-191.25 justify-start">
                <div class="flex flex-row space-x-2 items-center">
                    <div
                        class="
                            text-googleTitle text-xl
                            md:text-2xl
                            font-NotoSansJp font-bold
                            flex-none
                            pl-2
                            md:pl-0
                        "
                    >
                        組織内 DI 記録（Q&A）
                    </div>
                    <div
                        class="
                            hidden
                            md:block
                            mid:block
                            text-sm
                            flex-none
                            font-NotoSansJp
                        "
                    >
                        トレンドタグ
                    </div>
                    <!-- @click="searchTag(item)" -->
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
                                cursor-pointer
                                mt-1.25
                            "
                            @click="searchTag(value.label)"
                            v-for="(value, key, index) in $store.getters
                                .getOrganizationSeartorenndoTab.torenndoTab"
                            :key="index"
                        >
                            #{{ value.label }}
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
                    <div>
                        <search-organization-main
                            ref="main"
                            v-on:listenToChildEvent="showMsgToParent"
                            :exeSearchRefishOpts="refishTagList"
                        ></search-organization-main>
                    </div>
                    <div>
                        <organization-init
                            v-on:listenToChildEvent="showMsgToParent"
                        ></organization-init>
                    </div>
                </div>
            </div>
            <div class="flex-grow max-h-full min-w-min block"></div>
        </div>
        <!-- good-message-box -->
        <div
            :class="[
                $store.getters.getGoodMessageBox
                    ? 'block mt-2 w-full fixed z-20 bottom-20 '
                    : 'hidden',
            ]"
        >
            <good-message-box></good-message-box>
        </div>
    </div>
</template>

<script>
// import CommentMessageBox from '../components/common/messageBox/commentMessageBox.vue'
import GoodMessageBox from '../components/common/messageBox/goodMessageBox.vue'
import searchBar from '../components/common/search/searchBar.vue'
import searchOrganizationMain from '../components/organization/searchOrganizationMain.vue'
import OrganizationInit from '../components/organization/organizationInit.vue'

export default {
  components: {
    // CommentMessageBox,
    GoodMessageBox,
    searchBar,
    searchOrganizationMain,
    OrganizationInit,
  },

  props: {},
  data() {
    return {
      // 詳細条件ボタン押下区分
      isOrgDetailButtonClick: true,
      isScroll: true,
      // すべて 選択
      isorgcheckIdMsg: ''
      //   isOrgDetailButtonClick: false,
    }
  },
  mounted() { },
  methods: {
    refishTagList() {
      if (Object.keys(this.$store.getters.getorgTagsList).length > 0) {
        this.$refs.searchbar.$refs.ownDetail.$refs.mult.refreshOptions()
      }
    },
    // ========================================
    // 詳細条件ボタン押下区分を取得
    // ========================================
    getOrgDetailClick: function (data) {
      this.isOrgDetailButtonClick = data
    },
    // スクロール
    getScroll: function (value) {
      this.isScroll = value
    },
    // ========================================
    // 詳細条件表示・非表示取得
    // ========================================
    // getDetailDisp: function (value) {
    //   this.isOrgDetailButtonClick = value
    // },

    // クリック タグ
    searchTag: function (value) {
      let tagsLable = this.$store.getters.getSearchTagsLable
      tagsLable.push(value)
      this.$store.dispatch('setSearchTagsLable', tagsLable)
      this.$refs.searchbar.$refs.ownDetail.$refs.mult.refreshOptions()
    },
    // init中 クリック タグ
    showMsgToParent: function (data) {
      this.searchTag(data)
    },
    // DropDown 選択したアイテムＩＤ取得
    orgcheckIdMsg: function (data) {
      this.isorgcheckIdMsg = data
    }
  },
  created() {
    let param = sessionStorage.getItem('searchParam')
    this.$store.dispatch(
      'setSearchWord',
      sessionStorage.getItem('searchWord')
    )
  },
}
</script>
