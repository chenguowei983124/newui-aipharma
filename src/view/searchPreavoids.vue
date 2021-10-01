<template>
    <div>
        <my-all-header></my-all-header>
        <!-- 内容 -->
        <search-preavoids-layout></search-preavoids-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/myAllHeader.vue';
import searchPreavoidsLayout from '../layout/searchPreavoidsLayout.vue'
import goodMessageBox from '../components/messageBox/goodMessageBox.vue'
import commentMessageBox from '../components/messageBox/commentMessageBox.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: {
    myAllHeader,
    searchPreavoidsLayout,
    goodMessageBox,
    commentMessageBox,
    homeBottomTemplate
  },

}

</script>
