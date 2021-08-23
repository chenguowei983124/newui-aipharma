<template>
    <div class="h-full space-y-4">
        <resut-tag
            class="h-52"
            :sites="$store.getters.topNoticeInfo"
            :sites1="$store.getters.topBulletinBoardInfo"
            :from="1"
        ></resut-tag>

        <resut-tag
            class="h-52"
            :sites="$store.getters.topNoticeInfo"
            :sites1="$store.getters.topBulletinBoardInfo"
            :from="2"
        ></resut-tag>
        <!-- お知らせ -->
        <!-- <search-template class="block md:hidden"></search-template> -->
        <!-- 掲示板 -->
        <bulletin-board-template
            class="hidden md:block"
        ></bulletin-board-template>
        <!-- 学会情報 -->
        <societyInfoTemplate></societyInfoTemplate>
        <!-- PMDA -->
        <pharmaceuticals-item></pharmaceuticals-item>
        <div class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            <!-- 医薬品更新情報 -->
            <pharmaceuticalsInfoTemplate></pharmaceuticalsInfoTemplate>
            <!-- Topics -->
            <topicsTemplate></topicsTemplate>
        </div>
        <otherInfoTemplate></otherInfoTemplate>
    </div>
</template>

<script>
import resutTag from '../seachResult/resultTag.vue'
// import searchTemplatel from './personItem.vue'
// import bulletinBoardTemplate from './bulletinBoardItem.vue'
// import societyInfoTemplate from './societyInforItem.vue'
// import PharmaceuticalsItem from './pharmaceuticalsItem.vue'
export default {
  components: {
    resutTag
    // , searchTemplatel
    // , bulletinBoardTemplate
    // , societyInfoTemplate
    // , PharmaceuticalsItem
  },
  props: {},
  data() {
    return {


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
