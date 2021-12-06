<template>
    <div
        v-if="
            $store.getters.dIKnowledgeShareSearchInfo != undefined &&
            Object.keys($store.getters.dIKnowledgeShareSearchInfo).length != 0
        "
    >
        <div
            class="
                flex flex-row
                space-x-2
                notoSansJpAndFourteenMedium
                pb-1
                mt-4
                md:mt-0
            "
        >
            検索条件：
            <div
                class=""
                v-for="(searchWords, index) in $store.getters
                    .dIKnowledgeShareSearchInfo.searchWords"
                :key="index"
            >
                {{ searchWords }}
            </div>
        </div>
        <div class="notoSansJpAndFourteenMedium">
            該当：
            {{ $store.getters.dIKnowledgeShareSearchInfo.allCount }}件
        </div>
        <!-- pc/sp -->
        <div class="flex justify-start md:justify-end flex-wrap space-y-1">
            <div class="flex space-x-2 mt-3 md:-mt-3">
                <div class="flex space-x-2">
                    <!-- 順 区分 -->
                    <vue-single-select
                        class="w-56 cursor-pointer"
                        :name="'field1'"
                        :default-value="diSortValue"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.organizationDateSort"
                        @selected="setDiSortValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0 "
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none "
                    ></vue-single-select>
                    <!-- 件 表示 区分 -->
                    <vue-single-select
                        class="w-32 cursor-pointer"
                        :name="'field2'"
                        :default-value="diCountSortValue"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.organizationCountSort"
                        @selected="setDiCountSortValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
            </div>
        </div>
        <div class="space-y-2 mt-2">
            <div
                v-for="(item, index) in $store.getters
                    .dIKnowledgeShareSearchInfo.qas"
                :key="index"
            >
                <div class="border-2 rounded-lg border-blueline">
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
                                id="answerTab"
                                class="
                                    flex-grow
                                    break-all
                                    notoSansJpAndFourteenBold
                                    pl-5
                                "
                            >
                                <!-- {{ item.answer }} -->
                                <div
                                    v-show="
                                        !(
                                            isDetailDisp[
                                                $store.getters
                                                    .dIKnowledgeShareSearchInfo
                                                    .qas[index].id
                                            ] ===
                                            $store.getters
                                                .dIKnowledgeShareSearchInfo.qas[
                                                index
                                            ].id
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
                                                .dIKnowledgeShareSearchInfo.qas[
                                                index
                                            ].id
                                        ] ===
                                        $store.getters
                                            .dIKnowledgeShareSearchInfo.qas[
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
                                    <!-- <div class="flex-none"></div> -->
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
                                        flex flex-row
                                        justify-end
                                        mt-4
                                        md:-mt-7
                                    "
                                >
                                    <div
                                        class="
                                            text-searchDropdown text-xs
                                            mt-3.75
                                            mr-2
                                        "
                                    >
                                        <div class="font-NotoSansJp">
                                            {{ item.viewCount }} view
                                        </div>
                                    </div>
                                    <div
                                        class="
                                            flex flex-row
                                            space-x-2
                                            items-baseline
                                            font-NotoSansJp
                                        "
                                    >
                                        <!-- good -->
                                        <button
                                            class="
                                                flex
                                                items-center
                                                justify-end
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
                        <div
                            :class="[
                                isDetailDisp[
                                    $store.getters.dIKnowledgeShareSearchInfo
                                        .qas[index].id
                                ] ==
                                $store.getters.dIKnowledgeShareSearchInfo.qas[
                                    index
                                ].id
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
                                            @click="
                                                openDetailsDisp(
                                                    $store.getters
                                                        .dIKnowledgeShareSearchInfo
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
                                                            .dIKnowledgeShareSearchInfo
                                                            .qas[index].id
                                                    ] ===
                                                    $store.getters
                                                        .dIKnowledgeShareSearchInfo
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
                                            .dIKnowledgeShareSearchInfo.qas[
                                            index
                                        ].id
                                    ] ===
                                    $store.getters.dIKnowledgeShareSearchInfo
                                        .qas[index].id
                                        ? 'block'
                                        : 'hidden',
                                ]"
                            >
                                <div
                                    class="
                                        md:flex md:flex-row
                                        notoSansJpAndFourteenRegular
                                        text-grayline
                                        border-b-2
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">Q&A-ID</div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.facilityQaNumber }}
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
                            bg-cardViewCount
                            rounded-b-lg
                            text-center text-searchDropdown
                            h-7.5
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                        "
                        @click="
                            openDetailDisp(
                                $store.getters.dIKnowledgeShareSearchInfo.qas[
                                    index
                                ].id
                            )
                        "
                    >
                        <div
                            v-show="
                                !(
                                    isDetailDisp[
                                        $store.getters
                                            .dIKnowledgeShareSearchInfo.qas[
                                            index
                                        ].id
                                    ] ===
                                    $store.getters.dIKnowledgeShareSearchInfo
                                        .qas[index].id
                                )
                            "
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-3 h-3"
                                fill="#0099ff"
                                stroke="#0099ff"
                            ></triangle-down-svg>
                            <div
                                class="text-xs font-NotoSansJp font-medium mr-1"
                            >
                                開く
                            </div>
                        </div>
                        <div
                            v-show="
                                isDetailDisp[
                                    $store.getters.dIKnowledgeShareSearchInfo
                                        .qas[index].id
                                ] ===
                                $store.getters.dIKnowledgeShareSearchInfo.qas[
                                    index
                                ].id
                            "
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-3 h-3 transform rotate-180"
                                fill="#0099ff"
                                stroke="#0099ff"
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
         <pagination
            :page-count="getPageCount"
            :page-range="3"
            :margin-pages="1"
            @input="getSelectPage"
            :value="Number($store.getters.getPageDI)"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            class="flex justify-center space-x-1"
        ></pagination>
        <div class="flex justify-center mt-2">{{ dispDetailRange }}件 表示</div>
        <div class="border-b border-gray-400 mt-6 mb-4 md:mb-0"></div>
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
import { ref, onBeforeUpdate, onUpdated, onUnmounted, nextTick } from 'vue'
import { reactive, onMounted } from 'vue'

