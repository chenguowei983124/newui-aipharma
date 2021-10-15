<template>
    <div>
        <!-- トップ情報 -->
        <my-all-header :form="$constant.formList.OWN"></my-all-header>
        <!-- 中間内容情報 -->
        <search-organization-layout></search-organization-layout>
        <!-- ボトム情報 -->
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import searchOrganizationLayout from '../layout/searchOrganizationLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
  components: {
    myAllHeader,
    searchOrganizationLayout,
    homeBottomTemplate,
  },
}
</script>
