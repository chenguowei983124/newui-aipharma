<template>
    <div class="md:h-32">
        <logo> </logo>
    </div>
    <div class="flex flex-row">
        <div class="flex-auto h-20 hidden md:block">
            <search-bar class=""></search-bar>
        </div>

        <div
            class="flex-auto h-20 block md:hidden"
            :class="[
                $store.getters.getIsMenuClick ? 'mt-10' : 'fixed w-full top-16',
            ]"
        >
            <search-bar class=""></search-bar>
        </div>
        <div
            class="block md:hidden"
            :class="{ 'h-24 mt-10': !$store.getters.getIsMenuClick }"
        ></div>
    </div>

    <div class="flex mt-4 space-x-3.75">
        <div class="flex-grow truncate space-y-3.75">
            <div class="grid grid-cols-1 gap-1 space-y-3.75">
                <search-result-main
                    class="flex-grow truncate"
                ></search-result-main>
            </div>
        </div>
        <div class="flex-none w-0 md:w-50 hidden md:block">
            <!-- ユーザーの情報 -->
            <data-management-area></data-management-area>
        </div>
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
      isMenuOpen: true
    };
  },
  couputed: {},
  watch: {},
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
</style>

