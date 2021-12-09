<template>
    <div class="pt-2 rounded-lg md:rounded-none">
        <div class="space-y-2">
            <!-- 1.5行目 -->
            <div
                class="
                    flex flex-row
                    mx-2
                    md:mx-0
                    font-medium
                    text-white
                    font-NotoSansJp
                    pt-2
                "
            >
                <!-- 検索対象 左-->
                <div class="w-20 flex text-sm md:text-base">検索対象</div>
                <!-- 右 -->
                <div class="flex-auto flex pt-0.5">
                    <div class="flex flex-col md:flex-row">
                        <div class="flex flex-row">
                            <!-- Q -->
                            <div class="w-28 md:w-13">
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="$store.getters.getCheckQ"
                                        @change="onCheckQChange"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >Q</span
                                    >
                                </label>
                            </div>
                            <!-- A -->
                            <div class="w-20 md:w-13">
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="$store.getters.getCheckA"
                                        @change="onChangeCheckA"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >A</span
                                    >
                                </label>
                            </div>
                            <!-- コメント -->
                            <div class="w-20 md:w-20">
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="
                                            $store.getters.getCheckComment
                                        "
                                        @change="onChangeCheckComment"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >コメント</span
                                    >
                                </label>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-28 md:w-30">
                                <!-- 添付ファイル名 -->
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="
                                            $store.getters.getCheckAddFileName
                                        "
                                        @change="onChangeCheckAddFileName"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >添付ファイル名</span
                                    >
                                </label>
                            </div>
                            <div class="w-20 md:w-20">
                                <!-- 投稿者 -->
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="
                                            $store.getters.getCheckContributor
                                        "
                                        @change="onChangeCheckContributor"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >投稿者</span
                                    >
                                </label>
                            </div>
                            <div class="w-20 md:w-28">
                                <!-- 最終編集者 -->
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="
                                            $store.getters.getCheckLastEditer
                                        "
                                        @change="onChangeCheckLastEditer"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >最終編集者</span
                                    >
                                </label>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <!-- 施設名（グループ施設用） -->
                            <div class="w-28 md:w-20">
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="
                                            $store.getters.getCheckFacilityName
                                        "
                                        @change="onChangeCheckFacilityName"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >施設名</span
                                    >
                                </label>
                            </div>
                            <div class="w-20 md:w-16">
                                <!-- 備考 -->
                                <label
                                    class="inline-flex items-center justify-end"
                                >
                                    <input
                                        type="checkbox"
                                        class="checkboxCss"
                                        :checked="$store.getters.getCheckNote"
                                        @change="onChangeCheckNote"
                                    />
                                    <span class="ml-1 text-xs md:text-mxss"
                                        >備考</span
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
                    <div class="hidden">{{ dispTagValue }}</div>
                    <Multiselect
                        ref="mult"
                        v-model="tagValue"
                        mode="tags"
                        placeholder="#タグ"
                        :filterResults="true"
                        :minChars="1"
                        :resolveOnLoad="true"
                        :delay="0"
                        :searchable="true"
                        :options="
                            async function (query) {
                                return await fetchLanguages(query) // check JS block for implementation
                            }
                        "
                        :classes="$constant.multiselectCss"
                    >
                        <template
                            v-slot:tag="{ option, handleTagRemove, disabled }"
                        >
                            <div class="multiselect-tag-style">
                                #
                                {{ option.label }}
                                <span
                                    v-if="!disabled"
                                    class="multiselect-tag-remove"
                                    @mousedown.prevent="
                                        handleTagRemove(option, $event)
                                    "
                                >
                                    <span
                                        class="multiselect-tag-remove-icon"
                                    ></span>
                                </span>
                            </div>
                        </template>
                        <template v-slot:option="{ option }">
                            <div class="w-full">
                                # {{ option.label }}
                                <div
                                    class="float-right"
                                    v-if="option.count !== undefined"
                                >
                                    {{ option.count }}件
                                </div>
                            </div>
                        </template>
                    </Multiselect>
                </div>
            </div>
            <!-- 三行目、四行目、五行目 -->
            <div
                class="
                    space-y-2
                    bg-backgroundMainSearch
                    mx-2
                    md:mx-0
                    font-NotoSansJp
                "
                ref="resetSelect"
                :class="[isOrgDetailClick ? 'block' : 'hidden']"
            >
                <!-- 薬の分類 -->
                <vue-single-select
                    ref="medicines"
                    :name="'field1'"
                    :default-value="$store.getters.getMedicineID"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{ tabindex: 1 }"
                    :default-options="$store.getters.getQa_classify_class"
                    @selected="setMedicineID"
                    leftLableTitle="薬の分類"
                    buttonStyle="pullDownButtonColors"
                    inputStyle="w-full text-left pl-20 notoSansJpAndFourteenRegular border-2 h-7.5 border-blueCAE6F4 bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none "
                    iconColor="#32a5dc"
                ></vue-single-select>

                <!-- 質問区分 -->
                <vue-single-select
                    ref="qDistinction"
                    :name="'field2'"
                    :default-value="$store.getters.getQuestionID"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{ tabindex: 1 }"
                    :default-options="$store.getters.qa_classify_subject"
                    @selected="setQuestionID"
                    leftLableTitle="質問区分"
                    buttonStyle="pullDownButtonColors"
                    inputStyle="w-full text-left pl-20  notoSansJpAndFourteenRegular border-2 h-7.5 border-blueCAE6F4 bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    iconColor="#32a5dc"
                ></vue-single-select>

                <!-- 施設 -->
                <vue-single-select
                    ref="facility"
                    :name="'field3'"
                    :default-value="$store.getters.getFacilityID"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{ tabindex: 1 }"
                    :default-options="$constant.qaClassifyFacility"
                    @selected="setFacilityID"
                    leftLableTitle="施設"
                    buttonStyle="pullDownButtonColors"
                    inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-20 border-2 h-7.5 border-blueCAE6F4 bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                    iconColor="#32a5dc"
                ></vue-single-select>
            </div>
            <!-- 六行目　-->
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
                            grayButtonColors
                            notoSansJpAndSixteenBold
                            buttonStyle
                        "
                        @click="inputClear"
                    >
                        条件をクリア
                    </button>
                    <button
                        class="
                            orangeSearthButtonColors
                            notoSansJpAndEighteenBold
                            buttonStyle
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
                            mt-1
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
                            :class="[
                                isOrgDetailClick ? 'transform rotate-180' : '',
                            ]"
                            fill="#ffffff"
                            stroke="#ffffff"
                            class="h-3 w-3"
                        ></triangle-down-svg>
                    </div>
                </div>
            </div>
            <!-- 七行目　-->
            <div
                class="
                    bg-searchResultTitle
                    rounded-b-lg
                    block
                    md:hidden
                    mid:hidden
                "
            >
                <div
                    class="flex h-8 justify-center items-center cursor-pointer"
                    @click="detailBottunClick"
                >
                    <triangle-down-svg
                        class="w-4 h-4"
                        :class="[
                            isOrgDetailClick ? 'transform rotate-180' : '',
                        ]"
                        fill="#ffffff"
                        stroke="#ffffff"
                    ></triangle-down-svg>
                </div>
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
    },
    data() {
        return {
            searchText: null,
            checkId: '',
            isOrgDetailClick: true,
            tagValue: this.$store.getters.getSearchTags,
            tagTimer: '',
            dispSelect: [],
            //
            orgOrgTagslist: [],
            inputFlg: false,
            //
            facilityID: 0,
            // 薬の分類
            qa_classify_class: 0,
            // 質問区分
            qa_classify_subject: 0,
        }
    },
    watch: {
        tagValue() {
            this.$store.dispatch('setSearchTags', this.tagValue)
            this.$emit('tagValue', this.tagValue)
        },
    },
    computed: {
        dispTagValue() {
            this.tagValue = this.$store.getters.getSearchTags
            // if (this.inputFlg) {
            //     this.inputFlg = false
            let selectedItem = this.$store.getters.getorgTagsList
            for (let index = 0; index < this.orgOrgTagslist.length; index++) {
                const element = this.orgOrgTagslist[index]
                if (
                    this.orgOrgTagslist[index].value ==
                    this.tagValue[this.tagValue.length - 1]
                ) {
                    let storeExistFlg = false
                    for (let i = 0; i < selectedItem.length; i++) {
                        if (
                            selectedItem[i].value ==
                            this.orgOrgTagslist[index].value
                        ) {
                            storeExistFlg = true
                        }
                    }
                    if (!storeExistFlg) {
                        selectedItem.push(this.orgOrgTagslist[index])
                        this.$store.dispatch('setOrgTagsList', selectedItem)
                        localStorage.setItem(
                            'store',
                            JSON.stringify(this.$store.state)
                        )
                    }
                }
            }
            // }
            return this.tagValue
        },
    },
    methods: {
        async fetchLanguages(query) {
            let searchTagsList = this.$store.getters.getSearchTagsLable
            let result = this.$store.getters.getorgTagsList
            if (query == null || query == '') {
                if (Object.keys(searchTagsList).length !== 0) {
                    for (let i = 0; i < searchTagsList.length; i++) {
                        let response = await this.$serve.getSuggestTags(
                            searchTagsList[i]
                        )
                        result = response.data.map((item) => {
                            return {
                                value: item.tagId,
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
                    let flg = false
                    // 存在チェック
                    for (let index = 0; index < this.tagValue.length; index++) {
                        if (this.tagValue[index] == setList.value) {
                            flg = true
                        }
                    }
                    // 存在しない場合、入力に設定
                    this.$store.dispatch('setSearchTagsLable', [])
                    if (!flg) {
                        this.$refs.mult.select(setList)
                    }
                    this.orgOrgTagslist = result
                    this.inputFlg = true
                } else {
                    result = this.$store.getters.getorgTagsList
                }
            } else {
                this.inputFlg = true
                await this.$serve.getSuggestTags(query).then((response) => {
                    result = response.data.map((item) => {
                        return {
                            value: item.tagId,
                            label: item.name,
                            count: item.associatedCount,
                        }
                    })
                })
                this.orgOrgTagslist = result
            }
            // console.log('resultresult', result)

            // console.log('this.orgOrgTagslist', this.orgOrgTagslist)
            return result
        },

        inputClear(data) {
            this.tagValue = []
            this.$store.dispatch('setSearchWord', '')
            this.$store.dispatch('setSearchTags', [])
            this.$refs.medicines.setValue('0')
            this.$refs.qDistinction.setValue('0')
            // this.$store.dispatch('setMedicineID', '')
            // this.$store.dispatch('setQuestionID', '')
            // 施設 初回設置[index]
            this.$refs.facility.setValue('0')
            this.$store.dispatch('setCheckQ', true)
            this.$store.dispatch('setCheckA', true)
            this.$store.dispatch('setCheckComment', true)
            this.$store.dispatch('setCheckAddFileName', true)
            this.$store.dispatch('setCheckContributor', true)
            this.$store.dispatch('setCheckLastEditer', true)
            this.$store.dispatch('setCheckFacilityName', true)
            this.$store.dispatch('setCheckNote', true)
        },
        multiselectValue(value) {},
        onCheckQChange() {
            this.$store.dispatch('setCheckQ', !this.$store.getters.getCheckQ)
        },
        onChangeCheckA() {
            this.$store.dispatch('setCheckA', !this.$store.getters.getCheckA)
        },
        onChangeCheckComment() {
            this.$store.dispatch(
                'setCheckComment',
                !this.$store.getters.getCheckComment
            )
        },
        onChangeCheckAddFileName() {
            this.$store.dispatch(
                'setCheckAddFileName',
                !this.$store.getters.getCheckAddFileName
            )
        },
        onChangeCheckContributor() {
            this.$store.dispatch(
                'setCheckContributor',
                !this.$store.getters.getCheckContributor
            )
        },
        onChangeCheckLastEditer() {
            this.$store.dispatch(
                'setCheckLastEditer',
                !this.$store.getters.getCheckLastEditer
            )
        },
        onChangeCheckFacilityName() {
            this.$store.dispatch(
                'setCheckFacilityName',
                !this.$store.getters.getCheckFacilityName
            )
        },
        onChangeCheckNote() {
            this.$store.dispatch(
                'setCheckNote',
                !this.$store.getters.getCheckNote
            )
        },

        sendInputInfo() {},
        setMedicineID(value) {
            // if (value != this.$store.getters.getMedicineID) {
            this.$store.dispatch('setMedicineID', value)
            // }
        },
        setQuestionID(value) {
            this.$store.dispatch('setQuestionID', value)
        },
        setFacilityID(value) {
            this.$store.dispatch('setFacilityID', value)
        },
        // 詳細条件クリックイベント
        detailBottunClick: function (event) {
            this.isOrgDetailClick = !this.isOrgDetailClick
            this.$emit('isOrgDetailClick', this.isOrgDetailClick)
        },
        // DropDown 選択したアイテムＩＤ取得
        getCheckId(data) {
            this.checkId = data
        },
    },
}
</script>

<style></style>
