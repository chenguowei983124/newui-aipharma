<template>
    <div class="">検索条件：{{ $store.getters.getSearchValue }}</div>
    <div class="hidden md:block">
        <div class="flex justify-between">
            <div>該当：145件</div>
            <div class="flex space-x-2">
                <div class="flex space-x-2">
                    <!-- 質問区分 -->
                    <vue-single-select
                        class="w-56"
                        :name="'field1'"
                        :default-value="0"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="
                            $store.getters.getOrganizationDateSort
                        "
                        @selected="setSelectValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-1 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    ></vue-single-select>
                    <!-- 質問区分 -->
                    <vue-single-select
                        class="w-32"
                        :name="'field2'"
                        :default-value="0"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="
                            $store.getters.getOrganizationCountSort
                        "
                        @selected="setSelectValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-1 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
            </div>
        </div>
    </div>
    <div class="block md:hidden">
        <div class="flex flex-col">
            <div>該当：145件</div>
            <div class="flex space-x-2">
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
                <vue-single-select
                    class="w-32"
                    :name="'field1'"
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
    <div>
        <div
            class="border-l-2 border-r-2 border-t-2 rounded-sm border-blueline"
        >
            <div
                class="
                    searchResult_lable_ownFacility
                    block
                    md:hidden
                    mid:hidden
                "
            >
                自施設
            </div>
            <div class="p-4">
                <!-- Q -->
                <div
                    class="
                        flex
                        justify-between
                        border-b-2 border-blueline
                        items-center
                        pb-5
                    "
                >
                    <div class="notoSansJpAndFifteenBold text-blueline w-5">
                        Q
                    </div>
                    <div class="flex-grow">
                        ロキソプロフェン錠を通過する最小チューブは？
                    </div>
                    <div
                        class="
                            searchResult_lable_ownFacility
                            hidden
                            md:block
                            mid:block
                        "
                    >
                        自施設
                    </div>
                </div>
                <!-- A -->
                <div class="flex justify-between pt-5">
                    <div class="w-5">A</div>
                    <div class="flex-grow">8Frです。</div>
                </div>
                <!-- 更新情報 pc-->
                <div class="hidden md:block mid:block">
                    <div class="flex justify-between pt-5">
                        <div class="space-y-2 notoSansJpAndTwelveBold">
                            <div class="flex space-x-4">
                                <div>最終編集日：2021.08.01</div>
                                <div>質問日：2021.08.01</div>
                            </div>
                            <div>
                                最終編集者：AI-PHARMA 事務所システム管理者
                            </div>
                            <div>施設・単体：AI-PHARMA</div>
                            <div>規模：企業</div>
                        </div>
                        <div class="flex flex-col justify-end">
                            <div class="flex flex-row space-x-2">
                                <div class="text-searchDropdown">
                                    12345 view
                                </div>
                                <div class="relative">
                                    <button
                                        class="
                                            flex
                                            justify-center
                                            items-center
                                            h-7.5
                                            w-14
                                            rounded
                                            text-white
                                            bg-whole
                                        "
                                        @click="openGoodMessageBox"
                                    >
                                        <div>00</div>
                                        <good class=""></good>
                                    </button>
                                    <div
                                        :class="[
                                            $store.getters.getGoodMessageBox
                                                ? 'block absolute bottom-8'
                                                : 'hidden',
                                        ]"
                                    >
                                        <div
                                            class="
                                                w-44
                                                h-24
                                                bg-white
                                                border border-black
                                                rounded
                                            "
                                        >
                                            <div
                                                class="
                                                    bg-gray-300
                                                    h-1/4
                                                    flex
                                                    justify-between
                                                    items-center
                                                    px-2
                                                "
                                            >
                                                <div class="text-xs">
                                                    理由をお聞かせください。
                                                </div>
                                                <div
                                                    class="cursor-pointer"
                                                    @click="openGoodMessageBox"
                                                >
                                                    <x-icon-svg></x-icon-svg>
                                                </div>
                                            </div>
                                            <div class="h-3/4 flex flex-col">
                                                <div class="h-3/4">
                                                    <textarea
                                                        type="text"
                                                        class="
                                                            text-xs
                                                            w-full
                                                            focus:outline-none
                                                        "
                                                        placeholder="（任意）"
                                                    />
                                                </div>
                                                <div
                                                    class="
                                                        h-1/4
                                                        flex
                                                        justify-between
                                                        items-center
                                                        px-1
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            text-xxss
                                                            text-red-600
                                                        "
                                                    >
                                                        ※コメントは管理者に送信されます
                                                    </div>
                                                    <button
                                                        class="
                                                            bg-gray-600
                                                            text-white text-xxss
                                                        "
                                                    >
                                                        送信
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        flex
                                        justify-center
                                        items-center
                                        h-7.5
                                        w-14
                                        rounded
                                        text-white
                                        bg-red-400
                                    "
                                >
                                    <div>00</div>
                                    <bad></bad>
                                </div>
                                <button
                                    class="
                                        flex
                                        justify-center
                                        items-center
                                        h-7.5
                                        w-14
                                        rounded
                                        text-white
                                        bg-yellow-300
                                    "
                                    @click="openCommentMessageBox"
                                >
                                    <div>00</div>
                                    <talk></talk>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 更新情報 sp-->
                <div class="block md:hidden mid:hidden">
                    <div class="flex flex-col pt-5">
                        <div class="space-y-2 notoSansJpAndTwelveBold">
                            <div class="flex space-x-4">
                                <div>最終編集日：2021.08.01</div>
                                <div>質問日：2021.08.01</div>
                            </div>
                            <div>
                                最終編集者：AI-PHARMA 事務所システム管理者
                            </div>
                            <div>施設・単体：AI-PHARMA</div>
                            <div>規模：企業</div>
                        </div>
                        <div
                            class="
                                rounded-full
                                border-2 border-gray-400
                                bg-gray-100
                                h-6
                                w-1/2
                                notoSansJpAndTwelveRegular
                                pl-1
                                pr-1
                                text-center
                            "
                        >
                            {{ '#ロキソニン' }}
                        </div>
                        <div class="flex flex-col justify-end items-end">
                            <div class="flex flex-row space-x-2">
                                <div class="text-searchDropdown">
                                    12345 view
                                </div>
                                <button
                                    class="flex h-6 w-8 text-white bg-whole"
                                    @click="openGoodMessageBox"
                                >
                                    <div>00</div>
                                    <good></good>
                                </button>

                                <div class="flex h-6 w-8 text-white bg-red-400">
                                    <div>00</div>
                                    <bad></bad>
                                </div>
                                <button
                                    class="
                                        flex
                                        h-6
                                        w-8
                                        text-white
                                        bg-yellow-300
                                    "
                                    @click="openCommentMessageBox"
                                >
                                    <div>00</div>
                                    <talk></talk>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 詳細情報 pc -->
                <!-- <div :class="[isDetailDisp ? 'hidden' : 'block']"> -->
                <div class="hidden mid:block md:block">
                    <div :class="[isDetailDisp ? 'block' : 'hidden']">
                        <div class="flex flex-row justify-center">
                            <div
                                class="
                                    underline
                                    notoSansJpAndTwelveRegular
                                    text-grayline
                                    flex
                                    justify-center
                                    items-center
                                    cursor-pointer
                                "
                                @click="getDetailsDisp"
                            >
                                詳細情報<triangle-down-svg
                                    class="w-2 h-2"
                                    :class="[
                                        isDetailsDisp
                                            ? 'transform rotate-180'
                                            : '',
                                    ]"
                                    fill="#000000"
                                    stroke="#ffffff"
                                ></triangle-down-svg>
                            </div>
                        </div>

                        <div :class="[isDetailsDisp ? 'block' : 'hidden']">
                            <div class="flex flex-row space-x-5">
                                <div
                                    class="
                                        flex
                                        w-1/2
                                        border-b-2
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                >
                                    <div class="w-30">QAID</div>
                                    <div class="w-2">:</div>
                                    <div class="">123123</div>
                                </div>
                                <div
                                    class="
                                        flex
                                        w-1/2
                                        border-b-2
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                >
                                    <div class="w-30">薬の分類</div>
                                    <div class="w-2">:</div>
                                    <div class="">789</div>
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-row
                                    space-x-5
                                    notoSansJpAndFourteenRegular
                                    text-grayline
                                "
                            >
                                <div class="flex w-1/2 border-b-2">
                                    <div class="w-30">質問区分</div>
                                    <div class="w-2">:</div>
                                    <div class="">123123</div>
                                </div>
                                <div class="flex w-1/2 border-b-2">
                                    <div class="w-30">医薬品</div>
                                    <div class="w-2">:</div>
                                    <div class="">789</div>
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-row
                                    space-x-5
                                    notoSansJpAndFourteenRegular
                                    text-grayline
                                "
                            >
                                <div class="flex w-1/2 border-b-2">
                                    <div class="w-30">キーワード</div>
                                    <div class="w-2">:</div>
                                    <div class="">123123</div>
                                </div>
                                <div class="flex w-1/2 border-b-2">
                                    <div class="w-30">質問者・業種</div>
                                    <div class="w-2">:</div>
                                    <div class="">789</div>
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-row
                                    space-x-5
                                    border-b-2
                                    notoSansJpAndFourteenRegular
                                    text-grayline
                                "
                            >
                                <div class="flex w-1/2">
                                    <div class="w-30">質問者・診療科</div>
                                    <div class="w-2">:</div>
                                    <div class="">123123</div>
                                </div>
                                <div class="flex w-1/2">
                                    <div class="w-30">公開範囲</div>
                                    <div class="w-2">:</div>
                                    <div class="">789</div>
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-row
                                    space-x-2
                                    notoSansJpAndFourteenRegular
                                    text-grayline
                                "
                            >
                                <div class="flex flex-auto border-b-2">
                                    <div class="w-30">参照資料</div>
                                    <div class="w-2">:</div>
                                    <div class="">123123</div>
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-row
                                    space-x-2
                                    notoSansJpAndFourteenRegular
                                    text-grayline
                                "
                            >
                                <div class="flex flex-auto border-b-2">
                                    <div class="w-30">備考</div>
                                    <div class="w-2">:</div>
                                    <div class="">123123</div>
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-row
                                    space-x-2
                                    notoSansJpAndFourteenRegular
                                    text-grayline
                                "
                            >
                                <div class="flex flex-auto">
                                    <div class="w-30">タグ</div>
                                    <div class="w-2">:</div>
                                    <div
                                        class="border-2 rounded-full pl-1 pr-1"
                                    >
                                        123123
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 詳細情報 sp -->
                <!-- <div :class="[isDetailDisp ? 'hidden' : 'block']"> -->
                <div class="block mid:hidden md:hidden">
                    <div :class="[isDetailDisp ? 'block' : 'hidden']">
                        <div class="flex flex-row justify-center">
                            <div
                                class="
                                    underline
                                    notoSansJpAndTwelveRegular
                                    text-grayline
                                    flex
                                    justify-center
                                    items-center
                                    cursor-pointer
                                "
                                @click="getDetailsDisp"
                            >
                                詳細情報<triangle-down-svg
                                    class="w-2 h-2"
                                    :class="[
                                        isDetailsDisp
                                            ? 'transform rotate-180'
                                            : '',
                                    ]"
                                    fill="#000000"
                                    stroke="#ffffff"
                                ></triangle-down-svg>
                            </div>
                        </div>

                        <div :class="[isDetailsDisp ? 'block' : 'hidden']">
                            <div v-for="item in info" :key="item">
                                <div
                                    class="
                                        flex flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                    :class="[
                                        item.id == info.length
                                            ? ''
                                            : 'border-b-2 ',
                                    ]"
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30">{{ item.title }}</div>
                                        <div class="w-2">:</div>
                                        <div>
                                            {{ item.value }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="
                border-l-2 border-r-2 border-b-2
                rounded-sm
                bg-cardViewCount
                border-blueline
                text-center text-blueline
                h-8
                flex
                justify-center
                items-center
                cursor-pointer
            "
            @click="setDetailDisp"
        >
            <triangle-down-svg
                class="w-4 h-4"
                :class="[isDetailDisp ? 'transform rotate-180' : '']"
                fill="#ffffff"
                stroke="#ffffff"
            ></triangle-down-svg>
            <div v-if="!isDetailDisp">開く</div>
            <div v-else>閉じる</div>
        </div>
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
import TriangleDownSvg from '../svgImage/triangleDownSvg.vue'
import resutTag from '../searchResult/resultTag.vue'
import resultDetailRow from '../searchResult/resultAllDetailRow.vue'
import carousel from '../searchResult/carousel.vue'
import Good from '../svgImage/good.vue'
import bad from '../svgImage/bad.vue'
import talk from '../svgImage/talk.vue'
import xIconSvg from '../svgImage/xIconSvg.vue'
// import Pagination from '../pagination/pagination.vue'
import Pagination from '../pagination/pagiation.vue'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'
import GoodMessageBox from '../messageBox/goodMessageBox.vue'

export default {
  components: {
    TriangleDownSvg,
    resutTag, resultDetailRow, carousel,
    Good, bad, talk, xIconSvg,
    Pagination, vueSingleSelect,
    GoodMessageBox
  },
  props: {},
  data() {
    return {
      goodMessageBox: false,
      isDetailDisp: false,
      isDetailsDisp: false,
      torenndoTab: ["#ロキソニン", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ"],
      info: [
        { id: 1, title: 'QA ID', value: '30013110' },
        { id: 2, title: '薬の分類', value: 'ロキソプロフェンロキソニン' },
        { id: 3, title: '質問区分', value: 'ロキソプロフェンロキソニン' },
        { id: 4, title: '医薬品名', value: 'ロキソプロフェンロキソニン' },
        { id: 5, title: 'キーワード', value: 'ロキソプロフェンロキソニン' },
        { id: 6, title: '質問者- 職種', value: 'ロキソプロフェンロキソニン' },
        { id: 7, title: '質問者- 診療科', value: 'ロキソプロフェンロキソニン' },
        { id: 8, title: '公開範囲', value: 'ロキソプロフェンロキソニン' },
        { id: 9, title: 'カスタム項目', value: 'ロキソプロフェンロキソニン' },
        { id: 10, title: 'カスタム項目', value: 'ロキソプロフェンロキソニン' },
        { id: 11, title: 'カスタム項目', value: 'ロキソプロフェンロキソニン' },
        { id: 12, title: 'カスタム項目', value: 'ロキソプロフェンロキソニン' },
        { id: 13, title: 'カスタム項目', value: 'ロキソプロフェンロキソニン' },
        { id: 14, title: 'PubMed', value: 'ロキソプロフェンロキソニン' },
        { id: 15, title: 'ファイル', value: 'ロキソプロフェンロキソニン' },
        { id: 16, title: '備考', value: 'ロキソプロフェンロキソニン' },
      ]
    };
  },

  watch: {},
  methods: {
    setDetailDisp() {
      //   console.log(this.isDetailDisp)
      this.isDetailDisp = !this.isDetailDisp
    },
    getDetailsDisp() { this.isDetailsDisp = !this.isDetailsDisp },
    clickCallback() {
    },
    setSelectValue(value) {
      this.selectValue = value
    },
    openGoodMessageBox() {
      //   console.log(this.$store.getters.getGoodMessageBox)
      this.$store.dispatch('setGoodMessageBox', !this.$store.getters.getGoodMessageBox)
    },
    openCommentMessageBox() {
      //   console.log(this.$store.getters.getCommentMessageBox)
      this.$store.dispatch('setCommentMessageBox', !this.$store.getters.getCommentMessageBox)
    }
  }

}
</script>
<style scoped>
</style>
