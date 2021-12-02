<template>
    <div>
        <!-- トップ情報 -->
        <my-all-header :form="$constant.formList.PVD"></my-all-header>
        <!-- 中間内容情報 -->
        <search-preavoids-layout></search-preavoids-layout>
        <!-- ボトム情報 -->
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import searchPreavoidsLayout from '../layout/searchPreavoidsLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
  components: {
    myAllHeader,
    searchPreavoidsLayout,
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
            // sessionStorage.removeItem('store')
        }
    },
}
</script>