export default {
  setup() {
    onUnmounted(() => { })
  },
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
    CommentMessageBox
  },
  props: {
    exeSearchRefishOpts: {
      type: Function,
      default: () => { },
    },
  },
  data() {
    return {
      // 順 区分 id
      diSortValue: 'last_updated_at_desc',
      // 件 表示 区分 id
      diCountSortValue: 0,
      pageCount: 20,
      selectPage: 1,
      isDetailDisp: [],
      isDetailsDisp: [],
      qaId: '',
      rowIndex: 0,
      // 検索AI　フラグ
      aiFlag:false,
      // コメント フラグ
      commentsFlag: ''
    }
  },
  unmounted() {
    this.initStore()
  },
  mounted() {
    if (JSON.stringify(this.$route.query) == '{}') {
      this.initStore()
      this.diInit()
      this.$store.commit('setdIKnowledgeInfo', {})
      this.$store.commit('setdIKnowledgeShareSearchAIInfo', {})
    }
    if (JSON.stringify(this.$route.query) !== '{}') {
      this.resetSearchBar()
      this.execSearch()
    }
  },
  watch: {
    $route: function () {
      if (this.$route.path != '/searchDiKnowledge') {
        return
      }
      this.selectPage = this.$route.query.page
      if (JSON.stringify(this.$route.query) == '{}') {
        this.initStore()
        this.$store.commit('setdIKnowledgeInfo', {})
        this.$store.commit('setdIKnowledgeShareSearchAIInfo', {})
      }

      if (JSON.stringify(this.$route.query) !== '{}') {
        this.resetSearchBar()
        this.execSearch()
      }
    },
  },
  computed: {
    getPageCount() {
      //   let page = 1;
      if (this.diCountSortValue == '0') {
        this.pageCount = 20
      } else if (this.diCountSortValue == '1') {
        this.pageCount = 50
      } else if (this.diCountSortValue == '2') {
        this.pageCount = 100
      }
      this.$store.commit('setMaxCountDI', this.pageCount)
      return Math.ceil(
        this.$store.getters.dIKnowledgeShareSearchInfo.allCount /
        this.pageCount
      )
    },
    // 明細部に表示明細のFROM-TO
    dispDetailRange: function () {
      let start = 1
      let end = ''
      if (this.selectPage > 1) {
        start = (this.selectPage - 1) * this.pageCount + 1
      }

      if (this.$store.getters.dIKnowledgeShareSearchInfo.qas != undefined) {
        end = start +
          Object.keys(this.$store.getters.dIKnowledgeShareSearchInfo.qas)
            .length - 1
      }

      if (this.$store.getters.dIKnowledgeShareSearchInfo.allCount == 1) {
        return start.toString()
      } else {
        if (this.$store.getters.dIKnowledgeShareSearchInfo.allCount == 0) {
          return '0'
        } else {
          return start.toString() + '-' + end.toString()
        }
      }
    },
  },
  methods: {
    execSearch(kb) {
      // 設定　NULL
      this.openDetailDisp('')
      // QAID取得
      let qaid = ''
      let params

      if (typeof (this.$route.query.id) != "undefined") {
        qaid = this.$route.query.id
        this.$store.dispatch('setQAID', qaid)
        // sessionStorage.setItem(this.$constant.searchParam.PAID, qaid)
      } 
    //   else if (this.$store.getters.getQAID != '') {
    //     qaid = this.$store.getters.getQAID
    //   }
    this.$store.dispatch('setLoadingShowFlg', false)
            this.$store.dispatch('setIsLoadingShow', true)
      let result
      let resultAi
      // QAID存在チェック
      if (qaid != '') {
        this.$store.commit('setdIKnowledgeInfo', {})
        this.$store.commit('setdIKnowledgeShareSearchAIInfo', {})
        params = {
          id: qaid,
          confidence: this.$route.query.confidence
        }
        if (typeof (this.$route.query.confidence) == "undefined"
          || this.$route.query.confidence == "nil") {
          result = this.$serve.getDIKnowledgeSharedId(params)
          this.setSearchResult(result)
        } else {
          resultAi = this.$serve.getDIKnowledgeSharedId(params)
          this.setSearchResultAi(resultAi)

        }
      } else if (typeof (this.$route.query.page) != "undefined") {
        result = this.$serve.getDIKnowledgeShare(this.$route.query)
        resultAi = this.$serve.getDIKnowledgeShareAI(this.$route.query)
        this.aiFlag = true

        this.setSearchResult(result)
        this.setSearchResultAi(resultAi)
      }
        this.diInit()
        this.$store.dispatch('setLoadingShowFlg', true)
            this.$store.dispatch('setIsLoadingShow', false)
    },
    diInit:function(){
    this.$store.dispatch('getDiKnowledgeShareNewQAInfo')
    this.$store.dispatch('getDiKnowledgeShareLookcarefullyQAInfo')
    },
    setSearchResultAi: function (value) {
      if (value != '' && typeof (value) != "undefined") {
        value.then((response) => {
          this.$store.commit('setdIKnowledgeShareSearchAIInfo', response)
          if(this.aiFlag == false){
              // 1件のみの場合、全回答情報を表示
              if (response.data.allCount == 1) {
                this.$emit('clickAi',response.data.qas[0].id, response.data.allCount)
                let qaid = ''
                if (this.$route.query.id) {
                  qaid = this.$route.query.id
                  this.$store.commit('setQaAiId', qaid)
                } else if (this.$store.getters.getQaAiId != '') {
                  qaid = this.$store.getters.getQaAiId
                }
                // ビュー件数更新
                let params = {
                //   id: response.data.qas[0].id,
                id: qaid
                }
                this.$serve.sendViewCount(params)
              }
              this.aiFlag = false
            }
        })

      }
    },
    setSearchResult: function (value) {
      if (value != '' && typeof (value) != "undefined") {
        value.then((response) => {
          this.$store.commit('setdIKnowledgeInfo', response)
          // 1件のみの場合、全回答情報を表示
          if (response.data.allCount == 1) {
            this.openDetailDisp(response.data.qas[0].id, response.data.allCount)
            let qaid = ''
            if (this.$route.query.id) {
              qaid = this.$route.query.id
              this.$store.dispatch('setQAID', qaid)
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

      }
    },
    // =====================================================
    // セッションに退避した情報をリーセット
    // =====================================================
    resetSearchBar: function () {
      this.initStore()

      if (typeof (this.$route.query.id) == "undefined") {
        this.$store.dispatch('setQAID', '')
        this.$store.dispatch('setSearchWord', this.$route.query.search)
        this.$store.dispatch('setSearchTags', this.$route.query.tags.split(','))
        this.$store.commit('setMaxCountDI', this.$route.query.displayed)
        this.diSortValue = this.$route.query.sort
        this.$store.commit('setSortDI', this.$route.query.sort)
        if (this.$route.query.displayed == 20) {
          this.diCountSortValue = 0
        } else if (this.$route.query.displayed == 50) {
          this.diCountSortValue = 1
        } else if (this.$route.query.displayed == 100) {
          this.diCountSortValue = 2
        }
        this.$store.commit('setPageDI', this.$route.query.page)
        this.$store.commit('setCheckQDI', this.$route.query.checkQ.toString() === 'true', true, false)
        this.$store.commit('setCheckADI', this.$route.query.checkA.toString() === 'true', true, false)
        this.$store.commit('setCheckCommentDI', this.$route.query.checkComment.toString() === 'true', true, false)
        this.$store.commit('setCheckAddFileNameDI', this.$route.query.checkAddFileName.toString() === 'true', true, false)
        this.$store.commit('setCheckContributorDI', this.$route.query.checkContributor.toString() === 'true', true, false)
        this.$store.commit('setCheckLastEditerDI', this.$route.query.checkLastEditer.toString() === 'true', true, false)
        this.$store.commit('setCheckFacilityNameDI', this.$route.query.checkFacilityName.toString() === 'true', true, false)
        this.$store.commit('setCheckNoteDI', this.$route.query.checkNote.toString() === 'true', true, false)
      }
    },
    // 初期化
    initStore() {
      this.$store.dispatch('setSearchWord', '')
      this.$store.dispatch('setSearchTags', [])
      this.$store.commit('setPageDI', 1)
      this.$store.commit('setSortDI', 'last_updated_at_desc')
      this.$store.commit('setMaxCountDI', 20)
      this.$store.commit('setCheckQDI', true)
      this.$store.commit('setCheckADI', true)
      this.$store.commit('setCheckCommentDI', true)
      this.$store.commit('setCheckAddFileNameDI', true)
      this.$store.commit('setCheckContributorDI', true)
      this.$store.commit('setCheckLastEditerDI', true)
      this.$store.commit('setCheckFacilityNameDI', true)
      this.$store.commit('setCheckNoteDI', true)
    },
    resetRouter() {
      this.exeSearchRefishOpts()
      let getTimestamp = new Date().getTime()
      let dispDetailNumber = 20

      if (this.diCountSortValue == 0) {
        dispDetailNumber = 20
      } else if (this.diCountSortValue == 1) {
        dispDetailNumber = 50
      } else if (this.diCountSortValue == 2) {
        dispDetailNumber = 100
      }
      let params = {
        search: this.$store.getters.getSearchWord,
        tags: this.$store.getters.getSearchTags
          ? this.$store.getters.getSearchTags.join(',')
          : '',
        displayed: dispDetailNumber,
        sort: this.$store.getters.getSortDI,
        page: this.$store.getters.getPageDI,
        checkQ: this.$store.getters.getCheckQDI,
        checkA: this.$store.getters.getCheckADI,
        checkComment: this.$store.getters.getCheckCommentDI,
        checkAddFileName: this.$store.getters.getCheckAddFileNameDI,
        checkContributor: this.$store.getters.getCheckContributorDI,
        checkLastEditer: this.$store.getters.getCheckLastEditerDI,
        checkFacilityName: this.$store.getters.getCheckFacilityNameDI,
        checkNote: this.$store.getters.getCheckNoteDI,
        timestamp: getTimestamp,
      }
      this.$router.push({
        path: '/searchDiKnowledge',
        query: params,
      })
    },
    // 改ページのデータ検索
    getSelectPage(value) {
      this.selectPage = value
      this.$store.commit('setPageDI', value)
      this.resetRouter()
    },
    sendMsgToParent: function (data) {
      this.$emit('listenToChildEventDi', data)
    },
    // 開くボタン押下
    openDetailDisp(index, count) {
      // 1件のみの場合
      if (count == 1) {
        this.isDetailDisp[index] = index
      } else {
        this.isDetailDisp[index] =
          this.isDetailDisp[index] == index ? [] : index
        if (this.isDetailsDisp[index] == index) {
          this.isDetailsDisp[index] =
            this.isDetailsDisp[index] == index ? [] : index
        }
      }
    },
    // 明細の詳細情報リンク押下
    openDetailsDisp(index) {
      this.isDetailsDisp[index] =
        this.isDetailsDisp[index] == index ? [] : index
    },
    clickCallback() { },
    // 順 区分 選ぶ
    setDiSortValue(value) {
      if (this.diSortValue != value) {
        this.diSortValue = value
        this.$store.commit('setSortDI', value)
        this.resetRouter()
      }
    },
    // 件 表示 区分 選ぶ
    setDiCountSortValue(value) {
      if (this.diCountSortValue != value) {
        this.diCountSortValue = value
        this.resetRouter()
      }
    },
    openGoodMessageBox(type, index) {
      let params = {
        fbType: type,
        qaId: this.$store.getters.dIKnowledgeShareSearchInfo.qas[index].id,
      }
      this.$serve.sendFeedback(params).then((res) => {
        if (res.data.status == 'create') {
          this.$toast.success(res.data.message, {
            position: 'top-right',
          })
          this.$store.getters.dIKnowledgeShareSearchInfo.qas[
            index
          ].feedbackGood = res.data.goodFeedbackCount
          this.$store.getters.dIKnowledgeShareSearchInfo.qas[
            index
          ].feedbackBad = res.data.badFeedbackCount
          this.$store.getters.dIKnowledgeShareSearchInfo.qas[
            index
          ].feedbackComment = res.data.commentFeedbackCount
        }
      })
    },
    openCommentMessageBox(index) {
      this.qaId = this.$store.getters.dIKnowledgeShareSearchInfo.qas[index].id
      this.rowIndex = index
      this.commentsFlag = 'diComments'
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
