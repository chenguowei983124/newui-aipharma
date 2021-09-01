<template>
    <div class="flex flex-row">
        <div class="flex-auto h-15 md:h-20 hidden md:block">
            <search-bar class=""></search-bar>
        </div>

        <div
            class="flex-auto h-15 md:h-20 block md:hidden"
            :class="[
                $store.getters.getIsMenuClick
                    ? 'mt-12.5 fixed w-full top-12.5'
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
    <div class="w-25 h-full bg-red-400">sdas</div>
    <div
        class="
            flex
            ml-2.5
            mr-2.5
            md:ml-0
            md:mr-0
            md:space-x-3.75
            md:pl-37.5
            md:pr-37.5
            md:pt-12.5
        "
    >
        <div class="flex-grow truncate space-y-3.75">
            <div class="flex-col">
                <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                    <search-result-main
                        class="flex-grow truncate"
                    ></search-result-main>
                </div>
            </div>
        </div>
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

