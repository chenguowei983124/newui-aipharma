<template>
    <div class="flex">
        <loading></loading>
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
            <!-- <keep-alive> -->
            <router-view />
            <!-- </keep-alive> -->
            <div class="flex justify-end mr-5">
                <move-top-button></move-top-button>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
    </div>
</template>
<script>
import moveTopButton from './components/moveTopButton.vue'
import Loading from './view/loading.vue'
export default {
  components: { moveTopButton, Loading },
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
  }, created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
      sessionStorage.removeItem("store")
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {

      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })

    //ios废弃了beforeunload，使用pagehide代替
    window.addEventListener("pagehide", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })

  }
}</script>
