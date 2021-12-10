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
                            cs:notoSansJpAndTwentyFourBlack cs:text-2xl
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
                <p class="break-words notoSansJpAndTwelveRegular mt-1 md:mt-5">
                    製薬企業が提供する医薬品に関する AI
                    チャットボットのリンク集です。
                </p>
                <p
                    class="
                        break-words
                        notoSansJpAndTwelveRegular
                        mt-2
                        md:mt-2
                        mb-5
                    "
                >
                    ※URL
                    をクリックすると各製薬企業のチャットボット（外部サイト）に移動します。
                </p>
            </div>
            <!-- 右 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
        <div class="flex mt-10">
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
                            pt-5
                            ml-5
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
                        <div class="mt-1 mb-2.5 notoSansJpAndTwentyFourBold">
                            {{ item.systemName }}
                        </div>
                        <div
                            class="notoSansJpAndTwelveRegular"
                            v-for="content in item.content"
                            :key="content"
                        >
                            {{ content }}
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="spm:w-70 lm:w-70 mt-5 mr-5 ml-5">
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
                                    mt-3.75
                                    notoSansJpAndTwelveMedium
                                    mb-5
                                    ml-5
                                "
                            >
                                {{ item.productsNumber }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 詳細説明 -->
                <div class="mt-7.5 md:mt-10 mx-2">
                    <div class="notoSansJpAndSixteenBold">
                        ■AI チャットボットとは
                    </div>
                    <div class="mt-2 notoSansJpAndFourteenRegular">
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
import banner_DI_chat from '../../assets/image/dichat.png'
import aiSystem from '../../assets/image/aiSystem.png'
import dinabi from '../../assets/image/dinabi.png'
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
                    content: [
                        'DIチャットは、人工知能を用いた自動回答システムにより、当社医薬品に関する情報を提供することを目的とした医療関係者のお客様限定のサービスです。',
                    ],

                    imageUrl: banner_DI_chat,
                    imageLinkUrl: 'https://www.shionogi.co.jp/med/dichat/',
                    productsNumber: '■対応製品数（全製品数）：29品目（96品目）',
                },
                {
                    companyName: 'バイエル薬品',
                    systemName: 'DIチャットボット',
                    content: [
                        'DI チャットボットは 、医療関係者向けに高脂血症治療剤（ロスーゼット®、アトーゼット®、ゼチー ア®）*の製品基本情報をオンラインで24時間365日検索できる製品情報検索システムです',
                        '医療関係者が迅速に情報にアクセスすることが可能になります。',
                        '*日本において製品名「ロスーゼット®配合錠LD/HD」「アトーゼット®配合錠LD/HD」「ゼチーア®錠10mg」としてバイエル薬品とオルガノン株式会社が共同販売を行っています。',
                        'PP-ATO-JP-0355-30-11',
                    ],
                    imageUrl: bayer_di_banner,
                    imageLinkUrl:
                        'https://rosuzet-atozet-di.ai-q.biz/GBYNsAMlCdbnAEJrW_tI/contact/top',
                    productsNumber: '■対応製品数（全製品数）：3品目（49品目）',
                },
                {
                    companyName: 'ノバルティスファーマ',
                    systemName: '製品情報AI 検索システム',
                    content: ['ゾフルーザをはじめとする感染症関連の情報提供。'],
                    imageUrl: aiSystem,
                    imageLinkUrl:
                        'https://misearch.kit-ai.jp/public/home/entrance',
                    productsNumber:
                        '■対応製品数（全製品数）：全品目（79 品目）',
                },
                {
                    companyName: '武田テバファーマ',
                    systemName: 'DI ナビ',
                    content: [
                        'DIナビは人工知能を用いた自動回答システムです。当社医薬品に関する一般的な情報の提供、及び本サイトの案内を目的とした医療関係者向けのサービスです。24時間いつでも簡単にご利用いただけます。',
                    ],
                    imageUrl: dinabi,
                    imageLinkUrl: 'https://www.med.takeda-teva.com/di-net/',
                    productsNumber: '■対応製品数（全製品数）：全品目（91品目）',
                },
                {
                    companyName: 'アムジェン',
                    systemName: 'AskAm',
                    content: ['ゾフルーザをはじめとする感染症関連の情報提供。'],
                    imageUrl: askam,
                    imageLinkUrl:
                        'https://www.amgen.co.jp/products/for-physicians/medical-information/terms',
                    productsNumber: '■対応製品数（全製品数）：全品目（6品目）',
                },
                {
                    companyName: '田辺三菱製薬',
                    systemName: 'たなみんmed',
                    content: [
                        'お役立ちポイント',
                        '・約160品目の情報をスピーディに検索（タブレット、スマホ対応）',
                        '・基本情報（効能効果/用法用量/くすりのしおり他）や使用期限を回答',
                        '・患者向け資材の閲覧/請求',
                        '・製品Q&A表示',
                    ],
                    imageUrl: img,
                    imageLinkUrl:
                        'https://medical.mt-pharma.co.jp/relation/guest/r7Y4',
                    productsNumber:
                        '■対応製品数（全製品数）：全品目（111品目）',
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
