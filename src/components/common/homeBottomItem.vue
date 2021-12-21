<template>
    <div class="">
        <div
            class="
                relative
                w-full
                flex
                justify-center
                text-xs
                font-Lato
                text-grayline
            "
        >
            <termsUse
                :title="title"
                :data="data"
                v-if="disp"
                @closeMessageBox="closeMessageBox"
            ></termsUse>
            <div class="flex justify-between w-34">
                <div class="underline cursor-pointer" @click="termsUseClick">
                    利用約款
                </div>
                <div class="border-r border-grayline"></div>
                <div class="underline cursor-pointer" @click="disclaimerClick">
                    免責事項
                </div>
            </div>
        </div>
        <p class="text-center text-xs font-Lato text-grayline">
            Powered by KIMURA information technology
        </p>
    </div>
</template>

<script>
import termsUse from '../common/messageBox/TermsUse.vue'
export default {
  components: {
    termsUse,
  },
  data() {
    return {
      title: 'AI-PHARMA利用約款',
      data: '',
      termsUsedata: '',
      disclaimerdata: '',
      disp: false,
    }
  },
  methods: {
    readFile(filePath) {
      // 建立一个新的xhr对象
      let xhr = null
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
      } else {
        // eslint-disable-next-line
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }
      const okStatus = document.location.protocol === 'file' ? 0 : 200
      xhr.open('GET', filePath, false)
      xhr.overrideMimeType('text/html;charset=utf-8')
      xhr.send(null)
      return xhr.status === okStatus ? xhr.responseText : null
    },
    termsUseClick() {
      this.termsUsedata = this.readFile(
        '/text/TermsUse.txt'
      )
      this.disp = true
      this.data = this.termsUsedata
      this.title = 'AI-PHARMA利用約款'
    },
    disclaimerClick() {
      this.disclaimerdata = this.readFile(
        '/text/disclaimer.text'
      )
      this.disp = true
      this.data = this.disclaimerdata
      this.title = 'AI-PHARMA免責事項'
    },
    closeMessageBox() {
      this.disp = false
    },
  },
  mounted() {


  },
}
</script>

<style></style>
