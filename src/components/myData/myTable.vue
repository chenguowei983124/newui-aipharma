<template>
    <div class="overflow-x-auto">
        <table class="w-245 min-w-full border-l border-t border-blueline">
            <thead>
                <tr class="flex bg-cardViewCount text-xs font-medium">
                    <th
                        class="
                            border-r border-b border-blueline
                            w-5.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            :checked="checkAll"
                            @change="changeAll"
                        />
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        様式
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        報告日
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        <div class="flex flex-col">
                            <div>システム</div>
                            <div>登録日</div>
                        </div>
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        被疑薬
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        副作用名
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        年齢
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        性別
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-17
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        外来 / 入院
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        治療中の疾患
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-54
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        内容
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-30
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        投稿者
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        管理
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="flex text-xs font-NotoSansJp"
                    v-for="row in displayList"
                    :key="row"
                >
                    <td
                        class="
                            border-r border-b border-blueline
                            w-5.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        <!-- {{ row.facilityIdentificationNumber }} -->
                        <div v-if="row.facilityIdentificationNumber == 1">
                            <input
                                type="checkbox"
                                name="checkbox2"
                                value="aaa"
                                disabled
                            />
                        </div>
                        <div v-else>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                :checked="row.check"
                                @change="onChangeCheckd(row.index)"
                            />
                        </div>
                    </td>
                    <!-- 様式 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.style }}
                    </td>
                    <!-- 報告日 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.reportingAt }}
                    </td>
                    <!-- 報告日システム登録日 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.createdAt }}
                    </td>
                    <!-- 被疑薬 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.suspectedDrug }}
                    </td>
                    <!-- 副作用名 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.sideEffectName }}
                    </td>
                    <!-- 年齢 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.ageLevel }}
                    </td>
                    <!-- 性別 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.genderId ? '男' : '女' }}
                    </td>
                    <!-- 外来/ 入院 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-17
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.patientDivisionId == '1' ? '外来' : '入院' }}
                    </td>
                    <!-- 治療中の疾患 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.primaryDisease }}
                    </td>
                    <!-- 内容 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-54
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ row.comment }}
                    </td>
                    <!-- 投稿者 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-30
                            flex-none flex
                            justify-start
                            pl-2
                            pb-2
                        "
                    >
                        <div>
                            <div class="flex flex-col text-xs">
                                {{ row.name }}
                                <!-- <div
                                    class="
                                        mt-1
                                        h-5
                                        bg-blue-500
                                        text-white
                                        w-16
                                        flex
                                        justify-center
                                        items-center
                                    "
                                >
                                    自施設
                                </div> -->
                                <result-detail-row-item
                                    itemType="1"
                                    :typeKB="
                                        groupKB(
                                            row.facilityIdentificationNumber
                                        )
                                    "
                                ></result-detail-row-item>
                            </div>

                            <!-- <div
                                
                            >
                                
                            </div> -->
                        </div>
                    </td>
                    <!-- 管理 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            justify-center
                        "
                    >
                        <div>
                            <div
                                v-if="row.facilityIdentificationNumber == 1"
                            ></div>
                            <div v-else class="flex flex-col space-y-1.25">
                                <button
                                    class="
                                        h-7.5
                                        w-7.5
                                        bg-downloadIcon
                                        rounded
                                        mx-1
                                        mt-1
                                    "
                                >
                                    <download-icon-svg
                                        class="h-5 w-5 mx-1.25"
                                        @click="rowDownload(row.id)"
                                    ></download-icon-svg>
                                </button>
                                <button
                                    class="
                                        h-7.5
                                        w-7.5
                                        bg-searchBunnon
                                        rounded
                                        mx-1
                                    "
                                >
                                    <edit-icon-svg
                                        class="h-5 w-5 mx-1.25"
                                        @click="rowEdit(row.id)"
                                    ></edit-icon-svg>
                                </button>
                                <button
                                    class="
                                        h-7.5
                                        w-7.5
                                        bg-personInformationButton
                                        rounded
                                        mx-1
                                    "
                                >
                                    <trash-icon-svg
                                        class="h-5 w-5 mx-1.25"
                                        @click="rowDelete(row.id)"
                                    ></trash-icon-svg>
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div></div>
    </div>
</template>

<script>
import downloadIconSvg from '../svgImage/downloadIconSvg.vue'
import EditIconSvg from '../svgImage/editIconSvg.vue'
import resultDetailRowItem from '../searchResult/resultDetailRowItem.vue'
import TrashIconSvg from '../svgImage/trashIconSvg.vue'

export default {
  components: {
    downloadIconSvg,
    TrashIconSvg,
    EditIconSvg,
    resultDetailRowItem,
    alert,
  },
  props: {
    detailList: Array,
  },
  data() {
    return {
      dispList: this.detailList,
      checkAll: false,
    }
  },
  computed: {
    displayList: {
      get: function () {
        return this.detailList
      },
    },
  },
  mounted() {
    this.checkAll = false
  },
  methods: {
    groupKB(kb) {
      if (kb == '0') {
        return 'ownFacility'
      } else if (kb == '1') {
        return 'otherFacility'
      } else if (kb == '2') {
        return 'group'
      }
    },
    // 行チェック
    onChangeCheckd(index) {
      let data = this.$store.getters.getSearchPreavoidsInfo
      data.searchData[index].check = !data.searchData[index].check
      this.$store.dispatch('setPearchPreavoidsInfo', data)
    },
    // チェックALL
    changeAll() {
      console.log(this.checkAll)
      this.checkAll = !this.checkAll
      for (let index = 0; index < this.dispList.length; index++) {
        this.dispList[index].check = this.checkAll
      }

      let data = this.$store.getters.getSearchPreavoidsInfo
      for (let index = 0; index < data.searchData.length; index++) {
        data.searchData[index].check = this.checkAll
      }

      this.$store.dispatch('setPearchPreavoidsInfo', data)
    },
    async rowDownload(id) {
      this.$store.dispatch('setDownload', true)

      let params = {
        id: id,
      }
      await this.$serve.downloadPreavoidData(params).then((res) => {
        const filename = '123.xls'
        // const filename = this.getFileNameFromContentDisposition(
        //     res.headers['content-disposition']
        // )
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
    rowEdit(id) { },
    rowDelete(id) {
      this.$swal
        .fire({
          text: '本当に削除してよろしいですか？',
          icon: '',
          showCancelButton: true,
          cancelButtonText: 'キャンセル',
          confirmButtonText: '削除',
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log('削除')
            let params = {
              id: id,
            }
            this.$serve.deletePreavoidData(params)
            this.$swal.fire({
              text: '削除されました。',
              icon: '',
              showCancelButton: false,
              cancelButtonText: 'キャンセル',
              confirmButtonText: 'OK',
            })
            // Swal.fire('', '削除されました.', 'success')
            let getTimestamp = new Date().getTime()
            params = {
              search: this.$store.getters.getSearchWord,
              dateFrom: this.$store.getters.getDateValueFrom,
              dateTo: this.$store.getters.getDateValueTo,
              styles: this.$store.getters.getStyles,
              facility_flag: this.$store.getters.getFacilityID,
              displayed: this.$store.getters.getMaxCount,
              sort: this.$store.getters.getSort,
              timestamp: getTimestamp,
            }
            this.$router.push({
              path: '/searchPreavoids',
              query: params,
            })
          }
        })
    },
  },
}
</script>
