<template>
    <div>
        <logo></logo>
    </div>
    <div class="flex flex-row">
        <div class="flex-auto h-16 hidden md:block">
            <search-bar class=""></search-bar>
        </div>

        <div
            class="flex-auto h-16 block md:hidden"
            :class="[
                $store.getters.getIsMenuClick ? 'mt-10' : 'fixed w-full top-16',
            ]"
        >
            <search-bar class=""></search-bar>
        </div>
        <div
            class="block md:hidden"
            :class="{ 'h-24 mt-2': !$store.getters.getIsMenuClick }"
        ></div>
    </div>

    <div class="flex mr-2 mt-2 space-x-4">
        <div class="flex-grow truncate space-y-4">
            <div class="grid grid-cols-1 gap-1 space-y-4">
                <search-result-main
                    class="border-2 ml-2 md:ml-10 flex-grow truncate"
                ></search-result-main>
            </div>
        </div>
        <div class="flex-none w-0 md:mr-24 md:w-max hidden md:block">
            <!-- ユーザーの情報 -->
            <dataManagementTemplate></dataManagementTemplate>
        </div>
    </div>
</template>

<script>
// import resultTag from "../components/common/resultTag.vue"
import logo from '../components/home/logo.vue'
import searchBar from '../components/search/searchBar.vue'
// import bulletinBoardTemplate from '../components/home/bulletinBoardItem.vue'
// import selectTemplate from '../components/home/select/selectAre.vue'
// import societyInfoTemplate from '../components/home/societyInforItem.vue'
// import pharmaceuticalsTemplate from '../components/home/pharmaceuticalsItem.vue'
// import pharmaceuticalsInfoTemplate from '../components/home/pharmaceuticalsInfoItem.vue'
// import topicsTemplate from '../components/home/topicsItem.vue'
// import otherInfoTemplate from '../components/home/otherinfoItem.vue'
// import dataManagementTemplate from '../components/home/dataManagementItem.vue'
// import logo from "../components/home/logo.vue"
// import managementMain from "../components/home/managementMain.vue"
// import searchResultMain from "../components/home/searchResultMain.vue"

export default {
  components: {
    searchBar, logo
  },
  props: {},
  data() {
    return {
      tagInfo: [{ ID: 1, title: "お知らせ" },
      { ID: 2, title: "掲示板" }]
      , isDropdownActive: true,
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
      , isMenuOpen: true
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

