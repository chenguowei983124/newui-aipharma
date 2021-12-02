<template>
    <div class="relative h-screen">
        <my-all-header :form="$constant.formList.BBS"></my-all-header>
        <!-- 内容 -->
        <search-bulletin-board-layout></search-bulletin-board-layout>
        <home-bottom-template
            class="absolute bottom-0 w-full"
        ></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import searchBulletinBoardLayout from '../layout/searchBulletinBoardLayout.vue'
import goodMessageBox from '../components/common/messageBox/goodMessageBox.vue'
import commentMessageBox from '../components/common/messageBox/commentMessageBox.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        searchBulletinBoardLayout,
        goodMessageBox,
        commentMessageBox,
        homeBottomTemplate,
    },
    created() {
    if (localStorage.getItem('store')) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem('store'))
        )
      )
    }
  },
}
</script>
