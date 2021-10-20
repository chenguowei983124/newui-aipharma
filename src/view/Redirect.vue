<template>
  <div id="redirect">
    <h1>Routing Test Page</h1>
    <p>
      {{msg}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Redirect',
  data () {
    return {
      msg: 'Hello World!',
    }
  },
  created () {
    let code = this.$route.query.code
    if ( code != null ) {
      this.$router.push({
        name: 'myHome',
        params: { 
          code: code 
        }
      })
    } else {
      this.$router.push('/myhome')
    }
    // this.msg = code
  }
}
</script>

<style>
</style>
