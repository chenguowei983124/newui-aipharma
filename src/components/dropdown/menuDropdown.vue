<template>
    <div class="flex justify-between items-center">
        <div class="flex-none">
            <div class="flex items-center relative">
                <!-- Menu icon 30px*22.5px -->
                <svg
                    class="
                        w-12.5
                        h-12.5
                        md:w-15
                        md:h-15
                        bg-gray-400
                        cursor-pointer
                    "
                    fill="none"
                    stroke="white"
                    viewBox="-4 -4 32 32"
                    @click="linkClick"
                    v-if="$store.getters.getIsMenuClick == false"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- stroke-linecap="round"
                        stroke-linejoin="round" -->
                    <path stroke-width="2" d="M4 8h16M4 12h16M4 16h16"></path>
                </svg>
                <!-- x icon -->
                <svg
                    class="w-12.5 h-12.5 md:w-15 md:h-15 md:ml-25 bg-gray-400"
                    :class="{
                        'absolute z-99 -bottom-12.5  md:top-0 md:-left-25':
                            $store.getters.getIsMenuClick,
                    }"
                    fill="none"
                    stroke="white"
                    viewBox="-4 -4 32 32"
                    v-if="$store.getters.getIsMenuClick"
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
                <transition
                    enter-active-class="transition duration-150 ease-out transform"
                    enter-from-class="scale-95 opacity-0"
                    enter-to-class="scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in transform"
                    leave-from-class="scale-100 opacity-100"
                    leave-to-class="scale-95 opacity-0"
                >
                    <router-link
                        class="
                            w-43.75
                            h-12.5
                            md:w-30
                            mid:w-37.5
                            md:h-15
                            bg-white
                            flex
                            justify-start
                            md:justify-center
                            items-center
                        "
                        :class="{
                            'absolute z-99 -bottom-12.5  md:w-37.5 left-12 md:top-0 md:left-15':
                                $store.getters.getIsMenuClick,
                        }"
                        @click="scrollToTop"
                        to="/"
                    >
                        <menu-logo-svg
                            class="
                                w-21
                                h-9.5
                                mx-4
                                active:opacity-50
                                hover:opacity-50
                            "
                            v-if="isDispaly || $store.getters.getIsMenuClick"
                        ></menu-logo-svg>

                        <div
                            class="
                                md:hidden
                                w-18
                                h-8
                                flex
                                items-center
                                pl-1.25
                                border-l-2 border-gray-300
                                font-NotoSansJp font-normal
                                text-xxs
                            "
                            :class="[
                                $store.getters.getIsMenuClick ? 'hidden' : '',
                            ]"
                        >
                            {{ $store.getters.topManagementInfo.hospital }}
                        </div>
                    </router-link>
                </transition>
            </div>
        </div>
    </div>
    <div
        class=""
        :class="{
            'fixed top-0 left-0 right-0 bottom-0 z-75':
                $store.getters.getIsMenuClick,
        }"
        @click.self="linkClick"
    ></div>
    <!-- <transition
        enter-active-class="transition duration-150 ease-out transform"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in transform"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
    > -->
    <div
        class="w-56.25 md:w-52.5 bg-gray-200"
        :class="{
            'absolute z-99 -left-0.5 top-12.5 md:top-15 md:left-0':
                $store.getters.getIsMenuClick,
        }"
        v-if="$store.getters.getIsMenuClick"
    >
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
            <router-link :to="{ path: items.path }" @click="linkClick">
                <div
                    v-if="itemType1"
                    class="
                        h-7
                        pl-3.75
                        font-NotoSansJp
                        text-base
                        font-normal
                        text-dropdownListItem
                        flex
                        items-center
                        cursor-pointer
                    "
                    :class="[
                        items.id == menuItemList.length
                            ? ''
                            : 'border-b-2 border-white',
                    ]"
                >
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="hover:opacity-50 active:opacity-50"
                    >
                        {{ items.title }}
                        <!-- <router-link :to="{ path: items.path }">
                        {{ items.title }}</router-link
                    > -->
                    </div>
                </div>
            </router-link>
        </div>
        <!-- The second one -->
        <div
            class="flex justify-between bg-gray-300 h-7.5"
            :class="[itemType1 ? '' : 'border-t-2 border-white']"
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
            <router-link :to="{ path: items.path }" @click="linkClick">
                <div v-if="itemType2">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            h-7
                            pl-3.75
                            cursor-pointer
                            hover:opacity-50
                            active:opacity-50
                        "
                        :class="[
                            items.id == menuItemList2.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        <!-- <router-link :to="{ path: items.path }"> -->
                        {{ items.title }}
                        <!-- </router-link> -->
                    </div>
                </div>
            </router-link>
        </div>
        <!-- The third -->
        <div
            class="flex justify-between bg-gray-300 h-7.5"
            :class="[itemType2 ? '' : 'border-t-2 border-white']"
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
            <router-link :to="{ path: items.path }" @click="linkClick">
                <div v-if="itemType3">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            h-7
                            pl-3.75
                            cursor-pointer
                        "
                        :class="[
                            items.id == menuItemList3.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        <!-- <router-link :to="{ path: items.path }"> -->
                        <div
                            v-if="items.path != ''"
                            class="hover:opacity-50 active:opacity-50"
                        >
                            {{ items.title }}
                        </div>
                        <div v-else class="">
                            {{ items.title }}
                        </div>
                        <!-- </router-link> -->
                    </div>
                    <div
                        v-if="items.itemStyle == 'subproject'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            h-7
                            pl-7.5
                            cursor-pointer
                            hover:opacity-50
                            active:opacity-50
                        "
                        :class="[
                            items.id == menuItemList3.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        <!-- <router-link :to="{ path: items.path }"> -->
                        {{ items.title }}
                        <!-- </router-link> -->
                    </div>
                </div>
            </router-link>
        </div>
        <!-- The Fourth -->
        <div
            class="flex justify-between bg-gray-300 h-7.5"
            :class="[itemType3 ? '' : 'border-t-2 border-white']"
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
            <router-link :to="items.path" @click="linkClick">
                <div v-if="itemType4">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            font-NotoSansJp
                            text-base
                            font-normal
                            text-dropdownListItem
                            h-7
                            pl-3.75
                            cursor-pointer
                            hover:opacity-50
                            active:opacity-50
                        "
                        :class="[
                            items.id == menuItemList4.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        <!-- <router-link :to="items.path"> -->
                        {{ items.title }}
                        <!-- </router-link> -->
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <!-- </transition> -->
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
        { 'id': '1', 'title': 'TOP', 'itemStyle': 'item', 'path': '/' },
        { 'id': '2', 'title': 'お知らせ', 'itemStyle': 'item', 'path': '' },
        { 'id': '3', 'title': '掲示板', 'itemStyle': 'item', 'path': '' }
      ],
      menuItemList2: [
        { 'id': '1', 'title': 'データベース', 'itemStyle': 'title', 'path': '' },
        { 'id': '2', 'title': 'DI ナレッジシェア', 'itemStyle': 'item', 'path': '' },
        { 'id': '3', 'title': '組織内DI 記録（Q&A）', 'itemStyle': 'item', 'path': 'searchOrganization' },
        { 'id': '4', 'title': '症例（プレアボイド）', 'itemStyle': 'item', 'path': '' },
        { 'id': '5', 'title': 'DI 辞書', 'itemStyle': 'item', 'path': '' },
        { 'id': '6', 'title': '製薬企業情報', 'itemStyle': 'item', 'path': '' }],
      menuItemList3: [
        { 'id': '1', 'title': 'マイデータ', 'itemStyle': 'title', 'path': '' },
        { 'id': '2', 'title': '組織内DI 記録（Q&A）', 'itemStyle': 'item', 'path': '' },
        { 'id': '3', 'title': '登録', 'itemStyle': 'subproject', 'path': '' },
        { 'id': '4', 'title': '症例（プレアボイド）', 'itemStyle': 'item', 'path': '' },
        { 'id': '5', 'title': '登録', 'itemStyle': 'subproject', 'path': '' },
        { 'id': '6', 'title': 'データ入出力', 'itemStyle': 'item', 'path': 'searchOrganization' }],
      menuItemList4: [
        { 'id': '1', 'title': 'その他', 'itemStyle': 'title', 'path': '' },
        { 'id': '2', 'title': '外部リンク', 'itemStyle': 'item', 'path': '' },
        { 'id': '3', 'title': '動画', 'itemStyle': 'item', 'path': '' },
        { 'id': '4', 'title': '学会', 'itemStyle': 'item', 'path': '' },
        { 'id': '5', 'title': '製薬企業DIチャットボット', 'itemStyle': 'item', 'path': '' },
        { 'id': '6', 'title': 'ヘルプ', 'itemStyle': 'item', 'path': '' }
      ]
    };
  },
  couputed: {

  },
  watch: {},
  methods: {
    linkClick() {

      this.$store.dispatch('setMenuClick', !this.$store.getters.getIsMenuClick)
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
