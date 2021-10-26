<template>
    <div class="flex flex-row space-x-2 notoSansJpAndFourteenMedium">
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
    <!-- $store.getters.preavoidsSearchInfo.allCount -->
    <div class="notoSansJpAndFourteenMedium">
        該当：{{ $store.getters.getSearchPreavoidsInfo.dataCount }}件
    </div>
    <div class="">
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
                >
                    <label class="inline-flex items-center justify-end mx-1">
                        <div
                            class="rounded h-3 w-3 border-2 border-downloadIcon"
                        >
                            <s-check-svg></s-check-svg>
                        </div>

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
                >
                    検索結果一覧ダウンロード
                </button>
            </div>
            <div class="flex space-x-2">
                <!-- ソート順 -->
                <vue-single-select
                    class="w-56"
                    :name="'field1'"
                    :default-value="0"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{ tabindex: 1 }"
                    :default-options="$constant.organizationDateSort"
                    @selected="setSelectValue"
                    :leftLableDisp="false"
                    buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                    inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-1 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                ></vue-single-select>
                <!-- 表示件数 -->
                <vue-single-select
                    class="w-32"
                    :name="'field2'"
                    :default-value="0"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{ tabindex: 1 }"
                    :default-options="$constant.organizationCountSort"
                    @selected="getSelectDispNumber"
                    :leftLableDisp="false"
                    buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                    inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-1 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                ></vue-single-select>
            </div>
        </div>
    </div>

    <div class="mt-2">
        <my-table :detailList="dispDetailInfo"></my-table>
    </div>
     <pagination
        :page-count="getPageCount"
        :page-range="5"
        :margin-pages="1"
        :click-handler="clickCallback"
        @input="getSelectPage"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        page-class="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
        activeClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular bg-blueline text-white"
        prevClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
        nextClass="inline-block p-1 align-middle notoSansJpAndFourteenRegular h-8 w-8 text-center border-2 bg-white"
        class="flex justify-center space-x-1"
    ></pagination>

    <div class="flex justify-center">{{ dispDetailRange }}</div>
</template>

<script>
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import resutTag from '../common/searchResult/resultTag.vue'
import xIconSvg from '../common/svgImage/xIconSvg.vue'
import sCheckSvg from '../common/svgImage/sCheckSvg.vue'
import Pagination from '../common/pagination/pagiation.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import GoodMessageBox from '../common/messageBox/goodMessageBox.vue'
import myTable from '../common/table/myTable.vue'

export default {
    components: {
        TriangleDownSvg,
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
            goodMessageBox: false,
            selectValue: '',
            pageCount: 20,
            selectPage: 1,
            selectDispNumber: 0,
        }
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
            if (this.selectDispNumber == '0') {
                this.pageCount = 20
            } else if (this.selectDispNumber == '1') {
                this.pageCount = 50
            } else if (this.selectDispNumber == '2') {
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
                this.selectPage * this.pageCount
            ) {
                maxLoopCount = this.pageCount
            } else {
                maxLoopCount =
                    this.$store.getters.getSearchPreavoidsInfo.searchData
                        .length -
                    (this.selectPage - 1) * this.pageCount
            }
            console.log(maxLoopCount)
            // 検索結果から明細を抽出
            for (let i = 0; i < maxLoopCount; i++) {
                dispDetail[i] =
                    this.$store.getters.getSearchPreavoidsInfo.searchData[
                        (this.selectPage - 1) * this.pageCount + i
                    ]
            }
            console.log('dispDetail', dispDetail)
            return dispDetail
        },
        // 明細部に表示明細のFROM-TO
        dispDetailRange: function () {
            let start = 1
            let end = ''
            if (this.selectPage > 1) {
                start = (this.selectPage - 1) * this.pageCount + 1
            }

            console.log(this.$store.getters.getSearchPreavoidsInfo.searchData)
            if (
                this.$store.getters.getSearchPreavoidsInfo.searchData !=
                undefined
            ) {
                console.log(start + this.pageCount)

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
            } else if (this.$route.query.page != undefined) {
                result = this.$serve.getPreavoidDataByParams(this.$route.query)
            }

            console.log('execseach', result)
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
            this.$store.dispatch('setStyles', -1)
            this.$store.dispatch('setFacilityID', -1)
            this.$store.dispatch('setDateValueFrom', '')
            this.$store.dispatch('setDateValueTo', '')
            this.$store.dispatch('setPage', 1)
            this.$store.dispatch('setSort', 0)
            this.$store.dispatch('setMaxCount', 0)
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

            this.selectDispNumber = this.$route.query.sort
            if (this.$route.query.displayed == 20) {
                this.selectDispNumber = 0
            } else if (this.$route.query.displayed == 50) {
                this.selectDispNumber = 1
            }
            if (this.$route.query.displayed == 100) {
                this.selectDispNumber = 2
            }
            this.$store.dispatch('setSort', this.$route.query.sort)
            // ページネーション
            this.$store.dispatch('setPage', this.$route.query.page)
        },
        // 改ページのデータ検索
        getSelectPage(value) {
            this.selectPage = value
        },
        getSelectDispNumber(value) {
            this.selectDispNumber = value
        },
        clickCallback() {},
        setSelectValue(value) {
            this.selectValue = value
        },
        openCommentMessageBox() {
            this.$store.dispatch(
                'setCommentMessageBox',
                !this.$store.getters.getCommentMessageBox
            )
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
            this.execSearch()
        }
    },
}
</script>
<style scoped></style>
