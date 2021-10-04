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
                            NotoSansJp-normal
                            text-xs
                            flex-grow
                            rounded-sm
                            pl-4
                            placeholder-gray-500
                            focus:placeholder-opacity-0
                            ring-1
                            border-transparent
                            focus:outline-none
                            focus:ring-1 focus:ring-326EB5Lins
                            focus:border-transparent
                        "
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
                            NotoSansJp-normal
                            text-xs
                            flex-grow
                            rounded-sm
                            pl-4
                            placeholder-gray-500
                            focus:placeholder-opacity-0
                            ring-1
                            border-transparent
                            focus:outline-none
                            focus:ring-1 focus:ring-326EB5Lins
                            focus:border-transparent
                        "
                        type="password"
                        placeholder="パスワード"
                    />
                </div>
                <!-- ログインを記憶する -->
                <div class="mt-3">
                    <label class="inline-flex items-center justify-end">
                        <input
                            v-model="isRemember"
                            type="checkbox"
                            class="form-checkbox w-3 h-3 text-white ring-1"
                            checked
                        />
                        <span class="ml-0.5 notoSansJpAndTwelveRegular"
                            >ログインを記憶する</span
                        >
                    </label>
                </div>

                <!-- ログイン -->
                <div class="flex justify-center mt-5">
                    <button
                        class="
                            bg-personOrganizationButton
                            hover:opacity-50
                            active:bg-personInformationButton
                            active:opacity-100
                            h-10
                            rounded-sm
                            notoSansJpAndEighteenBold
                            text-white
                            w-86.25
                        "
                        @click="loginClick"
                    >
                        ログイン
                    </button>
                </div>

                <div class="flex mt-5">
                    <div
                        class="
                            w-4
                            h-4
                            block
                            rounded-full
                            border-2 border-blueline
                            text-xs text-blueline text-center
                            p2-1
                        "
                    >
                        ?
                    </div>
                    <div
                        class="
                            notoSansJpAndTwelveRegular
                            text-blueline
                            underline
                        "
                    >
                        パスワードを忘れた場合
                    </div>
                </div>

                <div class="mt-15">
                    <div
                        class="
                            notoSansJpAndTwelveRegular
                            text-blueline
                            underline
                            text-center
                        "
                    >
                        新規参画のお申込み
                    </div>
                </div>
                <div>
                    <div class="notoSansJpAndTenNormal mt-2 text-center">
                        AI-PHARMAへの新規参画申込みは施設単位でのお申込みとなります。
                    </div>
                    <div class="notoSansJpAndTenNormal mt-2 text-center">
                        個人単位でのお申込みは行っておりませんのでご了承ください。
                    </div>
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
      loginId: "",
      password: "",
      isRemember: false
    }
  },
  components: {
    logo
  },
  methods: {
    loginClick: function () {
      const self = this;
      // 第4步，若复选框被勾选了，就调用设置cookie方法，把当前的用户名和密码和过期时间存到cookie中
      if (self.isRemember === true) {
        // 传入账号名，密码，和保存天数（过期时间）3个参数
        //  1/24/60 测试可用一分钟测试，这样看着会比较明显
        self.setCookie(this.loginId, this.password, 1 / 24 / 60);
        // self.setCookie(this.loginId, this.password, 7); // 这样就是7天过期时间
      }
      // 若没被勾选就及时清空Cookie，因为这个cookie有可能是上一次的未过期的cookie，所以要及时清除掉
      else {
        self.clearCookie();
      }
      // 当然，无论用户是否勾选了cookie，路由该跳转还是要跳转的
      this.$router.push('/myhome');
      localStorage.setItem('token', "123132");
      //   this.$router.push('/myhome')

    }, setCookie(loginId, password, exdays) {
      var exdate = new Date(); // 获取当前登录的时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); // 将当前登录的时间加上七天，就是cookie过期的时间，也就是保存的天数
      // 字符串拼接cookie,因为cookie存储的形式是name=value的形式
      window.document.cookie = "loginId" + "=" + loginId + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "userPwd" + "=" + password + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "isRemember" + "=" + this.isRemember + ";path=/;expires=" + exdate.toGMTString();
    },
    // 第2步，若cookie中有用户名和密码的话，就通过两次切割取出来存到form表单中以供使用，若是没有就没有
    getCookie: function () {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //因为是数组所以要切割。打印看一下就知道了
        // console.log(arr,"切割");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); // 再次切割
          // console.log(arr2,"切割2");
          // // 判断查找相对应的值
          if (arr2[0] === "loginId") {
            this.loginId = arr2[1]; // 转存一份保存用户名和密码
          } else if (arr2[0] === "userPwd") {
            this.password = arr2[1];//可解密
          } else if (arr2[0] === "isRemember") {
            this.isRemember = Boolean(arr2[1]);
          }
        }
      }
    },
    // 清除cookie
    clearCookie: function () {
      this.setCookie("", "", -1); // 清空并设置天数为负1天
    },
  },
  props: {},
  couputed: {},
  watch: {
    isRemember(val) {
      val ? this.setCookie() : this.clearCookie();
    }
  },
  mounted() {
    this.getCookie();
  },
}
</script>
<style scoped>
</style>
