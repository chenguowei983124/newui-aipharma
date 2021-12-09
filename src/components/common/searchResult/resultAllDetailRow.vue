<template>
    <div class="py-1 md:py-3.5">
        <!-- itemType 1:ラベル 2:日付 3:タイトル -->
        <div
            class="
                pt-2.5
                md:pt-0
                mid:pt-0
                space-y-1.5
                md:space-y-0 md:flex md:border-white md:space-x-3
                mx-0.5
            "
            :class="getLineStyle(index, lineStyle, sites.length)"
            v-for="(row, index) in sites"
            :key="row"
        >
            <!-- sp 最初の行目 -->
            <div
                class="md:ml-2 md:h-4 items-center md:mt-1"
                v-if="sub1 != undefined"
                :class="[row.confidence != undefined ? 'mb-0 md:mb-4' : '']"
            >
                <div
                    class="md:flex ml-2 md:pl-0"
                    v-for="dispItem in sub1"
                    :key="dispItem"
                    :class="proAreaStyle"
                >
                    <div
                        v-if="
                            row.id != undefined &&
                            dispItem == 'keyword' &&
                            row.confidence == undefined
                        "
                        class="searchResult_lable_ownFacility"
                    >
                        キーワード
                    </div>
                    <div
                        v-if="row.confidence != undefined"
                        class="searchResult_lable_Ai"
                    >
                        AI
                    </div>

                    <!-- {{ row.confidence }} -->
                    <!-- 属性ラベル -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.type"
                        v-if="row.type != undefined && dispItem == 'type'"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.group"
                        v-if="row.group != undefined && dispItem == 'group'"
                    ></result-detail-row-item>
                    <!-- 未アイコン -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.looked"
                        v-if="row.looked != undefined && dispItem == 'looked'"
                    ></result-detail-row-item>
                    <!-- date -->
                    <result-detail-row-item
                        itemType="2"
                        :itemValue="row.date"
                        v-if="row.date != undefined && dispItem == 'date'"
                    ></result-detail-row-item>

                    <result-detail-row-item
                        itemType="2"
                        :itemValue="getDateFrom(row.dateFrom, row.dateTo)"
                        v-if="
                            row.dateFrom != undefined && dispItem == 'dateFrom'
                        "
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="2"
                        :itemValue="row.dateTo"
                        addStyle=" block w-12 h-5"
                        v-if="row.dateTo != undefined && dispItem == 'dateTo'"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.status"
                        :itemStyle="getPmdastatusDefaultStype(row.status)"
                        v-if="row.status != undefined && dispItem == 'status'"
                    ></result-detail-row-item>
                </div>
            </div>
            <!-- sp 二行目 -->
            <div class="md:ml-0 flex-grow md:truncate md:h-6 ml-2">
                <span
                    class="items-center"
                    :class="midAreaStyle"
                    v-for="dispItem in sub2"
                    :key="dispItem"
                >
                    <!-- question text -->
                    <div
                        class="
                            underline
                            truncate
                            hover:opacity-50
                            active:opacity-50
                        "
                        v-show="dispItem == 'question'"
                    >
                        <!-- {{ row.question }} -->
                        <result-detail-row-item
                            itemType="8"
                            :itemValue="row.question"
                            :itemStyle="resetTitle(midDetailStyle)"
                            addStyle="truncate"
                            :routerPath="routerPath"
                            :id="String(row.id)"
                            :confidence="String(row.confidence)"
                            v-if="row.question != undefined"
                        ></result-detail-row-item>
                    </div>

                    <!-- title text -->
                    <div
                        class="
                            underline
                            truncate
                            hover:opacity-50
                            active:opacity-50
                        "
                        v-show="dispItem == 'title'"
                    >
                        <result-detail-row-item
                            itemType="3"
                            :itemValue="row.title"
                            :itemStyle="resetTitle(midDetailStyle)"
                            addStyle="truncate"
                            :routerPath="routerPath"
                            :id="String(row.id)"
                            v-if="row.title != undefined"
                        ></result-detail-row-item>
                    </div>
                    <div
                        v-show="dispItem == 'titleHeightAuto'"
                        class="truncate"
                    >
                        <result-detail-row-item
                            itemType="3"
                            :itemValue="row.title"
                            addStyle="underline hover:opacity-50 active:opacity-50"
                            v-if="row.title != undefined"
                        ></result-detail-row-item>
                    </div>
                    <result-detail-row-item
                        itemType="3"
                        :itemValue="row.urlTitle"
                        addStyle="underline truncate "
                        v-if="row.urlTitle != undefined"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="5"
                        :itemValue="row.overview"
                        v-if="row.overview != undefined"
                    ></result-detail-row-item>
                </span>
            </div>
            <!-- sp 三行目 -->
            <div
                class="md:ml-0 md:pr-5 pb-2 md:pb-0 flex-none ml-1"
                :class="bakAreaStyle"
            >
                <div
                    class="flex justify-start ml-1.5 md:ml-0 items-center"
                    v-for="dispItem in sub3"
                    :key="dispItem"
                >
                    <!-- 確信度ラベル -->
                    <div class="flex">
                        <result-detail-row-item
                            itemType="1"
                            typeKB="CertaintyTitle"
                            v-if="
                                row.confidence != undefined &&
                                row.confidence != '' &&
                                dispItem == 'certainty'
                            "
                        ></result-detail-row-item>
                        <result-detail-row-item
                            itemType="4"
                            typeKB="CertaintyValue"
                            :itemValue="String(row.confidence)"
                            itemTitle="%"
                            v-if="
                                row.confidence != undefined &&
                                row.confidence != '' &&
                                dispItem == 'certainty'
                            "
                            itemStyle="searchResult_lable_certainty_value ml-2"
                        ></result-detail-row-item>
                    </div>
                    <!-- 状態 -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.status"
                        :itemStyle="getPmdastatusDefaultStype(row.status)"
                        addStyle=""
                        v-if="row.status != undefined && dispItem == 'status'"
                    ></result-detail-row-item>
                    <!-- date -->
                    <!-- 状態無し -->
                    <div :class="[row.status == '' ? '-ml-1.5 md:ml-0' : '']">
                        <result-detail-row-item
                            itemType="2"
                            :itemValue="row.date"
                            addStyle=""
                            v-if="row.date != undefined && dispItem == 'date'"
                        ></result-detail-row-item>
                    </div>
                    <!-- view数 -->
                    <result-detail-row-item
                        itemType="4"
                        itemTitle=" view"
                        :itemValue="row.viewCount.toString()"
                        addStyle="md:flex-none"
                        v-if="row.viewCount != undefined && dispItem == 'view'"
                    ></result-detail-row-item>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import resultDetailRowItem from './resultDetailRowItem.vue'
