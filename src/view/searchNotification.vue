<template>
    <div class="relative h-full">
        <my-all-header :form="$constant.formList.EDI"></my-all-header>
        <!-- 内容 -->
        <search-notification-layout></search-notification-layout>
        <home-bottom-template
            class="w-full absolute inset-x-0 bottom-0"
        ></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import searchNotificationLayout from '../layout/searchNotificationLayout.vue'
import goodMessageBox from '../components/common/messageBox/goodMessageBox.vue'
import commentMessageBox from '../components/common/messageBox/commentMessageBox.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        searchNotificationLayout,
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
