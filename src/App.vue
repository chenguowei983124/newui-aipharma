<template>
    <div class="flex">
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
        <div
            class="
                relative
                flex-shrink
                md:block
                md:overflow-x-auto
                w-full
                md:w-270
                bg-white
            "
        >
            <router-view />
            <move-top-button class=""></move-top-button>
        </div>
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
    </div>
</template>
<script>
import moveTopButton from './components/moveTopButton.vue'

export default {
  components: { moveTopButton },
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
}</script>
