<template>
    <div v-if="$store.getters.organizationSearchInfo != undefined">
        <div class="flex flex-row space-x-2 notoSansJpAndFourteenMedium pb-1">
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
        <!-- pc/sp -->
        <div class="flex justify-between flex-wrap space-y-3 mt-2">
            <div class="notoSansJpAndFourteenMedium">
                該当： {{ $store.getters.organizationSearchInfo.allCount }}件
            </div>
            <div class="flex space-x-2">
                <div class="flex space-x-1 md:space-x-2">
                    <!-- 順 区分 -->
                    <vue-single-select
                        class="w-55 cursor-pointer"
                        :name="'field1'"
                        :default-value="organizationDateSortValue"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.organizationDateSort"
                        @selected="setOrganizationDateSortValue"
                        :leftLableDisp="false"
                        buttonStyle="sortPullDownButtonColors"
                        inputStyle="w-full text-tags text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                    border border-transparent focus:outline-none"
                    ></vue-single-select>
                    <!-- 件 表示 区分 -->
                    <vue-single-select
                        class="w-32.5 cursor-pointer"
                        :name="'field2'"
                        :default-value="organizationCountSortValue"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.organizationCountSort"
                        @selected="setOrganizationCountSortValue"
                        :leftLableDisp="false"
                        buttonStyle="sortPullDownButtonColors"
                        inputStyle="w-full text-tags text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                    border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
            </div>
        </div>
        <div class="space-y-3.75 mt-3.75">
            <div
                v-for="(item, index) in $store.getters.organizationSearchInfo
                    .qas"
                :key="index"
            >
                <div class="border-2 rounded-lg border-blueline">
                    <!-- Group -->
                    <div
                        class="
                            notoSansJpAndTwelveMedium
                            text-white
                            h-4.5
                            flex-grow
                            -ml-0.5
                            -mt-0.5
                        "
                    >
                        <!-- 70*18 px -->
                        <result-detail-row-item
                            itemSize="size"
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
                                border-b border-blueline
                                items-center
                                pb-5
                            "
                        >
                            <div class="flex items-center">
                                <div
                                    class="
                                        notoSansJpAndTwentyEightBold
                                        text-view
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
                                    "
                                >
                                    {{ item.question }}
                                </div>
                            </div>
                            <!-- 編集 フラグ [0,1]{{ item.editFlag }} -->
                            <edit-and-delete
                                :editEvent="editDetail"
                                :deleteEvent="deleteDetail"
                                :id="String(item.id)"
                                :dataInfo="item"
                            ></edit-and-delete>
                        </div>
                        <!-- A -->
                        <div class="flex justify-between mt-5 items-start">
                            <div class="flex w-5 h-6 text-notlooked text-sm">
                                <div
                                    class="
                                        flex
                                        items-center
                                        notoSansJpAndTwentyEightBold
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
                                                    .organizationSearchInfo.qas[
                                                    index
                                                ].id
                                            ] ===
                                            $store.getters
                                                .organizationSearchInfo.qas[
                                                index
                                            ].id
                                        )
                                    "
                                    v-html="
                                        item.answer.toString().split('\n')[0]
                                    "
                                ></div>
                                <!-- class="overflow-x-auto" -->
                                <div
                                    v-show="
                                        isDetailDisp[
                                            $store.getters
                                                .organizationSearchInfo.qas[
                                                index
                                            ].id
                                        ] ===
                                        $store.getters.organizationSearchInfo
                                            .qas[index].id
                                    "
                                    v-html="
                                        item.answer
                                            .replace(
                                                '<ol>',
                                                `<ol style='list-style-type: decimal;'>`
                                            )
                                            .replace(
                                                '<ul>',
                                                `<ul style='list-style-type: disc;'>`
                                            )
                                    "
                                ></div>
                            </div>
                        </div>
                        <!-- 更新情報 pc/sp-->
                        <div class="flex flex-col pt-5 pl-0 md:pl-10">
                            <div
                                class="
                                    space-y-1.5
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
                                            break-all
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
                            <div class="flex flex-wrap space-x-2 mt-2">
                                <div
                                    class="tagsCss"
                                    v-for="keywordTags in item.keywordTags"
                                    :key="keywordTags"
                                    @click="sendMsgToParent(keywordTags.name)"
                                >
                                    # {{ keywordTags.name }}
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-col
                                    font-NotoSansJp
                                    text-xs
                                    justify-end
                                    items-end
                                    mt-4
                                    md:mt-0
                                "
                            >
                                <div class="flex flex-row space-x-2 items-end">
                                    <div class="text-searchDropdown">
                                        {{ item.viewCount }} view
                                    </div>
                                    <!-- good -->
                                    <button
                                        class="
                                            flex
                                            items-center
                                            justify-end
                                            text-white
                                            font-NotoSansJp
                                            goodButtonColors
                                        "
                                        @click="openGoodMessageBox(1, index)"
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
                                            text-white
                                            font-NotoSansJp
                                            badButtonColors
                                        "
                                        @click="openGoodMessageBox(2, index)"
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
                                            text-white
                                            commentButtonColors
                                        "
                                        @click="openCommentMessageBox(index)"
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
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                ] ==
                                $store.getters.organizationSearchInfo.qas[index]
                                    .id
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
                                                border-b border-notice
                                                notoSansJpAndTwelveMedium
                                                text-dropdownListItem
                                                flex
                                                justify-center
                                                items-center
                                                cursor-pointer
                                            "
                                            @click="
                                                openDetailsDisp(
                                                    $store.getters
                                                        .organizationSearchInfo
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
                                                            .organizationSearchInfo
                                                            .qas[index].id
                                                    ] ===
                                                    $store.getters
                                                        .organizationSearchInfo
                                                        .qas[index].id
                                                        ? 'transform rotate-180'
                                                        : '',
                                                ]"
                                                fill="#666666"
                                                stroke="#666666"
                                            ></triangle-down-svg></div
                                    ></span>
                                    <span class="line"></span>
                                </div>
                            </div>
                            <div
                                :class="[
                                    isDetailsDisp[
                                        $store.getters.organizationSearchInfo
                                            .qas[index].id
                                    ] ===
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                        ? 'block'
                                        : 'hidden',
                                ]"
                            >
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        pb-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                                        detailsLineColors
                                        py-1.5
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
                            bg-backgroundMain
                            rounded-b-lg
                            text-center text-view
                            h-7.5
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                        "
                        @click="
                            openDetailDisp(
                                $store.getters.organizationSearchInfo.qas[index]
                                    .id
                            )
                        "
                    >
                        <div
                            v-show="
                                !(
                                    isDetailDisp[
                                        $store.getters.organizationSearchInfo
                                            .qas[index].id
                                    ] ===
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                )
                            "
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-3 h-3"
                                fill="#32a5dc"
                                stroke="#32a5dc"
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
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                ] ===
                                $store.getters.organizationSearchInfo.qas[index]
                                    .id
                            "
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-3 h-3 transform rotate-180"
                                fill="#32a5dc"
                                stroke="#32a5dc"
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
            :value="Number($store.getters.getPage)"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            class="flex justify-center space-x-1 mt-2.5"
        ></pagination>
        <div
            class="
                flex
                justify-center
                mt-2
                text-dropdownListItem
                font-NotoSansJp
                text-xs
            "
        >
            {{ dispDetailRange }}件 表示
        </div>
        <div class="border-b border-garyTitle mt-6 mb-4 md:mb-0"></div>
        <div
            :class="[
                $store.getters.getCommentMessageBox
                    ? 'block fixed top-0 z-99 left-0 right-0 bottom-0 windowBackground'
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
import dotsHorizontal from '../common/svgImage/dotsHorizontal.vue'
import Pagination from '../common/pagination/pagiation.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import GoodMessageBox from '../common/messageBox/goodMessageBox.vue'
import ResultDetailRowItem from '../common/searchResult/resultDetailRowItem.vue'
import CommentMessageBox from '../common/messageBox/commentMessageBox.vue'
import EditAndDelete from '../common/searchResult/editAndDelete.vue'

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
        dotsHorizontal,
        Pagination,
        vueSingleSelect,
        GoodMessageBox,
        ResultDetailRowItem,
        CommentMessageBox,
        EditAndDelete,
    },
    props: {
        exeSearchRefishOpts: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {
            // 順 区分 id
            organizationDateSortValue: 'last_updated_at_desc',
            // 件 表示 区分 id
            organizationCountSortValue: 0,
            pageCount: 20,
            selectPage: 1,
            goodMessageBox: false,
            // 組織内 DI 記録（Q&A） ドット-水平
            isOrgDotsClick: [],
            isDetailDisp: [],
            isDetailsDisp: [],
            activeIndex: -1,
            resultData: Object,
            result: Object,
            qaId: '',
            rowIndex: 0,
            commentsFlag: '',
        }
    },
    unmounted() {
        this.initStore()
    },
    mounted() {
        if (JSON.stringify(this.$route.query) == '{}') {
            this.initStore()
            this.orgInit()
            this.$store.dispatch('setOrganizationSearchInfo', {})
        }

        if (JSON.stringify(this.$route.query) !== '{}') {
            this.resetSearchBar()
            this.execSearch()
        }
    },
    watch: {
        $route: function () {
            if (this.$route.path != '/searchOrganization') {
                return
            }
            this.selectPage = this.$route.query.page
            if (JSON.stringify(this.$route.query) == '{}') {
                this.initStore()
                this.$store.dispatch('setOrganizationSearchInfo', {})
            }
            if (JSON.stringify(this.$route.query) !== '{}') {
                this.resetSearchBar()
                this.execSearch()
            }
        },
    },
    computed: {
        // 最大取得件数取得
        getPageCount() {
            // 選択したアイテムの数字を取得
            if (this.organizationCountSortValue == '0') {
                this.pageCount = 20
            } else if (this.organizationCountSortValue == '1') {
                this.pageCount = 50
            } else if (this.organizationCountSortValue == '2') {
                this.pageCount = 100
            }

            //
            this.$store.dispatch('setMaxCount', this.pageCount)

            // ページ数を取得
            return Math.ceil(
                this.$store.getters.organizationSearchInfo.allCount /
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
            if (this.$store.getters.organizationSearchInfo.qas != undefined) {
                end =
                    start +
                    Object.keys(this.$store.getters.organizationSearchInfo.qas)
                        .length -
                    1
            }

            if (this.$store.getters.organizationSearchInfo.allCount == 1) {
                return start.toString()
            } else {
                if (this.$store.getters.organizationSearchInfo.allCount == 0) {
                    return '0'
                } else {
                    return start.toString() + '-' + end.toString()
                }
            }
        },
    },
    methods: {
        // CommentMessageBoxを閉じる
        closeCommentMessageBox() {
            this.$store.dispatch('setCommentMessageBox', false)
        },
        editOrganizationSearchInfo(index, count) {
            // 1件のみの場合
            if (count == 1) {
                this.isOrgDotsClick[index] = index
            } else {
                this.isOrgDotsClick[index] =
                    this.isOrgDotsClick[index] == index ? [] : index
            }
        },
        execSearch(kb) {
            // 設定　NULL
            this.openDetailDisp('')
            // QAID取得
            let qaid = ''
            let params

            if (this.$route.query.id != undefined) {
                qaid = this.$route.query.id
                this.$store.dispatch('setQAID', qaid)
                // sessionStorage.setItem(this.$constant.searchParam.PAID, qaid)
            }
            // else if (this.$store.getters.getQAID != '') {
            //     qaid = this.$store.getters.getQAID
            // }
            this.$store.dispatch('setLoadingShowFlg', false)
            this.$store.dispatch('setIsLoadingShow', true)

            let result
            // QAID存在チェック
            if (qaid != '') {
                result = this.$serve.getOwn({ id: qaid })
            } else if (this.$route.query.page != undefined) {
                result = this.$serve.getOwnData(this.$route.query)
            }

            this.setSearchResult(result)
            this.orgInit()
            this.$store.dispatch('setLoadingShowFlg', true)
            this.$store.dispatch('setIsLoadingShow', false)
        },
        orgInit: function () {
            this.$store.dispatch('getOrganizationNewQAInfo')
            this.$store.dispatch('getOrganizationLookcarefullyQAInfo')
            this.$store.dispatch('getOrganizationSeartorenndoTab')
        },
        setSearchResult: function (value) {
            if (value != '') {
                value.then((response) => {
                    this.$store.dispatch('setOrganizationSearchInfo', response)
                    // 1件のみの場合、全回答情報を表示
                    if (response.data.allCount == 1) {
                        this.openDetailDisp(
                            response.data.qas[0].id,
                            response.data.allCount
                        )
                        let qaid = ''
                        if (this.$route.query.id) {
                            qaid = this.$route.query.id
                            this.$store.dispatch('setQAID', qaid)
                            // sessionStorage.setItem(
                            //     this.$constant.searchParam.PAID,
                            //     qaid
                            // )
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
        // セッションに退避した情報をリーセット
        resetSearchBar: function () {
            this.initStore()
            if (this.$route.query.id == undefined) {
                this.$store.dispatch('setSearchWord', this.$route.query.search)
                this.$store.dispatch(
                    'setSearchTags',
                    this.$route.query.tags.split(',')
                )
                this.$store.dispatch(
                    'setMedicineID',
                    this.$route.query.medicine
                )
                this.$store.dispatch(
                    'setQuestionID',
                    this.$route.query.qacategory
                )
                this.$store.dispatch(
                    'setFacilityID',
                    this.$route.query.facility_flag
                )
                this.$store.dispatch('setMaxCount', this.$route.query.displayed)
                this.organizationDateSortValue = this.$route.query.sort
                if (this.$route.query.displayed == 20) {
                    this.organizationCountSortValue = 0
                } else if (this.$route.query.displayed == 50) {
                    this.organizationCountSortValue = 1
                }
                if (this.$route.query.displayed == 100) {
                    this.organizationCountSortValue = 2
                }
                this.$store.dispatch('setSort', this.$route.query.sort)
                this.$store.dispatch('setPage', this.$route.query.page)

                this.$store.dispatch(
                    'setCheckQ',
                    this.$route.query.checkQ.toString() === 'true',
                    true,
                    false
                )

                this.$store.dispatch(
                    'setCheckA',
                    this.$route.query.checkA.toString() === 'true',
                    true,
                    false
                )
                this.$store.dispatch(
                    'setCheckComment',
                    this.$route.query.checkComment.toString() === 'true',
                    true,
                    false
                )
                this.$store.dispatch(
                    'setCheckAddFileName',
                    this.$route.query.checkAddFileName.toString() === 'true',
                    true,
                    false
                )
                this.$store.dispatch(
                    'setCheckContributor',
                    this.$route.query.checkContributor.toString() === 'true',
                    true,
                    false
                )
                this.$store.dispatch(
                    'setCheckLastEditer',
                    this.$route.query.checkLastEditer.toString() === 'true',
                    true,
                    false
                )
                this.$store.dispatch(
                    'setCheckFacilityName',
                    this.$route.query.checkFacilityName.toString() === 'true',
                    true,
                    false
                )
                this.$store.dispatch(
                    'setCheckNote',
                    this.$route.query.checkNote.toString() === 'true',
                    true,
                    false
                )
            }
        },
        // 初回設定
        initStore() {
            this.$store.dispatch('setSearchWord', '')
            // タブ
            this.$store.dispatch('setSearchTags', [])
            // 薬区分
            this.$store.dispatch('setMedicineID', 0)
            // 質問区分
            this.$store.dispatch('setQuestionID', 0)
            // 施設
            this.$store.dispatch('setFacilityID', 0)
            // ページ
            this.$store.dispatch('setPage', 1)
            // ソート順
            this.$store.dispatch('setSort', 'last_updated_at_desc')
            // 表示件数
            this.$store.dispatch('setMaxCount', 20)
            // 検索対象
            this.$store.dispatch('setCheckQ', true) // Q
            this.$store.dispatch('setCheckA', true) // A
            this.$store.dispatch('setCheckComment', true) // コメント
            this.$store.dispatch('setCheckAddFileName', true) // 添付ファイル名
            this.$store.dispatch('setCheckContributor', true) // 投稿者
            this.$store.dispatch('setCheckLastEditer', true) // 最終編集者
            this.$store.dispatch('setCheckFacilityName', true) // 施設名
            this.$store.dispatch('setCheckNote', true) // 備考
        },
        resetRouter() {
            this.exeSearchRefishOpts()
            let getTimestamp = new Date().getTime()
            let dispDetailNumber = 20

            if (this.organizationCountSortValue == 0) {
                dispDetailNumber = 20
            } else if (this.organizationCountSortValue == 1) {
                dispDetailNumber = 50
            } else if (this.organizationCountSortValue == 2) {
                dispDetailNumber = 100
            }
            let params = {
                search: this.$store.getters.getSearchWord,
                tags: this.$store.getters.getSearchTags
                    ? this.$store.getters.getSearchTags.join(',')
                    : '',
                medicine: this.$store.getters.getMedicineID,
                qacategory: this.$store.getters.getQuestionID,
                facility_flag: this.$store.getters.getFacilityID,
                displayed: dispDetailNumber,
                sort: this.$store.getters.getSort,
                page: this.$store.getters.getPage,
                checkQ: this.$store.getters.getCheckQ,
                checkA: this.$store.getters.getCheckA,
                checkComment: this.$store.getters.getCheckComment,
                checkAddFileName: this.$store.getters.getCheckAddFileName,
                checkContributor: this.$store.getters.getCheckContributor,
                checkLastEditer: this.$store.getters.getCheckLastEditer,
                checkFacilityName: this.$store.getters.getCheckFacilityName,
                checkNote: this.$store.getters.getCheckNote,
                timestamp: getTimestamp,
            }
            this.$router.push({
                path: '/searchOrganization',
                query: params,
            })
        },
        // 改ページのデータ検索
        getSelectPage(value) {
            this.selectPage = value
            this.$store.dispatch('setPage', value)
            this.resetRouter()
        },
        // 詳細情報 クリック タグ
        sendMsgToParent: function (data) {
            this.$emit('listenToChildEvent', data)
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
        clickCallback() {},
        // 順 区分
        setOrganizationDateSortValue(value) {
            if (this.organizationDateSortValue != value) {
                this.organizationDateSortValue = value
                this.$store.dispatch('setSort', value)
                this.resetRouter()
            }
        },
        // 件 表示 区分
        setOrganizationCountSortValue(value) {
            if (this.organizationCountSortValue != value) {
                this.organizationCountSortValue = value
                this.resetRouter()
            }
        },
        openGoodMessageBox(type, index) {
            let params = {
                fbType: type,
                qaId: this.$store.getters.organizationSearchInfo.qas[index].id,
            }
            this.$serve.sendFeedback(params).then((res) => {
                if (res.data.status == 'create') {
                    this.$toast.success(res.data.message, {
                        position: 'top-right',
                    })
                    this.$store.getters.organizationSearchInfo.qas[
                        index
                    ].feedbackGood = res.data.goodFeedbackCount
                    this.$store.getters.organizationSearchInfo.qas[
                        index
                    ].feedbackBad = res.data.badFeedbackCount
                    this.$store.getters.organizationSearchInfo.qas[
                        index
                    ].feedbackComment = res.data.commentFeedbackCount
                }
            })
            //   this.$store.dispatch(
            //     'setGoodMessageBox',
            //     !this.$store.getters.getGoodMessageBox
            //   )
        },
        // クリック コメント ボタン
        openCommentMessageBox(index) {
            this.qaId = this.$store.getters.organizationSearchInfo.qas[index].id
            this.rowIndex = index
            this.commentsFlag = 'orgComments'
            this.$store.dispatch(
                'setCommentMessageBox',
                !this.$store.getters.getCommentMessageBox
            )
        },
        getRoeId(id) {},
        ActicleDetail(index) {
            this.activeIndex = this.activeIndex == index ? -1 : index
        },
        sendGoodMessage(index) {
            var v = this.qaInfo[index].value
        },
        // 該当明細編集押下
        editDetail(dataInfo) {
            let params = {
                id: dataInfo.id,
            }
            this.$router.push({
                path: '/newOrgDIRecord',
                query: params,
            })
            console.log('該当明細編集押下', dataInfo.id)
        },
        // 該当明細削除押下
        deleteDetail(dataInfo) {
            this.$swal
                .fire({
                    text: '本当に削除してよろしいですか？',
                    icon: '',
                    showCancelButton: true,
                    cancelButtonText: 'キャンセル',
                    confirmButtonText: '削除',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.$serve.deleteQa(dataInfo.id).then((res) => {
                            this.$swal.fire({
                                text: '削除されました。',
                                icon: '',
                                showCancelButton: false,
                                confirmButtonText: 'OK',
                            })
                            this.$emit('close', false)
                            this.execSearch()
                        })
                    }
                })
            console.log('該当明細削除押下', dataInfo.id)
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
    flex-grow: 2;
    border-top: 1px dashed #666666;
}

.text {
    margin: 0 5px;
}

/* html　様式設定 */

#answerTab .table {
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    border-spacing: 0;
}

#answerTab table th {
    padding: 10px 30px;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}

#answerTab table td {
    padding: 10px 30px;
    border-left: 1px solid #999;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}
</style>
