<template>
    <div>
        <div class="flex justify-end items-center space-x-2">
            <div class="">
                <div
                    v-if="isDown == false"
                    class="
                        rounded-full
                        h-9
                        w-9
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
            </div>
            <div class="whitespace-nowrap flex items-center">
                <img
                    class="h-3 cursor-pointer"
                    src="../../assets/image/selectTriangle-down.svg"
                    alt=""
                    @click="linkClickDown"
                    v-if="isDown == false"
                />
            </div>
            <!-- 投稿ボタン -->
            <div class="">
                <div
                    class="
                        h-9
                        w-9
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
            <div class="">
                <div
                    class="
                        rounded-full
                        w-9
                        h-9
                        pt-1
                        pl-1.5
                        bg-personOrganizationButton
                        cursor-pointer
                    "
                    @click="linkClickSelect"
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
            </div>
        </div>
        <!-- 三角 マスクレイヤー -->
        <div
            :class="{
                'fixed top-0 left-0 right-0 bottom-0 bg-lock z-99': isDown,
            }"
        >
            <div
                v-if="isDown == true"
                class="flex justify-end items-center space-x-2 mt-2.5 mr-2"
            >
                <div class="">
                    <div
                        class="
                            rounded-full
                            h-9
                            w-9
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
                </div>
                <div class="whitespace-nowrap flex items-center">
                    <img
                        class="h-3 cursor-pointer transform rotate-180"
                        src="../../assets/image/selectTriangle-down.svg"
                        alt=""
                        @click="linkClickDown"
                    />
                </div>

                <!-- 投稿ボタン -->
                <div class="invisible">
                    <div
                        class="
                            h-9
                            w-9
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
                <div class="invisible">
                    <div
                        class="
                            rounded-full
                            w-9
                            h-9
                            pt-1
                            pl-1.5
                            bg-personOrganizationButton
                            cursor-pointer
                        "
                        @click="linkClickSelect"
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
                </div>
            </div>
            <!-- リスト -->
            <div class="flex justify-center mt-2">
                <div
                    class="border-2 border-black bg-white w-88.75 h-82.5"
                    v-if="isDown"
                >
                    <div class="h-42.5 space-y-1.5">
                        <div class="bg-white flex justify-center">
                            <div
                                class="
                                    rounded-full
                                    h-18
                                    w-18
                                    bg-backgroundMainSearch
                                    flex
                                    justify-center
                                    items-center
                                    mt-2
                                "
                            >
                                <div
                                    class="
                                        text-white text-3xl
                                        font-light font-NotoSansJp
                                    "
                                >
                                    {{
                                        $store.getters.topManagementInfo.name.substring(
                                            0,
                                            2
                                        )
                                    }}
                                </div>
                            </div>
                        </div>
                        <div
                            class="
                                font-NotoSansJp
                                space-x-1
                                flex
                                justify-center
                                items-baseline
                            "
                        >
                            <div class="">
                                {{ sites[0].name }}
                            </div>
                            <div class="text-xs">
                                {{ sites[0].age }}
                            </div>
                        </div>

                        <div class="font-NotoSansJp text-center text-xs">
                            {{ sites[0].hospital }}
                        </div>

                        <div class="flex justify-center">
                            <div
                                class="
                                    w-15
                                    h-4
                                    bg-cardTitle
                                    text-white
                                    font-NotoSansJp
                                    text-xs
                                    font-light
                                    flex
                                    justify-center
                                "
                            >
                                {{ sites[0].authority }}
                            </div>
                        </div>
                    </div>

                    <router-link :to="{ path: 'helloWorld' }">
                        <div v-for="item in itemUserList" :key="item">
                            <div
                                class="
                                    h-10
                                    flex
                                    justify-center
                                    items-center
                                    hover:text-searchDropdown
                                    border-t-2 border-black
                                    font-NotoSansJp
                                "
                            >
                                {{ item.title }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- データ管理 マスクレイヤー -->
        <div
            :class="{
                'fixed top-0 left-0 right-0 bottom-0 bg-lock z-99': isSelect,
            }"
        >
            <div
                v-if="isSelect == true"
                class="flex justify-end items-center space-x-2 mt-2.5 mr-2"
            >
                <div class="invisible">
                    <div
                        class="
                            rounded-full
                            h-9
                            w-9
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
                </div>
                <div class="whitespace-nowrap flex items-center invisible">
                    <img
                        class="h-3 cursor-pointer transform rotate-180"
                        src="../../assets/image/selectTriangle-down.svg"
                        alt=""
                    />
                </div>

                <!-- 投稿ボタン -->
                <div class="invisible">
                    <div
                        class="
                            h-9
                            w-9
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
                <div class="">
                    <div
                        class="
                            rounded-full
                            w-9
                            h-9
                            pt-1
                            pl-1.5
                            bg-personOrganizationButton
                            cursor-pointer
                        "
                        @click="linkClickSelect"
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
                </div>
            </div>
            <!-- リスト -->
            <div class="flex justify-center mt-2">
                <div
                    class="
                        border-2 border-personOrganizationButton
                        bg-white
                        w-88.75
                        h-70
                    "
                    v-if="isSelect"
                >
                    <!--  -->
                    <div
                        v-for="item in itemList"
                        :key="item"
                        class="h-10 font-NotoSansJp cursor-pointer"
                    >
                        <div class="">
                            <div
                                v-if="item.itemStyle == 'title'"
                                class="
                                    bg-personOrganizationButton
                                    h-10
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
                                    border-t-2 border-personOrganizationButton
                                    bg-yellow-50
                                    h-10
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
  components: {},
  props: {},
  data() {
    return {
      isOpen: false,
      isDown: false,
      isSelect: false,
      sites: [{ id: 0, name: '木村 太郎', age: '先生', hospital: '◯◯◯◯◯◯◯◯◯◯大学病院', authority: '管 理 者', },
      ],
      itemList: [
        { 'id': '1', 'title': 'データ登録', 'itemStyle': 'title' },
        { 'id': '2', 'title': '組織内DI 記録（Q&A）登録', 'itemStyle': 'item' },
        { 'id': '3', 'title': '症例（プレアボイド）登録', 'itemStyle': 'item' },
        { 'id': '4', 'title': 'マイデータ', 'itemStyle': 'title' },
        { 'id': '5', 'title': '組織内DI 記録（Q&A）', 'itemStyle': 'item' },
        { 'id': '6', 'title': '症例（プレアボイド）', 'itemStyle': 'item' },
        { 'id': '7', 'title': '下書き一覧', 'itemStyle': 'item' },
      ],
      itemUserList: [
        { 'id': '1', 'title': 'マイページ' },
        { 'id': '2', 'title': '施設切替' },
        { 'id': '3', 'title': '設定' },
        { 'id': '4', 'title': 'ログアウト' }
      ]
    };
  },
  couputed: {},
  watch: {},
  methods: {
    linkClickDown() {
      this.isDown = !this.isDown
      this.$store.dispatch('setMenuClick', this.isDown
      )
    },
    linkClickSelect() {
      this.isSelect = !this.isSelect
      this.$store.dispatch('setMenuClick', this.isSelect
      )
    }
  },
  created() {

  }
}
</script>
