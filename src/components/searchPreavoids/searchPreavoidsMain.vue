<template>
    <div v-if="$store.getters.getSearchPreavoidsInfo.dataCount != 0">
        <div class="flex flex-row space-x-2 mt-2 notoSansJpAndFourteenMedium">
            検索条件：ロキソニン　/　2021.09.10 - 2021.09.16
            <!-- <div
            class=""
            v-for="(searchWords, index) in $store.getters
                .preavoidsSearchInfo.searchWords"
            :key="index"
        >
            {{ searchWords }}
        </div> -->
        </div>
        <div class="notoSansJpAndFourteenMedium mt-2">
            該当：{{ $store.getters.getSearchPreavoidsInfo.dataCount }}件
        </div>
        <div class="mt-2">
            <div class="flex flex-wrap-reverse md:justify-between">
                <div class="flex space-x-2 mt-2 md:mt-0">
                    <div
                        class="
                            flex-none
                            rounded
                            border-2 border-downloadIcon border-b-4
                            flex
                            justify-center
                        "
                        @click="selectedDownload"
                    >
                        <label
                            class="inline-flex items-center justify-end mx-1"
                        >
                            <download-batch-icon-svg
                                class="h-3 w-3"
                            ></download-batch-icon-svg>
                            <!-- <div
                            class="rounded h-3 w-3 border-2 border-downloadIcon"
                        >
                            <s-check-svg></s-check-svg>
                        </div> -->

                            <span
                                class="
                                    ml-0.5
                                    text-mxs
                                    font-NotoSansJp
                                    text-downloadIcon
                                    cursor-pointer
                                "
                                >選択データダウンロード</span
                            >
                        </label>
                    </div>

                    <button
                        class="
                            flex-none
                            rounded
                            border-2 border-blueline border-b-4
                            px-1
                            text-mxs
                            font-NotoSansJp
                            text-blueline
                        "
                        @click="allDownload"
                    >
                        検索結果一覧ダウンロード
                    </button>
                </div>
                <div class="flex space-x-2">
                    <!-- ソート順 -->
                    <vue-single-select
                        class="w-56 cursor-pointer"
                        :name="'field1'"
                        :default-value="preavoidsDateSort"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.preavoidsDateSort"
                        @selected="setPreavoidsDateSortValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    ></vue-single-select>
                    <!-- 表示件数 -->
                    <vue-single-select
                        class="w-32 cursor-pointer"
                        :name="'field2'"
                        :default-value="organizationCountSort"
                        :placeholder="'-- Choose an option --'"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.organizationCountSort"
                        @selected="getSelectDispNumber"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
            </div>
        </div>

        <div class="mt-2">
            <my-table :detailList="dispDetailInfo"></my-table>
        </div>
        <!-- :click-handler="clickCallback" -->
        <pagination
            :page-count="getPageCount"
            :page-range="3"
            :margin-pages="1"
            :value="Number($store.getters.getPage)"
            @input="getSelectPage"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            class="flex justify-center space-x-1 mt-2.5"
        ></pagination>

        <div
            class="
                flex
                justify-center
                mt-2
                text-dropdownListItem
                font-NotoSansJp
                text-xs
            "
        >
            {{ dispDetailRange }}件 表示
        </div>
    </div>
</template>

