<template>
    <div v-if="$store.getters.organizationSearchInfo != undefined">
        <div class="flex flex-row space-x-2 font-bold">
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
            <div class="font-bold">
                該当：
                {{ $store.getters.organizationSearchInfo.allCount }}件
            </div>
            <div class="flex space-x-2">
                <div class="flex space-x-2">
                    <!-- 順 区分 -->
                    <vue-single-select
                        class="w-56"
                        :name="'field1'"
                        :default-value="0"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="
                            $store.getters.getOrganizationDateSort
                        "
                        @selected="setOrganizationDateSortValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    ></vue-single-select>
                    <!-- 件 表示 区分 -->
                    <vue-single-select
                        class="w-32"
                        :name="'field2'"
                        :default-value="0"
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
                <div
                    class="
                        border-l-2 border-r-2 border-t-2
                        rounded-sm
                        border-blueline
                    "
                >
                    <!-- Group -->
                    <div
                        class="
                            notoSansJpAndTwelveMedium
                            text-white
                            h-4
                            flex-grow
                            w-40
                        "
                    >
                        <!-- <result-detail-row
                            class=""
                            :sites="item.group"
                            :sub1="['group']"
                        >
                        </result-detail-row> -->
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
                                    notoSansJpAndFifteenBold
                                    text-blueline
                                    w-5
                                "
                            >
                                Q
                            </div>
                            <div class="flex-grow">
                                {{ item.question }}
                            </div>
                        </div>
                        <!-- A -->
                        <div class="flex justify-between mt-5 items-start">
                            <div
                                class="
                                    notoSansJpAndFifteenBold
                                    flex
                                    w-5
                                    h-6
                                    text-cardPmadUpadte text-sm
                                "
                            >
                                <div class="flex items-center">A</div>
                            </div>

                            <div class="flex-grow break-all">
                                <!-- {{ item.answer }} -->
                                <div v-show="!(isDetailDisp === index)">
                                    {{ item.answer[0].info }}
                                </div>
                                <div
                                    v-show="isDetailDisp === index"
                                    v-for="answerItem in item.answer"
                                    :key="answerItem"
                                >
                                    {{ answerItem.info }}
                                </div>
                            </div>
                        </div>
                        <!-- 更新情報 pc/sp-->
                        <div class="flex flex-col pt-5">
                            <div class="space-y-2 notoSansJpAndTwelveRegular">
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
                                            rounded-md
                                            h-6
                                            bg-blue-300
                                            flex
                                            justify-center
                                            items-center
                                            px-2
                                            ml-2
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
                                            rounded-md
                                            h-6
                                            bg-blue-300
                                            flex
                                            justify-center
                                            items-center
                                            px-2
                                            ml-2
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
                                        border-2 border-gray-400
                                        bg-gray-100
                                        h-6
                                        notoSansJpAndTwelveRegular
                                        text-center
                                        pl-1
                                        pr-1
                                    "
                                    v-for="keywordTags in item.keywordTags"
                                    :key="keywordTags"
                                    @click="sendMsgToParent(keywordTags.name)"
                                >
                                                                        {{
                                        keywordTags.name
                                    }}
                                                                    
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
                                                h-6
                                                w-14
                                                rounded
                                                text-white
                                                bg-whole
                                            "
                                            @click="ActicleDetail(index)"
                                        >
                                            <!-- @click="getRoeId(item.id)" -->
                                            <!-- @click="openGoodMessageBox(index)" -->
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
                                                h-6
                                                w-14
                                                rounded
                                                text-white
                                                bg-whole
                                            "
                                            @click="openGoodMessageBox"
                                        >
                                            <!-- click="ActicleDetail(index)" -->
                                            <!-- @click="openGoodMessageBox" -->
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
                                            h-6
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
                                            h-6
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
                        <div
                            :class="[
                                isDetailDisp == index ? 'block' : 'hidden',
                            ]"
                        >
                            <div class="flex flex-row justify-center text-sm">
                                <!-- <div
                                    class="
                                        divide-y-4
                                        divide-yellow-600
                                        divide-dashed
                                    "
                                >
                                    <div>1</div>
                                    <div>2</div>
                                </div> -->
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
                                    @click="openDetailsDisp(index)"
                                >
                                    <!-- @click="getDetailsDisp" -->
                                    詳細情報
                                    <triangle-down-svg
                                        class="w-2 h-2"
                                        :class="[
                                            isDetailsDisp === index
                                                ? 'transform rotate-180'
                                                : '',
                                        ]"
                                        fill="#000000"
                                        stroke="#ffffff"
                                    ></triangle-down-svg>
                                </div>
                            </div>
                            <div
                                :class="[
                                    isDetailsDisp === index
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
                    @click="openDetailDisp(index)"
                >
                    <div
                        v-show="!(isDetailDisp === index)"
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
                        v-show="isDetailDisp === index"
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
         <pagination
            :page-count="getPageCount"
            :page-range="5"
            :margin-pages="1"
            :click-handler="clickCallback"
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
        <div class="flex justify-center mt-2">1-{{ pageCount }}件 表示</div>
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
import { ref, onBeforeUpdate, onUpdated, onUnmounted, nextTick } from 'vue'
import { reactive, onMounted } from 'vue'

