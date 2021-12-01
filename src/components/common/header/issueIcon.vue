<template>
    <!-- 投稿ボタン -->
    <div>
        <div
            class="
                relative
                rounded-full
                h-9
                w-9
                md:w-10
                md:h-10
                bg-personInformationButton
                active:opacity-50
                hover:opacity-50
                flex
                justify-center
                items-center
                cursor-pointer
            "
            @click="clickDown"
            :class="{
                'z-99': $store.getters.getIssueIconClick,
            }"
        >
            <svg
                id="_211012_ai_pharma_parts"
                data-name="211012_ai_pharma_parts"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46 46"
                class="h-6 w-6"
            >
                <path
                    class="cls-1"
                    d="M43.55,45.56a2.32,2.32,0,0,1-.52-.07L32.66,42.71A22.3,22.3,0,0,1,7,7,22.28,22.28,0,0,1,38.51,7,22.41,22.41,0,0,1,42.7,32.66L45.48,43A2,2,0,0,1,45,45,2,2,0,0,1,43.55,45.56ZM22.74,4.44A18.3,18.3,0,0,0,9.8,35.68a18.4,18.4,0,0,0,21.67,3.14,2,2,0,0,1,1.47-.18l7.78,2.09L38.64,33a2,2,0,0,1,.17-1.48,18.29,18.29,0,0,0-16.07-27ZM14.38,20.78A2.22,2.22,0,1,0,16.61,23,2.22,2.22,0,0,0,14.38,20.78Zm8.61,0A2.22,2.22,0,1,0,25.22,23,2.22,2.22,0,0,0,23,20.78Zm8.62,0A2.22,2.22,0,1,0,33.83,23,2.22,2.22,0,0,0,31.61,20.78Z"
                />
            </svg>
        </div>
        <!-- sp リスト マスクレイヤー -->
        <div
            class="block md:hidden mid:hidden"
            :class="{
                'fixed top-0 left-0 right-0 bottom-0 bg-lock z-75':
                    $store.getters.getIssueIconClick,
            }"
            @click="clickDown"
        >
            <div v-if="$store.getters.getIssueIconClick == true">
                <div class="flex justify-center mt-12.5">
                    <div
                        class="absolute w-88.75"
                        v-if="$store.getters.getIssueIconClick"
                    >
                        <div
                            v-for="(item, index) in $constant.issueIconitemList"
                            :key="index"
                            class="h-9 font-NotoSansJp cursor-pointer"
                        >
                            <div class="">
                                <div
                                    v-if="item.itemStyle == 'title'"
                                    class="
                                        bg-personInformationButton
                                        rounded-t
                                        h-9
                                        pl-2.5
                                        flex
                                        items-center
                                        text-white
                                        font-medium
                                    "
                                >
                                    {{ item.title }}
                                </div>
                                <router-link
                                    v-if="item.itemStyle == 'item'"
                                    :to="{
                                        path: item.routerPath,
                                    }"
                                >
                                    <div
                                        :class="[
                                            index + 1 == $constant.issueIconitemList.length
                                            ? 'rounded-b'
                                            : '',
                                        ]"
                                        class="
                                            border-b-2
                                            border-l-2
                                            border-r-2
                                            border-personInformationButton
                                            bg-yellow-50
                                            h-9
                                            pl-2.5
                                            flex
                                            items-center
                                            font-light
                                        "
                                    >
                                        {{ item.title }}
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- pc リスト -->
        <div
            :class="{
                'absolute top-0 left-0 right-0 bottom-0 z-75':
                    $store.getters.getIssueIconClick,
            }"
            @click="clickDown"
        >
            <div v-if="$store.getters.getIssueIconClick == true">
                <div class="hidden md:block mid:block">
                    <div class="flex justify-end my-13 md:mr-40 mid:mr-50">
                        <div
                            class="w-37.5 mt-1"
                            v-if="$store.getters.getIssueIconClick"
                        >
                            <div
                                v-for="(item, index) in $constant.issueIconitemList"
                                :key="index"
                                class="h-9 font-NotoSansJp cursor-pointer"
                            >
                                <div class="">
                                    <div
                                        v-if="item.itemStyle == 'title'"
                                        class="
                                            rounded-t
                                            bg-personInformationButton
                                            h-9
                                            pl-2.5
                                            flex
                                            items-center
                                            text-white
                                            font-medium
                                        "
                                    >
                                        {{ item.title }}
                                    </div>
                                    <router-link
                                        v-if="item.itemStyle == 'item'"
                                        :to="{
                                            path: item.routerPath,
                                        }"
                                    >
                                        <div
                                            class="
                                                bg-yellow-50
                                                border-r-2
                                                border-l-2
                                                border-personInformationButton
                                                h-9
                                                pl-2.5
                                                flex
                                                items-center
                                                font-light
                                            "
                                            :class="[
                                                index + 1 == $constant.issueIconitemList.length
                                                ? 'rounded-b border-b-2'
                                                : '',
                                            ]"
                                        >
                                            <div
                                                class="
                                                    hover:opacity-50
                                                    active:opacity-50
                                                "
                                            >
                                                {{ item.title }}
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    clickDown() {
      this.$store.dispatch(
        'setIssueIconClick',
        !this.$store.getters.getIssueIconClick
      )
    },
  },
}
</script>

<style scoped>
.cls-1 {
    fill: #fff;
}
</style>
