<template>
    <div>
        <my-all-header :form="$constant.formList.PVD"></my-all-header>
        <!-- 内容 -->
        <search-preavoids-layout></search-preavoids-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import searchPreavoidsLayout from '../layout/searchPreavoidsLayout.vue'
import goodMessageBox from '../components/common/messageBox/goodMessageBox.vue'
import commentMessageBox from '../components/common/messageBox/commentMessageBox.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        searchPreavoidsLayout,
        goodMessageBox,
        commentMessageBox,
        homeBottomTemplate,
    },
}
</script>
