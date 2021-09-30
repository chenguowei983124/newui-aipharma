<template>
    <div class="fixed block bottom-5 z-99">
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
}
</script>
