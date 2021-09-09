<template>
    <div class="bg-backgroundMainSearch flex items-center h-full">
        <!-- 検索条件リスト -->
        <search-dropdown
            @getCheckedId="getCheckId"
            class="h-10 md:ml-32 flex-none hidden md:block"
        ></search-dropdown>

        <!-- 検索条件入力 -->
        <!-- sp -->
        <input
            v-model="searchValue"
            class="
                block
                md:hidden
                mid:hidden
                h-10
                w-10/12
                ml-2.5
                my-4
                NotoSansJp-normal
                text-xs
                flex-grow
                pl-4
                placeholder-gray-500
                focus:placeholder-opacity-0
                border border-transparent
                focus:outline-none
                focus:ring-1 focus:ring-326EB5Lins
                focus:border-transparent
            "
            type="text"
            placeholder="キーワードを入力"
        />
        <!-- pc -->
        <input
            v-model="searchValue"
            class="
                hidden
                md:block
                mid:block
                h-10
                w-10/12
                ml-2.5
                md:ml-0
                md:w-full
                my-4
                NotoSansJp-normal
                text-xs
                flex-grow
                pl-4
                placeholder-gray-500
                focus:placeholder-opacity-0
                border border-transparent
                focus:outline-none
                focus:ring-1 focus:ring-326EB5Lins
                focus:border-transparent
            "
            type="text"
            placeholder="Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます"
        />

        <!-- 検索ボタン -->
        <!-- <router-link class="h-12" to="/searchAllResult"> -->
        <button
            @click="searchClick"
            class="
                bg-searchBunnon
                hover:bg-yellow-400
                active:opacity-100
                active:bg-personInformationButton
                text-white
                md:rounded-tr-lg md:rounded-br-lg
                my-4
                w-10
                md:w-17.5
                h-10
                md:mr-32
                flex-none
                mr-2.5
            "
        >
            <!-- 検索ボタンのアイコン -->
            <div class="flex justify-center h-6">
                <search-svg></search-svg>
            </div>
        </button>
        <!-- </router-link> -->
    </div>
</template>

<script>
import searchDropdown from './searchDropdown.vue'
import searchSvg from '../svgImage/searchSvg.vue'


export default {
  components: { searchDropdown, searchSvg },
  data() {
    return {
      searchValue: '',
      checkId: '1'
    }

  },
  methods: {
    // ========================================
    // 検索ボタン押下イベント
    // ========================================
    searchClick: function (event) {
      // すべて
      if (this.checkId == 1) {
        // 検索APIを呼び出し(画面入力値)
        this.$store.dispatch('saveSearchValue', this.searchValue)

        // 一括検索結果画面へ遷移
        this.$router.push('/searchResultAll')
      }
      // DI ナレッジシェア
      else if (this.checkId == 2) {

        this.$router.push('/searchResultAll')
      }
      // 組織内 DI 記録（Q&A）
      else if (this.checkId == 3) {
        this.$store.dispatch('searchOrganization', this.searchValue)
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
