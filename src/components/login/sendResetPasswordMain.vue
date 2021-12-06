<template>
    <div>
        <logo class="-mt-20"></logo>
        <div class="flex justify-around w-full h-full mt-4">
            <div>
                <div class="notoSansJpAndTwentyTwoBold text-center">
                    パスワード再設定
                </div>
                <div class="mt-5">
                    <input
                        v-model="password"
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
                        type="password"
                        placeholder="新しいパスワード"
                    />
                </div>
                <div class="mt-2.5">
                    <input
                        v-model="passwordConfirmation"
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
                        type="password"
                        placeholder="新しいパスワード（確認用）"
                        @keydown.enter="sendNewPassword"
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
                            disabled:cursor-not-allowed
                        "
                        @click="sendNewPassword"
                        :class="buttonDisabledStyle"
                        :disabled="isDisabled"
                        value="再設定する"
                    />
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
            password: '',
            passwordConfirmation: '',
        }
    },
    components: {
        logo,
    },
    computed: {
        isDisabled() {
            if (this.password == '' || this.passwordConfirmation == '') {
                return true
            } else {
                return false
            }
        },
        buttonDisabledStyle() {
            if (this.password == '' || this.passwordConfirmation == '') {
                return 'opacity-50'
            } else {
                return ''
            }
        },
    },
    methods: {
        sendNewPassword: function () {
            console.log(this.password)
            console.log(this.passwordConfirmation)
            if (this.password != this.passwordConfirmation) {
                this.$toast.error(
                    '入力したパスワードが一致しないため、再入力してください。',
                    {
                        position: 'top-right',
                    }
                )
            } else {
                let params = {
                    reset_password_token:
                        this.$route.query.reset_password_token,
                    password: this.password,
                    password_confirmation: this.passwordConfirmation,
                }
                this.$serve.postResetPassword(params).then((res) => {
                    this.$toast.success(res.data.message, {
                        position: 'top-right',
                    })
                    this.$router.push('/')
                })
            }
        },
    },
    props: {},
}
</script>
<style></style>
