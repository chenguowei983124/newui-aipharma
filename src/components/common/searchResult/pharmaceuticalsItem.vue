<template>
    <!-- <div class="relative"> -->
    <div class="rounded-md">
        <div
            class="
                rounded-t-lg
                bg-cardTitlePmad
                flex
                justify-between
                items-center
                h-8
                pt-1
                px-5
            "
        >
            <a class="latoAndSixteenBold text-white">PubMed</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank">
                <external-link class="h-4 w-4"></external-link>
            </a>
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
                'absolute rounded-md top-0 left-0 right-0 bottom-0 windowBackground z-0': true,
            }"
        ></div>
    </div> -->
</template>

<script>
import externalLink from '../svgImage/extarnalLink.vue'
export default {
    components: { externalLink },
    props: {},
    data() {
        return {
            sites: [
                { id: 0, link: '', title: 'Coming soon' },
                // { id: 1, link: 'ロキソニン錠60mg の基本情報（薬効分類・副作用・添付文書…', title: 'ロキソニン錠 60mg（一般名：ロキソプロフェンナトリウム水和物錠）の薬効分類・副作用・添付文書・薬価などを' },
                // { id: 2, link: 'ロキソプロフェン（内用）：ロキソニン', title: 'ロキソニンとは？ロキソプロフェンの効能、副作用等を説明、ジェネリックや薬価も…', }
            ],
        }
    },
    watch: {},
    methods: {},
    created() {},
}
</script>

<style></style>
