<template>
    <div class="flex min-h-screen">
        <loading></loading>
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
        <div
            class="
                relative
                flex-shrink
                md:block md:overflow-x-auto
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
<style type="text/css">
/* .sweet_container {
    background-color: rgba(0, 0, 100, 0.5);
}
.sweet_containerImportant {
    background-color: rgba(0, 0, 100, 0.5) !important;
} */
.sweet_titleImportant {
    color: black !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    font-family: Noto Sans JP !important;
    padding-top: 45px !important;
    padding-bottom: 10px !important;
}

.sweet_confirmbutton {
    font-weight: 700 !important;
    background: #f15a24 !important;
    width: 90px !important;
    height: 28px !important;
    font-size: 12px !important;
    font-family: Noto Sans JP !important;
    margin: 2px !important;
}
.sweet_confirmbuttonImportant {
    font-weight: 700 !important;
    background: #f15a24 !important;
    width: 90px !important;
    height: 28px !important;
    font-size: 14px !important;
    font-family: Noto Sans JP !important;
    margin-top: 5px !important;
    padding-top: 4px !important;
    margin-bottom: 15px !important;
}

.sweet_cancelbuttonImportant {
    font-weight: 700 !important;
    background: #e6e6e6 !important;
    width: 90px !important;
    height: 28px !important;
    font-size: 14px !important;
    font-family: Noto Sans JP !important;
    margin-top: 5px !important;
    padding-top: 4px !important;
    padding-left: 1px !important;
    padding-right: 1px !important;
    color: #000 !important;
    margin-bottom: 15px !important;
}
</style>
