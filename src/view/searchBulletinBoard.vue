<template>
    <div>
        <my-all-header :form="$constant.formList.OWN"></my-all-header>
        <!-- 内容 -->
        <search-organization-layout></search-organization-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/myAllHeader.vue';
import searchOrganizationLayout from '../layout/searchOrganizationLayout.vue'
import goodMessageBox from '../components/messageBox/goodMessageBox.vue'
import commentMessageBox from '../components/messageBox/commentMessageBox.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: {
    myAllHeader,
    searchOrganizationLayout,
    goodMessageBox,
    commentMessageBox,
    homeBottomTemplate
  },

}

</script>
