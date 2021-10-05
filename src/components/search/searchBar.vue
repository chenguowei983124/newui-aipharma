<template>
    <div class="group relative h-full z-99">
        <div :class="searchBarFixedClass">
            <div :class="searchBarStyleCless">
                <!-- 左青背景 -->
                <div :class="searchBarProStyleClass"></div>
                <!-- 中青背景 -->
                <div :class="searchBarMidStyleClass">
                    <div :class="searchBarClass">
                        <!-- 検索条件リスト -->
                        <search-dropdown
                            @getCheckedId="getCheckId"
                            :checkedID="Number(checkId)"
                            class="h-10 flex-none hidden md:block"
                        ></search-dropdown>

                        <!-- 検索条件入力 -->
                        <!-- sp -->
                        <!--  -->
                        <input
                            v-model="searchValue"
                            @change="getNewInput($event)"
                            :class="sreachBarSPInputClass"
                            type="text"
                            :placeholder="pcPlaceholder"
                        />
                        <!-- pc -->
                        <input
                            v-model="searchValue"
                            @change="getNewInput($event)"
                            :class="sreachBarPCInputClass"
                            type="text"
                            :placeholder="pcPlaceholder"
                        />

                        <!-- 検索ボタン -->
                        <button
                            @click="searchClick"
                            :class="sreachBarButtonClass"
                        >
                            <!-- 検索ボタンのアイコン -->
                            <div class="flex justify-center h-6">
                                <search-svg></search-svg>
                            </div>
                        </button>
                    </div>
                    <div
                        :class="
                            detailDisp ? 'block' : 'hidden group-hover:block'
                        "
                        v-if="checkId == 1 && form != $constant.formList.TOP"
                    >
                        <search-di-knowledge
                            :searchButtonClick="searchClick"
                        ></search-di-knowledge>
                    </div>
                    <!-- 組織内DI記録詳細条件 -->
                    <div
                        :class="
                            detailDisp ? 'block' : 'hidden group-hover:block '
                        "
                        v-if="checkId == 2 && form != $constant.formList.TOP"
                    >
                        <search-detail
                            @tagValue="getOwnTagValue"
                            :searchButtonClick="searchClick"
                        ></search-detail>
                    </div>

                    <!-- 症例詳細条件 -->
                    <div
                        :class="
                            detailDisp ? 'block' : 'hidden group-hover:block'
                        "
                        v-if="checkId == 3 && form != $constant.formList.TOP"
                    >
                        <search-preavoids
                            :searchButtonClick="searchClick"
                        ></search-preavoids>
                    </div>
                </div>
                <!-- 右青背景 -->
                <div :class="searchBarProStyleClass"></div>
            </div>
        </div>
    </div>
</template>

<script>
import searchDropdown from './searchDropdown.vue'
import searchSvg from '../svgImage/searchSvg.vue'
import searchDetail from './searchDetail.vue'
import searchDiKnowledge from './searchDiKnowledge.vue'
import searchPreavoids from './searchPreavoids.vue'

