<template>
    <div>
        <logo></logo>
        <div class="flex justify-around w-full h-full mt-4">
            <div>
                <div class="notoSansJpAndTwentyTwoBold text-center">
                    パスワード設定
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
                            border border-grayline border-transparent
                            focus:outline-none
                            focus:border
                            focus:border-grayline
                            focus:border-transparent
                        "
                        type="password"
                        placeholder="パスワード"
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
                            border border-grayline border-transparent
                            focus:outline-none
                            focus:border
                            focus:border-grayline
                            focus:border-transparent
                        "
                        type="password"
                        placeholder="パスワード（確認用）"
                    />
                </div>
                <div class="mt-2.5">
                    <div
                        class="
                            h-7
                            text-center text-white
                            pt-1.5
                            bg-blueline
                            notoSansJpAndTwelveRegular
                        "
                    >
                        利用規約
                    </div>
                    <div
                        class="
                            h-28
                            border-2 border-blueline
                            notoSansJpAndTwelveRegular
                            w-86.25
                            p-1.5
                            scrollbarStyle scrollbarStyle-1
                        "
                    >
                        <div class="w-full border-grayline p-0.5 scrollbar">
                            <div class="">Ai-PHARMA 利用規約</div>
                            <br />
                            <div class="">
                                ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ログインを記憶する -->
                <div class="mt-3 flex justify-center">
                    <label class="inline-flex items-center">
                        <input
                            v-model="isAgree"
                            type="checkbox"
                            class="
                                form-checkbox
                                w-3
                                h-3
                                text-white
                                border border-grayline
                            "
                            checked
                        />
                        <span class="ml-1 notoSansJpAndTwelveRegular pb-0.5"
                            >同意する</span
                        >
                    </label>
                </div>
                <div class="mt-2.5">
                    <input
                        type="button"
                        class="
                            bg-personOrganizationButton
                            rounded-b-sm
                            border-b-2 border-personInformationButton
                            hover:opacity-50
                            active:bg-personInformationButton active:opacity-100
                            h-10
                            rounded-sm
                            notoSansJpAndEighteenBold
                            text-white
                            w-86.25
                            disabled:cursor-not-allowed
                        "
                        :class="buttonDisabledStyle"
                        :disabled="isDisabled"
                        @click="sendNewPassword"
                        value="設定する"
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
      isAgree: false,
    }
  },
  components: {
    logo,
  },
  computed: {
    isDisabled() {
      if (
        this.password == '' ||
        this.passwordConfirmation == '' ||
        this.isAgree == false
      ) {
        return true
      } else {
        return false
      }
    },
    buttonDisabledStyle() {
      if (
        this.password == '' ||
        this.passwordConfirmation == '' ||
        this.isAgree == false
      ) {
        return 'opacity-50'
      } else {
        return ''
      }
    },
  },
  methods: {
    sendNewPassword: function () {
      if (this.password !== this.passwordConfirmation) {
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
        this.$serve.patchSetPassword(params).then((res) => {
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
<style scoped>
.scrollbarStyle {
    overflow: auto;
}
.scrollbar {
    width: 320px;
}
.scrollbarStyle-1::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
}
.scrollbarStyle-1::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background-color: #999999;
    border: 2px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
.scrollbarStyle-1::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: #e6e6e6;
}
</style>
