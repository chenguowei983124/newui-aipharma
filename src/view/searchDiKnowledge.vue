<template>
    <div>
        <!-- トップ情報 -->
        <my-all-header :form="$constant.formList.DI"></my-all-header>
        <!-- 中間内容情報 -->
        <search-di-knowledge-layout></search-di-knowledge-layout>
        <!-- ボトム情報 -->
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
