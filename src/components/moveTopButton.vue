<template>
    <button
        class="
            absolute
            h-15
            w-15
            bottom-5
            right-5
            bg-toTop
            text-white
            rounded-full
            md:right-30
        "
        @click="toTop"
    >
        ▲
    </button>
</template>

<script>
export default {
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
