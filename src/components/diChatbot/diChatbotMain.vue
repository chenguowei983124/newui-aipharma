<template>
    <div>
        <div class="flex border-b-2 border-unlineblue">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
            <div class="flex flex-col w-full md:w-191.25 mx-2 md:mx-0">
                <div class="flex justify-between">
                    <div
                        class="
                            text-googleTitle
                            notoSansJpAndTwentyBlack
                            cs:notoSansJpAndTwentyFourBold
                            pt-2.5
                            pr-5
                            md:pt-5
                        "
                    >
                        DI チャットボット
                    </div>
                    <div
                        class="
                            rounded-xl
                            w-40
                            h-5.5
                            bg-pageblue
                            text-white
                            notoSansJpAndFourteenBold
                            text-center
                            mt-3
                            md:mt-5.5
                        "
                    >
                        24 時間365 日対応
                    </div>
                </div>
                <p class="break-words notoSansJpAndTwelveRegular mt-2">
                    製薬企業が提供する医薬品に関する AI
                    チャットボットのリンク集です。
                </p>
                <p class="break-words notoSansJpAndTwelveRegular mb-5">
                    ※URL
                    をクリックすると各製薬企業のチャットボット（外部サイト）に移動します。
                </p>
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
                    DI チャットボット一覧
                </div>
                <!-- 明細 -->
                <div
                    class="
                        block
                        spm:flex
                        lg:flex
                        justify-between
                        border-b border-l border-r border-pageblue
                        mx-2
                    "
                    v-for="item in list"
                    :key="item"
                >
                    <div
                        class="
                            pt-3.75
                            ml-3.75
                            mb-0
                            spm:mb-3.75
                            lm:mb-3.75
                            mr-0
                            spm:mr-10
                            lm:mr-10
                        "
                    >
                        <div class="notoSansJpAndSixteenMedium">
                            {{ item.companyName }}
                        </div>
                        <div class="notoSansJpAndTwentyFourBold">
                            {{ item.systemName }}
                        </div>
                        <div class="notoSansJpAndTwelveRegular">
                            {{ item.content }}
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div
                                class="
                                    spm:w-60
                                    lm:w-60
                                    spm:h-20
                                    lm:h-20
                                    mt-3.75
                                    mr-3.75
                                    ml-3.75
                                "
                            >
                                <a
                                    :href="item.imageLinkUrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="w-full"
                                        :src="item.imageUrl"
                                        alt="イメージアップロード失敗"
                                    />
                                </a>
                            </div>
                            <div
                                class="
                                    mt-2
                                    notoSansJpAndTwelveMedium
                                    mb-3.75
                                    ml-3.75
                                "
                            >
                                {{ item.productsNumber }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 詳細説明 -->
                <div class="mt-10 mx-2">
                    <div class="notoSansJpAndSixteenBold">
                        ■AI チャットボットとは
                    </div>
                    <div class="notoSansJpAndFourteenRegular">
                        チャットボットとは、「チャット」と「ボット（ロボット）」を組み合わせた言葉で、コンピュータがテキストを介して自動でやり取り（会話）をするプログラム（＝ロボット）のことです。
                    </div>
                    <div class="notoSansJpAndFourteenRegular">
                        対話に必要な知識を集めたデータベースを用意すれば、ユーザーからの問い合わせに対し、ロボットが24
                        時間 365 日対応します。
                    </div>
                    <div class="mt-10">
                        <img src="../../assets/image/image8.png" alt="" />
                    </div>
                    <div class="mt-5">
                        <div class="notoSansJpAndFourteenRegular">
                            チャットボットには、事前に作成しておいたシナリオに沿って回答をする「シナリオ型（ルールベース型）」と、膨大なデー
                            タを解析し統計的にもっとも適切とされる回答をする「AI（機械学習）型」があります。『AI
                            チャットボット』は、後者の AI
                            型チャットボットをさしています。
                        </div>
                        <div class="notoSansJpAndFourteenRegular">
                            AI チャットボットは、質問された内容( 文章)
                            に対して格納されているQ＆A
                            データの中から一番近い質問文を選択し、
                            それに紐付いた回答を表示する『類似文章検索システム』です。例えば、「○○の服用方法を教えて」と質問した場合、AI
                            がデー
                            タの中から「○○の用法・用量」を類似している文章と判断して回答します。
                        </div>
                        <div class="notoSansJpAndFourteenRegular">
                            近年、製薬企業のAI
                            チャットボットも開発が進んでおり、ロボットが24
                            時間365 日対応、薬に関する問合せに対応して
                            くれます。
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="flex justify-center">
                            <button
                                class="
                                    orangeButtonColors
                                    h-17.5
                                    rounded-md
                                    notoSansJpAndEighteenBlack
                                    text-white text-center
                                    w-full
                                    md:w-93.75
                                    disabled:cursor-not-allowed
                                    px-10
                                    break-words
                                "
                                @click="onCancel"
                            >
                                <div>製薬企業のAI チャットボット</div>
                                <div>導入・活用事例はコチラ</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
    </div>
</template>

<script>
import Chatbot from '../common/svgImage/chatbot.vue'
import searchSvg from '../common/svgImage/searchSvg.vue'
import externalLink from '../common/svgImage/extarnalLink.vue'
import img from '../../assets/image/tanamin_med_banner.jpg'
import askam from '../../assets/image/askam_banner_a.jpg'
import bayer_di_banner from '../../assets/image/bayer_di_banner.jpg'
import banner_DI_chat from '../../assets/image/banner_DI-chat_300-100.png'
export default {
    components: { searchSvg, Chatbot, externalLink },
    props: {},
    data() {
        return {
            title: 'すべて',
            keyWord: '',

            dispList: [],
            list: [
                {
                    companyName: 'シオノギ製薬',
                    systemName: 'DI チャット',
                    content: 'ゾフルーザをはじめとする感染症関連の情報提供。',
                    imageUrl: bayer_di_banner,
                    imageLinkUrl:
                        'https://www.shionogi.co.jp/med/dichat/index.html',
                    productsNumber:
                        '■対応製品数（全製品数）:29 品目（96 品目）',
                },
                {
                    companyName: 'バイエル薬品',
                    systemName: 'DI チャットボット',
                    content:
                        'ゾフルーザをはじめとする〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇感染症関連の情報提供。',
                    imageUrl: bayer_di_banner,
                    imageLinkUrl:
                        'https://pharma-navi.bayer.jp/rosuzet/product/user-policy',
                    productsNumber:
                        '■対応製品数（全製品数）：3 品目（79 品目）',
                },
                {
                    companyName: 'ノバルティスファーマ',
                    systemName: '製品情報AI 検索システム',
                    content: 'ゾフルーザをはじめとする感染症関連の情報提供。',
                    imageUrl: img,
                    imageLinkUrl:
                        'https://misearch.kit-ai.jp/public/home/entrance',
                    productsNumber:
                        '■対応製品数（全製品数）：全品目（79 品目）',
                },
                {
                    companyName: '武田テバファーマ',
                    systemName: 'DI ナビ',
                    content: 'ゾフルーザをはじめとする感染症関連の情報提供。',
                    imageUrl: bayer_di_banner,
                    imageLinkUrl: 'https://www.med.takeda-teva.com/di-net/',
                    productsNumber:
                        '■対応製品数（全製品数）：全品目（91 品目）',
                },
                {
                    companyName: 'アムジェン',
                    systemName: 'AskAm',
                    content: 'ゾフルーザをはじめとする感染症関連の情報提供。',
                    imageUrl: askam,
                    imageLinkUrl:
                        'https://www.amgen.co.jp/products/for-physicians-authorization',
                    productsNumber: '■対応製品数（全製品数）：全品目（6 品目）',
                },
                {
                    companyName: '田辺三菱製薬',
                    systemName: 'たなみんmed',
                    content: 'ゾフルーザをはじめとする感染症関連の情報提供。',
                    imageUrl: img,
                    imageLinkUrl:
                        'https://medical.mt-pharma.co.jp/tanamin-med/ask_chat_confirm?utm_campaign=tnmn-20210915&utm_medium=banner&utm_source=tnmn',
                    productsNumber:
                        '■対応製品数（全製品数）：全品目（111 品目）',
                },
            ],
        }
    },
    computed: {},
    watch: {},
    methods: {
        buttonClick(item) {
            for (let i = 0; i < this.pamButtons.length; i++) {
                if (item.id === this.pamButtons[i].id) {
                    this.pamButtons[i].focus = true
                } else {
                    this.pamButtons[i].focus = false
                }
            }
            console.log(this.pamButtons)
            this.title = item.title

            this.dispList = []
            for (let i = 0; i < this.list.length; i++) {
                if (item.title === 'すべて') {
                    this.dispList = this.list
                } else {
                    if (item.title === this.list[i].key) {
                        this.dispList.push(this.list[i])
                    }
                }
            }
        },
        searchClick() {
            let temmlist = []
            if (this.keyWord !== '') {
                for (let i = 0; i < this.dispList.length; i++) {
                    if (this.keyWord === this.dispList[i].companyName) {
                        temmlist.push(this.dispList[i])
                    }
                }
                this.dispList = temmlist
            }
        },
    },
    created() {},
    mounted() {
        this.dispList = this.list
    },
}
</script>
<style scoped></style>
