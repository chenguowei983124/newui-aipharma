<template>
    <div class="md:pt-3.75">
        <!-- itemType 1:ラベル 2:日付 3:タイトル -->
        <div
            class="
                pt-2.5
                md:pt-0
                mid:pt-0
                space-y-1.5
                md:space-y-0
                md:flex
                items-baseline
                md:border-white
                md:space-x-3
            "
            :class="getLineStyle(index, lineStyle)"
            v-for="(row, index) in sites"
            :key="row"
        >
            <!-- sp 最初の行目 -->
            <div>
                <div
                    class="ml-2.5 md:ml-5 md:h-4 md:flex items-center"
                    :class="proAreaStyle"
                    v-if="objectCheck(row.type) == false"
                >
                    <!-- 属性ラベル -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.type"
                        v-if="row.type != undefined"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.group"
                        v-if="row.group != undefined"
                    ></result-detail-row-item>
                    <!-- 未アイコン -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.looked"
                        v-if="row.looked != undefined"
                    ></result-detail-row-item>
                    <!-- date -->
                    <result-detail-row-item
                        itemType="2"
                        :itemValue="row.date"
                        v-if="row.date != undefined"
                    ></result-detail-row-item>

                    <result-detail-row-item
                        itemType="2"
                        :itemValue="getDateFrom(row.dateFrom, row.dateTo)"
                        v-if="row.dateFrom != undefined"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="2"
                        :itemValue="row.dateTo"
                        addStyle=" block w-12 h-5"
                        v-if="row.dateTo != undefined"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.states"
                        :itemStyle="getPmdaStatesDefaultStype(row.states)"
                        v-if="row.states != undefined"
                    ></result-detail-row-item>
                </div>

                <div
                    class="ml-2.5 md:ml-5 items-start"
                    v-if="objectCheck(row.type) == true"
                    :class="proAreaStyle"
                >
                    <div
                        class="
                            flex
                            md:block
                            space-x-2
                            md:space-y-1.5 md:space-x-0
                        "
                    >
                        <div
                            class="flex md:flex-col space-x-1.5 md:space-y-1.5"
                            v-for="typeItem in row.type"
                            :key="typeItem"
                        >
                            <!-- 属性ラベル -->
                            <result-detail-row-item
                                itemType="1"
                                :typeKB="typeItem"
                            ></result-detail-row-item>
                        </div>
                    </div>
                    <div :class="proAreaStyle">
                        <result-detail-row-item
                            itemType="1"
                            :typeKB="row.group"
                            v-if="row.group != undefined"
                        ></result-detail-row-item>
                        <!-- 未アイコン -->
                        <result-detail-row-item
                            itemType="1"
                            :typeKB="row.looked"
                            v-if="row.looked != undefined"
                        ></result-detail-row-item>
                        <!-- date -->
                        <result-detail-row-item
                            itemType="2"
                            :itemValue="row.date"
                            v-if="row.date != undefined"
                        ></result-detail-row-item>

                        <result-detail-row-item
                            itemType="2"
                            :itemValue="getDateFrom(row.dateFrom, row.dateTo)"
                            v-if="row.dateFrom != undefined"
                        ></result-detail-row-item>
                        <result-detail-row-item
                            itemType="2"
                            :itemValue="row.dateTo"
                            addStyle=" block w-12 h-5"
                            v-if="row.dateTo != undefined"
                        ></result-detail-row-item>
                        <result-detail-row-item
                            itemType="1"
                            :typeKB="row.states"
                            :itemStyle="getPmdaStatesDefaultStype(row.states)"
                            v-if="row.states != undefined"
                        ></result-detail-row-item>
                    </div>
                </div>
            </div>
            <!-- sp 二行目 -->
            <div class="ml-2.5 md:ml-0 flex-grow truncate">
                <span class="items-center truncate" :class="midAreaStyle">
                    <!-- title text -->
                    <router-link :to="{ path: row.linkUrl }" class="truncate">
                        <result-detail-row-item
                            itemType="3"
                            :itemValue="row.title"
                            :addStyle="
                                getLookedTitle(row.looked, midDetailStyle)
                            "
                            :itemStyle="resetTitle(midDetailStyle)"
                            v-if="row.title != undefined"
                        ></result-detail-row-item>
                    </router-link>

                    <result-detail-row-item
                        itemType="3"
                        :itemValue="row.urlTitle"
                        addStyle="underline truncate"
                        v-if="row.urlTitle != undefined"
                    ></result-detail-row-item>
                    <!-- 要閲覧ラベル -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.browseRequired"
                        v-if="row.browseRequired != undefined"
                        addStyle="hidden md:block flex-none"
                    ></result-detail-row-item>
                </span>
            </div>

            <!-- sp 三行目 -->
            <div
                class="
                    ml-2.5
                    md:ml-0
                    pb-2
                    md:pb-0
                    md:pr-5
                    flex-none
                    md:h-4
                    items-center
                    md:space-x-2.5
                "
                :class="bakAreaStyle"
            >
                <div class="flex justify-end">
                    <!-- 要閲覧ラベル -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.browseRequired"
                        v-if="
                            row.browseRequired != undefined &&
                            row.browseRequired == 'browse'
                        "
                        addStyle="flex justify-center items-center mr-1.875 block md:hidden text-xs md:text-xxss md:flex-none"
                    ></result-detail-row-item>
                    <!-- 告知ラベル -->
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.notificationType"
                        v-if="row.notificationType != undefined"
                        addStyle="flex justify-center items-center mr-1.25 md:flex-none"
                    ></result-detail-row-item>
                    <!-- view数 -->
                    <result-detail-row-item
                        itemType="4"
                        itemTitle=" view"
                        :itemValue="row.viewCount"
                        addStyle="md:ml-2.5 md:flex-none"
                        v-if="row.viewCount != undefined"
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
      default: "style1"
    },
    midDetailStyle: {
      type: String,
      default: "style1"
    },
    bakDetailStyle: {
      type: String,
      default: "style1"
    }, lineStyle: {
      type: String,
      default: "blueline"
    }
  },
  data() {
    return {
    };
  }, methods: {
    objectCheck(itemtype) {
      if (typeof itemtype == "object") {
        return true
      } else {
        return false
      }
    },
    getLookedTitle(lookedKB, midStyle) {
      if (lookedKB != undefined) {
        if (lookedKB == "Looked") {
          return "truncate underline md:whitespace-pre text-dropdownListItem"
        } else {
          return "truncate underline md:whitespace-pre"
        }
      } else {
        if (midStyle == "style1") {
          return "underline"
        }
        if (midStyle == "style2") {
          return "truncate block "
        }
      }
    },
    resetTitle(midStyle) {
      if (midStyle == "style2") {
        return "searchResult_title_font_14 truncate block "
      }
    }
    , getDateFrom(dateFrom, dateTo) {
      if (dateTo != "") {
        return dateFrom.concat(" - ")
      } else {
        return dateFrom
      }
    }, getPmdaStatesDefaultStype(states) {
      if (states == "") {
        return "w-12.5 block "
      } else {
        return null
      }
    }, getLineStyle(index, style) {
      const line = []
      if (style == "blueline") {
        line.push("border-b-2 border-blueline")
      } else {
        line.push("border-b-2 border-grayline")
      }

      if (index == 4) {
        return "md:pb-4"
      } else if (index == 0) {
        line.push("md:pt-4")
      }
      return line
    }
  },
  setup(props) {
    const proAreaStyle = computed(() => {
      const style = []
      if (props.proDetailStyle == "style1") {
        style.push("flex space-x-1.5 md:space-x-3 ")
      }
      if (props.proDetailStyle == "style2") {
        style.push("flex flex-row md:flex-col md:space-x-0 space-x-2 ")
      }
      return style
    })

    const midAreaStyle = computed(() => {
      const style = []
      if (props.midDetailStyle == "style1") {
        style.push("flex")
      }
      if (props.proDetailStyle == "style2") {
        style.push("")
      }
      return style
    })

    const bakAreaStyle = computed(() => {
      const style = []
      if (props.bakDetailStyle == "style1") {
        style.push("flex")
      }
      return style
    })

    return {
      proAreaStyle,
      midAreaStyle,
      bakAreaStyle
    }
  }
}
</script>
