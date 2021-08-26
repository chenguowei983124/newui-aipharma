<template>
    <div class="" v-if="headerStyle == '1'">
        <input type="radio" name="tab" id="a1" class="hidden" checked />
        <input type="radio" name="tab" id="a2" class="hidden" />
        <div class="flex space-x-2 nav">
            <label
                for="a1"
                class="
                    w-1/2
                    h-10
                    pt-2
                    md:justify-start
                    rounded-t-lg
                    text-center
                    md:text-left
                    md:underline
                    md:px-5
                    md:w-full
                    bg-cardViewCount
                    text-googleTitle
                    md:bg-blueline
                    md:text-white
                    font-NotoSansJp font-bold
                    text-lg
                "
            >
                <span> {{ title1 }}</span></label
            >
            <label
                for="a2"
                class="w-1/2 md:hidden searchResultActiveTagTitleStyle"
            >
                <span> {{ title2 }}</span></label
            >
        </div>
        <slot></slot>
    </div>
    <div class="" :class="[headerStyle == '2' ? 'hidden md:block' : 'block']">
        <label
            class="
                flex
                h-10
                rounded-t-lg
                text-center
                py-2
                px-5
                underline
                w-auto
                bg-cardTitle
                text-white
                font-NotoSansJp font-bold
                text-lg
            "
            v-if="headerStyle == '2'"
        >
            <span> {{ title1 }}</span></label
        >
        <label class="searchResult_header_grayline" v-if="headerStyle == '3'">
            <span> {{ title1 }}</span>
            <div
                class="
                    text-googleTitle
                    font-NotoSansJp font-normal
                    text-sm
                    underline
                "
                v-if="urlLink != ''"
            >
                予約はこちら▹
            </div></label
        >
        <label
            class="searchResult_header_bg_gray searchResult_header_font_lato_16"
            v-if="headerStyle == '4'"
        >
            <span> {{ title1 }}</span>
            <a href="https://www.pmda.go.jp/" target="_blank"
                ><svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path></svg
            ></a>
        </label>
        <label
            class="searchResult_header_bg_gray searchResult_header_font_noto_16"
            v-if="headerStyle == '5'"
        >
            <span> {{ title1 }}</span>
        </label>
        <slot></slot>
    </div>
</template>

<script>
import resultDetailRow from './resultDetailRow.vue'
import resultHeader from './reaultHeader.vue'

export default {
  components: { resultDetailRow, resultHeader },
  props: { headerStyle: String, urlLink: String, imgLink: String, title1: String, title2: String },
  data() {
    return {
    };
  }

}
</script>
<style scoped>
</style>
