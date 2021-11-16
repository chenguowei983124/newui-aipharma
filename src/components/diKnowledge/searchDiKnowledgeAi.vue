<template>
    <!-- get_DIKnowledgeShare_search_info -->
    <div v-if="$store.getters.dIKnowledgeShareSearchAIInfo != undefined">
        <div class="flex flex-row space-x-2 notoSansJpAndFourteenMedium">
            検索条件：
            <div
                class=""
                v-for="(searchAiWords, index) in $store.getters
                    .dIKnowledgeShareSearchAIInfo.searchAiWords"
                :key="index"
            >
                {{ searchAiWords }}
            </div>
        </div>
        <div class="space-y-2 mt-8">
            <div
                v-for="(item, index) in $store.getters
                    .dIKnowledgeShareSearchAIInfo.qasAi"
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
                        {{ '☆AIのおすすめ' }}
                    </div>
                    <div class="p-4">
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
                                    v-show="
                                        !(
                                            isDetailDisp[
                                                $store.getters
                                                    .dIKnowledgeShareSearchAIInfo
                                                    .qasAi[index].id
                                            ] ===
                                            $store.getters
                                                .dIKnowledgeShareSearchAIInfo
                                                .qasAi[index].id
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
                                                .qasAi[index].id
                                        ] ===
                                        $store.getters
                                            .dIKnowledgeShareSearchAIInfo.qasAi[
                                            index
                                        ].id
                                    "
                                    v-html="item.answer"
                                ></div>
                            </div>
                        </div>
                        <!-- 更新情報 pc/sp-->
                        <div class="flex flex-col pt-5 pl-0 md:pl-10">
                            <div class="space-y-2 notoSansJpAndElevenRegular">
                                <div class="flex space-x-4">
                                    <div>最終編集日：{{ item.createdAt }}</div>
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
                                <div class="flex">
                                    J-STAGE：
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
                                    class="flex flex-row space-x-2 items-center"
                                >
                                    <div class="">
                                        <!-- certainty -->
                                        <div
                                            class="
                                                text-black text-xs
                                                font-NotoSansJp
                                                flex
                                                justify-end
                                            "
                                        >
                                            確信度　
                                            <div
                                                class="
                                                    text-searchDropdown text-xs
                                                "
                                            >
                                                {{ item.certainty }}％
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                text-searchDropdown text-xs
                                                flex
                                                justify-end
                                            "
                                        >
                                            {{ item.viewCount }} view
                                        </div>
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
                                                items-center
                                                justify-end
                                                h-7.5
                                                w-14
                                                rounded
                                                text-white
                                                bg-whole
                                            "
                                            @click="ActicleDetail(index)"
                                        >
                                            <div class="mr-3">
                                                {{ item.feedbackGood }}
                                            </div>
                                            <good class="h-4 w-4 mr-1"></good>
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
                                                justify-end
                                                items-center
                                                h-7.5
                                                w-14
                                                rounded
                                                text-white
                                                bg-whole
                                            "
                                            @click="openGoodMessageBox"
                                        >
                                            <div class="mr-3">
                                                {{ item.feedbackGood }}
                                            </div>
                                            <good class="h-4 w-4 mr-1"></good>
                                        </button>
                                    </div>
                                    <!-- bad -->
                                    <div
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
                                    >
                                        <div class="mr-3">
                                            {{ item.feedbackBad }}
                                        </div>
                                        <bad class="h-4 w-4 mr-1"></bad>
                                    </div>
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
                                        @click="openCommentMessageBox"
                                    >
                                        <div class="mr-2">
                                            {{ item.feedbackComment }}
                                        </div>

                                        <talk class="h-5 w-5 mr-1"></talk>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- 詳細情報 pc/sp -->
                        <div
                            :class="[
                                isDetailDisp[
                                    $store.getters.dIKnowledgeShareSearchAIInfo
                                        .qasAi[index].id
                                ] ==
                                $store.getters.dIKnowledgeShareSearchAIInfo
                                    .qasAi[index].id
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
                                                        .dIKnowledgeShareSearchAIInfo
                                                        .qasAi[index].id
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
                                                            .qasAi[index].id
                                                    ] ===
                                                    $store.getters
                                                        .dIKnowledgeShareSearchAIInfo
                                                        .qasAi[index].id
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
                                            .dIKnowledgeShareSearchAIInfo.qasAi[
                                            index
                                        ].id
                                    ] ===
                                    $store.getters.dIKnowledgeShareSearchAIInfo
                                        .qasAi[index].id
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
                                        <div class="w-30 flex-none">QAID</div>
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
                            bg-yellow-200
                            rounded-b-lg
                            text-center text-yellow-600
                            h-7.5
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                        "
                        @click="
                            openDetailDisp(
                                $store.getters.dIKnowledgeShareSearchAIInfo
                                    .qasAi[index].id
                            )
                        "
                    >
                        <div
                            v-show="
                                !(
                                    isDetailDisp[
                                        $store.getters
                                            .dIKnowledgeShareSearchAIInfo.qasAi[
                                            index
                                        ].id
                                    ] ===
                                    $store.getters.dIKnowledgeShareSearchAIInfo
                                        .qasAi[index].id
                                )
                            "
                            class="flex items-center"
                        >
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
                        <div
                            v-show="
                                isDetailDisp[
                                    $store.getters.dIKnowledgeShareSearchAIInfo
                                        .qasAi[index].id
                                ] ===
                                $store.getters.dIKnowledgeShareSearchAIInfo
                                    .qasAi[index].id
                            "
                            class="flex items-center"
                        >
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
import ResultDetailRowItem from '../common/searchResult/resultDetailRowItem.vue'
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
      organizationDateSortValue: 'monthly_view_count_desc',
      // 件 表示 区分 id
      organizationCountSortValue: 0,
      pageCount: 1,
      selectPage: 0,
      goodMessageBox: false,
      //   isDetailDisp: false,
      isDetailDisp: [],
      //   isDetailsDisp: false,
      isDetailsDisp: [],
      activeIndex: -1,
      resultData: Object,
      result: Object,
    }
  },
  mounted() {
    this.$store.dispatch('clearOrganizationSearchInfo')
    if (this.$route.params.id) {
      let result = this.$serve.getOwn({ id: this.$route.params.id })
      result.then((response) => {
        this.$store.dispatch('setOrganizationSearchInfo', response)
        this.resultData = response.data.allCount
        if (response.data.allCount == 1) {
          for (const key in response.data.qas) {
            if (
              Object.hasOwnProperty.call(response.data.qas, key)
            ) {
              //   console.log('element', key)
              this.openDetailDisp(key)
            }
          }
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
      return Math.ceil(
        this.$store.getters.organizationSearchInfo.allCount /
        this.pageCount
      )
    },
  },
  methods: {
    async getInitData() {
      let result = this.$serve.getOwn({ id: this.$route.params.id })
    },
    getSelectPage(value) {
      this.selectPage = value
    },
    sendMsgToParent: function (data) {
      this.$emit('listenToChildEvent', data)
    },
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
    openDetailsDisp(index) {
      this.isDetailsDisp[index] =
        this.isDetailsDisp[index] == index ? [] : index
    },
    clickCallback() {
    },
    setOrganizationDateSortValue(value) {
      this.organizationDateSortValue = value
    },
    setOrganizationCountSortValue(value) {
      this.organizationCountSortValue = value
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
