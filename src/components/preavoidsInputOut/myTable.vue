<template>
  <div class="overflow-x-auto">
    <table class="w-180 min-w-full border-l border-t border-blueline">
      <thead>
        <tr
          class="
            flex
            bg-cardViewCount
            text-xs
            font-medium
            h-7.5
            notoSansJpAndTwelveBold
          "
        >
          <th
            class="
              border-r border-b border-blueline
              w-63
              flex-none flex
              items-center
              justify-center
            "
          >
            フォーム
          </th>

          <th
            class="
              border-r border-b border-blueline
              w-39
              flex-none flex
              items-center
              justify-center
              text-white
              bg-backgroundMainSearch
            "
          >
            様式 1
          </th>
          <th
            class="
              border-r border-b border-blueline
              w-39
              flex-none flex
              items-center
              justify-center
              bg-toTop
              text-white
            "
          >
            様式 2
          </th>
          <th
            class="
              border-r border-b border-blueline
              w-39
              flex-none flex
              items-center
              justify-center
              bg-whole
              text-white
            "
          >
            様式 3
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="flex text-xs font-NotoSansJp h-15"
          v-for="(item, index) in detailList"
          :key="index"
        >
          <!-- フォーム -->
          <td
            class="
              border-r border-b border-blueline
              w-63
              flex-none
              justify-center
              pl-2
            "
          >
            <div class="notoSansJpAndFourteenBold">
              {{ item.title }}
            </div>
            <div
              class="notoSansJpAndTwelveRegular"
              v-for="(contents, index) in item.content"
              :key="index"
            >
              {{ contents }}
            </div>
          </td>

          <!-- 様式 1 -->
          <td
            class="
              border-r border-b border-blueline
              w-39
              flex-none flex
              justify-center
            "
          >
            <div class="cursor-pointer" @click="sytle1Click(index)">
              <excel class="mt-4 h-7 w-5.5"></excel>
            </div>
          </td>
          <!--  様式 2 -->
          <td
            class="
              border-r border-b border-blueline
              w-39
              flex-none flex
              justify-center
            "
          >
            <div class="cursor-pointer" @click="sytle2Click(index)">
              <excel class="mt-4 h-7 w-5.5"></excel>
            </div>
          </td>
          <!-- 様式 3 -->
          <td
            class="
              border-r border-b border-blueline
              w-39
              flex-none flex
              justify-center
            "
          >
            <div class="cursor-pointer" @click="sytle3Click(index)">
              <excel class="mt-4 h-7 w-5.5"></excel>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div></div>
  </div>
</template>

<script>
import excel from '../common/svgImage/excel.vue'
export default {
  components: { excel },
  props: {},
  data() {
    return {
      detailList: [
        {
          title: 'インポートフォーム',
          content: ['AI-PHARMAへのインポートフォーム'],
        },
        {
          title: '入力・変換フォーム',
          content: ['プレアボイド入力フォーム'],
        },
        {
          title: '印刷フォーム',
          content: ['インポートフォーム⇒印刷レイアウト'],
        },
        {
          title: '岡山県病薬フォーム',
          content: ['岡山県病薬の独自フォーム'],
        },
        {
          title: '日病薬入力支援フォーム改',
          content: [
            '日病薬への報告、リストの作成、',
            'AI-PHARMAへのインポート用フォーム',
          ],
        },
      ],
    }
  },
  computed: {},
  mounted() { },
  methods: {
    sytle1Click(index) {
      console.log(index)
      this.onExport(index, 1)
    },
    sytle2Click(index) {
      console.log(index)
      this.onExport(index, 2)
    },
    sytle3Click(index) {
      console.log(index)
      this.onExport(index, 3)
    },
    onExport(type, style) {
      this.$store.dispatch('setDownload', true)
      let param = {
        style: style,
      }
      if (type == 0) {
        param.select = 'reportingAt'
        param.updated_from = '19000401'
        param.updated_to = '19000401'
      }
      this.$serve.downloadPreavoidStyle(param, type).then((res) => {
        // const filename = this.getFileNameFromContentDisposition(
        //     res.headers['content-disposition']
        // )

        let filename = 'sytle.xls'
        if (type == 0) {
          filename = 'プレアボイド様式' + style + 'テンプレート.xlsx'
        }
        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(res.data, filename)
        } else {
          const blob = new Blob([res.data], {
            type: 'application/octet-stream',
          })
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = filename
          link.click()
        }
      })
    },
    getFileNameFromContentDisposition(disposition) {
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
      const matches = filenameRegex.exec(disposition)
      if (matches != null && matches[1]) {
        const fileName = matches[1].replace(/['"]/g, '')
        return decodeURI(fileName)
      } else {
        return null
      }
    },
  },
}
</script>
