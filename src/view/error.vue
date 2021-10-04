<template>
    <div class="">
        <div class="flex flex-row h-screen justify-center">
            <div class="flex flex-col justify-between">
                <div></div>
                <error></error>
                <home-bottom-template></home-bottom-template>
            </div>
        </div>
    </div>
</template>

<script>
import error from '../layout/errorlayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: { error, homeBottomTemplate },
  props: {},
  couputed: {},
  watch: {},
  methods: {

  },
  created() {
  }
}
</script>
