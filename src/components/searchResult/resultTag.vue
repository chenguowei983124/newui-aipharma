<template>
    <div v-if="headerStyle == 'doubleTag'">
        <input type="radio" name="tab" id="a1" class="hidden" checked />
        <input type="radio" name="tab" id="a2" class="hidden" />
        <div class="flex space-x-2 nav">
            <label
                for="a1"
                class="
                    w-1/2
                    notoSansJpAndEighteenBold
                    searchResultUnActiveTagTitleStyle
                "
            >
                <span> {{ title }}</span></label
            >
            <label
                for="a2"
                class="
                    w-1/2
                    notoSansJpAndEighteenBold
                    searchResultActiveTagTitleStyle
                "
            >
                <span> {{ subTitle }}</span></label
            >
        </div>
        <slot></slot>
    </div>
    <div v-else>
        <result-header
            :class="resultHeaderStyle"
            :title="title"
            :titleStyle="titleStyle"
            :titleURL="titleURL"
            :subTitle="subTitle"
            :subTitleStyle="subTitleStyle"
            :subTitleURL="subTitleURL"
            :rightStyle="rightStyle"
            :countTitle="countTitle"
            :countStyle="countStyle"
            :iconType="iconType"
            :iconUrl="iconUrl"
        ></result-header>
        <slot></slot>
    </div>
</template>

<script>
import resultDetailRow from './resultDetailRow.vue'
import resultHeader from './reaultHeader.vue'
import { computed } from '@vue/runtime-core'
export default {
  components: { resultDetailRow, resultHeader },
  props: {
    headerStyle: { type: String, defult: "" },
    title: { type: String, defult: "" },
    titleStyle: { type: String, defult: "" },
    titleURL: { type: String, defult: "" },
    subTitle: { type: String, defult: "" },
    subTitleStyle: { type: String, defult: "" },
    subTitleURL: { type: String, defult: "" },
    rightStyle: { type: String, defult: "" },
    countTitle: { type: String, defult: "" },
    countStyle: { type: String, defult: "" },
    iconType: { type: String, defult: "" },
    iconUrl: { type: String, defult: "" }
  },
  setup(props) {
    const resultHeaderStyle = computed(() => {
      const style = []
      //   青背景
      if (props.headerStyle == "titleOnlyUnderlineBgColorBlue") {
        style.push("h-10 rounded-t-lg py-1.5 px-2.5 md:px-5 bg-cardTitle")
      }

      if (props.headerStyle == "titleOnlyUnderlineBgColorGray") {
        style.push("searchResult_header_bg_gray")
      }
      if (props.headerStyle == "titleOnlyUnderlineGrayLine") {
        style.push("searchResult_header_grayline")
      }
      return style
    })

    return {
      resultHeaderStyle
    }
  }
}
</script>
<style scoped>
</style>