export default {
  components: {
    searchDropdown, searchSvg, searchDetail,
    searchDiKnowledge, searchPreavoids
  },
  props: {
    form: {
      type: String,
      default: "TOP"
    },
    searchValue: {
      type: String,
      default: ""
    },
    searchbarSelectID: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: "",
      checkId: this.searchbarSelectID,
      detailDisp: true,
      ownTagVaule: []
    }

  },
  watch: {
    checkId: function () {
      this.$emit("searchID", this.checkId)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu)
    if (this.$props.form == this.$constant.formList.TOP) {
      this.checkId = 0
    } else if (this.$props.form == this.$constant.formList.ALL) {
      this.checkId = 0
    } else if (this.$props.form == this.$constant.formList.DI) {
      this.checkId = 1
    } else if (this.$props.form == this.$constant.formList.OWN) {
      this.checkId = 2
    } else if (this.$props.form == this.$constant.formList.PVD) {
      this.checkId = 3
    }
  },
  destroyed() {
    document.removeEventListener("scroll", this.menu);
  },
  computed: {
    searchBarFixedClass: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return ""
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "fixed w-full lm:w-270"
      } else if (this.$props.form == this.$constant.formList.DI) {
        return "fixed w-full lm:w-270"
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return "fixed w-full lm:w-270"
      } else if (this.$props.form == this.$constant.formList.PVD) {
        return "fixed w-full lm:w-270"
      }
    },
    searchBarClass: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return "flex "
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "flex "
      } else if (this.$props.form == this.$constant.formList.DI) {
        return "flex"
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return "flex"
      } else if (this.$props.form == this.$constant.formList.PVD) {
        return "flex"
      }
    },
    searchBarStyleCless: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return "bg-backgroundMainSearch flex rounded-none mid:rounded-md items-center h-full pt-2.5 pb-2.5 md:pt-5 md:pb-5"
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "bg-backgroundMainSearch flex items-center h-full pt-2.5 pb-2.5 md:pt-5 md:pb-5"
      } else if (this.$props.form == this.$constant.formList.DI) {
        return "bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 "
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return "bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 "
      } else if (this.$props.form == this.$constant.formList.PVD) {
        return "bg-backgroundMainSearch flex justify-center items-center h-full w-full pt-2.5 pb-2.5 "
      }
    },
    searchBarProStyleClass: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return "bg-red-400 flex-grow"
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "bg-red-400 flex-grow"
      } else if (this.$props.form == this.$constant.formList.DI) {
        return "hidden"
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return "hidden"
      } else if (this.$props.form == this.$constant.formList.PVD) {
        return "hidden"
      }
    },
    searchBarMidStyleClass: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return "bg-backgroundMainSearch h-full w-full md:w-191.25 rounded-b-lg md:rounded-none"
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "bg-backgroundMainSearch h-full w-full md:w-191.25 rounded-b-lg md:rounded-none"
      } else if (this.$props.form == this.$constant.formList.DI) {
        return " flex-grow md:flex-none  h-full w-191.25 bg-backgroundMainSearch    "
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return " flex-grow md:flex-none  h-full w-191.25 bg-backgroundMainSearch    "
      } else if (this.$props.form == this.$constant.formList.PVD) {
        return " flex-grow md:flex-none  h-full w-191.25 bg-backgroundMainSearch    "
      }
    },

    pcPlaceholder: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return "Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます"
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます"
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return "キーワードを入力"
      }
    },

    sreachBarPCInputClass: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return "hidden md:block  h-10 w-10/12  " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent "
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "hidden md:block  h-10 w-10/12  " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent "
      } else if (this.$props.form == this.$constant.formList.DI) {
        return "hidden md:block  h-10 w-10/12  " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent "
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return "hidden md:block  h-10 w-10/12  " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent "
      } else if (this.$props.form == this.$constant.formList.PVD) {
        return "hidden md:block  h-10 w-10/12  " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent "
      }
    },
    sreachBarSPInputClass: function () {
      if (this.$props.form == this.$constant.formList.TOP) {
        return "block md:hidden h-10 w-10/12 ml-2.5 " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent "
      } else if (this.$props.form == this.$constant.formList.ALL) {
        return "block md:hidden h-10 w-10/12 ml-2.5 " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent "
      } else if (this.$props.form == this.$constant.formList.DI) {
        return "block md:hidden h-10 w-10/12 ml-2.5 " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent mr-2.5"
      } else if (this.$props.form == this.$constant.formList.OWN) {
        return "block md:hidden h-10 w-10/12 ml-2.5 " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent mr-2.5"
      } else if (this.$props.form == this.$constant.formList.PVD) {
        return "block md:hidden h-10 w-10/12 ml-2.5 " +
          "notoSansJpAndTwelveRegular flex-grow pl-4 placeholder-gray-500 " +
          "focus:placeholder-opacity-0 border border-transparent focus:outline-none focus:ring-1 focus:ring-326EB5Lins " +
          "focus:border-transparent mr-2.5"
      }

    },
    sreachBarButtonClass: function () {
      if (this.$props.form != this.$constant.formList.TOP && this.checkId != 0) {
        return "hidden"
      } else {
        return "bg-searchBunnon hover:bg-yellow-400 active:opacity-100 active:bg-personInformationButton" +
          "text-white  md:rounded-tr md:rounded-br w-10  md:w-17.5 h-10 flex-none mr-2.5"

      }

    }

  },
  methods: {
    getOwnTagValue: function (value) {
      this.ownTagVaule = value
    },
    getNewInput: function (e) {

      console.log(this.searchValue)
      this.$emit("searchInput", e.target.value)
    },
    menu: function () {
      console.log(this.detailDisp)
      console.log(this.srcoll)
      this.srcoll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (this.srcoll > 0) {
        this.detailDisp = false
      } else {
        this.detailDisp = true
      }
      this.$emit("detailDisp", this.detailDisp)

    },
    // ========================================
    // 検索ボタン押下イベント
    // ========================================
    searchClick: function (event) {
      console.log(this.ownTagVaule)
      // すべて
      if (this.checkId == 0) {
        // 検索APIを呼び出し(画面入力値)
        this.$store.dispatch('saveSearchValue', this.searchValue)

        // 一括検索結果画面へ遷移
        this.$router.push('/searchResultAll')
      }
      // DI ナレッジシェア
      else if (this.checkId == 1) {
        this.$store.dispatch('getdIKnowledgeShareSearchInfo', { inputSearchValue: this.searchValue, tagValue: this.ownTagVaule })
        this.$router.push('/searchDiKnowledge')
      }
      // 組織内 DI 記録（Q&A）
      else if (this.checkId == 2) {
        if (this.$props.form == this.$constant.formList.TOP) {
          this.$store.dispatch('searchOrganization', this.searchValue, this.ownTagVaule)
          this.$router.push('/searchOrganization')
        } else {
          console.log(this.ownTagVaule)
          this.$store.dispatch('getOrganizationSearchInfo', { inputSearchValue: this.searchValue, tagValue: this.ownTagVaule })
          // this.$store.dispatch('getOrganizationSearchInfo')
        }


      }
      // 症例（プレアボイド）
      else if (this.checkId == 3) {
        this.$router.push('/searchPreavoids')
      }
      // DI 辞書
      else if (this.checkId == 4) {
        this.$router.push('/searchOrganization')
      }
      // 製薬企業情報
      else if (this.checkId == 5) {
        this.$router.push('/searchOrganization')
      }

    },
    // ========================================
    // DropDown 選択したアイテムＩＤ取得
    // ========================================
    getCheckId(value) {
      this.checkId = value
    }
  }
}
</script>

<style>
</style>
