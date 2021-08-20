<template>
    <div>
        <svg
            class="w-10 h-10 bg-gray-400 bg"
            fill="none"
            stroke="white"
            viewBox="-4 -4 32 32"
            @click="isOpen = !isOpen"
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

        <div class="flex">
            <svg
                class="w-10 h-10 bg-gray-400 bg"
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

            <img
                class="h-10"
                v-if="isOpen"
                src="../../assets/AI-PHARMA_logo.svg"
                alt=""
            />
        </div>
        <div
            class="absolute top-10 left-12 -translate-x-1/2 w-48 bg-gray-200"
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
                <a class="pl-4">検索</a>
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/triangle-down.png"
                    alt=""
                    v-if="itemType1 == false"
                />
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/triangle-up.png"
                    alt=""
                    v-else
                />
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="pl-4">Q&A</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">KIT-DI DB</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">施設 DI DB</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="pl-4">おくすり事例</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">おくすり事例</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">副作用事例</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="ml-4">DI 辞書</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">DI 辞書</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="pl-4">掲示板</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">全体</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">施設</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType1">
                <a class="pl-4">他の検索エンジン</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">Google</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">PubMEd</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">J-STAGE</a>
            </div>
            <div class="dorpdownItem" v-if="itemType1">
                <a class="pl-8">Safe-DI</a>
            </div>
            <div
                class="dorpdownItemGroup1"
                @click="
                    ;(itemType2 = !itemType2),
                        (itemType1 = false),
                        (itemType3 = false)
                "
            >
                <a class="pl-4">データ管理</a>
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/triangle-down.png"
                    alt=""
                    v-if="itemType2 == false"
                />
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/triangle-up.png"
                    alt=""
                    v-else
                />
            </div>
            <div class="dorpdownSubMenu" v-if="itemType2">
                <a class="pl-4">Q&A</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="pl-8">投稿データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="pl-8">一時保存データ</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType2">
                <a class="pl-4">おくすり事例</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="pl-8">投稿データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="pl-8">一時保存データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="pl-8">入出力</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType2">
                <a class="pl-4">掲示板</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="pl-8">投稿データ</a>
            </div>
            <div class="dorpdownItem" v-if="itemType2">
                <a class="pl-8">一時保存データ</a>
            </div>
            <div
                class="dorpdownItemGroup1"
                @click="
                    ;(itemType3 = !itemType3),
                        (itemType1 = false),
                        (itemType2 = false)
                "
            >
                <a class="pl-4">その他</a>
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/triangle-down.png"
                    alt=""
                    v-if="itemType3 == false"
                />
                <img
                    class="h-3 mt-2 mr-2"
                    src="../../assets/triangle-up.png"
                    alt=""
                    v-else
                />
            </div>
            <div class="dorpdownSubMenu" v-if="itemType3">
                <a class="pl-4">動画</a>
            </div>
            <div class="dorpdownItem" v-if="itemType3">
                <a class="pl-8">動画コンテンツ</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType3">
                <a class="pl-4">予約</a>
            </div>
            <div class="dorpdownItem" v-if="itemType3">
                <a class="pl-8">学会カレンダー</a>
            </div>
            <div class="dorpdownSubMenu" v-if="itemType3">
                <a class="pl-4">その他の情報一覧</a>
            </div>
            <div class="dorpdownItem" v-if="itemType3">
                <a class="pl-8">企業一覧</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'dropdown',
  components: {},
  props: [],
  data() {
    return {
      isOpen: false,
      itemType1: false,
      itemType2: false,
      itemType3: false,
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
