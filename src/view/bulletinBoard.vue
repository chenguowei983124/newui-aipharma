<template>
    <div>
        <!-- トップ情報 -->
        <my-all-header></my-all-header>
        <!-- 中間内容情報 -->
        <div>掲示板画面</div>
        <!-- <search-result-all-layout></search-result-all-layout> -->
        <!-- ボトム情報 -->
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
  components: {
    myAllHeader,
    homeBottomTemplate,
  },
}
</script>
