<template>
    <div v-if="$store.getters.dIKnowledgeShareSearchAIInfo != undefined">
        <div class="flex flex-row space-x-2 notoSansJpAndFourteenMedium">
            検索条件：
            <div
                class=""
                v-for="(searchAiWords, index) in $store.getters
                    .dIKnowledgeShareSearchAIInfo.searchWords"
                :key="index"
            >
                {{ searchAiWords }}
            </div>
        </div>
        <div class="space-y-2 mt-2">
            <div
                v-for="(item, index) in $store.getters
                    .dIKnowledgeShareSearchAIInfo.qas"
                :key="index"
            >
                <div class="border-2 rounded-lg border-yellow-500">
                    <!-- Group -->
                    <div
                        class="
                            bg-yellow-500
                            notoSansJpAndTwelveMedium
                            text-white
                            h-4
                            w-25
                            flex-grow
                            -ml-0.5
                            -mt-0.5
                            flex
                            justify-center
                            items-center
                        "
                    >
                        <iconmonstr-star></iconmonstr-star>
                        <div class="ml-1">{{ 'AIのおすすめ' }}</div>
                    </div>
                    <div class="p-2.5 md:p-4">
                        <!-- Q -->
                        <div
                            class="
                                flex
                                justify-between
                                border-b-2 border-yellow-500
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
                                class="
                                    flex-grow
                                    notoSansJpAndSixteenBold
                                    ml-5
                                    mt-2
                                "
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
                                <div
                                    v-show="
                                        !(
                                            isDetailDisp[
                                                $store.getters
                                                    .dIKnowledgeShareSearchAIInfo
                                                    .qas[index].id
                                            ] ===
                                            $store.getters
                                                .dIKnowledgeShareSearchAIInfo
                                                .qas[index].id
                                        )
                                    "
                                    v-html="
                                        item.answer.toString().split('\n')[0]
                                    "
                                ></div>
                                <div
                                    v-show="
                                        isDetailDisp[
                                            $store.getters
                                                .dIKnowledgeShareSearchAIInfo
                                                .qas[index].id
                                        ] ===
                                        $store.getters
                                            .dIKnowledgeShareSearchAIInfo.qas[
                                            index
                                        ].id
                                    "
                                    v-html="item.answer"
                                ></div>
                            </div>
                        </div>
                        <!-- 更新情報 pc/sp-->
                        <div class="flex flex-col pt-5 pl-0 md:pl-10">
                            <div
                                class="
                                    space-y-2
                                    notoSansJpAndElevenRegular
                                    text-dropdownListItem
                                "
                            >
                                <div class="flex space-x-4">
                                    <div>最終編集日：{{ item.updatedAt }}</div>
                                    <div>質問日：{{ item.askedAt }}</div>
                                </div>
                                <div
                                    class="
                                        flex flex-wrap
                                        space-x-2
                                        items-center
                                    "
                                >
                                    出典・引用：
                                    <div
                                        v-for="urls in item.urls"
                                        :key="urls"
                                        class="
                                            text-light-blue-300
                                            hover:text-light-blue-500
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
                                        class="
                                            hover:text-light-blue-500
                                            underline
                                        "
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
                                <div class="flex">
                                    J-STAGE：
                                    <div
                                        v-if="item.pubmed != ''"
                                        class="
                                            hover:text-light-blue-500
                                            underline
                                        "
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
                                            ml-1
                                            cursor-pointer
                                            hover:text-light-blue-500
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
                            <div>
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
                                        @click="
                                            sendMsgToParent(keywordTags.name)
                                        "
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
                                        md:-mt-7
                                    "
                                >
                                    <div
                                        class="
                                            flex flex-row
                                            space-x-2
                                            items-center
                                        "
                                    >
                                        <div
                                            class="
                                                flex flex-row
                                                md:flex-col
                                                pt-3.5
                                                md:pt-0
                                            "
                                        >
                                            <div
                                                class="
                                                    text-black text-xxss
                                                    md:text-xs
                                                    font-NotoSansJp
                                                    flex
                                                    justify-end
                                                "
                                            >
                                                確信度　
                                                <div
                                                    class="
                                                        text-searchDropdown
                                                        text-xxss
                                                        md:text-xs
                                                    "
                                                >
                                                    {{
                                                        $store.getters
                                                            .dIKnowledgeShareSearchAIInfo
                                                            .confidence
                                                    }}％
                                                </div>
                                            </div>

                                            <div
                                                class="
                                                    text-searchDropdown
                                                    text-xxss
                                                    md:text-xs
                                                    flex
                                                    justify-end
                                                    ml-1
                                                    font-NotoSansJp
                                                "
                                            >
                                                {{ item.viewCount }} view
                                            </div>
                                        </div>
                                        <!-- good -->
                                        <button
                                            class="
                                                flex
                                                items-center
                                                justify-end
                                                font-NotoSansJp
                                                h-7.5
                                                w-14
                                                rounded
                                                text-white
                                                bg-whole
                                            "
                                            @click="
                                                openGoodMessageBox(1, index)
                                            "
                                        >
                                            <div class="mr-3">
                                                {{ item.feedbackGood }}
                                            </div>
                                            <good class="h-4 w-4 mr-1"></good>
                                        </button>
                                        <!-- bad -->
                                        <button
                                            class="
                                                flex
                                                justify-end
                                                font-NotoSansJp
                                                items-center
                                                h-7.5
                                                w-14
                                                rounded
                                                text-white
                                                bg-red-400
                                            "
                                            @click="
                                                openGoodMessageBox(2, index)
                                            "
                                        >
                                            <div class="mr-3">
                                                {{ item.feedbackBad }}
                                            </div>
                                            <bad class="h-4 w-4 mr-1"></bad>
                                        </button>
                                        <!-- comment -->
                                        <button
                                            class="
                                                flex
                                                justify-end
                                                font-NotoSansJp
                                                items-center
                                                h-7.5
                                                w-14
                                                rounded
                                                text-white
                                                bg-yellow-300
                                            "
                                            @click="
                                                openCommentMessageBox(index)
                                            "
                                        >
                                            <div class="mr-2">
                                                {{ item.feedbackComment }}
                                            </div>

                                            <talk class="h-5 w-5 mr-1"></talk>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 詳細情報 pc/sp -->
                        <div :class="[
                                isDetailDisp[
                                    $store.getters.dIKnowledgeShareSearchAIInfo.qas[
                                        index
                                    ].id
                                ] ==
                                $store.getters.dIKnowledgeShareSearchAIInfo.qas[index]
                                    .id
                                    ? 'block'
                                    : 'hidden',
                            ]">
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
                                            @click="
                                                openDetailsDisp(
                                                    $store.getters
                                                        .dIKnowledgeShareSearchAIInfo
                                                        .qas[index].id
                                                )
                                            "
                                        >
                                            詳細情報
                                            <triangle-down-svg
                                                class="w-2 h-2"
                                                :class="[
                                                    isDetailsDisp[
                                                        $store.getters
                                                            .dIKnowledgeShareSearchAIInfo
                                                            .qas[index].id
                                                    ] ===
                                                    $store.getters
                                                        .dIKnowledgeShareSearchAIInfo
                                                        .qas[index].id
                                                        ? 'transform rotate-180'
                                                        : '',
                                                ]"
                                                fill="#6b7280"
                                                stroke="#ffffff"
                                            ></triangle-down-svg></div
                                    ></span>
                                    <span class="line"></span>
                                </div>
                            </div>
                            <div
                                :class="[
                                    isDetailsDisp[
                                        $store.getters
                                            .dIKnowledgeShareSearchAIInfo.qas[
                                            index
                                        ].id
                                    ] ===
                                    $store.getters.dIKnowledgeShareSearchAIInfo
                                        .qas[index].id
                                        ? 'block'
                                        : 'hidden',
                                ]"
                            >
                                <!-- <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">QAID</div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.facilityQaNumber }}
                                        </div>
                                    </div>
                                </div> -->
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            薬の分類
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
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
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            質問区分
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="categories in item.categories"
                                                :key="categories"
                                            >
                                                {{ categories.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            医薬品名
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="medicineName in item.medicines"
                                                :key="medicineName"
                                            >
                                                {{ medicineName.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            副作用名
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="sideEffectsName in item.sideEffectsName"
                                                :key="sideEffectsName"
                                            >
                                                {{ sideEffectsName.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            質問者 - 職種
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            {{ item.askedPersonClassName }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            質問者 - 診療科
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="askedPersonMedicalDepartments in item.askedPersonMedicalDepartments"
                                                :key="
                                                    askedPersonMedicalDepartments
                                                "
                                            >
                                                {{
                                                    askedPersonMedicalDepartments.name
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            参考資料
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="referenceMaterials in item.referenceMaterials"
                                                :key="referenceMaterials"
                                            >
                                                {{ referenceMaterials.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">疾患名</div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="diseaseName in item.diseaseName"
                                                :key="diseaseName"
                                            >
                                                {{ diseaseName.name }}
                                            </div>
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
                            bg-aiSwitchBg
                            rounded-b-lg
                            text-center text-aiSwitch
                            h-7.5
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                        "
                        @click="openDetailDisp($store.getters.dIKnowledgeShareSearchAIInfo.qas[
                                    index
                                ].id)"
                    >
                        <div v-show="
                                !(
                                    isDetailDisp[
                                        $store.getters.dIKnowledgeShareSearchAIInfo
                                            .qas[index].id
                                    ] ===
                                    $store.getters.dIKnowledgeShareSearchAIInfo.qas[
                                        index
                                    ].id
                                )
                            "
                             class="flex items-center">
                            <triangle-down-svg
                                class="w-3 h-3"
                                fill="#F79800"
                                stroke="#F79800"
                            ></triangle-down-svg>
                            <div
                                class="text-xs font-NotoSansJp font-medium mr-1"
                            >
                                開く
                            </div>
                        </div>
                        <div v-show="
                                isDetailDisp[
                                    $store.getters.dIKnowledgeShareSearchAIInfo
                                        .qas[index].id
                                ] ===
                                $store.getters.dIKnowledgeShareSearchAIInfo.qas[
                                    index
                                ].id
                            " class="flex items-center">
                            <triangle-down-svg
                                class="w-3 h-3 transform rotate-180"
                                fill="#F79800"
                                stroke="#F79800"
                            ></triangle-down-svg>
                            <div
                                class="text-xs font-NotoSansJp font-medium mr-1"
                            >
                                閉じる
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-b border-gray-400 mt-6"></div>
        <div
            :class="[
                $store.getters.getCommentMessageBox
                    ? 'block fixed top-0 z-99 left-0 right-0 bottom-0 bg-lock'
                    : 'hidden',
            ]"
        >
            <comment-message-box
                :qaId="qaId"
                :rowIndex="rowIndex"
                :commentsFlag="commentsFlag"
            ></comment-message-box>
        </div>
    </div>
</template>

<script>
import iconmonstrStar from '../common/svgImage/iconmonstrStar.vue'
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import resutTag from '../common/searchResult/resultTag.vue'
import resultDetailRow from '../common/searchResult/resultAllDetailRow.vue'
import carousel from '../common/searchResult/carousel.vue'
import Good from '../common/svgImage/good.vue'
import bad from '../common/svgImage/bad.vue'
import talk from '../common/svgImage/talk.vue'
import xIconSvg from '../common/svgImage/xIconSvg.vue'
import Pagination from '../common/pagination/pagiation.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import GoodMessageBox from '../common/messageBox/goodMessageBox.vue'
import CommentMessageBox from '../common/messageBox/commentMessageBox.vue'
import ResultDetailRowItem from '../common/searchResult/resultDetailRowItem.vue'
export default {
  components: {
    iconmonstrStar,
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
    CommentMessageBox,
    ResultDetailRowItem,
  },
  props: {},
  data() {
    return {
      isDetailDisp: [],
      isDetailsDisp: [],
      qaId: '',
      rowIndex: 0,
      // コメント フラグ
      commentsFlag: ''
    }
  },
  unmounted() {
    this.$store.commit('setdIKnowledgeInfo', {})
    this.$store.commit('setdIKnowledgeShareSearchAIInfo', {})
  },
  mounted() {
    if (JSON.stringify(this.$route.query) == '{}') {
      this.$store.commit('setdIKnowledgeInfo', {})
      this.$store.commit('setdIKnowledgeShareSearchAIInfo', {})
    }
  },
  watch: {
    $route: function () {
      if (this.$route.path != '/searchDiKnowledge') {
        return
      }

      if (JSON.stringify(this.$route.query) == '{}') {
        this.$store.commit('setdIKnowledgeInfo', {})
        this.$store.commit('setdIKnowledgeShareSearchAIInfo', {})
      }
    }
  },
  computed: {
  },
  methods: {
    sendMsgToParent: function (data) {
      this.$emit('listenToChildEventAi', data)
    },
    // 開く クリック
    openDetailDisp(index, count) {
    // 1件のみの場合
        if (count == 1) {
          this.isDetailDisp[index] = index
        } else {
          this.isDetailDisp[index] = this.isDetailDisp[index] == index ? [] : index
          if (this.isDetailsDisp[index] == index) {
            this.isDetailsDisp[index] = this.isDetailsDisp[index] == index ? [] : index
          }
        }
    },
    // 詳細情報 クリック
    openDetailsDisp(index) {
      this.isDetailsDisp[index] = this.isDetailsDisp[index] == index ? [] : index
    },
    // フィードバック機能
    openGoodMessageBox(type, index) {
      let params = {
        fbType: type,
        qaId: this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[index].id,
      }
      this.$serve.sendFeedback(params).then((res) => {
        if (res.data.status == 'create') {
          this.$toast.success(res.data.message, { position: 'top-right', })
          this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[index].feedbackGood = res.data.goodFeedbackCount
          this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[index].feedbackBad = res.data.badFeedbackCount
          this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[index].feedbackComment = res.data.commentFeedbackCount
        }
      })
    },
    // 対象QAの全フィードバックコメントのうち閲覧可能なものを取得する
    openCommentMessageBox(index) {
      this.qaId = this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[0].id
      this.rowIndex = index
      this.commentsFlag = 'aiComments'
      this.$store.dispatch('setCommentMessageBox', !this.$store.getters.getCommentMessageBox)
    },
  },
}
</script>
<style scoped>
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
</style>
