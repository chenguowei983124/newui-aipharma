<template>
    <div class="mid:h-32">
        <logo> </logo>
    </div>

    <div class="flex">
        <div class="flex-grow w-25 max-h-full min-w-min hidden mid:block"></div>
        <div class="flex-grow mid:flex-shrink">
            <div class="flex flex-row">
                <div
                    class="
                        fixed
                        md:static
                        w-full
                        md:flex-auto
                        top-12.5
                        md:top-0
                        z-30
                        md:z-0
                    "
                >
                    <search-bar
                        :form="$constant.formList.TOP"
                        class="mid:rounded-lg"
                    ></search-bar>
                </div>

                <div
                    class="block md:hidden h-24"
                    :class="[$store.getters.getIsMenuClick ? '' : '']"
                ></div>
            </div>
            <!-- ユーザー数｜施設数 -->
            <div
                class="
                    flex
                    justify-center
                    mt-6
                    md:mt-2.5
                    text-view text-xs
                    font-NotoSansJp
                "
            >
                <span class="">ユーザー数</span>
                <span class="mx-1">:</span>
                <span class="mr-4">123456</span>
                <span class="border-l border-pageblue"></span>
                <span class="ml-4">施設数</span>
                <span class="mx-1">:</span>
                <span class="">12345</span>
            </div>
            <div class="flex ml-2.5 mr-2.5 md:ml-0 md:mr-0 mt-0 md:mt-2.5">
                <div
                    class="flex-grow mid:hidden w-0 max-h-full min-w-min"
                ></div>
                <div class="flex-shrink w-full md:w-191.25 space-y-3.75">
                    <div class="grid grid-cols-1 gap-1 md:space-y-3.75">
                        <search-result-main
                            class="flex-grow truncate"
                        ></search-result-main>
                        <div class="flex justify-center bg-gray_e6e6e6">
                            <top-chatbot-banner
                                class="block mid:hidden"
                            ></top-chatbot-banner>
                        </div>
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
                    <top-chatbot-banner></top-chatbot-banner>
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
import searchBar from '../components/common/search/searchBar.vue'
import dataManagementArea from '../components/home/dataManagementArea.vue'
import topChatbotBanner from '../components/home/topChatbotBanner.vue'
import searchResultMain from '../components/home/searchResultMain.vue'

export default {
    components: {
        searchBar,
        logo,
        dataManagementArea,
        topChatbotBanner,
        searchResultMain,
    },
    props: {},
    data() {
        return {
            isMenuOpen: true,
        }
    },
    watch: {},
    methods: {},
    created() {
        if (
            !!import.meta.env.VITE_APP_IS_OIDC_AUTH &&
            import.meta.env.VITE_APP_IS_OIDC_AUTH == 'true'
        ) {
            if (!!this.$route.params.code) {
                this.$store.dispatch('setOidcCode', this.$route.params.code)
            }
        } else {
            this.$store.dispatch('setOidcCode', '')
        }
    },
}
</script>
<style scoped></style>
