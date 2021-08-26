<template>
    <div
        class=""
        :class="{
            'fixed top-0 left-0 right-0 bottom-0 bg-lock z-99': isOpen,
        }"
    >
        <div class="flex justify-between items-center">
            <div class="flex-none">
                <div class="flex items-center">
                    <!-- Menu icon 30px*22.5px -->
                    <svg
                        class="w-12.5 h-12.5 md:w-15 md:h-15 bg-gray-400"
                        fill="none"
                        stroke="white"
                        viewBox="-4 -4 32 32"
                        @click="linkClick"
                        v-if="isOpen == false"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                    <!-- x icon -->
                    <svg
                        class="
                            w-12.5
                            h-12.5
                            md:w-15
                            md:h-15
                            md:ml-25
                            bg-gray-400
                        "
                        fill="none"
                        stroke="white"
                        viewBox="-4 -4 32 32"
                        v-if="isOpen"
                        @click="linkClick"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    <!-- Logo img -->
                    <router-link
                        class="
                            w-43.75
                            h-12.5
                            md:w-37.5
                            md:h-15
                            bg-white
                            flex
                            justify-start
                            md:justify-center
                            pl-2
                            items-center
                        "
                        @click="scrollToTop"
                        to="/"
                    >
                        <menu-logo-svg
                            class="w-21 h-9.5"
                            v-if="isDispaly || isOpen"
                        ></menu-logo-svg>
                        <!-- <img
                            class="w-21 h-9.5"
                            v-if="isDispaly || isOpen"
                            src="../../assets/image/menuLogo.svg"
                            alt="/"
                        /> -->
                        <div
                            class="
                                md:hidden
                                w-18
                                h-8
                                pl-1
                                pt-1
                                ml-1
                                border-l-2 border-gray-300
                                font-NotoSansJp font-normal
                                text-xxs
                            "
                            :class="[isOpen ? 'hidden' : '']"
                        >
                            〇〇〇〇〇〇〇〇大学病院
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="md:ml-25 w-56.25 md:w-52.5 bg-gray-200" v-if="isOpen">
            <!-- The first one -->
            <div
                class="flex justify-between bg-gray-300 h-7.5"
                @click="
                    ;(itemType1 = !itemType1),
                        (itemType2 = false),
                        (itemType3 = false),
                        (itemType4 = false)
                "
            >
                <div class="flex items-center ml-3.75 cursor-pointer">
                    <!-- Home icon -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                </div>
                <!-- Triangle icon -->
                <div class="cursor-pointer mt-2.5 mr-3.75">
                    <icon-down v-if="itemType1 == false" class=""></icon-down>

                    <icon-down v-else class="transform rotate-180"></icon-down>
                </div>
            </div>
            <div class="" v-for="items in menuItemList" :key="items">
                <div
                    v-if="itemType1"
                    class="
                        h-7
                        pl-3.75
                        font-NotoSansJp
                        text-base
                        font-normal
                        text-dropdownListItem
                        border-b-2 border-white
                        flex
                        items-center
                        cursor-pointer
                    "
                >
                    <div v-if="items.itemStyle == 'item'">
                        {{ items.title }}
                    </div>
                </div>
            </div>
            <!-- The second one -->
            <div
                class="
                    flex
                    justify-between
                    border-t-2 border-white
                    bg-gray-300
                    h-7.5
                "
                @click="
                    ;(itemType2 = !itemType2),
                        (itemType1 = false),
                        (itemType3 = false),
                        (itemType4 = false)
                "
            >
                <div
                    class="flex items-center ml-3.75 cursor-pointer"
                    v-for="items in menuItemList2"
                    :key="items"
                >
                    <div v-if="items.itemStyle == 'title'">
                        {{ items.title }}
                    </div>
                </div>
                <!-- Triangle icon -->
                <div class="cursor-pointer mt-2.5 mr-3.75">
                    <icon-down v-if="itemType2 == false" class=""></icon-down>

                    <icon-down v-else class="transform rotate-180"></icon-down>
                </div>
            </div>
            <div class="" v-for="items in menuItemList2" :key="items">
                <div v-if="itemType2">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            border-b-2 border-white
                            h-7
                            pl-3.75
                            cursor-pointer
                        "
                    >
                        {{ items.title }}
                    </div>
                </div>
            </div>
            <!-- The third -->
            <div
                class="
                    flex
                    justify-between
                    border-t-2 border-white
                    bg-gray-300
                    h-7.5
                "
                @click="
                    ;(itemType3 = !itemType3),
                        (itemType1 = false),
                        (itemType2 = false),
                        (itemType4 = false)
                "
            >
                <div
                    class="flex items-center ml-3.75 cursor-pointer"
                    v-for="items in menuItemList3"
                    :key="items"
                >
                    <div v-if="items.itemStyle == 'title'">
                        {{ items.title }}
                    </div>
                </div>
                <!-- Triangle icon -->
                <div class="cursor-pointer mt-2.5 mr-3.75">
                    <icon-down v-if="itemType3 == false" class=""></icon-down>

                    <icon-down v-else class="transform rotate-180"></icon-down>
                </div>
            </div>
            <div class="" v-for="items in menuItemList3" :key="items">
                <div v-if="itemType3">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            border-b-2 border-white
                            h-7
                            pl-3.75
                            cursor-pointer
                        "
                    >
                        {{ items.title }}
                    </div>
                    <div
                        v-if="items.itemStyle == 'subproject'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            border-b-2 border-white
                            h-7
                            pl-7.5
                            cursor-pointer
                        "
                    >
                        {{ items.title }}
                    </div>
                </div>
            </div>
            <!-- The Fourth -->
            <div
                class="
                    flex
                    justify-between
                    border-t-2 border-white
                    bg-gray-300
                    h-7.5
                "
                @click="
                    ;(itemType4 = !itemType4),
                        (itemType1 = false),
                        (itemType2 = false),
                        (itemType3 = false)
                "
            >
                <div
                    class="flex items-center ml-3.75 cursor-pointer"
                    v-for="items in menuItemList4"
                    :key="items"
                >
                    <div v-if="items.itemStyle == 'title'">
                        {{ items.title }}
                    </div>
                </div>
                <!-- Triangle icon -->
                <div class="cursor-pointer mt-2.5 mr-3.75">
                    <icon-down v-if="itemType4 == false" class=""></icon-down>

                    <icon-down v-else class="transform rotate-180"></icon-down>
                </div>
            </div>
            <div class="" v-for="items in menuItemList4" :key="items">
                <div v-if="itemType4">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            border-b-2 border-white
                            h-7
                            pl-3.75
                            cursor-pointer
                        "
                    >
                        {{ items.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import menuLogoSvg from '../svgImage/menuLogoSvg.vue';
import iconDown from '../svgImage/iconDown.vue';
export default {
  name: 'dropdown',
  components: { menuLogoSvg, iconDown },
  props: { isDispaly: false },
  data() {
    return {
      isOpen: false,
      itemType1: false,
      itemType2: false,
      itemType3: false,
      itemType4: false,
      menuItemList: [
        { 'id': '1', 'title': 'TOP', 'itemStyle': 'item' },
        { 'id': '2', 'title': 'お知らせ', 'itemStyle': 'item' },
        { 'id': '3', 'title': '掲示板', 'itemStyle': 'item' }
      ],
      menuItemList2: [
        { 'id': '4', 'title': 'データベース', 'itemStyle': 'title' },
        { 'id': '5', 'title': 'DI ナレッジシェア', 'itemStyle': 'item' },
        { 'id': '6', 'title': '組織内DI 記録（Q&A）', 'itemStyle': 'item' },
        { 'id': '7', 'title': '症例（プレアボイド）', 'itemStyle': 'item' },
        { 'id': '8', 'title': 'DI 辞書', 'itemStyle': 'item' },
        { 'id': '9', 'title': '製薬企業情報', 'itemStyle': 'item' }],
      menuItemList3: [
        { 'id': '10', 'title': 'マイデータ', 'itemStyle': 'title' },
        { 'id': '11', 'title': '組織内DI 記録（Q&A）', 'itemStyle': 'item' },
        { 'id': '12', 'title': '登録', 'itemStyle': 'subproject' },
        { 'id': '13', 'title': '症例（プレアボイド）', 'itemStyle': 'item' },
        { 'id': '14', 'title': '登録', 'itemStyle': 'subproject' },
        { 'id': '15', 'title': 'データ入出力', 'itemStyle': 'item' }],
      menuItemList4: [
        { 'id': '16', 'title': 'その他', 'itemStyle': 'title' },
        { 'id': '17', 'title': '外部リンク', 'itemStyle': 'item' },
        { 'id': '18', 'title': '動画', 'itemStyle': 'item' },
        { 'id': '19', 'title': '学会', 'itemStyle': 'item' },
        { 'id': '20', 'title': '製薬企業DIチャットボット', 'itemStyle': 'item' },
        { 'id': '21', 'title': 'ヘルプ', 'itemStyle': 'item' }
      ]
    };
  },
  couputed: {

  },
  watch: {},
  methods: {
    linkClick() {

      this.isOpen = !this.isOpen
      this.$store.dispatch('setMenuClick', this.isOpen)
    }, scrollToTop() {
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
  }
}
</script>
<style>
</style>
