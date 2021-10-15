<template>
    <div class="flex justify-around">
        <logo-image class="w-50 h-24"></logo-image>
    </div>
</template>

<script>
import logoImage from '../common/svgImage/logoSvg.vue'
export default {
  components: { logoImage },
  props: {},
  data() {
    return {
      logoImage,
    }
  },
  couputed: {},
  watch: {},
  methods: {},
  created() { },
}
</script>
<style scoped></style>
