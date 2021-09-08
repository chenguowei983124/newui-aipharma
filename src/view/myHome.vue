<template>
    <div>
        <my-top-header></my-top-header>
        <home-main></home-main>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myTopHeader from '../components/myTopHeader.vue'
import homeMain from '../layout/homelayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: { myTopHeader, homeMain, homeBottomTemplate },
  props: {},
  couputed: {},
  watch: {},
  methods: {

  },
  created() {
  }
}
</script>
<style scoped>
</style>
