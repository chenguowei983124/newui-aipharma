<template>
    <div>
        <logo class="-mt-20"></logo>
        <div class="flex justify-around w-full h-full mt-4">
            <div>
                <div class="notoSansJpAndTwentyTwoBold text-center">
                    パスワードを忘れた方
                </div>
                <div class="notoSansJpAndTwelveRegular text-center mt-5">
                    パスワード再設定用のURL をメールにてご連絡します。
                </div>
                <div class="notoSansJpAndTwelveRegular text-center mt-1">
                    メールアドレスを入力してください。
                </div>
                <div class="mt-5">
                    <input
                        v-model="mailAddress"
                        class="
                            block
                            h-10
                            w-86.25
                            notoSansJpAndTwelveRegular
                            flex-grow
                            rounded-sm
                            pl-4
                            placeholder-gray-500
                            focus:placeholder-opacity-0
                            inputLineCss
                            focus:outline-none
                            focus:ring-1
                            focus:border-grayline
                            focus:border-transparent
                        "
                        type="text"
                        placeholder="メールアドレス"
                        @keydown.enter="sendMailClick"
                    />
                </div>
                <div class="mt-2.5">
                    <input
                        type="submit"
                        class="
                            h-10
                            rounded-sm
                            notoSansJpAndEighteenBlack
                            text-white
                            w-86.25
                            orangeButtonColors
                        "
                        @click="sendMailClick"
                        value="送信"
                    />
                </div>
                <div class="flex mt-7.5 justify-center">
                    <router-link
                        class="
                            notoSansJpAndTwelveRegular
                            text-blueline
                            underline
                        "
                        to="/"
                    >
                        ログイン画面へ
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from './logo.vue'
export default {
    data() {
        return {
            mailAddress: '',
        }
    },
    components: {
        logo,
    },
    methods: {
        sendMailClick: function () {
            let params = {
                email: this.mailAddress,
            }
            this.$serve.postResetPasswordMail(params).then((res) => {
                this.$toast.success(res.data.message, {
                    position: 'top-right',
                })
                this.$router.push('/')
            })
        },
    },
    props: {},
}
</script>
<style></style>
