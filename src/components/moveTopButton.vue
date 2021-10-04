<template>
    <div v-show="isDisp" class="fixed block bottom-5 z-99">
        <button
            class="
                h-15
                w-15
                bg-toTop
                text-white
                rounded-full
                hover:opacity-50
                active:opacity-50
                flex
                justify-center
                items-center
            "
            @click="toTop"
        >
            <!-- ▲ -->
            <triangle-svg class=""></triangle-svg>
        </button>
    </div>
</template>

<script>
import TriangleSvg from './svgImage/triangleSvg.vue'
export default {
  components: { TriangleSvg },
  emits: ['toTop'],
  data() {
    return {

    }

  },

  methods: {
    toTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6)
      function frame() {
        if (0 > currentScroll) {
          clearInterval(int)
        } else {
          currentScroll = currentScroll - 12
          document.documentElement.scrollTop = currentScroll
        }
      }
    }
  },
  computed: {
    isDisp: function () {
      if (this.$router.currentRoute.value.name != "login" && this.$router.currentRoute.value.name != "error" && this.$router.currentRoute.value.name) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
