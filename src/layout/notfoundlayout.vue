<template>
    <div>
        <logo></logo>
        <div>
            <div class="notoSansJpAndTwentyFourBold text-center mt-7.5">
                404 Page Not Found
            </div>
            <div class="md:flex">
                <div class="notoSansJpAndFourteenRegular text-center mt-3">
                    申し訳ございません。
                </div>
                <div
                    class="
                        notoSansJpAndFourteenRegular
                        text-center
                        mt-1
                        md:mt-3
                    "
                >
                    お探しのページは見つかりませんでした。
                </div>
            </div>
            <div class="text-center mt-6 md:mt-10">
                <input
                    class="
                        bg-personOrganizationButton
                        hover:opacity-50
                        active:bg-personInformationButton active:opacity-100
                        h-10
                        rounded-sm
                        notoSansJpAndEighteenBold
                        text-white
                        w-86.25
                    "
                    type="button"
                    @click="backClick"
                    value="←トップページへ戻る"
                />
            </div>
        </div>
    </div>
</template>

<script>
import logo from '../components/login/logo.vue'

export default {
    components: {
        logo,
    },
    props: {},
    data() {
        return {
            isMenuOpen: true,
        }
    },
    couputed: {},
    watch: {},
    methods: {
        backClick: function () {
            if (
                localStorage.getItem('token') != '' ||
                localStorage.getItem('token') != undefined
            ) {
                this.$router.push('/myhome')
            } else {
                this.$router.push('/')
            }
        },
    },
    created() {},
}
</script>
<style scoped></style>
