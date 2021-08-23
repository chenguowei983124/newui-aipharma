<template>
    <div>
        <my-header></my-header>
        <div class="md:ml-12.5 md:mr-12.5">
            <home-main></home-main>
        </div>
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
