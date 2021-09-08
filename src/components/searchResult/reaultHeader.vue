<template>
    <label class="flex flex-row flex-auto justify-between" :class="headerStyle">
        <div class="justify-center h-full">
            <!-- 検索結果ヘッダータイトル -->
            <a :class="titleStyle" v-if="title != ''" :href="titleURL">{{
                title
            }}</a>

            <a
                :class="subTitleStyle"
                v-if="subTitle != ''"
                :href="subTitleURL"
                >{{ subTitle }}</a
            >
        </div>
        <div class="flex flex-col justify-end h-full" v-if="rightStyle != ''">
            <div class="" v-if="rightStyle == 'count'">
                <span
                    class="searchResultAllCountLable"
                    v-if="rightStyle == 'count'"
                >
                    {{ countTitle }}
                </span>
            </div>
            <div v-if="rightStyle == 'icon'">
                <a :href="iconUrl" target="_blank">
                    <external-link></external-link>
                </a>
            </div>
        </div>
    </label>
</template>

<script>
import externalLink from '../../components/svgImage/extarnalLink.vue'
export default {
  components: { externalLink },
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
  couputed: {},
  watch: {},
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
</style>
