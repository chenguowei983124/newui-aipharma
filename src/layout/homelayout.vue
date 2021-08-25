<template>
    <div class="md:h-32">
        <logo> </logo>
    </div>
    <div class="flex flex-row">
        <div class="flex-auto h-15 md:h-20 hidden md:block">
            <search-bar class=""></search-bar>
        </div>

        <div
            class="flex-auto h-15 md:h-20 block md:hidden"
            :class="[
                $store.getters.getIsMenuClick
                    ? 'mt-12.5'
                    : 'fixed w-full top-12.5',
            ]"
        >
            <search-bar class=""></search-bar>
        </div>
        <div
            class="block md:hidden"
            :class="[$store.getters.getIsMenuClick ? '' : 'h-27.5']"
        ></div>
    </div>

    <div
        class="
            flex
            ml-2.5
            mr-2.5
            md:ml-0
            md:mr-0
            mt-2.5
            md:mt-4
            md:space-x-3.75
        "
    >
        <div class="flex-grow truncate space-y-3.75">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
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

    <button
        class="
            fixed
            h-15
            w-15
            bottom-5
            right-5
            bg-toTop
            text-white
            rounded-full
            md:hidden
        "
        @click="toTop"
    >
        ▲
    </button>
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
    toTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6)

      function frame() {
        if (0 > currentScroll) {

          clearInterval(int)
        } else {
          currentScroll = currentScroll - 12
          document.documentElement.scrollTop = currentScroll
        }
      }
    }
  },
  created() {

  }
}
</script>
<style scoped>
</style>

