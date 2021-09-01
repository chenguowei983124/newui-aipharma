<template>
    <div class="">
        <header class="flex h-15 flex-row">
            <div class="w-48">
                <!-- メニューリスト -->
                <menu-dropdown-item :isDispaly="true"></menu-dropdown-item>
            </div>
            <div class="w-24 border-l-2 border-gray-400 h-12 my-2">
                <!-- 人像 -->
                <div class="flex justify-center items-center space-x-2">
                    <div
                        class="
                            rounded-full
                            h-12
                            w-12
                            bg-backgroundMainSearch
                            flex
                            justify-center
                            items-center
                        "
                    >
                        <div class="text-white notoSansJpAndFourteen font-bold">
                            {{
                                $store.getters.topManagementInfo.name.substring(
                                    0,
                                    2
                                )
                            }}
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div
                            class="
                                whitespace-nowrap
                                flex
                                items-center
                                cursor-pointer
                            "
                            @click="isDown = !isDown"
                        >
                            <icon-down
                                class="ml-2"
                                v-if="isDown == true"
                            ></icon-down>
                            <icon-down
                                class="ml-2 transform rotate-180"
                                v-if="isDown == false"
                            ></icon-down>
                        </div>
                        <!-- リスト -->
                        <div
                            class="
                                absolute
                                border-2 border-gray-400
                                rounded-md
                                bg-white
                                w-28
                                my-8
                                p-2
                            "
                            v-if="!isDown"
                        >
                            <div v-for="item in itemUserList" :key="item">
                                <div v-for="value in item" :key="value">
                                    <a
                                        class="
                                            text-black
                                            font-bold
                                            hover:text-searchDropdown
                                        "
                                    >
                                        {{ value.title }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto flex-col">
                <div class="h-8 py-2">
                    <div
                        class="flex space-x-2 items-baseline whitespace-nowrap"
                    >
                        <a class="font-NotoSansJp font-bold text-base">
                            {{ $store.getters.topManagementInfo.name }}</a
                        >
                        <a class="font-NotoSansJp font-normal text-xs">
                            {{
                                $store.getters.topManagementInfo.title ==
                                'doctor'
                                    ? '先生'
                                    : ''
                            }}</a
                        >
                        <a class="font-NotoSansJp font-normal text-xs">
                            {{ $store.getters.topManagementInfo.hospital }}
                        </a>
                    </div>
                </div>
                <div class="h-8">
                    <div
                        class="
                            w-16
                            block
                            bg-backgroundMainSearch
                            text-white
                            font-NotoSansJp font-medium
                            text-xs text-center
                            px-2
                            py-1
                        "
                    >
                        {{ $store.getters.topManagementInfo.authority }}
                    </div>
                </div>
            </div>
            <div class="w-30 flex justify-center items-center space-x-2">
                <!-- 投稿ボタン -->
                <div class="">
                    <div
                        class="
                            h-12
                            w-12
                            rounded-full
                            bg-personInformationButton
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                        "
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
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                    </div>
                </div>
                <!-- データ管理ボタン -->
                <div class="flex justify-end">
                    <div
                        class="
                            rounded-full
                            w-12
                            h-12
                            pt-1
                            pl-1.5
                            bg-personOrganizationButton
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                        "
                        @click="isSelect = !isSelect"
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
                    <div
                        class="
                            absolute
                            mt-14
                            border-2 border-personOrganizationButton
                            bg-white
                            w-88.75
                            h-65
                        "
                        v-if="isSelect"
                    >
                        <div
                            v-for="item in itemList"
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
                <!-- <dataManagerDropdownList class="my-3"></dataManagerDropdownList> -->
            </div>

            <div class="md:w-30 mid:w-40">
                <div class="flex justify-end cursor-pointer mt-5 mr-12.5">
                    <div class="underline font-NotoSansJp text-sm">ヘルプ</div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import menuDropdownItem from './dropdown/menuDropdown.vue'
import iconDown from "./svgImage/iconDown.vue"
export default {
  components: { menuDropdownItem, iconDown },
  props: {},
  data() {
    return {
      isDown: true,
      isSelect: false,
      sites: [{ id: 0, name: '木村 太郎', age: '先生', hospital: '◯◯◯◯◯◯◯◯◯◯大学病院', authority: '管 理 者', },
      ],
      itemUserList: [
        [{ 'id': '1', 'title': 'マイページ' }],
        [{ 'id': '2', 'title': '施設切替' }],
        [{ 'id': '3', 'title': '設定' }],
        [{ 'id': '4', 'title': 'ログアウト' }]
      ],
      itemList: [
        { 'id': '1', 'title': 'データ登録', 'itemStyle': 'title' },
        { 'id': '2', 'title': '組織内DI 記録（Q&A）登録', 'itemStyle': 'item' },
        { 'id': '3', 'title': '症例（プレアボイド）登録', 'itemStyle': 'item' },
        { 'id': '4', 'title': 'マイデータ', 'itemStyle': 'title' },
        { 'id': '5', 'title': '組織内DI 記録（Q&A）', 'itemStyle': 'item' },
        { 'id': '6', 'title': '症例（プレアボイド）', 'itemStyle': 'item' },
        { 'id': '7', 'title': '下書き一覧', 'itemStyle': 'item' },
      ]
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
