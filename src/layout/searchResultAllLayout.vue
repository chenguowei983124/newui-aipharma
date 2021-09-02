<template>
    <div class="flex flex-row">
        <div class="flex-auto h-15 md:h-20 hidden md:block">
            <search-bar></search-bar>
        </div>

        <div
            class="flex-auto h-15 md:h-20 block md:hidden"
            :class="[
                $store.getters.getIsMenuClick
                    ? 'mt-12.5 fixed w-full top-12.5'
                    : 'fixed w-full top-12.5',
            ]"
        >
            <search-bar></search-bar>
        </div>
        <div
            class="block md:hidden"
            :class="[$store.getters.getIsMenuClick ? '' : 'h-27.5']"
        ></div>
    </div>
    <div class="flex">
        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>

        <div class="lex-shrink w-full md:w-191.25 space-y-3.75">
            <div class="flex-grow space-y-3.75">
                <div class="flex-col">
                    <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                        <search-result-main
                            class="flex-grow"
                        ></search-result-main>
                    </div>
                </div>
            </div>
        </div>

        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import searchBar from '../components/search/searchBar.vue'
import searchResultMain from "../components/searchResultAll/searchResultMain.vue"

export default {
  components: {
    searchBar, searchResultMain
  },
  props: {},
  data() {
    return {
      isMenuOpen: true
    };
  },
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

