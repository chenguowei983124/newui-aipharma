<template>
    <div class="mid:h-32">
        <logo> </logo>
    </div>
    <div class="flex">
        <div class="flex-grow w-25 max-h-full min-w-min hidden mid:block"></div>
        <div class="flex-grow mid:flex-shrink">
            <div class="flex flex-row">
                <div class="flex-auto h-15 md:h-20 hidden md:block">
                    <!-- <search-bar class="mid:rounded-md"></search-bar> -->
                    <search-bar
                        @searchInput="getSearchInput"
                        @searchID="getsearchBarSelectID"
                        :searchValue="searchInput"
                        :searchbarSelectID="Number(searchBarSelectId)"
                        class="mid:rounded-lg"
                    ></search-bar>
                </div>

                <div
                    class="flex-auto h-15 md:h-20 block md:hidden"
                    :class="[
                        $store.getters.getIsMenuClick
                            ? 'mt-12.5'
                            : 'fixed w-full top-12.5 z-20',
                    ]"
                >
                    <!-- <search-bar class="mid:rounded-md"></search-bar> -->
                    <search-bar
                        @searchInput="getSearchInput"
                        @searchID="getsearchBarSelectID"
                        :searchValue="searchInput"
                        :searchbarSelectID="Number(searchBarSelectId)"
                        class="mid:rounded-lg"
                    ></search-bar>
                </div>
                <div
                    class="block md:hidden"
                    :class="[$store.getters.getIsMenuClick ? '' : 'h-24']"
                ></div>
            </div>

            <div class="flex ml-2.5 mr-2.5 md:ml-0 md:mr-0 mt-2.5 md:mt-4">
                <div
                    class="flex-grow mid:hidden w-0 max-h-full min-w-min"
                ></div>
                <div class="flex-shrink w-full md:w-191.25 space-y-3.75">
                    <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                        <search-result-main
                            class="flex-grow truncate"
                        ></search-result-main>
                    </div>
                </div>
                <div
                    class="
                        ml-3.75
                        mid:block
                        flex-none
                        w-0
                        md:w-50
                        hidden
                        md:hidden
                    "
                >
                    <!-- ユーザーの情報 -->
                    <data-management-area></data-management-area>
                </div>
                <div
                    class="flex-grow mid:hidden w-0 max-h-full min-w-min"
                ></div>
            </div>
        </div>
        <div class="flex-grow w-25 max-h-full min-w-min hidden mid:block"></div>
    </div>
</template>

<script>
import logo from '../components/home/logo.vue'
import searchBar from '../components/search/searchBar.vue'
import dataManagementArea from '../components/home/dataManagementArea.vue'
import searchResultMain from "../components/home/searchResultMain.vue"

export default {
  components: {
    searchBar, logo, dataManagementArea, searchResultMain
  },
  props: {},
  data() {
    return {
      isMenuOpen: true,
      searchInput: "",
      searchBarSelectId: 0

    };
  },
  couputed: {},
  watch: {},
  methods: {
    getSearchInput: function (value) {
      this.searchInput = value
    },
    getsearchBarSelectID: function (value) {
      this.searchBarSelectId = value
    }
  },
  created() {

  }
}
</script>
<style scoped>
</style>

