<template>
    <div>
        <logo></logo>
        <div>
            <div class="notoSansJpAndTwentyFourBold text-center mt-7.5">
                404 Page Not Found
            </div>
            <div class="notoSansJpAndFourteenRegular text-center mt-5">
                申し訳ございません。お探しのページは見つかりませんでした。
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
      isMenuOpen: true
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

