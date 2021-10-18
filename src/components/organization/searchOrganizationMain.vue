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
                        :default-options="$constant.organizationDateSort"
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
                        :default-options="$constant.organizationCountSort"
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
                                    <!-- <div class="flex-none"></div> -->
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
        <div class="flex justify-center mt-2">{{ dispDetailRange }}件 表示</div>
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
            organizationDateSortValue: 0,
            // 件 表示 区分 id
            organizationCountSortValue: 0,
            pageCount: 20,
            selectPage: 1,
            goodMessageBox: false,
            isDetailDisp: [],
            isDetailsDisp: [],
            activeIndex: -1,
            resultData: Object,
            result: Object,
        }
    },
    mounted() {
        if (JSON.stringify(this.$route.query) == '{}') {
            this.initStore()
            this.$store.dispatch('setOrganizationSearchInfo', {})
        }

        if (JSON.stringify(this.$route.query) !== '{}') {
            this.execSearch()
        }
    },
    watch: {
        $route: function () {
            if (this.$route.path != '/searchOrganization') {
                return
            }
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
        getPageCount() {
            //   let page = 1;
            if (this.organizationCountSortValue == '0') {
                this.pageCount = 20
            } else if (this.organizationCountSortValue == '1') {
                this.pageCount = 50
            } else if (this.organizationCountSortValue == '2') {
                this.pageCount = 100
            }
            this.$store.dispatch('setMaxCount', this.pageCount)
            return Math.ceil(
                this.$store.getters.organizationSearchInfo.allCount /
                    this.pageCount
            )
        },
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
                return start.toString() + '-' + end.toString()
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

            if (this.$route.query.id != undefined) {
                qaid = this.$route.query.id
                this.$store.dispatch('setQAID', qaid)
                sessionStorage.setItem(this.$constant.searchParam.PAID, qaid)
            } else if (this.$store.getters.getQAID != '') {
                qaid = this.$store.getters.getQAID
            }

            let result
            // QAID存在チェック
            if (qaid != '') {
                result = this.$serve.getOwn({ id: qaid })
            } else if (this.$route.query.page != undefined) {
                result = this.$serve.getOwnData(this.$route.query)
            }

            this.setSearchResult(result)
        },

        setSearchResult: function (value) {
            value.then((response) => {
                this.$store.dispatch('setOrganizationSearchInfo', response)
                // 1件のみの場合、全回答情報を表示
                if (response.data.allCount == 1) {
                    this.openDetailDisp(
                        response.data.qas.id,
                        response.data.allCount
                    )

                    let qaid = ''
                    if (this.$route.query.id) {
                        qaid = this.$route.query.id
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
        // セッションに退避した情報をリーセット
        resetSearchBar: function () {
            this.initStore()
            this.$store.dispatch('setSearchWord', this.$route.query.search)
            this.$store.dispatch(
                'setSearchTags',
                this.$route.query.tags.split(',')
            )
            console.log('resetSearchBar', this.$store.getters.getSearchTags)
            this.$store.dispatch('setMedicineID', this.$route.query.medicine)
            this.$store.dispatch('setQuestionID', this.$route.query.qacategory)
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
        },

        initStore() {
            this.$store.dispatch('setSearchWord', '')
            this.$store.dispatch('setSearchTags', [])
            this.$store.dispatch('setMedicineID', -1)
            this.$store.dispatch('setQuestionID', -1)
            this.$store.dispatch('setFacilityID', -1)
            this.$store.dispatch('setPage', 1)
            this.$store.dispatch('setSort', 0)
            this.$store.dispatch('setMaxCount', 0)
            this.$store.dispatch('setCheckQ', true)
            this.$store.dispatch('setCheckA', true)
            this.$store.dispatch('setCheckComment', true)
            this.$store.dispatch('setCheckAddFileName', true)
            this.$store.dispatch('setCheckContributor', true)
            this.$store.dispatch('setCheckLastEditer', true)
            this.$store.dispatch('setCheckFacilityName', true)
            this.$store.dispatch('setCheckNote', true)
        },
        resetRouter() {
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
            console.log('page', value)
            this.selectPage = value
            console.log(value)
            this.$store.dispatch('setPage', value)
            this.resetRouter()
        },
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
        clickCallback() {
            console.log()
        },
        setOrganizationDateSortValue(value) {
            this.organizationDateSortValue = value
            console.log(value)
            this.$store.dispatch('setSort', value)
            this.resetRouter()
        },
        setOrganizationCountSortValue(value) {
            this.organizationCountSortValue = value
            this.resetRouter()
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
    /* width: 40%;
    height: 2px;
    background-image: linear-gradient(
        to right,
        #009a61 0%,
        #009a61 80%,
        transparent 80%
    );
    background-size: 30px 3px; 
    background-repeat: repeat-x; */
    height: 2px;
    flex-grow: 2;
    /* background-color: red; */
    /* border-top: 2px dotted rgba(100, 98, 98, 0.897); */
    border-top: 2px dashed rgba(100, 98, 98, 0.897);
}

.text {
    margin: 0 5px;
}
/* .table {
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
} */
</style>
