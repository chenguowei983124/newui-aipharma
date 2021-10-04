<template>
    <div class="">
        <div class="flex flex-row h-screen justify-center">
            <div class="flex flex-col justify-between">
                <div></div>
                <login-layout></login-layout>
                <home-bottom-template></home-bottom-template>
            </div>
        </div>
    </div>
</template>

<script>
import loginLayout from '../layout/loginlayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: { loginLayout, homeBottomTemplate },
  props: {},
  couputed: {},
  watch: {},
  methods: {

  },
  created() {
  }
}
</script>
