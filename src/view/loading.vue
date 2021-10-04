<template>
    <!-- v-show="$store.getters.getIsLoadingShow" -->
    <div
        class="fixed top-0 bottom-0 left-0 right-0 bg-lock z-99 cursor-wait"
        v-show="false"
    >
        Loading
    </div>
</template>

<script>

export default {
  components: {},
  props: {

  },
  data() {
    return {
      show: true
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
