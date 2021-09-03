<template>
    <!-- データ管理ボタン -->
    <div class="">
        <div
            class="
                relative
                rounded-full
                h-9
                w-9
                md:h-10
                md:w-10
                bg-personOrganizationButton
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
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
            </svg>
        </div>
        <!-- sp リスト マスクレイヤー -->
        <div
            class="block md:hidden mid:hidden"
            :class="{
                'fixed top-0 left-0 right-0 bottom-0 bg-lock z-75':
                    $store.getters.getManagementClick,
            }"
        >
            <div v-if="$store.getters.getManagementClick == true">
                <!-- リスト -->
                <div class="flex justify-center mt-12.5">
                    <div
                        class="
                            absolute
                            border-2 border-personOrganizationButton
                            bg-white
                            w-88.75
                            h-65
                        "
                        v-if="$store.getters.getManagementClick"
                    >
                        <div
                            v-for="item in $store.getters
                                .topManagementitemLists"
                            :key="item"
                            class="h-9 font-NotoSansJp cursor-pointer"
                        >
                            <div class="">
                                <div
                                    v-if="item.itemStyle == 'title'"
                                    class="
                                        bg-personOrganizationButton
                                        h-9
                                        pl-2.5
                                        flex
                                        items-center
                                        text-white
                                        font-light
                                    "
                                >
                                    {{ item.title }}
                                </div>
                                <div
                                    v-if="item.itemStyle == 'item'"
                                    class="
                                        border-t-2
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- pc リスト -->
        <div class="hidden md:block mid:hidden">
            <div class="flex justify-end">
                <div
                    class="
                        absolute
                        rounded-md
                        border-2 border-personOrganizationButton
                        bg-personOrganizationButton
                        w-37.5
                        mt-1
                    "
                    v-if="$store.getters.getManagementClick"
                >
                    <div
                        v-for="item in $store.getters.topPcManagementitemLists"
                        :key="item"
                        class="h-9 font-NotoSansJp cursor-pointer"
                    >
                        <div class="">
                            <div
                                v-if="item.itemStyle == 'title'"
                                class="
                                    h-9
                                    pl-2.5
                                    flex
                                    items-center
                                    text-white
                                    font-light
                                "
                            >
                                {{ item.title }}
                            </div>
                            <div
                                v-if="item.itemStyle == 'item'"
                                class="
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
  },
  methods: {
    clickDown() {
      this.$store.dispatch('setManagementClick', !this.$store.getters.getManagementClick
      )
    },
  }
}
</script>

<style>
</style>
