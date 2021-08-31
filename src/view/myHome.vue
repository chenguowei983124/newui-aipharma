<template>
    <div>
        <my-header></my-header>
        <home-main></home-main>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myHeader from '../components/myHeader.vue'
import homeMain from '../layout/homelayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: { myHeader, homeMain, homeBottomTemplate },
  props: {},
  data() {
    return {
    };
  },
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
