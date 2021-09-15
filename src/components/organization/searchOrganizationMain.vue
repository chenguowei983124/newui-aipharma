<template>
    <div class="">検索結果：{{ $store.getters.getSearchValue }}</div>
    <div class="hidden md:block">
        <div class="flex justify-between">
            <div>該当：145件</div>
            <div class="flex space-x-2">
                <div class="flex">
                    <div
                        class="
                            h-8
                            pl-2
                            pr-2
                            text-center
                            rounded-l
                            border-2 border-grayline
                        "
                    >
                        質問日時の新しい順
                    </div>
                    <div
                        class="
                            h-8
                            w-8
                            rounded-r
                            pt-1
                            text-center
                            bg-grayline
                            text-white
                        "
                    >
                        ▼
                    </div>
                </div>
                <div class="flex">
                    <div
                        class="
                            h-8
                            pl-2
                            pr-2
                            text-center
                            rounded-l
                            border-2 border-grayline
                        "
                    >
                        20 件 表示
                    </div>
                    <div
                        class="
                            h-8
                            w-8
                            rounded-r
                            pt-1
                            text-center
                            bg-grayline
                            text-white
                        "
                    >
                        ▼
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="block md:hidden">
        <div class="flex flex-col">
            <div>該当：145件</div>
            <div class="flex space-x-2">
                <div class="flex">
                    <div
                        class="
                            h-8
                            pl-2
                            pr-2
                            text-center
                            rounded-l
                            border-2 border-grayline
                        "
                    >
                        質問日時の新しい順
                    </div>
                    <div
                        class="
                            h-8
                            w-8
                            rounded-r
                            pt-1
                            text-center
                            bg-grayline
                            text-white
                        "
                    >
                        ▼
                    </div>
                </div>
                <div class="flex">
                    <div
                        class="
                            h-8
                            pl-2
                            pr-2
                            text-center
                            rounded-l
                            border-2 border-grayline
                        "
                    >
                        20 件 表示
                    </div>
                    <div
                        class="
                            h-8
                            w-8
                            rounded-r
                            pt-1
                            text-center
                            bg-grayline
                            text-white
                        "
                    >
                        ▼
                    </div>
                </div>
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
                <!-- 更新情報 -->
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
                                <div class="flex h-6 w-8 text-white bg-whole">
                                    <div>00</div>
                                    <good></good>
                                </div>
                                <div class="flex h-6 w-8 text-white bg-red-400">
                                    <div>00</div>
                                    <bad></bad>
                                </div>
                                <div
                                    class="
                                        flex
                                        h-6
                                        w-8
                                        text-white
                                        bg-yellow-300
                                    "
                                >
                                    <div>00</div>
                                    <talk></talk>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <div class="flex h-6 w-8 text-white bg-whole">
                                    <div>00</div>
                                    <good></good>
                                </div>
                                <div class="flex h-6 w-8 text-white bg-red-400">
                                    <div>00</div>
                                    <bad></bad>
                                </div>
                                <div
                                    class="
                                        flex
                                        h-6
                                        w-8
                                        text-white
                                        bg-yellow-300
                                    "
                                >
                                    <div>00</div>
                                    <talk></talk>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 詳細情報 -->
                <div :class="[isDetailDisp ? 'hidden' : 'block']">
                    <div class="flex flex-row justify-center">
                        <div
                            class="
                                underline
                                notoSansJpAndTwelveRegular
                                text-grayline
                            "
                        >
                            詳細情報▼
                        </div>
                    </div>
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
                            <div class="border-2 rounded-full pl-1 pr-1">
                                123123
                            </div>
                        </div>
                    </div>
                    -->
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
            "
            @click="setDetailDisp"
        >
            ▼開く
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
        class="flex justify-center"
    ></pagination>

    <div class="flex justify-center">{{ '1-20件 表示' }}</div>

    <div class="h-full space-y-2.5 md:space-y-3.75">
        <resut-tag
            headerStyle="titleOnlyUnderlineGrayLine"
            title="新着Q＆A"
            titleStyle="scientifiSocietyInfoTitle"
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
            headerStyle="titleOnlyUnderlineGrayLine"
            title="よく見られているQ＆A"
            titleStyle="scientifiSocietyInfoTitle"
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
import resutTag from '../searchResult/resultTag.vue'
import resultDetailRow from '../searchResult/resultAllDetailRow.vue'
import carousel from '../searchResult/carousel.vue'
import Good from '../svgImage/good.vue'
import bad from '../svgImage/bad.vue'
import talk from '../svgImage/talk.vue'
// import Pagination from '../pagination/pagination.vue'
import Pagination from '../pagination/pagiation.vue'
export default {
  components: {
    resutTag, resultDetailRow, carousel,
    Good, bad, talk,
    Pagination
  },
  props: {},
  data() {
    return {
      isDetailDisp: false,
      aa: "",
      bb: "",
      cc: "",
      torenndoTab: ["#ロキソニン", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ"]
    };
  },
  couputed: {},
  watch: {},
  methods: {
    setDetailDisp: function () {
      //   console.log(this.isDetailDisp)
      this.isDetailDisp = !this.isDetailDisp
    }
  }
}
</script>
<style scoped>
</style>