<script>
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import downloadBatchIconSvg from '../common/svgImage/downloadBatchIconSvg.vue'
import resutTag from '../common/searchResult/resultTag.vue'
import xIconSvg from '../common/svgImage/xIconSvg.vue'
import sCheckSvg from '../common/svgImage/sCheckSvg.vue'
import Pagination from '../common/pagination/pagiation.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import GoodMessageBox from '../common/messageBox/goodMessageBox.vue'
import myTable from '../common/table/myTable.vue'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// import { ref, reactive, toRefs, onBeforeMount,// 在组件挂载之前执行的函数 onMounted, onBeforeUpdate,// 在组件修改之前执行的函数 onUpdated, onBeforeUnmount,// 在组件卸载之前执行的函数 onUnmounted } from "vue";
export default {
    components: {
        TriangleDownSvg,
        downloadBatchIconSvg,
        resutTag,
        xIconSvg,
        sCheckSvg,
        Pagination,
        vueSingleSelect,
        GoodMessageBox,
        myTable,
    },
    props: {},
    data() {
        return {
            preavoidsDateSort: 0,
            organizationCountSort: 0,
            goodMessageBox: false,
            selectValue: '',
            pageCount: 20,
            selectPage: 1,
            // selectDispNumber: 0,
        }
    },
    unmounted() {
        this.initStore()
    },
    watch: {
        $route: function () {
            console.log('preavoidwatch1')
            if (this.$route.path != '/searchPreavoids') {
                return
            }
            console.log('preavoidwatch')
            if (JSON.stringify(this.$route.query) == '{}') {
                this.initStore()
                this.$store.dispatch('clearPreavoidsInfo', {})
            }
            if (JSON.stringify(this.$route.query) !== '{}') {
                this.resetSearchBar()
                this.execSearch()
            }
        },
    },
    computed: {
        // 最大取得件数取得
        getPageCount() {
            // 選択したアイテムの数字を取得
            if (this.organizationCountSort == '0') {
                this.pageCount = 20
            } else if (this.organizationCountSort == '1') {
                this.pageCount = 50
            } else if (this.organizationCountSort == '2') {
                this.pageCount = 100
            }

            //
            this.$store.dispatch('setMaxCount', this.pageCount)

            // ページ数を取得
            return Math.ceil(
                this.$store.getters.getSearchPreavoidsInfo.searchData.length /
                    this.pageCount
            )
        },
        dispDetailInfo: function () {
            document.documentElement.scrollTop = 0
            let dispDetail = []
            let maxLoopCount = 0
            // 1ページに表示した明細件数を取得
            if (
                this.$store.getters.getSearchPreavoidsInfo.searchData.length >
                this.$store.getters.getPage * this.pageCount
            ) {
                maxLoopCount = this.pageCount
            } else {
                maxLoopCount =
                    this.$store.getters.getSearchPreavoidsInfo.searchData
                        .length -
                    (this.$store.getters.getPage - 1) * this.pageCount
            }
            // console.log(maxLoopCount)
            // 検索結果から明細を抽出
            for (let i = 0; i < maxLoopCount; i++) {
                dispDetail[i] =
                    this.$store.getters.getSearchPreavoidsInfo.searchData[
                        (this.$store.getters.getPage - 1) * this.pageCount + i
                    ]
            }
            // console.log('dispDetail', dispDetail)
            return dispDetail
        },
        // 明細部に表示明細のFROM-TO
        dispDetailRange: function () {
            let start = 1
            let end = ''
            console.log('this.selectPage ', this.selectPage)
            console.log('this.pageCount ', this.pageCount)

            if (this.$store.getters.getPage > 1) {
                start = (this.$store.getters.getPage - 1) * this.pageCount + 1
            }
            if (
                this.$store.getters.getSearchPreavoidsInfo.searchData !=
                undefined
            ) {
                end =
                    start +
                    this.$store.getters.getSearchPreavoidsInfo.searchData
                        .length -
                    1
            }

            // if (
            //     this.$store.getters.getSearchPreavoidsInfo.searchData.length ==
            //     1
            // ) {
            //     return start.toString()
            // } else {
            //     if (
            //         this.$store.getters.getSearchPreavoidsInfo.searchData
            //             .length == 0
            //     ) {
            //         return '0'
            //     } else {
            //         return start.toString() + '-' + end.toString()
            //     }
            // }
            console.log(this.$store.getters.getSearchPreavoidsInfo.searchData)
            if (
                this.$store.getters.getSearchPreavoidsInfo.searchData !=
                undefined
            ) {
                // console.log(start + this.pageCount)

                if (
                    start + this.pageCount >
                    this.$store.getters.getSearchPreavoidsInfo.searchData.length
                ) {
                    end =
                        this.$store.getters.getSearchPreavoidsInfo.searchData
                            .length - 1
                } else {
                    end = start + this.pageCount - 1
                }
            }

            if (
                this.$store.getters.getSearchPreavoidsInfo.searchData.length ==
                1
            ) {
                return start.toString()
            } else {
                return start.toString() + '-' + end.toString()
            }
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

            // QAID取得
            let qaid = ''

            if (this.$route.query.id != undefined) {
                qaid = this.$route.query.id
                this.$store.dispatch('setQAID', qaid)
                sessionStorage.setItem(this.$constant.searchParam.PAID, qaid)
            } else if (this.$store.getters.getQAID != '') {
                qaid = this.$store.getters.getQAID
            }

            let result
            // QAID存在チェック
            if (qaid != '') {
                result = this.$serve.getPreavoidDataById({ id: qaid })
            } else if (this.$route.query.sort != undefined) {
                result = this.$serve.getPreavoidDataByParams(this.$route.query)
                console.log('getPreavoidDataByParams', result)
            }

            result.then((response) => {
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
                this.$store.dispatch('setPearchPreavoidsInfo', dispResult)
            })
        },
        // 初期化検索条件
        initStore() {
            this.$store.dispatch('setSearchWord', '')
            this.$store.dispatch('setStyles', 0)
            this.$store.dispatch('setFacilityID', 0)
            this.$store.dispatch('setDateValueFrom', '')
            this.$store.dispatch('setDateValueTo', '')
            this.$store.dispatch('setPage', 1)
            this.$store.dispatch('setSort', 0)
            this.$store.dispatch('setMaxCount', 20)
        },
        // リーセット検索バー
        resetSearchBar: function () {
            this.$store.dispatch('setSearchWord', this.$route.query.search)
            // 対象期間FROM
            this.$store.dispatch('setDateValueFrom', this.$route.query.dateFrom)
            // 対象期間TO
            this.$store.dispatch('setDateValueTo', this.$route.query.dateTo)
            // 様式
            this.$store.dispatch('setStyles', this.$route.query.styles)
            // 施設
            this.$store.dispatch(
                'setFacilityID',
                this.$route.query.facility_flag
            )

            // 1ページ表示に表示件数設定
            this.$store.dispatch('setMaxCount', this.$route.query.displayed)
            this.preavoidsDateSort = this.$route.query.sort

            // this.selectDispNumber = this.$route.query.sort
            if (this.$route.query.displayed == 20) {
                this.organizationCountSort = 0
            } else if (this.$route.query.displayed == 50) {
                this.organizationCountSort = 1
            }
            if (this.$route.query.displayed == 100) {
                this.organizationCountSort = 2
            }
            this.$store.dispatch('setSort', this.$route.query.sort)
            // ページネーション
            this.$store.dispatch('setPage', 1)
        },
        resetRouter() {
            let getTimestamp = new Date().getTime()
            let dispDetailNumber = 20

            if (this.organizationCountSort == 0) {
                dispDetailNumber = 20
            } else if (this.organizationCountSort == 1) {
                dispDetailNumber = 50
            } else if (this.organizationCountSort == 2) {
                dispDetailNumber = 100
            }
            let params = {
                search: this.$store.getters.getSearchWord,
                dateFrom: this.$store.getters.getDateValueFrom,
                dateTo: this.$store.getters.getDateValueTo,
                styles: this.$store.getters.getStyles,
                facility_flag: this.$store.getters.getFacilityID,
                // displayed: this.$store.getters.getMaxCount,
                displayed: dispDetailNumber,
                sort: this.$store.getters.getSort,
                timestamp: getTimestamp,
                // page: this.$store.getters.getPage,
            }
            this.$router.push({
                path: '/searchPreavoids',
                query: params,
            })
        },
        // 改ページのデータ検索
        getSelectPage(value) {
            console.log(value)
            this.$store.dispatch('setPage', value)
            this.selectPage = value
            // this.resetRouter()
        },
        getSelectDispNumber(value) {
            if (this.organizationCountSort != value) {
                this.organizationCountSort = value
                // ページ
                this.$store.dispatch('setPage', 1)
                this.resetRouter()
            }

            // this.organizationCountSort = value
            // // this.$store.dispatch('setMaxCount', value)
            // this.resetRouter()
        },
        // setSelectValue(value) {
        //     this.selectValue = value
        //     this.$store.dispatch('setSort', value)
        //     this.resetRouter()
        // },
        openCommentMessageBox() {
            this.$store.dispatch(
                'setCommentMessageBox',
                !this.$store.getters.getCommentMessageBox
            )
        },
        // ソート順
        setPreavoidsDateSortValue(value) {
            this.preavoidsDateSort = value
            //   console.log(value)
            this.$store.dispatch('setSort', value)
            this.resetRouter()
        },
    },
    mounted() {
        if (JSON.stringify(this.$route.query) == '{}') {
            this.initStore()
            this.$store.dispatch('setPearchPreavoidsInfo', {
                searchData: [],
                dataCount: 0,
            })
        }

        if (JSON.stringify(this.$route.query) !== '{}') {
            console.log('ksjihdfjksmd')
            this.resetSearchBar()
            this.execSearch()
        }
    },
}
</script>
<style scoped></style>
