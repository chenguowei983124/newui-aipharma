<template>
    <div class="bg-lock h-full">
        <div class="absolute w-full rounded-sm -ml-0.5 -mt-0.5">
            <div
                class="bg-lock h-36 rounded-lg md:h-40.5"
                v-if="row.clicked"
            ></div>
        </div>
        <div class="md:p-4 p-2">
            <!-- 最初の行目 -->
            <div class="md:h-4 items-center flex justify-between">
                <div class="flex">
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.group"
                        v-if="row.group != undefined"
                    ></result-detail-row-item>
                    <!-- date -->
                    <result-detail-row-item
                        itemType="2"
                        addStyle="ml-2"
                        :itemValue="row.date"
                        v-if="row.date != undefined"
                    ></result-detail-row-item>
                </div>
                <!-- 告知ラベル -->
                <result-detail-row-item
                    itemType="1"
                    :typeKB="row.notificationType"
                    v-if="row.notificationType != undefined"
                    addStyle="flex justify-center items-center mr-1.25 md:flex-none "
                ></result-detail-row-item>
                <!-- </div> -->
            </div>
            <!--  二行目 -->
            <div class="flex-grow truncate md:h-6">
                <span class="items-center">
                    <!-- title text -->
                    <div
                        class="
                            underline
                            truncate
                            hover:opacity-50
                            active:opacity-50
                            cursor-pointer
                        "
                    >
                        <result-detail-row-item
                            itemType="7"
                            :itemValue="row.urlTitle"
                            addStyle="truncate"
                            :id="String(row.id)"
                            v-if="row.urlTitle != undefined"
                            :index="index"
                            :itemClick="itemClick"
                        ></result-detail-row-item>
                    </div>
                </span>
            </div>

            <!--  三行目 -->
            <div class="flex-grow md:truncate">
                <div
                    class="pl-5 truncate"
                    v-html="
                        row.title
                            .toString()
                            .split(`<p>&nbsp;</p>`)[0]
                            .replace(
                                '<ol>',
                                `<ol style='list-style-type: decimal;'>`
                            )
                            .replace(
                                '<ul>',
                                `<ul style='list-style-type: disc;'>`
                            )
                    "
                    v-if="row.title != undefined"
                ></div>
                <!-- <result-detail-row-item
                    itemType="7"
                    :itemValue="row.title"
                    addStyle="truncate"
                    v-if="row.title != undefined"
                ></result-detail-row-item> -->
            </div>

            <!--  四行目 -->
            <div class="mt-3.75 flex justify-between md:h-6">
                <div class="flex items-end">
                    <result-detail-row-item
                        itemType="7"
                        :itemValue="row.userName"
                        itemStyle="notoSansJpAndSixteenBold"
                        v-if="row.userName != undefined"
                    ></result-detail-row-item>
                    <div class="ml-2 notoSansJpAndTwelveRegular">先生</div>
                </div>
                <!-- view数 -->
                <result-detail-row-item
                    itemType="4"
                    itemTitle=" view"
                    :itemValue="row.viewCount.toString()"
                    addStyle="md:ml-2.5 md:flex-none"
                    v-if="row.viewCount != undefined"
                ></result-detail-row-item>
            </div>

            <!--  五行目 -->
            <div class="flex justify-between md:h-6">
                <result-detail-row-item
                    itemType="7"
                    :itemValue="row.workplace"
                    itemStyle="notoSansJpAndTwelveBold"
                    v-if="row.workplace != undefined"
                ></result-detail-row-item>
                <!-- view数 -->
                <result-detail-row-item
                    itemType="9"
                    itemTitle="返信 XX 件"
                    :itemValue="row.commnetCount.toString()"
                    addStyle=" md:flex-none"
                    v-if="row.commnetCount != undefined"
                ></result-detail-row-item>
            </div>

            <slot></slot>
        </div>
    </div>
</template>

<script>
import resultDetailRowItem from './resultDetailRowItem.vue'
import { computed } from '@vue/runtime-core'

export default {
    components: { resultDetailRowItem },
    props: {
        row: {},
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
        routerPath: {
            type: String,
            default: '',
        },
        index: {
            type: Number,
            default: 0,
        },
        itemClick: {
            type: Function,
            default: (index) => {},
        },
    },
    data() {
        return {}
    },
    methods: {
        testClick(index) {
            console.log('test', index)
        },
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
                    return 'truncate block pl-2 md:pl-0'
                }
            }
        },
        resetTitle(midStyle) {
            if (midStyle == 'style2') {
                return 'notoSansJpAndFourteenRegular truncate block pl-2 md:pl-0'
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
        getLineStyle(index, style) {
            const line = []
            if (style == 'blueline') {
                line.push('border-b-2 border-blueline')
            } else {
                line.push('border-b-2 border-grayline')
            }

            if (index == 4) {
                return 'md:pb-4'
            } else if (index == 0) {
                line.push('md:pt-4')
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
}
</script>
