<template>
    <div>
        <my-all-header :form="$constant.formList.DI"></my-all-header>
        <!-- 内容 -->
        <search-di-knowledge-layout></search-di-knowledge-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import searchDiKnowledgeLayout from '../layout/searchDiKnowledgeLayout.vue'
import goodMessageBox from '../components/common/messageBox/goodMessageBox.vue'
import commentMessageBox from '../components/common/messageBox/commentMessageBox.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        searchDiKnowledgeLayout,
        goodMessageBox,
        commentMessageBox,
        homeBottomTemplate,
    },
}
</script>
