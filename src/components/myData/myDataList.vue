<template>
    <div>
        <result-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="所属内DI記録"
            titleStyle="notoSansJpAndEighteenBold text-center text-white"
        >
            あｄふぁｓｄ
        </result-tag>
    </div>
</template>

<script>
import resultTag from '../common/searchResult/resultTag.vue'
export default {
  components: {
    resultTag
  },
  props: {},
  data() {
    return {
    }
  },

  watch: {
    $route: function () {
      if (this.$route.path != '/myData/list') {
        return
      }

      this.$store.dispatch('clearPreavoidsInfo', {})
      this.execSearch()
    },
  },

  methods: {
    async selectedDownload(id) {
      this.$store.dispatch('setDownload', true)
      let data = this.$store.getters.getSearchPreavoidsInfo
      let checkList = []
      for (let index = 0; index < data.searchData.length; index++) {
        if (data.searchData[index].check == true) {
          checkList.push(data.searchData[index].id)
        }
      }
      if (checkList.length == 0) {
        this.$swal.fire(
          '',
          '一件もチェックされてないため、ダウンロードできません。'
        )
        return
      }
      let params = {
        id: checkList.join(','),
      }
      await this.$serve.downloadPreavoidData(params).then((res) => {
        const filename = '123.xls'

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
    async allDownload(id) {
      this.$store.dispatch('setDownload', true)
      let params = {
        updated_from: new Date(
          this.$store.getters.getDateValueFrom
        ).toLocaleDateString(),
        updated_to: new Date(
          this.$store.getters.getDateValueTo
        ).toLocaleDateString(),
        comment: this.$store.getters.getSearchValue,
        style: this.$store.getters.getStyles,
        facility: this.$store.getters.getFacilityID,
      }
      await this.$serve.downloadPreavoidData(params).then((res) => {
        const filename = '123.xls'

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
    execSearch() {
      this.$store.dispatch('setPearchPreavoidsInfo', {
        searchData: [],
        dataCount: 0,
      })

      this.$serve.getPreavoidDataByParams(this.$route.query).then((response) => {
        let searchData = []
        for (let i = 0; i < response.data.searchData.length; i++) {
          searchData[i] = {
            index: i,
            check: false,
            ageLevel: response.data.searchData[i].ageLevel,
            comment: response.data.searchData[i].comment,
            createdAt: response.data.searchData[i].createdAt,
            facilityIdentificationNumber:
              response.data.searchData[i]
                .facilityIdentificationNumber,
            facilityScaleName:
              response.data.searchData[i].facilityScaleName,
            genderId: response.data.searchData[i].genderId,
            id: response.data.searchData[i].id,
            name: response.data.searchData[i].name,
            patientDivisionId:
              response.data.searchData[i].patientDivisionId,
            prefectureId: response.data.searchData[i].prefectureId,
            prefectureName:
              response.data.searchData[i].prefectureName,
            primaryDisease:
              response.data.searchData[i].primaryDisease,
            reportingAt: response.data.searchData[i].reportingAt,
            sideEffectName:
              response.data.searchData[i].sideEffectName,
            style: response.data.searchData[i].style,
            suspectedDrug:
              response.data.searchData[i].suspectedDrug,
            title: response.data.searchData[i].title,
            updatedAt: response.data.searchData[i].updatedAt,
            userGroupId: response.data.searchData[i].userGroupId,
            userGroupName:
              response.data.searchData[i].userGroupName,
          }
        }
        let dispResult = {
          dataCount: response.data.dataCount,
          searchData: searchData,
        }
        console.log("data", dispResult)
        this.$store.dispatch('setPearchPreavoidsInfo', dispResult)
      })
    },

  },
  mounted() {

  },
}
</script>
<style scoped></style>
