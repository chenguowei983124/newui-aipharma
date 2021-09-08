<template>
    <div class="flex h-full">
        <!-- 左青背景 -->
        <div
            class="
                bg-backgroundMainSearch
                flex-grow
                max-h-full
                min-w-min
                block
                h-full
            "
        ></div>
        <div class="bg-backgroundMainSearch md:w-191.25 h-full space-y-2 pt-2">
            <div class="bg-backgroundMainSearch flex items-center">
                <!-- 検索条件リスト -->
                <search-dropdown
                    @getCheckedId="getCheckId"
                    class="h-10 flex-none hidden md:block rounded-l"
                ></search-dropdown>

                <!-- 検索条件入力 -->
                <input
                    v-model="searchValue"
                    class="
                        h-10
                        md:ml-0
                        md:w-full
                        NotoSansJp-normal
                        text-xs
                        rounded-r
                    "
                    type="text"
                    placeholder="Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます"
                />
            </div>
            <div>
                <input
                    class="border-2 rounded w-full"
                    type="text"
                    placeholder="#タグ"
                />
            </div>
            <div
                class="space-y-2"
                :class="[isDetailClick ? 'block' : 'hidden']"
            >
                <div><input class="border-2 rounded w-full" type="text" /></div>
                <div><input class="border-2 rounded w-full" type="text" /></div>
                <div><input class="border-2 rounded w-full" type="text" /></div>
            </div>

            <div class="flex space-x-44 justify-end">
                <div class="flex space-x-2">
                    <button
                        class="
                            bg-personDataInfo
                            text-black
                            notoSansJpAndSixteenBold
                            w-28
                            h-8
                        "
                    >
                        条件をクリア
                    </button>
                    <button
                        class="
                            bg-searchBunnon
                            text-white
                            notoSansJpAndSixteenBold
                            w-28
                            h-8
                            flex flex-row
                            justify-center
                        "
                    >
                        <div class="mt-1">検索</div>
                        <search-svg class="mt-1"></search-svg>
                    </button>
                </div>
                <div
                    class="
                        flex
                        items-center
                        border-2 border-white
                        text-white text-center
                        notoSansJpAndFourteenRegular
                        w-24
                        h-8
                        pl-2.5
                        space-x-1
                    "
                    @click="detailBottunClick"
                >
                    <div>詳細条件</div>

                    <triangle-down-svg
                        :class="[isDetailClick ? 'transform rotate-180' : '']"
                        fill="#ffffff"
                        stroke="#ffffff"
                    ></triangle-down-svg>
                </div>
            </div>
        </div>
        <!-- 右青背景 -->
        <div
            class="bg-backgroundMainSearch flex-grow max-h-full min-w-min block"
        ></div>
    </div>
</template>

<script>
import searchDropdown from './searchDropdown.vue'
import searchSvg from '../svgImage/searchSvg.vue'
import TriangleDownSvg from '../svgImage/triangleDownSvg.vue'


export default {
  components: { searchDropdown, searchSvg, TriangleDownSvg },
  data() {
    return {
      searchValue: '',
      checkId: '',
      isDetailClick: false
    }

  },
  methods: {

    // ========================================
    // 詳細条件クリックイベント
    // ========================================
    detailBottunClick: function (event) {
      this.isDetailClick = !this.isDetailClick
      this.$emit("isDetailClick", this.isDetailClick)
    },
    // ========================================
    // 検索ボタン押下イベント
    // ========================================
    searchClick: function (event) {

      // すべて
      if (this.checkId == 1) {
        // 検索APIを呼び出し(画面入力値)
        this.$store.dispatch('searchAll', this.searchValue)

        // 一括検索結果画面へ遷移
        this.$router.push('/searchResultAll')
      }
      // DI ナレッジシェア
      else if (this.checkId == 2) {
        this.$router.push('/searchResultAll')
      }
      // 組織内 DI 記録（Q&A）
      else if (this.checkId == 3) {
        this.$router.push('/searchOrganization')
      }
      // 病例（プレアボイド）
      else if (this.checkId == 4) {
        this.$router.push('/searchOrganization')
      }
      // DI 辞書
      else if (this.checkId == 5) {
        this.$router.push('/searchOrganization')
      }
      // 製薬企業情報
      else if (this.checkId == 6) {
        this.$router.push('/searchOrganization')
      }

      // this.$router.push('/searchResultAll')
    },
    // ========================================
    // DropDown 選択したアイテムＩＤ取得
    // ========================================
    getCheckId(data) {
      this.checkId = data
    }
  }
}
</script>

<style>
</style>
