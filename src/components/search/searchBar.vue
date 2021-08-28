<template>
    <div class="md:rounded-md bg-backgroundMainSearch flex items-center h-full">
        <!-- 検索条件リスト -->
        <search-dropdown
            class="h-10 md:ml-32 flex-none hidden md:block"
        ></search-dropdown>

        <!-- 検索条件入力 -->
        <input
            v-model="searchValue"
            class="
                border-2
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
      searchValue: ''
    }

  },
  methods: {
    searchClick: function (event) {
      this.$store.dispatch('saveSearchValue', this.searchValue)

      this.$router.push('/searchResultAll')
    }
  }
}
</script>

<style>
</style>
