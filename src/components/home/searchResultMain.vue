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

      sites: [{ id: 0, group: '1', looked: '0', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: '0', notificationType: '1', viewCount: '12345' },
      { id: 1, group: '2', looked: '0', date: '2021.01.01', title: '○○学会の開催について◯◯◯◯◯◯◯', browseRequired: '0', notificationType: '2', viewCount: '12345' },
      { id: 2, group: '1', looked: '0', date: '2021.01.01', title: '○○の提出締切について◯◯◯◯◯◯◯◯', browseRequired: '1', notificationType: '3', viewCount: '54321' },
      { id: 3, group: '3', looked: '1', date: '2021.01.01', title: '○○店舗出店のお知らせです。', browseRequired: '1', notificationType: '1', viewCount: '12345' },
      { id: 4, group: '1', looked: '1', date: '2021.01.01', title: '採用薬に△△が追加されました。', browseRequired: '0', notificationType: '1', viewCount: '12345' }
      ],
      sites1: [{ id: 0, group: '4', looked: '0', date: '2021.05.25', title: '○○の簡易懸濁について◯◯◯◯◯◯◯◯◯◯', browseRequired: '0', notificationType: '2', viewCount: '12345' },
      { id: 1, group: '3', looked: '0', date: '2021.05.23', title: '○○と△△の副作用は◯◯◯◯◯◯◯◯◯◯◯', browseRequired: '0', notificationType: '3', viewCount: '12345' },
      { id: 2, group: '1', looked: '0', date: '2021.05.23', title: '○○の提出締切について◯◯◯◯◯◯◯◯', browseRequired: '0', notificationType: '1', viewCount: '54321' },
      { id: 3, group: '3', looked: '0', date: '2021.05.23', title: 'AI-PHARMA アップデート情報◯◯◯◯◯◯◯', browseRequired: '0', notificationType: '4', viewCount: '12345' },
      { id: 4, group: '1', looked: '1', date: '2021.05.20', title: '○○の簡易懸濁について◯◯◯◯◯◯◯◯◯◯', browseRequired: '0', notificationType: '5', viewCount: '12345' }
      ]
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
