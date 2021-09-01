<template>
    <div>
        <my-header></my-header>
        <search-result-all-layout></search-result-all-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myHeader from '../components/myHeader.vue'
import searchResultAllLayout from '../layout/searchResultAllLayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: { myHeader, searchResultAllLayout, homeBottomTemplate },

}

</script>
