<template>
    <!-- 検索枠 -->
    <div class="flex">
        <!-- pcの場合 -->
        <div
            class="fixed flex-auto w-full pt-12.5 md:pt-15 md:top-0 z-20 md:z-0"
        >
            <search-bar :form="$constant.formList.ALL"></search-bar>
        </div>

        <!-- spの場合、ヘッダー、検索枠の位置を替える -->
        <div class="h-27.5 md:h-40"></div>
    </div>

    <div class="flex">
        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>

        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                <search-result-main class="flex-grow"></search-result-main>
            </div>
        </div>

        <!-- 検索結果両側の左余白 -->
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import searchBar from '../components/common/search/searchBar.vue'
import searchResultMain from '../components/searchResultAll/searchResultMain.vue'

export default {
    components: {
        searchBar,
        searchResultMain,
    },
    props: {},
    data() {
        return {
            isMenuOpen: true,
        }
    },
    methods: {},
    created() {},
}
</script>
