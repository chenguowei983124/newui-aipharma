<template>
    <div class="container" v-if="headerStyle == '1'">
        <!-- <result-header></result-header> -->
        <input type="radio" name="tab" id="a1" class="hidden" checked />
        <input type="radio" name="tab" id="a2" class="hidden" />
        <div class="flex space-x-2 nav">
            <label
                for="a1"
                class="
                    w-1/2
                    md:justify-start
                    rounded-t-lg
                    text-center
                    md:text-left
                    md:underline
                    md:px-5
                    py-2
                    md:w-full
                    bg-cardViewCount
                    text-googleTitle
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
    <div class="container">
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
            v-if="headerStyle != '1'"
        >
            <span> {{ title1 }}</span></label
        >
        <slot></slot>
    </div>
</template>

<script>
import resultDetailRow from './resultDetailRow.vue'
import resultHeader from './reaultHeader.vue'

export default {
  components: { resultDetailRow, resultHeader },
  props: { headerStyle: String, title1: String, title2: String },
  data() {
    return {
    };
  }

}
</script>
<style scoped>
</style>
