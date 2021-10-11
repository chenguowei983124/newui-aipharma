<template>
    <div v-if="$store.getters.organizationSearchInfo != undefined">
        <div class="flex flex-row space-x-2 notoSansJpAndFourteenMedium">
            検索条件：
            <div
                class=""
                v-for="(searchWords, index) in $store.getters
                    .organizationSearchInfo.searchWords"
                :key="index"
            >
                {{ searchWords }}
            </div>
        </div>
        <!-- <div class="">検索条件：{{ $store.getters.getSearchValue }}</div> -->
        <!-- pc/sp -->
        <div class="flex justify-between flex-wrap space-y-1">
            <div class="notoSansJpAndFourteenMedium">
                該当：
                {{ $store.getters.organizationSearchInfo.allCount }}件
            </div>
            <div class="flex space-x-2">
                <div class="flex space-x-2">
                    <!-- 順 区分 -->
                    <vue-single-select
                        class="w-56 cursor-pointer"
                        :name="'field1'"
                        :default-value="organizationDateSortValue"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="
                            $store.getters.getOrganizationDateSort
                        "
                        @selected="setOrganizationDateSortValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0 "
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none "
                    ></vue-single-select>
                    <!-- 件 表示 区分 -->
                    <vue-single-select
                        class="w-32 cursor-pointer"
                        :name="'field2'"
                        :default-value="organizationCountSortValue"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="
                            $store.getters.getOrganizationCountSort
                        "
                        @selected="setOrganizationCountSortValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
            </div>
        </div>
        <div class="space-y-2 mt-8">
            <!-- <div v-for="(item, index) in qaInfo" :key="index"> -->
            <!-- <div> -->
            <div
                v-for="(item, index) in $store.getters.organizationSearchInfo
                    .qas"
                :key="index"
            >
                <!-- {{ qaItems.facilityIdentificationNumber }} -->
                <div class="border-2 rounded border-blueline">
                    <!-- Group -->
                    <div
                        class="
                            notoSansJpAndTwelveMedium
                            text-white
                            h-4
                            flex-grow
                            -ml-0.5
                            -mt-0.5
                        "
                    >
                        <result-detail-row-item
                            itemType="1"
                            :typeKB="item.group"
                            v-if="item.group != undefined"
                        ></result-detail-row-item>
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
                            <div
                                class="
                                    notoSansJpAndTwentyFourBold
                                    text-blueline
                                    w-5
                                "
                            >
                                Q
                            </div>
                            <div
                                class="flex-grow notoSansJpAndSixteenBold ml-5"
                            >
                                {{ item.question }}
                            </div>
                        </div>
                        <!-- A -->
                        <div class="flex justify-between mt-5 items-start">
                            <div class="flex w-5 h-6 text-yellow-500 text-sm">
                                <div
                                    class="
                                        flex
                                        items-center
                                        notoSansJpAndTwentyFourBold
                                    "
                                >
                                    A
                                </div>
                            </div>

                            <div
                                class="
                                    flex-grow
                                    break-all
                                    notoSansJpAndFourteenBold
                                    pl-5
                                "
                            >
                                <!-- {{ item.answer }} -->
                                <div
                                    v-show="!(isDetailDisp[index] === index)"
                                    v-html="
                                        item.answer.toString().split('\n')[0]
                                    "
                                ></div>

                                <div
                                    v-show="isDetailDisp[index] === index"
                                    v-html="item.answer"
                                ></div>
                            </div>
                        </div>
                        <!-- 更新情報 pc/sp-->
                        <div class="flex flex-col pt-5 pl-10">
                            <div class="space-y-2 notoSansJpAndElevenRegular">
                                <div class="flex space-x-4">
                                    <div>最終編集日：{{ item.createdAt }}</div>
                                    <div>質問日：{{ item.askedAt }}</div>
                                </div>
                                <div class="flex flex-wrap space-x-2">
                                    参考資料：
                                    <div
                                        v-for="referenceMaterials in item.referenceMaterials"
                                        :key="referenceMaterials"
                                    >
                                        {{ referenceMaterials.name }}
                                    </div>
                                </div>
                                <div
                                    class="
                                        flex flex-wrap
                                        space-x-2
                                        items-center
                                    "
                                >
                                    出 典：
                                    <div
                                        v-for="urls in item.urls"
                                        :key="urls"
                                        class="
                                            rounded-full
                                            border-2 border-gray-300
                                            bg-gray-100
                                            h-6
                                            notoSansJpAndElevenRegular
                                            pl-1
                                            pr-1
                                            text-center
                                            flex
                                            items-center
                                            ml-1
                                            cursor-pointer
                                        "
                                    >
                                        <a
                                            href="{{urls.url}}"
                                            target="view_window"
                                            >{{ urls.title }}</a
                                        >
                                    </div>
                                </div>
                                <div class="flex">
                                    PubMed：
                                    <div
                                        v-if="item.pubmed != ''"
                                        class="hover:text-blue-400"
                                    >
                                        <a
                                            href="https://www.ncbi.nlm.nih.gov/pubmed/{{
                                            item.pubmed
                                        }}"
                                            target="view_window"
                                            >https://www.ncbi.nlm.nih.gov/pubmed/{{
                                                item.pubmed
                                            }}</a
                                        >
                                    </div>
                                </div>
                                <div
                                    class="
                                        flex flex-wrap
                                        space-x-2
                                        items-center
                                    "
                                >
                                    ファイル :
                                    <div
                                        v-for="documents in item.documents"
                                        :key="documents"
                                        class="
                                            rounded-full
                                            border-2 border-gray-300
                                            bg-gray-100
                                            h-6
                                            notoSansJpAndElevenRegular
                                            pl-1
                                            pr-1
                                            text-center
                                            flex
                                            items-center
                                            ml-1
                                            cursor-pointer
                                        "
                                    >
                                        <a
                                            href="{{documents.url}}"
                                            target="view_window"
                                            >{{ documents.name }}</a
                                        >
                                    </div>
                                </div>
                                <div>施設規模：{{ item.facilityScale }}</div>
                            </div>
                            <div class="flex flex-wrap space-x-2 mt-2">
                                <div
                                    class="
                                        rounded-full
                                        border-2 border-gray-300
                                        bg-gray-100
                                        h-6
                                        notoSansJpAndElevenRegular
                                        pl-1
                                        pr-1
                                        text-center
                                        flex
                                        items-center
                                        mr-1
                                        cursor-pointer
                                    "
                                    v-for="keywordTags in item.keywordTags"
                                    :key="keywordTags"
                                    @click="sendMsgToParent(keywordTags.name)"
                                >
                                    #{{ keywordTags.name }}
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-col
                                    justify-end
                                    items-end
                                    mt-4
                                    md:mt-0
                                "
                            >
                                <div
                                    class="
                                        flex flex-row
                                        space-x-2
                                        items-baseline
                                    "
                                >
                                    <div class="text-searchDropdown text-xs">
                                        {{ item.viewCount }} view
                                    </div>
                                    <!-- good pc -->
                                    <div
                                        class="
                                            relative
                                            hidden
                                            md:block
                                            mid:block
                                        "
                                    >
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
                                            @click="ActicleDetail(index)"
                                        >
                                            <div>
                                                {{ item.feedbackGood }}
                                            </div>
                                            <good class=""></good>
                                        </button>
                                        <div v-show="activeIndex === index">
                                            <div class="absolute bottom-8">
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
                                                            class="
                                                                cursor-pointer
                                                            "
                                                            @click="
                                                                ActicleDetail(
                                                                    index
                                                                )
                                                            "
                                                        >
                                                            <x-icon-svg></x-icon-svg>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="
                                                            h-3/4
                                                            flex flex-col
                                                        "
                                                    >
                                                        <div class="h-3/4">
                                                            <textarea
                                                                v-model="
                                                                    item.value
                                                                "
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
                                                                    text-white
                                                                    text-xxss
                                                                "
                                                                @click="
                                                                    sendGoodMessage(
                                                                        index
                                                                    )
                                                                "
                                                            >
                                                                送信
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- good sp-->
                                    <div class="block md:hidden mid:hidden">
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
                                            <div>{{ item.feedbackGood }}</div>
                                            <good></good>
                                        </button>
                                    </div>
                                    <!-- bad -->
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
                                        <div>{{ item.feedbackBad }}</div>
                                        <bad></bad>
                                    </div>
                                    <!-- comment -->
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
                                        <div>
                                            {{ item.feedbackComment }}
                                        </div>
                                        <talk></talk>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- 詳細情報 pc/sp -->
                        {{ isDetailDisp[index] }}
                        <div
                            :class="[
                                isDetailDisp[index] == index
                                    ? 'block'
                                    : 'hidden',
                            ]"
                        >
                            <div class="flex flex-row justify-center text-sm">
                                <div class="box">
                                    <span class="line"></span>
                                    <span class="text"
                                        ><div
                                            class="
                                                border-b border-gray-500
                                                notoSansJpAndTwelveRegular
                                                text-grayline
                                                flex
                                                justify-center
                                                items-center
                                                cursor-pointer
                                            "
                                            @click="openDetailsDisp(index)"
                                        >
                                            詳細情報
                                            <triangle-down-svg
                                                class="w-2 h-2"
                                                :class="[
                                                    isDetailsDisp[index] ===
                                                    index
                                                        ? 'transform rotate-180'
                                                        : '',
                                                ]"
                                                fill="#000000"
                                                stroke="#ffffff"
                                            ></triangle-down-svg></div
                                    ></span>
                                    <span class="line"></span>
                                </div>
                            </div>
                            <div
                                :class="[
                                    isDetailsDisp[index] === index
                                        ? 'block'
                                        : 'hidden',
                                ]"
                            >
                                <div
                                    class="
                                        md:flex md:flex-row
                                        md:space-x-5
                                        items-end
                                    "
                                >
                                    <div
                                        class="
                                            flex
                                            md:w-1/2
                                            border-b-2
                                            notoSansJpAndFourteenRegular
                                            text-grayline
                                        "
                                    >
                                        <div class="w-30 flex-none">QAID</div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.facilityQaNumber }}
                                        </div>
                                    </div>
                                    <div
                                        class="
                                            flex
                                            md:w-1/2
                                            border-b-2
                                            notoSansJpAndFourteenRegular
                                            text-grayline
                                        "
                                    >
                                        <div class="w-30 flex-none">
                                            薬の分類
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class=""
                                                v-for="qaQaClassifyClasses in item.qaQaClassifyClasses"
                                                :key="qaQaClassifyClasses"
                                            >
                                                {{ qaQaClassifyClasses.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        md:space-x-5
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                >
                                    <div class="flex md:w-1/2 border-b-2">
                                        <div class="w-30 flex-none">
                                            質問区分
                                        </div>
                                        <div class="w-2">:</div>
                                        <div
                                            class="mr-2"
                                            v-for="categories in item.categories"
                                            :key="categories"
                                        >
                                            {{ categories.name }}
                                        </div>
                                    </div>
                                    <div class="flex md:w-1/2 border-b-2">
                                        <div class="w-30 flex-none">医薬品</div>
                                        <div class="w-2">:</div>
                                        <div
                                            class="mr-2"
                                            v-for="medicineName in item.medicines"
                                            :key="medicineName"
                                        >
                                            {{ medicineName.name }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        md:space-x-5
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                >
                                    <div class="flex md:w-1/2 border-b-2">
                                        <div class="w-30 flex-none">
                                            キーワード
                                        </div>
                                        <div class="w-2">:</div>
                                        <div
                                            class="mr-2"
                                            v-for="keywordTags in item.keywordTags"
                                            :key="keywordTags"
                                        >
                                            {{ keywordTags.name }}
                                        </div>
                                    </div>
                                    <div class="flex md:w-1/2 border-b-2">
                                        <div class="w-30 flex-none">
                                            質問者- 職種
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.askedPersonClassName }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        md:space-x-5
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                >
                                    <div class="flex md:w-1/2 border-b-2">
                                        <div class="w-30 flex-none">
                                            質問者・診療科
                                        </div>
                                        <div class="w-2">:</div>
                                        <div
                                            class="mr-2"
                                            v-for="askedPersonMedicalDepartments in item.askedPersonMedicalDepartments"
                                            :key="askedPersonMedicalDepartments"
                                        >
                                            {{
                                                askedPersonMedicalDepartments.name
                                            }}
                                        </div>
                                    </div>
                                    <div class="flex md:w-1/2 border-b-2">
                                        <div class="w-30 flex-none">
                                            公開範囲
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.shareScope }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        border-b-2
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                    v-for="customDetails in item.customDetails"
                                    :key="customDetails"
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            {{ customDetails.title }}
                                        </div>
                                        <div class="w-2">:</div>
                                        <!-- single -->
                                        <div
                                            v-if="
                                                customDetails.dataType ==
                                                'single'
                                            "
                                        >
                                            {{ customDetails.data }}
                                        </div>
                                        <!-- multiple -->
                                        <div
                                            v-if="
                                                customDetails.dataType ==
                                                'multiple'
                                            "
                                            class="flex flex-wrap space-x-2"
                                        >
                                            <!-- {{ customDetails.data }} -->
                                            <div
                                                v-for="data in customDetails.data"
                                                :key="data"
                                            >
                                                {{ data }}
                                            </div>
                                        </div>
                                        <!-- text -->
                                        <div
                                            v-if="
                                                customDetails.dataType == 'text'
                                            "
                                        >
                                            {{ customDetails.data }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30">備考</div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.note }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="
                            bg-cardViewCount
                            text-center text-blueline
                            h-8
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                        "
                        @click="openDetailDisp(index)"
                    >
                        <div
                            v-show="!(isDetailDisp[index] === index)"
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-4 h-4"
                                fill="#0099ff"
                                stroke="#0099ff"
                            ></triangle-down-svg>
                            <div>開く</div>
                        </div>
                        <div
                            v-show="isDetailDisp[index] === index"
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-4 h-4 transform rotate-180"
                                fill="#0099ff"
                                stroke="#0099ff"
                            ></triangle-down-svg>
                            <div>閉じる</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- :click-handler="clickCallback" -->
         <pagination
            :page-count="getPageCount"
            :page-range="4"
            :margin-pages="1"
            @input="getSelectPage"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            page-class="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
            activeClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular bg-blueline text-white"
            prevClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
            nextClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
            class="flex justify-center space-x-1"
        ></pagination>
        <!-- <div class="flex justify-center mt-2">1-{{ pageCount }}件 表示</div> -->
        <div class="flex justify-center mt-2">{{ dispDetailRange }}件 表示</div>
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
import Pagination from '../pagination/pagiation.vue'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'
import GoodMessageBox from '../messageBox/goodMessageBox.vue'
import ResultDetailRowItem from '../searchResult/resultDetailRowItem.vue'

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
    ResultDetailRowItem,
  },
  props: {},

  data() {
    return {
      // 順 区分 id
      organizationDateSortValue: 0,
      // 件 表示 区分 id
      organizationCountSortValue: 0,
      pageCount: 1,
      selectPage: 1,
      goodMessageBox: false,
      //   isDetailDisp: false,
      isDetailDisp: [],
      //   isDetailsDisp: false,
      isDetailsDisp: [],
      activeIndex: -1,
      //   torenndoTab: ["#ロキソニン", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ"],
      resultData: Object,
      result: Object,
    }
  },
  mounted() {
    this.execSearch()
  },
  watch: {},
  computed: {
    getPageCount() {
      //   let page = 1;
      if (this.organizationCountSortValue == '0') {
        this.pageCount = 20
      } else if (this.organizationCountSortValue == '1') {
        this.pageCount = 50
      } else if (this.organizationCountSortValue == '2') {
        this.pageCount = 100
      }
      this.$store.dispatch('setPage', this.pageCount)
      return Math.ceil(
        this.$store.getters.organizationSearchInfo.allCount /
        this.pageCount
      )
    },
    dispDetailRange: function () {
      let start = 1
      let end = ""
      //   console.log(this.selectPage)
      //   console.log("this.$store.getters.organizationSearchInfo", Object.keys(this.$store.getters.organizationSearchInfo.qas).length)
      if (this.selectPage > 1) {
        start = (this.selectPage - 1) * this.pageCount + 1
      }
      //   if (this.$store.getters.organizationSearchInfo.qas == "") {

      end = start + Object.keys(this.$store.getters.organizationSearchInfo.qas).length
      //   }
      if (this.selectPage == 1) {
        return start.toString()
      } else {
        return start.toString() + '-' + end.toString()
      }
    },
  },
  methods: {
    execSearch(kb) {
      document.documentElement.scrollTop = 0
      // 検索条件リーセット
      this.resetStore()
      // 設定　NULL
      console.log("設定　NULL")
      this.openDetailDisp("")
      console.log("kb", kb)
      // QAID取得
      let qaid = ''
      let params
      if (this.$route.params.id) {
        qaid = this.$route.params.id
        this.$store.dispatch('setQAID', qaid)
        sessionStorage.setItem(this.$constant.searchParam.PAID, qaid)
      } else if (this.$route.params.searchKB || kb == true) {
        params = {
          search: this.$store.getters.getSearchWord,
          tags:
            this.$props.form == this.$constant.formList.TOP
              ? ''
              : this.$store.getters.getSearchTags
                ? this.$store.getters.getSearchTags.join(',')
                : '',
          medicine:
            this.$props.form == this.$constant.formList.TOP
              ? '1'
              : this.$store.getters.getMedicineID,
          qacategory:
            this.$props.form == this.$constant.formList.TOP
              ? '-1'
              : this.$store.getters.getQuestionID,
          facility_flag:
            this.$props.form == this.$constant.formList.TOP
              ? '-1'
              : this.$store.getters.getFacilityID,
          displayed:
            this.$props.form == this.$constant.formList.TOP
              ? '1'
              : this.$store.getters.getMaxCount,
          sort:
            this.$props.form == this.$constant.formList.TOP
              ? '1'
              : this.$store.getters.getSort,
          page:
            this.$props.form == this.$constant.formList.TOP
              ? '1'
              : this.$store.getters.getPage,
        }
      } else if (this.$store.getters.getQAID != '') {
        qaid = this.$store.getters.getQAID
      }

      let result
      // QAID存在チェック
      if (qaid != '') {
        result = this.$serve.getOwn({ id: qaid })
      } else if (params != null) {
        result = this.$serve.getOwnData(params)
      }

      this.setSearchResult(result)
      // this.dispDetailRange()
    },

    setSearchResult: function (value) {
      console.log("setSearchResult", value)
      value.then((response) => {
        //   console.log("setSearchResult", response)
        this.$store.dispatch('setOrganizationSearchInfo', response)
        // 1件のみの場合、全回答情報を表示
        if (response.data.allCount == 1) {
          for (const key in response.data.qas) {
            if (Object.hasOwnProperty.call(response.data.qas, key)) {
              this.openDetailDisp(key, response.data.allCount)
            }
          }
          let qaid = ''
          if (this.$route.params.id) {
            qaid = this.$route.params.id
            this.$store.dispatch('setQAID', qaid)
            sessionStorage.setItem(
              this.$constant.searchParam.PAID,
              qaid
            )
          } else if (this.$store.getters.getQAID != '') {
            qaid = this.$store.getters.getQAID
          }
          // ビュー件数更新
          let params = {
            id: qaid,
          }
          this.$serve.sendViewCount(params)
        } else {
          this.isDetailDisp = []
        }
      })

    },

    // =====================================================
    // セッションに退避した情報をリーセット
    // =====================================================
    resetStore: function () {
      // セッション存在チェック
      // キーワード
      if (
        sessionStorage.getItem(this.$constant.searchParam.KEYWORD) !=
        undefined
      ) {
        this.$store.dispatch(
          'setSearchWord',
          sessionStorage.getItem(this.$constant.searchParam.KEYWORD)
        )
      } else {
        this.$store.dispatch('setSearchWord', '')
      }

      // タグ
      // if (sessionStorage.getItem(this.$constant.searchParam.TAGS)) {
      //     this.$store.dispatch(
      //         'setSearchTags',
      //         sessionStorage.getItem(this.$constant.searchParam.TAGS)
      //     )
      // }

      // 薬区分
      if (
        sessionStorage.getItem(this.$constant.searchParam.MEDICINE) !=
        undefined
      ) {
        this.$store.dispatch(
          'setMedicineID',
          sessionStorage.getItem(this.$constant.searchParam.MEDICINE)
        )
      } else {
        this.$store.dispatch('setMedicineID', -1)
      }

      // 質問区分
      if (
        sessionStorage.getItem(this.$constant.searchParam.QACATEGORY) !=
        undefined
      ) {
        this.$store.dispatch(
          'setQuestionID',
          sessionStorage.getItem(
            this.$constant.searchParam.QACATEGORY
          )
        )
      } else {
        this.$store.dispatch('setQuestionID', -1)
      }

      // 施設
      if (
        sessionStorage.getItem(this.$constant.searchParam.FACILITY) !=
        undefined
      ) {
        this.$store.dispatch(
          'setFacilityID',
          sessionStorage.getItem(this.$constant.searchParam.FACILITY)
        )
      } else {
        this.$store.dispatch('setFacilityID', -1)
      }

      // ページ
      if (
        sessionStorage.getItem(this.$constant.searchParam.PAGE) !=
        undefined
      ) {
        this.$store.dispatch(
          'setPage',
          sessionStorage.getItem(this.$constant.searchParam.PAGE)
        )
      } else {
        this.$store.dispatch('setPage', 1)
      }

      // 明細件数
      if (
        sessionStorage.getItem(
          this.$constant.searchParam.DETAILNUMBER
        ) != undefined
      ) {
        this.$store.dispatch(
          'setMaxCount',
          sessionStorage.getItem(
            this.$constant.searchParam.DETAILNUMBER
          )
        )
      } else {
        this.$store.dispatch('setMaxCount', 0)
      }

      // ソート順
      if (
        sessionStorage.getItem(this.$constant.searchParam.SORT) !=
        undefined
      ) {
        this.$store.dispatch(
          'setSort',
          sessionStorage.getItem(this.$constant.searchParam.SORT)
        )
      } else {
        this.$store.dispatch('setSort', 0)
      }

      // QAID
      if (
        sessionStorage.getItem(this.$constant.searchParam.PAID) !=
        undefined
      ) {
        this.$store.dispatch(
          'setQAID',
          sessionStorage.getItem(this.$constant.searchParam.PAID)
        )
      } else {
        this.$store.dispatch('setQAID', '')
      }

      // 検索結果をクリア
      this.$store.dispatch('clearOrganizationSearchInfo')
    },
    // =====================================================
    // 改ページのデータ検索
    // =====================================================
    getSelectPage(value) {
      console.log('page', value)
      this.selectPage = value
      //   this.$store.dispatch('setPage', value)
      //   this.execSearch(true)
    },
    sendMsgToParent: function (data) {
      this.$emit('listenToChildEvent', data)
    },
    // =====================================================
    // 開くボタン押下
    // =====================================================
    openDetailDisp(index, count) {
      //   console.log("count", count)
      //   console.log("AAAthis.isDetailDisp[index]", this.isDetailDisp[index])
      //   console.log("AAAindex", index)
      // 1件のみの場合
      if (count == 1) {
        this.isDetailDisp[index] = index
      } else {
        this.isDetailDisp[index] = this.isDetailDisp[index] == index ? [] : index
        if (this.isDetailsDisp[index] == index) {
          this.isDetailsDisp[index] = this.isDetailsDisp[index] == index ? [] : index
        }
      }
      //   console.log("BBBthis.isDetailDisp[index]", this.isDetailDisp[index])
      //   console.log("BBBindex", index)
    },
    // =====================================================
    // 明細の詳細情報リンク押下
    // =====================================================
    openDetailsDisp(index) {
      this.isDetailsDisp[index] =
        this.isDetailsDisp[index] == index ? [] : index
    },
    clickCallback() {
      console.log()
    },
    setOrganizationDateSortValue(value) {
      this.organizationDateSortValue = value
      this.$store.dispatch('setSort', value)
      this.execSearch(true)
    },
    setOrganizationCountSortValue(value) {
      this.organizationCountSortValue = value
      this.$store.dispatch('setMaxCount', value)
      this.execSearch(true)
    },
    openGoodMessageBox(index) {
      this.$store.dispatch(
        'setGoodMessageBox',
        !this.$store.getters.getGoodMessageBox
      )
    },
    openCommentMessageBox() {
      this.$store.dispatch(
        'setCommentMessageBox',
        !this.$store.getters.getCommentMessageBox
      )
    },
    getRoeId(id) {
      console.log(id)
    },
    ActicleDetail(index) {
      this.activeIndex = this.activeIndex == index ? -1 : index
    },
    sendGoodMessage(index) {
      var v = this.qaInfo[index].value
    },
  },
}
</script>
<style>
.box {
    height: 40px;
    width: 100%;
    /* background-color: wheat; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.line {
    height: 2px;
    flex-grow: 1;
    /* background-color: red; */
    border-top: 2px dashed rgba(100, 98, 98, 0.897);
}

.text {
    margin: 0 5px;
}
.table {
    border-top: 1px solid #999;

    border-left: 1px solid #999;

    border-spacing: 0;
}
table th {
    padding: 10px 30px;

    border-bottom: 1px solid #999;

    border-right: 1px solid #999;
}
table td {
    padding: 10px 30px;
    border-left: 1px solid #999;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;

    border-right: 1px solid #999;
}
</style>
