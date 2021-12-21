<template>
    <div>
        <div class="flex border-b-2 border-unlineblue">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
            <div class="flex flex-col w-full md:w-191.25 mx-2 md:mx-0">
                <div class="flex justify-between pb-5 md:pb-3">
                    <div class="pt-4">
                        <div
                            class="
                                text-googleTitle
                                notoSansJpAndTwentyBlack
                                md:notoSansJpAndTwentyFourBold
                                lm:notoSansJpAndTwentyFourBold
                                md:text-2xl
                            "
                        >
                            医療者向けサービス紹介
                        </div>
                        <div>
                            <p
                                class="
                                    break-words
                                    notoSansJpAndTwelveRegular
                                    mt-4
                                    text-black
                                "
                            >
                                薬剤業務運営に役立つサービスのご紹介
                            </p>
                        </div>
                    </div>
                    <div class="pt-5">
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
                        text-left
                        mt-5
                        md:mt-10
                        mx-2
                    "
                >
                    ■関連
                </div>
                <!-- 明細 -->
                <div class="space-y-2">
                    <div
                        class="
                            border-2 border-pageblue
                            rounded-md
                            mx-2
                            pt-2
                            md:pt-4
                        "
                        v-for="(item, index) in list"
                        :key="index"
                    >
                        <!-- 会社名、リンクなど -->
                        <div class="flex pl-3.75 pr-3.75">
                            <a
                                class="
                                    underline
                                    text-pageblue
                                    notoSansJpAndTwentyFourBold
                                    items-center
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

                        <!-- 会社サイト -->
                        <div class="flex mt-2 items-end pl-3.75 pr-3.75">
                            <a
                                class="
                                    underline
                                    text-pageblue
                                    notoSansJpAndSixteenMedium
                                    focus:opacity-25
                                "
                                :href="item.companyLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                >{{ item.companyName }}</a
                            >
                            <div
                                class="
                                    ml-2
                                    notoSansJpAndFourteenRegular
                                    text-grayline
                                "
                            >
                                {{ item.company }}
                            </div>
                        </div>

                        <!-- 会社概要 -->
                        <div class="pl-3.75 pr-3.75 mt-2 md:mt-5">
                            <div
                                class="
                                    notoSansJpAndFourteenRegular
                                    w-full
                                    break-words
                                "
                                v-for="content in item.companyContents"
                                :key="content"
                            >
                                {{ content }}
                            </div>
                        </div>
                        <!-- カルーセル -->
                        <div>
                            <carousel :images="item.carousel"></carousel>
                        </div>

                        <div class="pl-3.75 pr-3.75 mt-2">
                            <div
                                class="
                                    notoSansJpAndFourteenRegular
                                    w-full
                                    break-words
                                "
                                v-for="content in item.contents"
                                :key="content"
                            >
                                <div
                                    class=""
                                    :class="[
                                        !item.detailDisp
                                            ? content.titlleStyle
                                            : 'block',
                                    ]"
                                    v-if="content.titleType == 'text'"
                                >
                                    {{ content.title }}
                                </div>
                                <div v-if="content.contentType == 'listDisc'">
                                    <ul
                                        class="pl-5"
                                        :class="content.contentStyle"
                                        v-for="contentItem in content.content"
                                        :key="contentItem"
                                    >
                                        <li
                                            :class="[
                                                !item.detailDisp
                                                    ? contentItem.style
                                                    : '',
                                            ]"
                                        >
                                            {{ contentItem.item }}
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    v-if="content.contentType == 'listDecimal'"
                                >
                                    <ol
                                        class="pl-5"
                                        :class="content.contentStyle"
                                    >
                                        <li
                                            class="ist-decimal"
                                            :class="[
                                                !item.detailDisp
                                                    ? contentItem.style
                                                    : '',
                                            ]"
                                            v-for="contentItem in content.content"
                                            :key="contentItem"
                                        >
                                            {{ contentItem.item }}
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div
                            class="
                                bg-backgroundMain
                                rounded-b-lg
                                text-center text-view
                                h-7.5
                                flex
                                justify-center
                                items-center
                                cursor-pointer
                                notoSansJpAndTwelveMedium
                            "
                            :class="[item.detailDisp ? 'mt-5' : 'mt-0']"
                            @click="detailDisp(index)"
                        >
                            <triangle-down-svg
                                class="w-3 h-3"
                                :class="[
                                    item.detailDisp
                                        ? 'transform rotate-180'
                                        : '',
                                ]"
                                fill="#32a5dc"
                                stroke="#32a5dc"
                            ></triangle-down-svg>
                            <div>
                                {{
                                    item.detailDisp
                                        ? '折りたたみ'
                                        : 'もっと読む'
                                }}
                            </div>
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
                            mt-5
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
                            bg-group
                            hover:opacity-25
                            border-b-2 border-pink-500
                            active:bg-pink-500 active:opacity-100
                            rounded-md
                            notoSansJpAndEighteenBlack
                            text-white text-center
                            w-full
                            md:w-61.25
                            h-17
                            mt-5
                            md:mt-0
                            ml-0
                            md:ml-2
                        "
                        @click="onPrelusion"
                    >
                        お<ruby>
                            薬<rp>(</rp>
                            <rt>やく</rt>
                            <rp>）)</rp>
                            立ちリンク集
                        </ruby>
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
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import carousel from './carousel.vue'
import img1 from '../../assets/image/1.png'
import img2 from '../../assets/image/2.png'
import img3 from '../../assets/image/3.png'
export default {
    components: {
        externalLink,
        iconRight,
        carousel,
        TriangleDownSvg,
    },
    props: {},
    data() {
        return {
            list: [
                {
                    urlTitle: 'オンライン学会KIT-ON',
                    urlLink: 'https://www.k-idea.jp/kit-on/',
                    iconLink: 'https://www.k-idea.jp/kit-on/',
                    companyName: '木村情報技術株式会社',
                    companyLink: 'https://www.k-idea.jp/',
                    company: '(企業サイト)',
                    companyContents: [
                        '木村情報技術では、オンライン学会運用プラットフォーム「KIT-ON」をご提供しています。',
                        '大会HPの開設やクレジット決済システムを始め、 ライブ配信やハイブリッド配信の技術サポートなど オンライン学会の開催に必要なサービスをワンストップでご相談いただけます。 ',
                        'オンライン学会開催をご検討の際はお気軽にお問い合わせください。',
                    ],
                    detailDisp: false,
                    contents: [
                        {
                            title: 'KIT-ON の主な機能',
                            titlleStyle: 'block',
                            titleType: 'text',
                            contentStyle: 'list-disc pl-5',
                            contentType: 'listDisc',
                            content: [
                                {
                                    style: ' text-black text-opacity-50',
                                    item: '大会ホームページの作成・運用',
                                },
                                {
                                    style: ' text-black text-opacity-25',
                                    item: '参加登録システムの作成・運用',
                                },
                                {
                                    style: 'hidden',
                                    item: '参加者へのリマインドメール送信',
                                },
                                {
                                    style: 'hidden',
                                    item: 'Web 参加証の発行',
                                },
                                {
                                    style: 'hidden',
                                    item: 'クレジット決済管理システム',
                                },
                                {
                                    style: 'hidden',
                                    item: 'Web 領収書の発行',
                                },
                                {
                                    style: 'hidden',
                                    item: '視聴判定機能つき動画プレイヤー',
                                },
                                {
                                    style: 'hidden',
                                    item: 'ミニテスト',
                                },
                                {
                                    style: 'hidden',
                                    item: '単位認定確認',
                                },
                                {
                                    style: 'hidden',
                                    item: '掲示板機能',
                                },
                            ],
                        },
                        {
                            title: '（随時機能追加を予定しています）',
                            titlleStyle: 'hidden',
                            titleType: 'text',
                            contentStyle: '',
                            contentType: '',
                            content: [],
                        },
                    ],
                    carousel: [
                        {
                            imgUrl: img1,
                            imgLinkUrl: '',
                        },
                        {
                            imgUrl: img2,
                            imgLinkUrl: '',
                        },
                        {
                            imgUrl: img3,
                            imgLinkUrl: '',
                        },
                        {
                            imgUrl: img1,
                            imgLinkUrl: '',
                        },
                    ],
                },
                {
                    urlTitle: '○○○○○○○',
                    urlLink: 'http://www.ncbi.nlm.nih.gov/pubmed/',
                    iconLink: 'http://www.ncbi.nlm.nih.gov/pubmed/',
                    companyName: '○○○○○○○○株式会',
                    companyLink: 'http://www.ncbi.nlm.nih.gov/pubmed/',
                    company: '(企業サイト)',
                    companyContents: [
                        '○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○',
                        '○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○',
                        '○○○○○○○○○○○○○○○○○○○○○○○○',
                    ],
                    detailDisp: false,
                    contents: [
                        {
                            title: '【特徴】',
                            titlleStyle: 'block',
                            titleType: 'text',
                            contentStyle: 'list-disc pl-5',
                            contentType: 'listDisc',
                            content: [
                                {
                                    style: ' text-black text-opacity-50',
                                    item: '医師向けの勤怠管理システム等、医療機関向け「働き方改革」の実現を支援するソリューションです',
                                },
                                {
                                    style: ' text-black text-opacity-25',
                                    item: '講演会や学会、ガイドラインにスコア計算、薬剤情報に副作用など業務で調べたい内容がアプリ1つで検索可能です',
                                },
                                {
                                    style: 'hidden',
                                    item: '一般的なSNSの感覚で簡単にコミュニケーションができる医療現場専用のサービスです',
                                },
                                {
                                    style: 'hidden',
                                    item: '診療科や委員会、同門会ごとにグループを作って、関係メンバーとのやり取りも充実します',
                                },
                                {
                                    style: 'hidden',
                                    item: 'みんなが病院のどこにいても、同じタイミングで一斉に連絡を届けることができます',
                                },
                                {
                                    style: 'hidden',
                                    item: 'ホワイトボードで共有されている内容も、ちょっとした気づきも、簡単に共有できます',
                                },
                                {
                                    style: 'hidden',
                                    item: 'FAXやUSBメモリの受け渡しでやり取りしていた書類や画像も、手軽に共有できます',
                                },
                                {
                                    style: 'hidden',
                                    item: '外勤先や出張先でも確認できます',
                                },
                                {
                                    style: 'hidden',
                                    item: '取引業者とのスケジュール調整やメッセージがとても楽になります',
                                },
                            ],
                        },
                        {
                            title: '【主な機能】',
                            titlleStyle: 'hidden',
                            titleType: 'text',
                            contentStyle: 'list-decimal pl-5',
                            contentType: 'listDecimal',
                            content: [
                                {
                                    style: 'hidden',
                                    item: '勤務管理　自分の出勤/退勤の履歴や打刻、残業申請がアプリ上から可能です',
                                },
                                {
                                    style: 'hidden',
                                    item: '薬剤検索　添付文書の閲覧、および複数薬剤での併用禁忌や注射配合変化での検索も可能です',
                                },
                                {
                                    style: 'hidden',
                                    item: 'スコア計算　全ての診療科のスコア計算ツールを搭載しています',
                                },
                                {
                                    style: 'hidden',
                                    item: '副作用検索　PMDA、FDAの有害事象報告を日本語で検索できます',
                                },
                                {
                                    style: 'hidden',
                                    item: '患者資材　アプリから患者資材の発注ができます',
                                },
                                {
                                    style: 'hidden',
                                    item: '医薬品ニュース　日々更新される医薬品情報の検索、閲覧ができます',
                                },
                                {
                                    style: 'hidden',
                                    item: '面会　MRをはじめとした取引業者との面会スケジュール調整、メッセージのやり取りが可能です',
                                },
                                {
                                    style: 'hidden',
                                    item: '院内グループ　申し送りや委員会単位での報告・連絡・相談がもっとスムーズになります',
                                },
                                {
                                    style: 'hidden',
                                    item: '連携グループ　薬局やクリニックなどの医療施設や製薬企業など取引先とのやり取りも可能です',
                                },
                                {
                                    style: 'hidden',
                                    item: 'メッセージ　リアルタイムチャットで、より細かなコミュニケーションができます',
                                },
                                {
                                    style: 'hidden',
                                    item: '連携メッセージ　複数の医療機関ユーザーと複数の取引先企業ユーザーとでチャットルームを作成することが可能です',
                                },
                                {
                                    style: 'hidden',
                                    item: 'カレンダー　外部カレンダー（Google、Outlook）との同期や、スタッフとスケジュールを共有して業務を効率化できます。またリマインダーを設定することもできます。',
                                },
                            ],
                        },
                        {
                            title: '【ご利用について】',
                            titlleStyle: 'hidden',
                            titleType: 'text',
                            contentStyle: 'list-disc pl-5',
                            contentType: 'listDisc',
                            content: [
                                {
                                    style: 'hidden',
                                    item: '所属の医療機関が既にDr.JOYを導入されている場合、管理者の方から招待を受け、ご利用を開始してください',
                                },
                                {
                                    style: 'hidden',
                                    item: '所属の医療機関がDr.JOYを導入されていない場合は、弊社ホームページのお問い合わせフォームより利用申請をしてください',
                                },
                                {
                                    style: 'hidden',
                                    item: '「まず個人で使いたい」という場合は既にDr.JOYアカウントをお持ちの医療者や取引業者からQRコードで招待いただくことも可能です。',
                                },
                            ],
                        },
                    ],
                    carousel: [
                        {
                            imgUrl: img1,
                            imgLinkUrl: '',
                        },
                        {
                            imgUrl: img2,
                            imgLinkUrl: '',
                        },
                        {
                            imgUrl: img3,
                            imgLinkUrl: '',
                        },
                        {
                            imgUrl: img1,
                            imgLinkUrl: '',
                        },
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
            this.$router.push('/pharmaLink')
        },
        detailDisp(index) {
            console.log(index, this.list[0])
            this.list[index].detailDisp = !this.list[index].detailDisp
        },
    },
    created() {},
    mounted() {
        console.log(this.list)
    },
}
</script>
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
