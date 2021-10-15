<template>
    <div>
        <!-- トップ情報 -->
        <my-top-header></my-top-header>
        <!-- 中間内容情報 -->
        <home-main></home-main>
        <!-- ボトム情報 -->
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myTopHeader from '../components/common/header/myTopHeader.vue'
import homeMain from '../layout/homelayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
  components: { myTopHeader, homeMain, homeBottomTemplate },
  props: {},
  couputed: {},
  watch: {},
  methods: {},
  created() { },
}
</script>
<style scoped></style>
