<template>
    <div>
        <logo></logo>
        <div class="flex justify-around w-full h-full mt-4">
            <div>
                <div class="notoSansJpAndTwentyTwoBold text-center">
                    ログイン
                </div>

                <div class="mt-5">
                    <input
                        v-model="loginId"
                        class="
                            block
                            h-10
                            w-86.25
                            notoSansJpAndTwelveRegular
                            flex-grow
                            rounded-sm
                            pl-4
                            placeholder-gray-500
                            inputLineCss
                            focus:placeholder-opacity-0
                            focus:outline-none
                            focus:ring-1
                            focus:border-grayline
                            focus:border-transparent
                        "
                        @keydown="loginKeydown"
                        type="text"
                        placeholder="メールアドレスorユーザーID"
                    />
                </div>
                <div class="mt-2.5">
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
                            focus:outline-none
                            focus:ring-1
                            focus:border-grayline
                            focus:border-transparent
                            inputLineCss
                        "
                        type="password"
                        @keydown="loginKeydown"
                        placeholder="パスワード"
                    />
                </div>
                <!-- ログインを記憶する -->
                <div class="mt-3">
                    <label class="inline-flex items-center justify-end">
                        <input
                            v-model="isRemember"
                            type="checkbox"
                            class="
                                form-checkbox
                                w-3
                                h-3
                                text-white
                                ring-1 ring-grayline
                            "
                            checked
                        />
                        <span class="ml-1 notoSansJpAndTwelveRegular"
                            >ログインを記憶する</span
                        >
                    </label>
                </div>

                <input
                    type="submit"
                    class="
                        h-10
                        rounded-sm
                        notoSansJpAndEighteenBlack
                        text-white
                        w-86.25
                        mt-3
                        orangeButtonColors
                    "
                    @click="loginClick"
                    value="ログイン"
                />

                <div class="flex mt-5 justify-center">
                    <div
                        class="
                            w-4
                            h-4
                            block
                            rounded-full
                            notoSansJpAndTenMedium
                            border-2 border-blueline
                            text-xs text-blueline text-center
                            p2-1
                        "
                    >
                        ?
                    </div>
                    <router-link
                        class="
                            notoSansJpAndTwelveRegular
                            text-blueline
                            underline
                            ml-1
                        "
                        to="/sendResetPasswordMail"
                    >
                        パスワードを忘れた場合
                    </router-link>
                </div>

                <div class="mt-15">
                    <input
                        type="submit"
                        class="
                            blueButtonColors
                            h-10
                            rounded-sm
                            notoSansJpAndEighteenMedium
                            text-white
                            w-86.25
                        "
                        @click="signUp"
                        value="新規登録はこちら"
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
            loginId: '',
            password: '',
            isRemember: false,
            showToast: false,
            message: '',
        }
    },
    components: {
        logo,
    },
    methods: {
        pathJoin(pathArr) {
            return pathArr
                .map(function (path) {
                    if (path[0] === '/') {
                        path = path.slice(1)
                    }
                    if (path[path.length - 1] === '/') {
                        path = path.slice(0, path.length - 1)
                    }
                    return path
                })
                .join('/')
        },
        AuthOIDC() {
            const AIPHARMA_URL =
                'https://kit-furukawa-test.auth.ap-northeast-1.amazoncognito.com/'
            const RETURN_TO = 'https://ai-pharma-dev.local/r.html'
            const OIDC_CLIENT_ID = '4tsjtgump87o2q23thk0bu793o'
            const AUTH_PATH = '/oauth2/authorize'
            const OIDC_SCOPE = ['openid']

            const queryStringData = {
                response_type: 'code',
                client_id: OIDC_CLIENT_ID,
                redirect_uri: RETURN_TO,
                scope: OIDC_SCOPE.join(' '),
            }
            const queryString = new URLSearchParams(queryStringData).toString()
            const url = `${this.pathJoin([
                AIPHARMA_URL,
                AUTH_PATH,
            ])}?${queryString}`

            window.open(url, '_self')
        },
        loginClick: function () {
            if (this.loginId == '' || this.password == '') {
                this.message =
                    'ログインに失敗しました。ユーザーIDまたはパスワードが間違っています。'
                this.$toast.error(this.message, { position: 'top-right' })
            } else {
                let params = {
                    loginId: this.loginId,
                    password: this.password,
                }
                this.execLogin(params)
            }
        },
        loginKeydown(e) {
            if (e.key === 'Enter') {
                if (this.loginId == '' || this.password == '') {
                    this.message =
                        'ログインに失敗しました。ユーザーIDまたはパスワードが間違っています。'
                    this.$toast.error(this.message, { position: 'top-right' })
                } else {
                    let params = {
                        loginId: this.loginId,
                        password: this.password,
                    }
                    this.execLogin(params)
                }
            }
        },
        execLogin(params) {
            this.$serve.postLogin(params)
            const self = this

            if (self.isRemember === true) {
                // Cookie設定
                //  テスト時、1分に設定
                // self.setCookie(this.loginId, this.password, 1/24/60)
                self.setCookie(this.loginId, this.password, 7) // 7日に設定
            } else {
                self.clearCookie()
            }
            if (
                !!import.meta.env.VITE_APP_IS_OIDC_AUTH &&
                import.meta.env.VITE_APP_IS_OIDC_AUTH == 'true'
            ) {
                this.AuthOIDC()
                // console.log('env log1',typeof import.meta.env.VITE_APP_IS_OIDC_AUTH)
            } else {
                this.$router.push('/myhome')
                localStorage.setItem('token', '123132')
                // console.log('env log2',import.meta.env.VITE_APP_PREAVOID_API_URL)
            }
        },
        setCookie(loginId, password, exdays) {
            // console.log('setCookie')
            var exdate = new Date() // システム日付
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 格納期間設定

            window.document.cookie =
                'loginId' +
                '=' +
                loginId +
                ';path=/;expires=' +
                exdate.toGMTString()
            window.document.cookie =
                'userPwd' +
                '=' +
                password +
                ';path=/;expires=' +
                exdate.toGMTString()
            window.document.cookie =
                'isRemember' +
                '=' +
                this.isRemember +
                ';path=/;expires=' +
                exdate.toGMTString()
        },
        // cookieにユーザー情報があるかを確認、存在する場合、取得、なければ、なにもしない
        getCookie: function () {
            //   console.log(document.cookie)
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; ') //「；」で分割

                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('=') // 「＝」で分割

                    // 保存した情報を取得
                    if (arr2[0] === 'loginId') {
                        this.loginId = arr2[1] // 変数に設定
                    } else if (arr2[0] === 'userPwd') {
                        this.password = arr2[1] // 変数に設定
                    } else if (arr2[0] === 'isRemember') {
                        this.isRemember = Boolean(arr2[1])
                    }
                }
            }
        },
        // 清除cookie
        clearCookie: function () {
            this.setCookie('', '', -1) // クリア　かつ　保存時間を「-1」に設定
        },
    },
    props: {},
    couputed: {},
    watch: {
        // isRemember(val) {
        //     val ? this.setCookie() : this.clearCookie()
        // },
    },
    mounted() {
        this.getCookie()
        if (localStorage.getItem('token')) {
            let params = {
                loginId: this.loginId,
                password: this.password,
            }
            this.execLogin(params)
        } else {
        }
    },
}
</script>
<style></style>
