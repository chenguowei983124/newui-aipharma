<template>
    <!-- データ管理ボタン -->
    <div class="">
        <div
            class="
                relative
                rounded-full
                h-9
                w-9
                md:h-10 md:w-10
                bg-personOrganizationButton
                active:opacity-50
                hover:opacity-50
                flex
                items-center
                justify-center
                cursor-pointer
            "
            @click="clickDown"
            :class="{
                'z-99': $store.getters.getManagementClick,
            }"
        >
            <svg
                id="_211012_ai_pharma_parts"
                data-name="211012_ai_pharma_parts"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
                class="h-5 w-5"
            >
                <path
                    class="cls-1"
                    d="M43.41,11.9,32.1.59a2,2,0,0,0-2.83,0L3.41,26.44l0,0a.39.39,0,0,0-.08.1,1.61,1.61,0,0,0-.21.3A.67.67,0,0,0,3,27a1.79,1.79,0,0,0-.16.44v0h0L0,41.61a2,2,0,0,0,.55,1.8A2,2,0,0,0,2,44a1.72,1.72,0,0,0,.39,0l14.14-2.83A1.93,1.93,0,0,0,17,41l.12-.06a1.61,1.61,0,0,0,.3-.21l.1-.08,0,0L43.41,14.73A2,2,0,0,0,43.41,11.9Zm-36,27L5.11,36.63l.95-4.72,1,1,5.07,5.07Zm8.77-2.55L7.66,27.86l23-23,8.48,8.48Z"
                />
            </svg>
        </div>
        <!-- sp リスト マスクレイヤー -->
        <div class="block md:hidden mid:hidden">
            <div
                :class="{
                    'fixed top-0 left-0 right-0 bottom-0 windowBackground z-75':
                        $store.getters.getManagementClick,
                }"
                @click="blankClickDown"
            >
                <div v-if="$store.getters.getManagementClick == true">
                    <!-- リスト -->
                    <div class="flex justify-center mt-12.5">
                        <div
                            class="absolute w-88.75"
                            v-if="$store.getters.getManagementClick"
                        >
                            <div
                                v-for="item in $constant.managementitemList"
                                :key="item"
                                class="h-9 font-NotoSansJp cursor-pointer"
                            >
                                <div class="">
                                    <div
                                        :class="[
                                            item.title == 'データ登録'
                                                ? 'rounded-t border-t-2 border-personOrganizationButton'
                                                : '',
                                        ]"
                                        v-if="item.itemStyle == 'title'"
                                        class="
                                            bg-personOrganizationButton
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
                                                item.title == '下書き一覧'
                                                    ? 'rounded-b border-b-2'
                                                    : '',
                                            ]"
                                            class="
                                                border-b-2
                                                border-l-2
                                                border-r-2
                                                border-personOrganizationButton
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
        </div>
        <!-- pc リスト -->
        <div class="hidden md:block mid:block">
            <div
                :class="{
                    'absolute top-0 left-0 right-0 bottom-0 z-75':
                        $store.getters.getManagementClick,
                }"
                @click="blankClickDown"
            >
                <div v-if="$store.getters.getManagementClick == true">
                    <div class="flex justify-end my-13 md:mr-28 mid:mr-37.5">
                        <div
                            class="w-40 mt-1"
                            v-if="$store.getters.getManagementClick"
                        >
                            <div
                                v-for="item in $constant.managementPcitemList"
                                :key="item"
                                class="h-9 font-NotoSansJp cursor-pointer"
                            >
                                <div class="">
                                    <div
                                        :class="[
                                            item.title == 'データ登録'
                                                ? 'rounded-t border-t-2 border-personOrganizationButton'
                                                : '',
                                        ]"
                                        v-if="item.itemStyle == 'title'"
                                        class="
                                            bg-personOrganizationButton
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
                                                border-personOrganizationButton
                                                h-9
                                                pl-2.5
                                                flex
                                                items-center
                                                font-light
                                            "
                                            :class="[
                                                item.title == '下書き一覧'
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
        blankClickDown() {
            if (this.$store.getters.getManagementClick) {
                this.clickDown()
            }
        },
        clickDown() {
            this.$store.dispatch(
                'setManagementClick',
                !this.$store.getters.getManagementClick
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
