<template>
    <div>
        <div class="flex border-b-2 border-unlineblue">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
            <div class="flex flex-col w-full md:w-191.25 mx-2 md:mx-0">
                <div class="flex justify-between p-2 md:p-5">
                    <div
                        class="
                            text-googleTitle
                            notoSansJpAndTwentyBlack
                            md:notoSansJpAndTwentyFourBold
                            lm:notoSansJpAndTwentyFourBold
                            md:text-2xl
                        "
                    >
                        お
                        <ruby>
                            薬
                            <rp>(</rp>
                            <rt>やく</rt>
                            <rp>）)</rp>
                            立ちリンク集
                        </ruby>

                        <p
                            class="
                                break-words
                                notoSansJpAndTwelveRegular
                                mt-2
                                text-black
                            "
                        >
                            薬剤師の先生方のリンク集となります。
                        </p>
                    </div>
                    <div class="mt-2">
                        <div class="flex justify-center">
                            <button
                                class="
                                    orangeButtonColors
                                    rounded-md
                                    notoSansJpAndFourteenBold
                                    text-white text-center
                                    w-29.5
                                    h-13
                                    flex
                                    items-center
                                    px-3
                                    space-x-2
                                "
                                @click="onCancel"
                            >
                                <div>
                                    <div>掲載希望は</div>
                                    <div>コチラ</div>
                                </div>
                                <div>
                                    <icon-right class="w-3 h-4"></icon-right>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
        <div class="flex">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>

            <!-- 中央 -->
            <div class="w-full md:w-191.25">
                <!-- タイトル -->
                <div
                    class="
                        h-10
                        notoSansJpAndSixteenMedium
                        text-center
                        pt-2
                        mt-5
                        border border-pageblue
                        bg-backgroundMain
                        mx-2
                    "
                >
                    〇〇関連
                </div>
                <!-- 明細 -->
                <div
                    class="
                        block
                        md:flex
                        lg:flex
                        justify-between
                        border-b border-l border-r border-pageblue
                        mx-2
                        p-3.75
                    "
                    v-for="item in list"
                    :key="item"
                >
                    <div class="flex">
                        <a
                            class="
                                underline
                                text-pageblue
                                notoSansJpAndTwentyFourBold
                                mb-1
                            "
                            :href="item.urlLink"
                            target="_blank"
                            >{{ item.urlTitle }}</a
                        >
                        <a
                            class="
                                underline
                                text-pageblue
                                notoSansJpAndTwentyFourBold
                                mt-2
                            "
                            :href="item.urlLink"
                            target="_blank"
                            ><external-link
                                class="ml-2 w-4 h-4"
                                fill="#999999"
                                stroke="#999999"
                            ></external-link
                        ></a>
                    </div>
                    <div>
                        <div
                            class="
                                notoSansJpAndFourteenRegular
                                w-full
                                md:w-104
                                break-words
                            "
                            v-for="content in item.content"
                            :key="content"
                        >
                            <div class="">{{ content }}</div>
                        </div>
                    </div>
                </div>

                <div class="block md:flex px-2 mt-10">
                    <button
                        class="
                            greenDiChatbotButtonColors
                            rounded-md
                            notoSansJpAndEighteenBlack
                            text-white text-center
                            w-full
                            md:w-61.25
                            h-17
                            px-16
                            md:px-2
                            items-center
                        "
                        @click="onLinks"
                    >
                        DI チャットボットに関するリンク集
                    </button>
                    <button
                        class="
                            blueButtonColors
                            rounded-md
                            notoSansJpAndEighteenBlack
                            text-white text-center
                            w-full
                            md:w-61.25
                            h-17
                            mt-2
                            md:mt-0
                            ml-0
                            md:ml-2
                        "
                        @click="onPharmaLink"
                    >
                        製薬企業一覧
                    </button>
                    <button
                        class="
                            goodServeButtonColors
                            rounded-md
                            notoSansJpAndEighteenBlack
                            text-white text-center
                            w-full
                            md:w-61.25
                            h-17
                            mt-2
                            md:mt-0
                            ml-0
                            md:ml-2
                        "
                        @click="onPrelusion"
                    >
                        医療者向けサービス紹介
                    </button>
                </div>
            </div>

            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
    </div>
</template>

<script>
import externalLink from '../common/svgImage/extarnalLink.vue'
import iconRight from '../common/svgImage/iconRight.vue'
export default {
    components: {
        externalLink,
        iconRight,
    },
    props: {},
    data() {
        return {
            list: [
                {
                    urlTitle: 'PubMed',
                    urlLink: 'http://www.ncbi.nlm.nih.gov/pubmed/',
                    iconLink: 'http://www.ncbi.nlm.nih.gov/pubmed/',
                    content: [
                        '世界約 70 カ国、約 5,000 誌以上の文献を検索できる医学・生物学文献データベースです。インターネット上において随時無料で利用できます。',
                    ],
                },
                {
                    urlTitle: 'J-STAGE',
                    urlLink: 'https://www.jstage.jst.go.jp/browse/-char/ja/',
                    iconLink: 'https://www.jstage.jst.go.jp/browse/-char/ja/',
                    content: [
                        '「科学技術情報発信・流通総合システム」（J-STAGE）は、国立研究開発法人科学技術振興機構 (JST) が運営する電子ジャーナルプの強化、オープンアクセスの推進を目指し、学協会や研究機関等における科学技術刊行物の発行を支援しています。ラットフォームです。J-STAGE は、日本から発表される科学技術（人文科学・社会科学を含む）情報の迅速な流通と国際情報発信力の強化、オープンアクセスの推進を目指し、学協会や研究機関等における科学技術刊行物の発行を支援しています。',
                        '現在J-STAGE では、国内の1,500 を超える発行機関が、3,000 誌以上のジャーナルや会議録等の刊行物を、低コストかつスピーディーに公開しています。',
                    ],
                },
                {
                    urlTitle: 'PMDA',
                    urlLink:
                        'https://www.pmda.go.jp/kenkouhigai_camp/index.html',
                    iconLink:
                        'https://www.pmda.go.jp/kenkouhigai_camp/index.html',
                    content: [
                        '独立行政法人医薬品医療機器総合機構（PMDA；Pharmaceuticals and Medical Devices Agency）のサイトです。',
                        'PMDA は、医薬品の副作用や生物由来製品を介した感染等による健康被害に対して、迅速な救済を図り（健康被害救済）、医薬品や医療機器などの品質、有効性および安全性について、治験前から承認までを一貫した体制で指導・審査し（承認審査）、市販後における安全性に関する情報の収集、分析、提供を行う（安全対策）ことを通じて、国民保健の向上に貢献することを目的としています。',
                    ],
                },
            ],
        }
    },
    computed: {},
    watch: {},
    methods: {
        onLinks() {
            this.$router.push('/diChatbot')
        },
        onPharmaLink() {
            this.$router.push('/searchPharmaCompany')
        },
        onPrelusion() {
            this.$router.push('/prelusion')
        },
    },
    created() {},
    mounted() {},
}
</script>
<style scoped></style>
