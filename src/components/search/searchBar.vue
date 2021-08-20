<template>
    <div
        class="
            md:mx-10
            md:rounded-md
            bg-backgroundMainSearch
            flex
            justify-center
            h-full
        "
    >
        <!-- 検索条件リスト -->
        <search-dropdown class="my-4 hidden md:block"></search-dropdown>

        <!-- 検索条件入力 -->
        <input
            v-model="searchValue"
            class="border-2 w-10/12 md:w-2/3 my-4 NotoSansJp-normal text-xs"
            type="text"
            placeholder="   Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます"
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
                w-8
                md:w-20
                h-8
            "
        >
            <!-- 検索ボタンのアイコン -->
            <div class="flex justify-center h-6">
                <img src="../../assets/image/search.svg" />
            </div>
        </button>
        <!-- </router-link> -->
    </div>
</template>

<script>
import searchDropdown from './searchDropdown.vue'


export default {
  components: { searchDropdown },
  data() {
    return {
      searchValue: ''
    }

  },
  methods: {
    searchClick: function (event) {
      this.$store.dispatch('saveSearchValue', this.searchValue)

      this.$router.push('/searchAllResult')
    }
  }
}
</script>

<style>
</style>
