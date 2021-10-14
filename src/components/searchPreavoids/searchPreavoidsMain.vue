<template>
    <div class="">検索条件：{{ $store.getters.getSearchValue }}</div>
    <div>該当：145件</div>
    <div class="">
        <div class="flex flex-wrap-reverse md:justify-between">
            <div class="flex space-x-2 mt-2 md:mt-0">
                <button class="flex-none border-2 border-green-200">
                    データダウンロード
                </button>
                <button class="flex-none border-2 border-blueline">
                    検索結果一覧ダウンロード
                </button>
            </div>
            <div class="flex space-x-2">
                <!-- ソート順 -->
                <vue-single-select
                    class="w-56"
                    :name="'field1'"
                    :default-value="0"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{ tabindex: 1 }"
                    :default-options="$store.getters.getOrganizationDateSort"
                    @selected="setSelectValue"
                    :leftLableDisp="false"
                    buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                    inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-1 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                ></vue-single-select>
                <!-- 表示件数 -->
                <vue-single-select
                    class="w-32"
                    :name="'field2'"
                    :default-value="0"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{ tabindex: 1 }"
                    :default-options="$store.getters.getOrganizationCountSort"
                    @selected="setSelectValue"
                    :leftLableDisp="false"
                    buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                    inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-1 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                ></vue-single-select>
            </div>
        </div>
    </div>

    <div class="flex flex-none">
        <my-table></my-table>
        <div
            class="border-l-2 border-r-2 border-t-2 rounded-sm border-blueline"
        ></div>
    </div>
     <pagination
        :page-count="100"
        :page-range="5"
        :margin-pages="1"
        :click-handler="clickCallback"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        page-class="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
        activeClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular bg-blueline text-white"
        prevClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
        nextClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
        class="flex justify-center space-x-1"
    ></pagination>

    <div class="flex justify-center">{{ '1-20件 表示' }}</div>

    <div class="h-full space-y-2.5 md:space-y-3.75">
        <resut-tag
            headerStyle="titleBgColorGray"
            title="新着Q＆A"
            titleStyle="newQaInfoTitle"
            titleURL="/"
        >
            <result-detail-row
                class="searchResult_detail_gray"
                :sites="
                    $store.getters.getSearchAllOrganizationDidDocument.details
                "
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>
        <resut-tag
            headerStyle="titleBgColorGray"
            title="よく見られているQ＆A"
            titleStyle="newQaInfoTitle"
            titleURL="/"
        >
            <result-detail-row
                class="searchResult_detail_gray"
                :sites="
                    $store.getters.getSearchAllOrganizationDidDocument.details
                "
                :sub1="['group']"
                :sub2="['title']"
                :sub3="['states', 'date', 'view']"
            >
            </result-detail-row>
        </resut-tag>
    </div>
    <div class="rounded border-2 border-blueline bg-cardViewCount">
        <div>{{ 'トレンドタグ' }}</div>
        <div class="flex flex-wrap">
            <div
                class="
                    rounded-full
                    border-2 border-gray-400
                    bg-gray-100
                    h-6
                    notoSansJpAndTwelveRegular
                    pl-1
                    pr-1
                    text-center
                "
                v-for="item in torenndoTab"
                :key="item"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import resutTag from '../searchResult/resultTag.vue'
import resultDetailRow from '../searchResult/resultAllDetailRow.vue'
import carousel from '../searchResult/carousel.vue'
import Good from '../common/svgImage/good.vue'
import bad from '../common/svgImage/bad.vue'
import talk from '../common/svgImage/talk.vue'
import xIconSvg from '../common/svgImage/xIconSvg.vue'
import Pagination from '../pagination/pagiation.vue'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'
import GoodMessageBox from '../messageBox/goodMessageBox.vue'
import myTable from '../table/myTable.vue'

export default {
    components: {
        TriangleDownSvg,
        resutTag,
        resultDetailRow,
        carousel,
        Good,
        bad,
        talk,
        xIconSvg,
        Pagination,
        vueSingleSelect,
        GoodMessageBox,
        myTable,
    },
    props: {},
    data() {
        return {
            goodMessageBox: false,
            isDetailDisp: false,
            isDetailsDisp: false,
            torenndoTab: [
                '#ロキソニン',
                '#ロキソ',
                '#用途',
                '#痛み止め',
                '#ロキソニン',
                '#ロキソ',
            ],
            details: [
                { index: 0, check: false, value1: 'aa' },
                { index: 1, check: false, value1: 'aa' },
                { index: 2, check: false, value1: 'aa' },
                { index: 3, check: false, value1: 'aa' },
                { index: 4, check: false, value1: 'aa' },
                { index: 5, check: false, value1: 'aa' },
                { index: 6, check: false, value1: 'aa' },
                { index: 7, check: false, value1: 'aa' },
                { index: 8, check: false, value1: 'aa' },
                { index: 9, check: false, value1: 'aa' },
                { index: 10, check: false, value1: 'aa' },
                { index: 11, check: false, value1: 'aa' },
            ],
            info: [
                { id: 1, title: 'QA ID', value: '30013110' },
                {
                    id: 2,
                    title: '薬の分類',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 3,
                    title: '質問区分',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 4,
                    title: '医薬品名',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 5,
                    title: 'キーワード',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 6,
                    title: '質問者- 職種',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 7,
                    title: '質問者- 診療科',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 8,
                    title: '公開範囲',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 9,
                    title: 'カスタム項目',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 10,
                    title: 'カスタム項目',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 11,
                    title: 'カスタム項目',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 12,
                    title: 'カスタム項目',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 13,
                    title: 'カスタム項目',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 14,
                    title: 'PubMed',
                    value: 'ロキソプロフェンロキソニン',
                },
                {
                    id: 15,
                    title: 'ファイル',
                    value: 'ロキソプロフェンロキソニン',
                },
                { id: 16, title: '備考', value: 'ロキソプロフェンロキソニン' },
            ],
        }
    },

    watch: {},
    methods: {
        setDetailDisp() {
            //   console.log(this.isDetailDisp)
            this.isDetailDisp = !this.isDetailDisp
        },
        getDetailsDisp() {
            this.isDetailsDisp = !this.isDetailsDisp
        },
        clickCallback() {},
        setSelectValue(value) {
            this.selectValue = value
        },
        openGoodMessageBox() {
            //   console.log(this.$store.getters.getGoodMessageBox)
            this.$store.dispatch(
                'setGoodMessageBox',
                !this.$store.getters.getGoodMessageBox
            )
        },
        openCommentMessageBox() {
            //   console.log(this.$store.getters.getCommentMessageBox)
            this.$store.dispatch(
                'setCommentMessageBox',
                !this.$store.getters.getCommentMessageBox
            )
        },
    },
}
</script>
<style scoped></style>
