<template>
    <div>
        <div
            class="
                md:flex
                md:border-white
                md:space-x-3
                align-baseline
                items-center
                pt-1.5
            "
            :class="getLineStyle(index, lineStyle)"
            v-for="(row, index) in sites"
            :key="row"
        >
            <div
                class="items-center align-baseline pl-2 md:pl-5"
                :class="proAreaStyle"
            >
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
                <result-detail-row-item
                    itemType="1"
                    :typeKB="row.looked"
                    v-if="row.looked != undefined"
                ></result-detail-row-item>
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

            <span class="flex-grow truncate items-center align-baseline">
                <span
                    class="justify-start items-center align-baseline"
                    :class="midAreaStyle"
                >
                    <result-detail-row-item
                        itemType="3"
                        :itemValue="row.title"
                        :addStyle="getLookedTitle(row.looked, midDetailStyle)"
                        :itemStyle="resetTitle(midDetailStyle)"
                        v-if="row.title != undefined"
                    ></result-detail-row-item>

                    <result-detail-row-item
                        itemType="3"
                        :itemValue="row.urlTitle"
                        addStyle="underline pl-2 md:pl-0"
                        v-if="row.urlTitle != undefined"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        itemType="1"
                        :typeKB="row.browseRequired"
                        v-if="row.browseRequired != undefined"
                        addStyle="hidden md:block flex-none "
                    ></result-detail-row-item>
                </span>
            </span>

            <div
                class="
                    flex-none
                    space-x-1.5
                    md:space-x-3
                    items-center
                    align-baseline
                    pb-2
                    pl-2
                    md:0
                    md:pr-5
                "
                :class="bakAreaStyle"
            >
                <result-detail-row-item
                    itemType="1"
                    :typeKB="row.browseRequired"
                    v-if="
                        row.browseRequired != undefined &&
                        row.browseRequired == 'browse'
                    "
                    addStyle="block md:hidden text-xs md:text-xxss md:flex-none"
                ></result-detail-row-item>
                <result-detail-row-item
                    itemType="1"
                    :typeKB="row.notificationType"
                    v-if="row.notificationType != undefined"
                    addStyle="md:flex-none"
                ></result-detail-row-item>
                <result-detail-row-item
                    itemType="4"
                    itemTitle=" view"
                    :itemValue="row.viewCount"
                    addStyle="md:flex-none"
                    v-if="row.viewCount != undefined"
                ></result-detail-row-item>
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
    getLookedTitle(lookedKB, midStyle) {
      if (lookedKB != undefined) {
        if (lookedKB == "Looked") {
          return "truncate md:underline md:whitespace-pre  text-dropdownListItem"
        } else {
          return "truncate md:underline md:whitespace-pre"
        }
      } else {
        if (midStyle == "style2") {
          return "truncate block pl-2 md:pl-0"
        }
      }
    },
    // タイトルのStyleをリセット
    resetTitle(midStyle) {
      if (midStyle == "style2") {
        return "searchResult_title_font_14 truncate block pl-2 md:pl-0"
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
        style.push("flex space-x-1.5 md:space-x-3 pl-2 md:pl-0")
      }
      if (props.proDetailStyle == "style2") {
        style.push("flex flex-row md:flex-col md:space-x-0 space-x-2 ")
      }
      return style

    })
    const midAreaStyle = computed(() => {
      const style = []
      if (props.midDetailStyle == "style1") {
        style.push("flex pl-2 md:pl-0")
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
