<template>
    <div>
        <my-all-header></my-all-header>
        <!-- 内容 -->
        <search-organization-layout></search-organization-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/myAllHeader.vue';
import dataManagerDropdown from '../components/dropdown/dataManagerDropdown.vue';
import searchOrganizationLayout from '../layout/searchOrganizationLayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: {
    myAllHeader,
    dataManagerDropdown,
    searchOrganizationLayout,
    homeBottomTemplate
  }

}

</script>
