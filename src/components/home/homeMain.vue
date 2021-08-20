<template>
    <div class="flex justify-center">
        <img sty class="h-48" src="../../assets/AI-PHARMA_logo.svg" alt="" />
    </div>
    <div
        class="
            flex
            justify-center
            max-w-full
            h-16
            bg-backgroundMainSearch
            ml-12
            mr-12
            rounded-lg
        "
    >
        <select class="my-4">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
        </select>
        <input class="border-2 w-3/5 my-4 border-red-700" type="text" />

        <button class="border-2 bg-yellow-600 w-20 my-4">兼</button>
    </div>
    <div class="flex mt-4 ml-12 mr-12">
        <div class="w-5/6">
            <searchResult>asdfa</searchResult>
            <searchResult class="mt-4">asdfa</searchResult>
            <searchResult>asdfa</searchResult>
            <searchResult>asdfa</searchResult>
            <searchResult>asdfa</searchResult>
            <searchResult>asdfa</searchResult>
        </div>
        <div class="w-1/6 mr-4 mt-4">
            <personinfo>asdfasdf</personinfo>
        </div>
    </div>
</template>

<script>
import searchResult from '../seachResult/searchResultStyle1.vue'
import personInfo from '../seachResult/personMain.vue'

export default {
  components: { searchResult, personInfo },
  props: {},
  data() {
    return {
      seachValue: "asdfasdfasf"
    };
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

