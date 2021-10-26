<template>
    <div>
        <logo></logo>
        <div>
            <div class="notoSansJpAndTwentyFourBold text-center mt-7.5">
                {{ $route.params.errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import logo from "../components/login/logo.vue"

export default {
  components: {
    logo
  },
  props: {},
  data() {
    return {
      errorMessage: ""
    };
  },
  watch: {},
  mounted() {
    console.log(this.$route.params)
  },
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
</style>

