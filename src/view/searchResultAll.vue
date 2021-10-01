<template>
    <div>
        <my-all-header :form="$constant.formList.ALL"></my-all-header>
        <!-- 内容 -->
        <search-result-all-layout></search-result-all-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/myAllHeader.vue';
import searchResultAllLayout from '../layout/searchResultAllLayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: {
    myAllHeader,
    searchResultAllLayout,
    homeBottomTemplate
  },

}

</script>
