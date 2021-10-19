<template>
    <!-- <div class="relative"> -->
    <div class="rounded-md border-gray-400">
        <div class="rounded-t-lg bg-cardTitlePmad flex justify-between p-2">
            <a class="searchResultCardHeaderStyleE ml-2.5">PubMed</a>
            <a
                class="text-white"
                href="https://www.google.co.jp/"
                target="_blank"
                ><svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path></svg
            ></a>
        </div>
        <div
            class="
                bg-white
                border-2 border-gray-400
                rounded-b-lg
                space-y-2
                p-4
                w-full
            "
        >
            <ul class="w-full" v-for="item in sites" :key="item">
                <li class="flex space-x-2 w-full items-center">
                    <div>
                        <div>
                            <a
                                class="
                                    font-NotoSansJp font-bold
                                    text-base
                                    underline
                                    text-googleTitle
                                "
                            >
                                {{ item.link }}
                            </a>
                        </div>
                        <div>
                            <a class="font-NotoSansJp text-base">
                                {{ item.title }}
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- <div
            :class="{
                'absolute rounded-md top-0 left-0 right-0 bottom-0 bg-lock z-0': true,
            }"
        ></div>
    </div> -->
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      sites: [
        { id: 0, link: 'ロキソニン S（詳細）｜第一三共ヘルスケア', title: "※プロドラッグ製剤とは、成分が体内で吸収されてから活性型に変化し、効果を発揮する仕組みの製剤です。ご利用のポイント．こんな時に。頭痛や生理痛など。突然くるつらい痛みに…" },
        { id: 1, link: 'ロキソニン錠60mg の基本情報（薬効分類・副作用・添付文書…', title: 'ロキソニン錠 60mg（一般名：ロキソプロフェンナトリウム水和物錠）の薬効分類・副作用・添付文書・薬価などを' },
        { id: 2, link: 'ロキソプロフェン（内用）：ロキソニン', title: 'ロキソニンとは？ロキソプロフェンの効能、副作用等を説明、ジェネリックや薬価も…', }
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

<style>
</style>
