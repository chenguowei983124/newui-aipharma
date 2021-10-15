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
            <router-view :key="$route.path" />
            <div class="flex justify-end mr-5">
                <move-top-button></move-top-button>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
    </div>
</template>
<script>
import moveTopButton from './components/common/moveTopButton.vue'
import Loading from './view/loading.vue'
export default {
  components: { moveTopButton, Loading },
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      RouterState: true,
    }
  },
  methods: {
    reload() {
      this.RouterState = false
      this.$nextTick(() => {
        this.RouterState = true
      })
    },
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
    },
  },
  created() {
    // ページが読み込まれたときにsessionStorageの状態情報を読み取ります
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem('store'))
        )
      )
      // sessionStorage.removeItem('store')
    }
    // ページが更新されたら、vuexの情報をsessionStorageに保存します
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
    // iosはアンロード前に破棄されました。代わりにpagehideを使用してください
    window.addEventListener('pagehide', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
}
</script>