export default {
  //   setup() {
  //     const state = reactive({
  //       hits: {}
  //     })
  //     onMounted(async () => {
  //       const data = await fetch(
  //         'http://mock-api.com/ZzRpqmne.mock/preavoid/get_organization_search_info'
  //       )
  //       state.hits = data.hits
  //     })
  //     console.log(state)
  //     return state
  //   },
  setup() {
    onUnmounted(() => {

    });
  },
  components: {
    TriangleDownSvg,
    resutTag, resultDetailRow, carousel,
    Good, bad, talk, xIconSvg,
    Pagination, vueSingleSelect,
    GoodMessageBox, ResultDetailRowItem
  },
  props: {},
  data() {
    console.log(this.$store.getters.organizationSearchInfo)
    return {
      // 順 区分 id
      organizationDateSortValue: 0,
      // 件 表示 区分 id
      organizationCountSortValue: 0,
      pageCount: 1,
      selectPage: 0,
      goodMessageBox: false,
      //   isDetailDisp: false,
      isDetailDisp: -1,
      //   isDetailsDisp: false,
      isDetailsDisp: -1,
      activeIndex: -1,
      //   torenndoTab: ["#ロキソニン", "#ロキソ", "#用途", "#痛み止め", "#ロキソニン", "#ロキソ"],
      resultData: Object,
      result: Object

    };
  },
  mounted() {

    this.$store.dispatch("clearOrganizationSearchInfo")
    if (this.$route.params.id) {
      let result = this.$serve.getOwn({ id: this.$route.params.id })
      result.then((response) => {
        this.$store.dispatch('setOrganizationSearchInfo', response)
        this.resultData = response.data.allCount
        console.log("response", response)
        console.log(response.data.allCount)
        if (response.data.allCount == 1) {
          this.openDetailDisp("qa68555")
        }

      })
    }


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
      return Math.ceil(this.$store.getters.organizationSearchInfo.allCount / this.pageCount);
    },
  },
  methods: {
    async getInitData() {
      let result = this.$serve.getOwn({ id: this.$route.params.id })
    },
    getSelectPage(value) {
      console.log('getSelectPage', value)
      this.selectPage = value
    },
    sendMsgToParent: function (data) {
      this.$emit("listenToChildEvent", data)
    },
    openDetailDisp(index) {
      console.log("aaa", index)
      console.log("bbb", this.isDetailDisp)
      //   this.isDetailDisp = !this.isDetailDisp
      this.isDetailDisp = this.isDetailDisp == index ? -1 : index;
      console.log("isDetailDisp", this.isDetailDisp)
    },
    // getDetailsDisp() { this.isDetailsDisp = !this.isDetailsDisp },
    openDetailsDisp(index) {
      //   this.isDetailDisp = this.isDetailDisp == index ? -1 : index;
      this.isDetailsDisp = this.isDetailsDisp == index ? -1 : index;
    },
    clickCallback() {
      console.log(this.organizationCountSortValue)
    },
    setOrganizationDateSortValue(value) {
      console.log('setOrganizationDateSortValue', value)
      this.organizationDateSortValue = value
    },
    setOrganizationCountSortValue(value) {
      console.log('setOrganizationCountSortValue', value)
      this.organizationCountSortValue = value
    },
    // setSelectValue(value) {
    //   this.selectValue = value
    // },
    openGoodMessageBox(index) {
      //   console.log(this.$store.getters.getGoodMessageBox)
      this.$store.dispatch('setGoodMessageBox', !this.$store.getters.getGoodMessageBox)
    },
    openCommentMessageBox() {
      //   console.log(this.$store.getters.getCommentMessageBox)
      this.$store.dispatch('setCommentMessageBox', !this.$store.getters.getCommentMessageBox)
    },
    // getOrganizationSearchInfo() {
    //   //   console.log(this.$store.getters.getOrganizationSearchInfo)
    //   this.$store.dispatch('setOrganizationSearchInfo', !this.$store.getters.getCommentMessageBox)
    // },
    getRoeId(id) {
      console.log(id)
    },
    ActicleDetail(index) {
      //   this.activeIndex = index;
      //   console.log(index)
      this.activeIndex = this.activeIndex == index ? -1 : index;
    },
    sendGoodMessage(index) {
      var v = this.qaInfo[index].value;
      //   console.log(this.qaInfo[index].QAID)
      //   console.log(v)
    }
  },
}
</script>
<style scoped>
</style>
