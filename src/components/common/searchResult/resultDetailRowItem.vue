<template>
    <span v-if="itemType == '1'" :class="itemClass">{{ title }}</span>
    <span v-if="itemType == '2'" :class="itemClass">{{ itemValue }}</span>
    <router-link
        v-if="itemType == '3'"
        :to="{
            name: routerPath,
            query: { id: id, timestamp: new Date().getTime() },
        }"
    >
        <span :class="itemClass">{{ itemValue }}</span></router-link
    >

    <span v-if="itemType == '4'" :class="itemClass"
        >{{ itemValue }}{{ itemTitle }}
    </span>
    <span v-if="itemType == '5'" :class="itemClass">{{ itemValue }}</span>
    <a
        v-if="itemType == '6'"
        :href="linkUrl"
        target="_blank"
        rel="noopener noreferrer"
    >
        <span :class="itemClass">{{ itemValue }}</span>
    </a>
    <div
        v-if="itemType == '7'"
        :class="itemClass"
        @click="itemClick(id, index)"
    >
        {{ itemValue }}
    </div>
    <router-link
        v-if="itemType == '8'"
        :to="{
            name: routerPath,
            query: {
                id: id,
                confidence:
                    typeof confidence == 'undefined' ||
                    confidence == 'undefined'
                        ? 'nil'
                        : confidence,
            },
        }"
    >
        <span :class="itemClass" class="font-NotoSansJp"
            >Q&nbsp;:&nbsp;{{ itemValue }}</span
        ></router-link
    >
    <span v-if="itemType == '9'" :class="itemClass"
        >{{ itemTitle.replace('XX', itemValue) }}
    </span>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
    components: {},
    props: {
        itemType: String,
        typeKB: String,
        itemStyle: String,
        addStyle: String,
        itemTitle: String,
        itemValue: String,
        routerPath: String,
        id: String,
        confidence: String,
        linkUrl: String,
        index: Number,
        itemClick: {
            type: Function,
            default: (id, index) => {},
        },
        itemSize: String,
    },
    data() {
        return {
            title: '',
        }
    },
    computed: {},
    methods: {},
    setup(props) {
        const itemClass = computed(() => {
            const style = []
            // ディフォルト以外
            if (props.itemStyle != undefined && props.itemStyle != '') {
                style.push(props.itemStyle)
                return style
            }

            if (props.itemType == '1') {
                // 1:全体
                if (props.typeKB == 'whole') {
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_whole_detailed')
                    } else {
                        style.push('searchResult_lable_whole')
                    }
                } else if (props.typeKB == 'organization') {
                    // 2:組織内
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_organization_detailed')
                    } else {
                        style.push('searchResult_lable_organization')
                    }
                } else if (props.typeKB == 'group') {
                    // 3:グループ
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_group_detailed')
                    } else {
                        style.push('searchResult_lable_group')
                    }
                } else if (props.typeKB == 'society') {
                    // 4:学　会
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_society_detailed')
                    } else {
                        style.push('searchResult_lable_society')
                    }
                } else if (props.typeKB == 'safety') {
                    // 5:安全
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_safety_detailed')
                    } else {
                        style.push('searchResult_lable_safety')
                    }
                } else if (props.typeKB == 'recruitment') {
                    // 6:採 用
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_recruitment_detailed')
                    } else {
                        style.push('searchResult_lable_recruitment')
                    }
                } else if (props.typeKB == 'examination') {
                    // 7:審 査
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_examination_detailed')
                    } else {
                        style.push('searchResult_lable_examination')
                    }
                } else if (props.typeKB == 'browse') {
                    // 8:要閲覧
                    style.push('searchResult_lable_browse')
                } else if (props.typeKB == 'notice') {
                    // 9: 告　知
                    style.push('searchResult_lable_notice')
                } else if (props.typeKB == 'event') {
                    // 10:イベント
                    style.push('searchResult_lable_notice ')
                } else if (props.typeKB == 'other') {
                    // 12:その他
                    style.push('searchResult_lable_notice ')
                } else if (props.typeKB == 'query') {
                    // 13:アンケート
                    style.push('searchResult_lable_notice ')
                } else if (props.typeKB == 'questionnaire') {
                    // 13:質問
                    style.push('searchResult_lable_notice ')
                } else if (props.typeKB == 'view') {
                    // 14:view
                    style.push('searchResult_lable_view')
                } else if (props.typeKB == 'new') {
                    // 15：New
                    style.push('searchResult_lable_new')
                } else if (props.typeKB == 'update') {
                    // 16：UPDATE
                    style.push('searchResult_lable_update')
                } else if (props.typeKB == 'newRight') {
                    // 15：New
                    style.push('searchResult_lable_new_right')
                } else if (props.typeKB == 'updateRight') {
                    // 16：UPDATE
                    style.push('searchResult_lable_update_right')
                } else if (props.typeKB == 'notLooked') {
                    // 17：未
                    style.push('searchResult_lable_notLooked')
                } else if (props.typeKB == 'looked') {
                    // 17：未
                    style.push(
                        'md:notoSansJpAndTenMedium md:ring-1 md:ring-notlooked md:w-4 md:h-4 md:invisible'
                    )
                } else if (props.typeKB == 'eventType') {
                    // 6:イベント
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_eventType_detailed')
                    } else {
                        style.push('searchResult_lable_eventType')
                    }
                } else if (props.typeKB == 'international') {
                    // 6:国 際
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_international_detailed')
                    } else {
                        style.push('searchResult_lable_international')
                    }
                } else if (props.typeKB == 'rescue') {
                    // 6:救済
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_rescue_detailed')
                    } else {
                        style.push('searchResult_lable_rescue')
                    }
                } else if (props.typeKB == 'AI') {
                    // 6:AI
                    style.push('searchResult_lable_Ai')
                } else if (props.typeKB == 'keyword') {
                    // 6:keyword
                    style.push('searchResult_lable_keyword')
                } else if (props.typeKB == 'CertaintyTitle') {
                    // 6:確信度タイトル
                    style.push('searchResult_lable_certainty_title')
                } else if (props.typeKB == 'ownFacility') {
                    if (props.itemSize == 'size') {
                        // 6:自施設
                        style.push('searchResult_lable_ownFacilit_detailed')
                    } else {
                        // 6:自施設
                        style.push('searchResult_lable_ownFacility')
                    }
                }
                if (props.typeKB == 'otherFacility') {
                    // 他施設
                    if (props.itemSize == 'size') {
                        style.push('searchResult_lable_otherFacility_detailed')
                    } else {
                        style.push('searchResult_lable_otherFacility')
                    }
                } else {
                    style.push('')
                }
            } else if (props.itemType == '2') {
                // 2:日付
                if (props.itemSize == 'size') {
                    style.push('searchResult_date_title_detailed')
                } else {
                    style.push('searchResult_date_title')
                }
            } else if (props.itemType == '3') {
                //3:タイトル
                style.push('searchResult_title')
            } else if (props.itemType == '4') {
                //3:view
                style.push('searchResult_lable_view')
            } else if (props.itemType == '5') {
                //3:overview
                style.push('searchResult_overview')
            } else if (props.itemType == '6') {
                //3:タイトル
                style.push('searchResult_title')
            } else if (props.itemType == '7') {
                //3:タイトル
                style.push('searchResult_title')
            } else if (props.itemType == '8') {
                //3:タイトル
                style.push('searchResult_title')
            } else if (props.itemType == '9') {
                //3:view
                style.push('searchResult_lable_view')
            }
            // style追加
            if (props.addStyle != '') {
                style.push(props.addStyle)
            }
            return style
        })

        const title = computed(() => {
            // 1:全体
            if (props.typeKB == 'whole') {
                return '全　体'
            }

            if (props.typeKB == 'organization') {
                // 2:所属内
                return '所属内'
            }

            if (props.typeKB == 'group') {
                // 3:グループ
                return 'グループ'
            }

            if (props.typeKB == 'society') {
                // 4:学　会
                return '学　会'
            }

            if (props.typeKB == 'safety') {
                // 5:安全
                return '安　全'
            }

            if (props.typeKB == 'recruitment') {
                // 6:採 用
                return '採　用'
            }

            if (props.typeKB == 'examination') {
                // 7:審 査
                return '審　査'
            }

            if (props.typeKB == 'browse') {
                // 8:要閲覧
                return '要閲覧'
            }

            if (props.typeKB == 'notbrowsed') {
                // 8:要閲覧
                return ''
            }

            if (props.typeKB == 'notice') {
                // 9: 告　知
                return '告　知'
            }

            if (props.typeKB == 'event') {
                // 10:イベント
                return 'イベント'
            }

            if (props.typeKB == 'other') {
                // 12:その他
                return 'その他'
            }

            if (props.typeKB == 'query') {
                // 13:質問
                return '質　問'
            }

            if (props.typeKB == 'questionnaire') {
                // 14:アンケート
                return 'アンケート'
            }
            if (props.typeKB == 'view') {
                // 15:view
                return 'view'
            }
            if (props.typeKB == 'new') {
                // 15：New
                return 'NEW'
            }
            if (props.typeKB == 'update') {
                // 16：UPDATE
                return 'UPDATE'
            }
            if (props.typeKB == 'notLooked') {
                // 17：未
                return '未'
            }
            if (props.typeKB == 'looked') {
                // 17：未
                return ' '
            }

            if (props.typeKB == 'international') {
                // 17：国　際
                return '国　際'
            }

            if (props.typeKB == 'eventType') {
                // 17：イベント
                return 'イベント'
            }

            if (props.typeKB == 'rescue') {
                // 17：救済
                return '救　済'
            }
            if (props.typeKB == 'AI') {
                // 17：AI
                return 'AI'
            }
            if (props.typeKB == 'keyword') {
                // 17：キーワード
                return 'キーワード'
            }
            if (props.typeKB == 'CertaintyTitle') {
                // 17：確信度
                return '確信度'
            }
            if (props.typeKB == 'ownFacility') {
                // 17：自施設
                return '自施設'
            }
            if (props.typeKB == 'otherFacility') {
                // 17：他施設
                return '他施設'
            } else {
                return props.typeKB
            }
        })
        return {
            itemClass,
            title,
        }
    },
}
</script>
<style scoped></style>
