<template>
    <div class="space-y-2">
        <!-- 1.5行目 -->
        <div
            class="flex flex-row w-full mx-2 md:mx-0 font-bold text-white pt-2"
        >
            <!-- 検索対象 左-->
            <div class="w-20 flex text-sm md:text-base">検索対象</div>
            <!-- 右 -->
            <div class="flex-auto flex pt-0.5 notoSansJpAndFourteenRegular">
                <div class="flex flex-col md:flex-row md:space-x-2">
                    <div class="flex flex-row md:space-x-2">
                        <!-- タイトル -->
                        <div class="w-24 md:w-auto">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox ring-1 text-white"
                                    :checked="
                                        $store.getters.getEdiCheckInfo
                                            .checkTitle
                                    "
                                    @change="oncheckTitleChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >タイトル</span
                                >
                            </label>
                        </div>
                        <!-- 内容 -->
                        <div class="w-24 md:w-auto">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox ring-1 text-white"
                                    :checked="
                                        $store.getters.getEdiCheckInfo
                                            .checkContent
                                    "
                                    @change="onCheckContentChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >内容</span
                                >
                            </label>
                        </div>
                        <!-- コメント -->
                        <div class="w-24 md:w-auto">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox ring-1 text-white"
                                    :checked="
                                        $store.getters.getEdiCheckInfo
                                            .checkComment
                                    "
                                    @change="onCheckCommentChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >コメント</span
                                >
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-row md:space-x-2">
                        <div class="w-24 md:w-auto">
                            <!-- 投稿者 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox ring-1 text-white"
                                    :checked="
                                        $store.getters.getEdiCheckInfo.checkPost
                                    "
                                    @change="onCheckPostChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >投稿者</span
                                >
                            </label>
                        </div>
                        <div class="w-24 md:w-auto">
                            <!-- 最終編集者 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox ring-1 text-white"
                                    :checked="
                                        $store.getters.getEdiCheckInfo
                                            .checkLastEditor
                                    "
                                    @change="onCheckLastEditorChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >最終編集者</span
                                >
                            </label>
                        </div>
                        <div class="w-24 md:w-auto">
                            <!-- 施設名 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox ring-1 text-white"
                                    :checked="
                                        $store.getters.getEdiCheckInfo
                                            .checkFacilityName
                                    "
                                    @change="onCheckFacilityNameChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >施設名</span
                                >
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 二行目 -->
        <div>
            <div class="px-2 md:px-0">
                <Multiselect
                    ref="mult"
                    v-model="tags"
                    mode="tags"
                    placeholder="#タグ"
                    :filterResults="true"
                    :minChars="1"
                    :resolveOnLoad="true"
                    :delay="1000"
                    :searchable="true"
                    :options="
                        async function (query) {
                            return await fetchLanguages(query) // check JS block for implementation
                        }
                    "
                    :classes="$constant.multiselectCss"
                >
                <template v-slot:option="{ option }">
                <div class="w-full">
                    {{ option.label }}
                    <div class="float-right" v-if="option.count !== undefined">{{ option.count }}件</div>
                </div>
                </template>
            </Multiselect>
            </div>
        </div>
        <!-- 三行目、四行目 -->
        <div
            class="space-y-2 bg-backgroundMainSearch mx-2 md:mx-0"
            ref="resetSelect"
            :class="[isDetailClick ? 'block' : 'hidden']"
        >
            <!-- 公開範囲 -->
            <vue-single-select
                ref="scope"
                :name="'field1'"
                :default-value="$store.getters.getScope"
                :placeholder="'-- Choose an option --'"
                :default-input-attribs="{ tabindex: 1 }"
                :default-options="$constant.searchBbsScops"
                @selected="setScopeInfo"
                leftLableTitle="公開範囲"
                buttonStyle="w-9.5 h-7.5 pt-3 bg-searchBar rounded-r right-0 border-b-2 border-bule65B9E3"
                inputStyle="w-full text-left pl-20 notoSansJpAndFourteenRegular border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none "
                iconColor="#32a5dc"
            ></vue-single-select>
        </div>
        <div class="mx-2 md:mx-0 space-y-2">
            <div
                class="flex space-x-2"
                :class="[isDetailClick ? 'block' : 'hidden']"
            >
                <!-- "placement ? 'place-left' : 'place-right'" -->
                <litepie-datepicker
                    ref="datepickerFrom"
                    :asSingle="true"
                    i18n="ja"
                    v-model="dateValueFrom"
                    :autoApply="false"
                    :formatter="{
                        date: 'YYYY.MM.DD',
                        month: 'MMM',
                    }"
                    :leftLableDisp="dateValueFrom != '' ? false : true"
                    leftLableTitle="期間（報告日）"
                ></litepie-datepicker>
                <div class="w-8 text-white text-center mt-1.5 font-black">
                    ―
                </div>
                <litepie-datepicker
                    ref="datepickerTo"
                    :asSingle="true"
                    i18n="ja"
                    v-model="dateValueTo"
                    :autoApply="false"
                    :formatter="{
                        date: 'YYYY.MM.DD',
                        month: 'MMM',
                    }"
                    :leftLableDisp="false"
                ></litepie-datepicker>
                <button></button>
                <input
                    class="
                        w-9.5
                        block
                        bg-searchBar
                        rounded
                        notoSansJpAndTenBold
                        text-blueline
                        flex-none
                        border-b-2 border-bule65B9E3
                    "
                    type="button"
                    @click="dateClear"
                    value="クリア"
                />
            </div>
        </div>
        <!-- 五行目　-->
        <div
            class="
                flex
                space-x-44
                justify-center
                md:justify-end
                mid:justify-end
                bg-backgroundMainSearch
            "
        >
            <div class="flex space-x-2">
                <button
                    class="
                        rounded
                        border-b-2 border-gray-500
                        bg-personDataInfo
                        text-gray-700
                        notoSansJpAndSixteenBold
                        w-43.75
                        md:w-28
                        h-9.5
                        md:h-8
                    "
                    @click="inputClear"
                >
                    条件をクリア
                </button>
                <button
                    class="
                        rounded
                        border-b-2 border-orange-600
                        bg-searchBunnon
                        text-white
                        notoSansJpAndSixteenBold
                        w-43.75
                        md:w-28
                        h-9.5
                        md:h-8
                        flex flex-row
                        justify-center
                        items-center
                    "
                    @click="searchButtonClick"
                >
                    <div class="">検 索</div>
                    <search-svg class="ml-1"></search-svg>
                </button>
            </div>
            <div class="hidden md:block mid:block">
                <div
                    class="
                        flex
                        items-center
                        rounded
                        border-2 border-white
                        text-white text-center
                        notoSansJpAndFourteenRegular
                        w-24
                        h-8
                        pl-3
                        space-x-1
                        cursor-pointer
                    "
                    @click="detailBottunClick"
                >
                    <div>詳細条件</div>
                    <triangle-down-svg
                        :class="[isDetailClick ? 'transform rotate-180' : '']"
                        fill="#ffffff"
                        stroke="#ffffff"
                        class="h-3 w-3"
                    ></triangle-down-svg>
                </div>
            </div>
        </div>
        <div
            class="
                bg-searchResultTitle
                rounded-b-lg
                block
                md:hidden
                mid:hidden
                mt-2
            "
        >
            <div
                class="flex h-8 justify-center items-center cursor-pointer"
                @click="detailBottunClick"
            >
                <triangle-down-svg
                    class="w-4 h-4"
                    :class="[isDetailClick ? 'transform rotate-180' : '']"
                    fill="#ffffff"
                    stroke="#ffffff"
                ></triangle-down-svg>
            </div>
        </div>
    </div>
