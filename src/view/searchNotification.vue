<template>
    <div class="relative">
        <my-all-header :form="$constant.formList.EDI"></my-all-header>
        <!-- 内容 -->
        <search-notification-layout></search-notification-layout>
        <home-bottom-template
            class="absolute bottom-0 w-full"
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
}
</script>
