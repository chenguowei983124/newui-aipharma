<template>
    <div>
        <login-main></login-main>
    </div>
</template>

<script>
import loginMain from "../components/login/loginMain.vue"

export default {
  components: {
    loginMain
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