import { computed } from '@vue/runtime-core'

export default {
    components: { resultDetailRowItem },
    props: {
        sites: Array,
        proDetailStyle: {
            type: String,
            default: 'style1',
        },
        midDetailStyle: {
            type: String,
            default: 'style1',
        },
        bakDetailStyle: {
            type: String,
            default: 'style1',
        },
        lineStyle: {
            type: String,
            default: 'blueline',
        },
        sub1: Array,
        sub2: Array,
        sub3: Array,
        routerPath: {
            type: String,
            default: '',
        },
    },
    data() {
        return {}
    },
    methods: {
        getLookedTitle(lookedKB, midStyle) {
            if (lookedKB != undefined) {
                if (lookedKB == 'looked') {
                    return 'truncate underline md:whitespace-pre text-dropdownListItem'
                } else {
                    return 'truncate underline md:whitespace-pre'
                }
            } else {
                if (midStyle == 'style1') {
                    return 'truncate underline md:whitespace-pre'
                }
                if (midStyle == 'style2') {
                    return 'truncate block '
                }
            }
        },
        resetTitle(midStyle) {
            if (midStyle == 'style2') {
                return 'notoSansJpAndFourteenRegular truncate block '
            }
        },
        getDateFrom(dateFrom, dateTo) {
            if (dateTo == '' || dateTo == 'undefined') {
                return dateFrom
            } else {
                return dateFrom.concat(' - ')
            }
        },
        getPmdastatusDefaultStype(status) {
            if (status == '') {
                return 'w-12.5 hidden md:block '
            } else {
                if (status == 'new') {
                    return 'searchResult_lable_new_right md:mr-2.5'
                } else {
                    return 'searchResult_lable_update_right md:mr-2.5'
                }
                return null
            }
        },
        getLineStyle(index, style, length) {
            const line = []

            if (length != index + 1 && style == 'blueline') {
                line.push('border-b-2 border-blueline ')
            }
            if (length != index + 1 && style != 'blueline') {
                line.push('border-b-2 border-grayline')
            }
            return line
        },
        isDisp1(itemName, rowItem) {
            if (rowItem == undefined) {
                return false
            }
            this.sub1.forEach((element) => {
                if (itemName == element) {
                    return true
                } else {
                    return false
                }
            })
        },
    },
    setup(props) {
        const proAreaStyle = computed(() => {
            const style = []
            if (props.proDetailStyle == 'style1') {
                style.push('flex space-x-1.5 md:space-x-0 ')
            }
            if (props.proDetailStyle == 'style2') {
                style.push('flex flex-row md:flex-col md:space-x-0 space-x-2 ')
            }
            return style
        })

        const midAreaStyle = computed(() => {
            const style = []
            if (props.midDetailStyle == 'style1') {
                style.push('flex ')
            }
            if (props.proDetailStyle == 'style2') {
                style.push('flex flex-col')
            }
            if (props.sub1 == undefined) {
                style.push('ml-2 md:ml-5')
            }
            return style
        })

        const bakAreaStyle = computed(() => {
            const style = []
            if (props.bakDetailStyle == 'style1') {
                style.push('flex')
            }
            return style
        })

        return {
            proAreaStyle,
            midAreaStyle,
            bakAreaStyle,
        }
    },
}
</script>
