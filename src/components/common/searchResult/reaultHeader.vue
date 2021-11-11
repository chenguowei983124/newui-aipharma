<template>
    <label class="flex flex-row flex-auto justify-between" :class="headerStyle">
        <div class="justify-center flex flex-row items-center h-full">
            <!-- 検索結果ヘッダータイトル -->

            <a
                :class="titleStyle"
                v-if="title != '' && titleURL != ''"
                :href="'#' + titleURL"
                >{{ title }}</a
            >
            <!-- タイトル　クリックできません -->
            <a :class="titleStyle" v-if="title != '' && titleURL == ''">{{
                title
            }}</a>

            <a
                :class="subTitleStyle"
                v-if="subTitle != ''"
                :href="subTitleURL"
                class="flex flex-row items-center"
            >
                <div>{{ subTitle }}</div>
                <triangle-svg
                    v-if="subTitle != '' && subTitle == '予約はこちら'"
                    class="transform rotate-90 cls-1"
                ></triangle-svg>
            </a>
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
                    <external-link
                        class="hover:opacity-50 active:opacity-50"
                    ></external-link>
                </a>
            </div>
        </div>
    </label>
</template>

<script>
import externalLink from '../svgImage/extarnalLink.vue'
import triangleSvg from '../svgImage/triangleSvg.vue'
export default {
  components: { externalLink, triangleSvg },
  props: {
    headerStyle: { type: String, defult: '' },
    title: { type: String, defult: '' },
    titleStyle: { type: String, defult: '' },
    titleURL: { type: String, defult: '' },
    subTitle: { type: String, defult: '' },
    subTitleStyle: { type: String, defult: '' },
    subTitleURL: { type: String, defult: '' },
    rightStyle: { type: String, defult: '' },
    countTitle: { type: String, defult: '' },
    countStyle: { type: String, defult: '' },
    iconType: { type: String, defult: '' },
    iconUrl: { type: String, defult: '' },
  },
  watch: {},
  methods: {},
  created() { },
}
</script>
<style scoped>
.cls-1 {
    fill: rgb(58, 175, 226);
    height: 8px;
    width: 12px;
}
</style>
