<template>
    <div
        class=""
        :class="{
            'fixed top-0 left-0 right-0 bottom-0 bg-lock z-99': isOpen,
        }"
    >
        <div class="flex justify-between items-center">
            <div class="flex-none">
                <div class="flex">
                    <svg
                        class="w-16 h-16 bg-gray-400"
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

                    <svg
                        class="w-16 h-16 md:ml-24 bg-gray-400"
                        fill="none"
                        stroke="white"
                        viewBox="-4 -4 32 32"
                        v-if="isOpen"
                        @click="isOpen = !isOpen"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    <router-link
                        class="h-16 w-32 bg-white"
                        @click="scrollToTop"
                        to="/"
                    >
                        <img
                            class="h-12 my-2 mx-2"
                            v-if="isDispaly || isOpen"
                            src="../../assets/image/AI-PHARMA_logo.svg"
                            alt="/"
                        />
                    </router-link>
                </div>
            </div>
            <!-- <p
                class="hidden md:block mx-10 underline font-NotoSansJp text-sm"
                :class="{ 'mr-28': isOpen }"
            >
                ヘルプ0000000
            </p> -->
        </div>

        <div
            class="md:ml-24 top-16 -translate-x-1/2 w-48 bg-gray-200"
            v-if="isOpen"
        >
            <div
                class="dorpdownItemGroup1"
                @click="
                    ;(itemType1 = !itemType1),
                        (itemType2 = false),
                        (itemType3 = false)
                "
            >
                <a class="headerDropdownGroup">検索</a>
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/image/selectTriangle-down.svg"
                    alt=""
                    v-if="itemType1 == false"
                />
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/image/selectTriangle-up.svg"
                    alt=""
                    v-else
                />
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="headerDropdownSubMenu">Q&A</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">KIT-DI DB</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">施設 DI DB</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="headerDropdownSubMenu">おくすり事例</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">おくすり事例</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">副作用事例</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="headerDropdownSubMenu">DI 辞書</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">DI 辞書</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="headerDropdownSubMenu">掲示板</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">全体</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">施設</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="headerDropdownSubMenu">他の検索エンジン</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">Google</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">PubMEd</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">J-STAGE</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="headerDropdownItem" href="">Safe-DI</a>
            </div>
            <div
                class="dorpdownItemGroup1"
                @click="
                    ;(itemType2 = !itemType2),
                        (itemType1 = false),
                        (itemType3 = false)
                "
            >
                <a class="headerDropdownGroup">データ管理</a>
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/image/selectTriangle-down.svg"
                    alt=""
                    v-if="itemType2 == false"
                />
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/image/selectTriangle-up.svg"
                    alt=""
                    v-else
                />
            </div>
            <div class="dorpdownSubMenu" v-if="itemType2">
                <a class="headerDropdownSubMenu">Q&A</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="headerDropdownItem" href="">投稿データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="headerDropdownItem" href="">一時保存データ</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType2">
                <a class="headerDropdownSubMenu">おくすり事例</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="headerDropdownItem">投稿データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="headerDropdownItem">一時保存データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="headerDropdownItem" href="">入出力</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType2">
                <a class="headerDropdownSubMenu">掲示板</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="headerDropdownItem" href="">投稿データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="headerDropdownItem" href="">一時保存データ</a>
            </div>
            <div
                class="dorpdownItemGroup1"
                @click="
                    ;(itemType3 = !itemType3),
                        (itemType1 = false),
                        (itemType2 = false)
                "
            >
                <a class="headerDropdownGroup">その他</a>
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/image/selectTriangle-down.svg"
                    alt=""
                    v-if="itemType3 == false"
                />
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/image/selectTriangle-up.svg"
                    alt=""
                    v-else
                />
            </div>
            <div class="dorpdownSubMenu" v-if="itemType3">
                <a class="headerDropdownSubMenu" href="">動画</a>
            </div>
            <div class="dorpdownItem" v-if="itemType3">
                <a class="headerDropdownItem" href="">動画コンテンツ</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType3">
                <a class="headerDropdownSubMenu" href="">予約</a>
            </div>
            <div class="dorpdownItem" v-if="itemType3">
                <a class="headerDropdownItem" href="">学会カレンダー</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType3">
                <a class="headerDropdownSubMenu" href="">その他の情報一覧</a>
            </div>
            <div class="dorpdownItem" v-if="itemType3">
                <a class="headerDropdownItem" href="">企業一覧</a>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name: 'dropdown',
  components: {},
  props: { isDispaly: false },
  data() {
    return {
      isOpen: false,
      itemType1: false,
      itemType2: false,
      itemType3: false,
    };
  },
  couputed: {

  },
  watch: {},
  methods: {
    linkClick() {

      this.isOpen = !this.isOpen
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
<style scoped>
</style>