</template>

<script>
import searchDropdown from './searchDropdown.vue'
import searchSvg from '../svgImage/searchSvg.vue'
import TriangleDownSvg from '../svgImage/triangleDownSvg.vue'
import Multiselect from '@vueform/multiselect'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../dateRange/litepie-datepicker.vue'

export default {
    props: {
        searchButtonClick: {
            type: Function,
            default: () => {},
        },
        message: {
            type: String,
            default: '',
        },
    },
    components: {
        searchDropdown,
        searchSvg,
        TriangleDownSvg,
        Multiselect,
        vueSingleSelect,
        litepieDatepicker,
    },
    computed: {
        dateValueFrom: {
            get: function () {
                return this.$store.getters.getDateValueFrom
            },
            set: function (value) {
                return this.$store.dispatch('setDateValueFrom', value)
            },
        },
        dateValueTo: {
            get: function () {
                return this.$store.getters.getDateValueTo
            },
            set: function (value) {
                return this.$store.dispatch('setDateValueTo', value)
            },
        },
        tags: {
            get: function () {
                return this.$store.getters.getSearchTags
            },
            set: function (newValue) {
                this.$store.dispatch('setSearchTags', newValue)
                this.setInputedTagList()
            },
        },
    },
    data() {
        return {
            tagList: this.$store.getters.bbsDropDownInfo.tags,
            isDetailClick: true,
            bbsTagslist: [],
            selectedDBTagList: [],
        }
    },
    methods: {
        async fetchLanguages(query) {
            let searchTagsList = this.$store.getters.getSearchTagsLable
            let result = {}
            if (query == null || query == '') {
                if (Object.keys(searchTagsList).length !== 0) {
                    for (
                        let i = 0;
                        i < Object.keys(searchTagsList).length;
                        i++
                    ) {
                        let response = await this.$serve.getTagsMaster(
                            '',
                            searchTagsList[i]
                        )
                        result = response.map((item) => {
                            return {
                                value: item.name,
                                label: item.name,
                                count: item.associatedCount,
                            }
                        })
                    }
                    let setList = {}
                    Object.keys(result).forEach(function (key) {
                        if (result[key].label == searchTagsList[0]) {
                            setList = {
                                value: result[key].value,
                                label: result[key].label,
                                count: result[key].count,
                            }
                        }
                    })
                    console.log('setList', setList)
                    let flg = false
                    // 存在チェック
                    for (
                        let index = 0;
                        index < this.$store.getters.getSearchTags.length;
                        index++
                    ) {
                        if (
                            this.$store.getters.getSearchTags[index] ==
                            setList.value
                        ) {
                            flg = true
                        }
                    }
                    // 存在しない場合、入力に設定
                    this.$store.dispatch('setSearchTagsLable', [])
                    if (!flg) {
                        this.$refs.mult.select(setList)
                    }
                    this.bbsTagslist = result
                } else {
                    console.log(
                        'setInputList',
                        this.$store.getters.getBbsTagsList
                    )
                    result = this.$store.getters.getBbsTagsList
                }
            } else {
                await this.$serve.getTagsMaster('', query).then((response) => {
                    console.log(response)
                    result = response.map((item) => {
                        return {
                            value: item.name,
                            label: item.name,
                            count: item.associatedCount,
                        }
                    })
                })
                this.bbsTagslist = result
            }
            console.log('result', result)
            return result
        },
        setInputedTagList() {
            let selectedItem = this.$store.getters.getBbsTagsList
            for (let index = 0; index < this.bbsTagslist.length; index++) {
                const element = this.bbsTagslist[index]
                if (
                    this.bbsTagslist[index].value ==
                    this.$store.getters.getSearchTags[
                        this.$store.getters.getSearchTags.length - 1
                    ]
                ) {
                    let storeExistFlg = false
                    for (let i = 0; i < selectedItem.length; i++) {
                        if (
                            selectedItem[i].value ==
                            this.bbsTagslist[index].value
                        ) {
                            storeExistFlg = true
                        }
                    }
                    if (!storeExistFlg) {
                        selectedItem.push(this.bbsTagslist[index])
                        this.$store.dispatch('setBbsTagsList', selectedItem)
                        localStorage.setItem('store',JSON.stringify(this.$store.state))
                    }
                }
            }
        },
        dateClear: function () {
            this.$refs.datepickerFrom.clearPicker()
            this.$refs.datepickerTo.clearPicker()
        },
        inputClear() {
            this.$refs.datepickerFrom.clearPicker()
            this.$refs.datepickerTo.clearPicker()
            this.$refs.scope.setValue('0')
            let checkInfo = this.$store.getters.getEdiCheckInfo
            checkInfo.checkTitle = true
            checkInfo.checkContent = true
            checkInfo.checkComment = true
            checkInfo.checkPost = true
            checkInfo.checkLastEditor = true
            checkInfo.checkFacilityName = true
            this.$store.dispatch('setEdiCheckInfo', checkInfo)
            this.$store.dispatch('setSearchWord', '')
            this.$store.dispatch('setSearchTags', [])
            this.$emit('clearSearchWordEvent', '')
        },
        setScopeInfo(value) {
            this.$store.dispatch('setScopeInfo', value)
        },
        oncheckTitleChange() {
            let checkInfo = this.$store.getters.getEdiCheckInfo
            checkInfo.checkTitle = !checkInfo.checkTitle
            this.$store.dispatch('setEdiCheckInfo', checkInfo)
        },
        onCheckContentChange() {
            let checkInfo = this.$store.getters.getEdiCheckInfo
            checkInfo.checkContent = !checkInfo.checkContent
            this.$store.dispatch('setEdiCheckInfo', checkInfo)
        },
        onCheckCommentChange() {
            let checkInfo = this.$store.getters.getEdiCheckInfo
            checkInfo.checkComment = !checkInfo.checkComment
            this.$store.dispatch('setEdiCheckInfo', checkInfo)
        },
        onCheckPostChange() {
            let checkInfo = this.$store.getters.getEdiCheckInfo
            checkInfo.checkPost = !checkInfo.checkPost
            this.$store.dispatch('setEdiCheckInfo', checkInfo)
        },
        onCheckLastEditorChange() {
            let checkInfo = this.$store.getters.getEdiCheckInfo
            checkInfo.checkLastEditor = !checkInfo.checkLastEditor
            this.$store.dispatch('setEdiCheckInfo', checkInfo)
        },
        onCheckFacilityNameChange() {
            let checkInfo = this.$store.getters.getEdiCheckInfo
            checkInfo.checkFacilityName = !checkInfo.checkFacilityName
            this.$store.dispatch('setEdiCheckInfo', checkInfo)
        },
        // 詳細条件クリックイベント
        detailBottunClick: function (event) {
            this.isDetailClick = !this.isDetailClick
            this.$emit('isDetailClick', this.isDetailClick)
        },
    },

    updated() {
        this.$nextTick(function () {
            // ビュー全体がレンダリングされた後にのみ実行されるコード
            this.$store.dispatch('setFilterBBS', this.$data.filterBBS)
        })
    },
}
</script>

<style></style>
