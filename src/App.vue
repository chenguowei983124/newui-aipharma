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
            <button
                class="
                    absolute
                    h-15
                    w-15
                    bottom-5
                    right-1.25
                    bg-toTop
                    text-white
                    rounded-full
                    md:right-12.5
                    md:bottom-7.5
                "
                @click="toTop"
            >
                ▲
            </button>
        </div>
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
    </div>
</template>
<script>export default {
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
