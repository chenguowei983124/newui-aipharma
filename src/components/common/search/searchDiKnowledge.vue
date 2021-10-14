<template>
    <div class="space-y-2">
        <!-- 1.5行目 -->
        <div class="flex flex-row mx-2 md:mx-0 font-bold text-white pt-2">
            <!-- 検索対象 左-->
            <div class="w-20 flex text-sm md:text-base">検索対象</div>
            <!-- 右 -->
            <div class="flex-auto flex pt-0.5">
                <div class="flex flex-col md:flex-row">
                    <!-- <div class="flex flex-row space-x-0 md:space-x-6"> -->
                    <div class="flex flex-row">
                        <!-- Q -->
                        <div class="w-28 md:w-13">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
                                    :checked="$store.getters.getCheckQ"
                                    @change="onCheckQChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss">Q</span>
                            </label>
                        </div>
                        <!-- A -->
                        <div class="w-20 md:w-13">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
                                    :checked="$store.getters.getCheckA"
                                    @change="onChangeCheckA"
                                />
                                <span class="ml-1 text-xs md:text-mxss">A</span>
                            </label>
                        </div>
                        <!-- コメント -->
                        <div class="w-20 md:w-20">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
                                    :checked="$store.getters.getCheckComment"
                                    @change="onChangeCheckComment"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >コメント</span
                                >
                            </label>
                        </div>
                    </div>
                    <!-- <div class="flex flex-row space-x-5 md:ml-5"> -->
                    <div class="flex flex-row">
                        <div class="w-28 md:w-30">
                            <!-- 添付ファイル名 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
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
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
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
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
                                    :checked="$store.getters.getCheckLastEditer"
                                    @change="onChangeCheckLastEditer"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >最終編集者</span
                                >
                            </label>
                        </div>
                    </div>
                    <!-- <div class="flex flex-row space-x-5 md:ml-5"> -->
                    <div class="flex flex-row">
                        <!-- 施設名（グループ施設用） -->
                        <div class="w-28 md:w-20">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
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
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-white"
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
                <Multiselect
                    class="h-7.5"
                    v-model="tagValue"
                    mode="tags"
                    placeholder="#タグ"
                    :filterResults="false"
                    :minChars="1"
                    :resolveOnLoad="false"
                    :delay="0"
                    :searchable="true"
                    :options="
                        async function (query) {
                            return await fetchLanguages(query) // check JS block for implementation
                        }
                    "
                    :classes="$constant.multiselectCss"
                ></Multiselect>
            </div>
        </div>
        <!-- 三行目 -->
        <div class="flex space-x-44 justify-center bg-backgroundMainSearch">
            <div class="flex space-x-2">
                <button
                    class="
                        rounded
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
                        bg-searchBunnon
                        text-white
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
                    <div class="text-lg font-NotoSansJp font-bold">検 索</div>
                    <search-svg class="ml-1"></search-svg>
                </button>
            </div>
        </div>
        <!-- 四行目 -->
        <div
            class="bg-searchResultTitle rounded-b-lg block md:hidden mid:hidden"
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
import vueSingleSelect from '../../dropdown/vueSingleSelect.vue'

export default {
    props: {
        searchButtonClick: {
            type: Function,
            default: () => {},
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
            searchValue: '',
            //   tagsValue: '',
            checkId: '',
            isDetailClick: false,
            selectValue: '',
            selectValue2: '',
            selectValue3: '',
            tagValue: [],
            //   dispText: "",
            //   dispQDistinctionText: "",
            //   dispFacilityText: "",
        }
    },
    watch: {
        tagValue() {
            console.log(this.tagValue)
            this.$emit('tagValue', this.tagValue)
        },
    },
    methods: {
        async fetchLanguages(query) {
            // From: https://www.back4app.com/database/paul-datasets/list-of-all-programming-languages/get-started/javascript/rest-api/fetch?objectClassSlug=dataset

            let where = ''

            if (query) {
                where =
                    '&where=' +
                    encodeURIComponent(
                        JSON.stringify({
                            ProgrammingLanguage: {
                                $regex: `${query}|${query.toUpperCase()}|${
                                    query[0].toUpperCase() + query.slice(1)
                                }`,
                            },
                        })
                    )
            }

            const response = await fetch(
                'https://parseapi.back4app.com/classes/All_Programming_Languages?order=ProgrammingLanguage&keys=ProgrammingLanguage' +
                    where,
                {
                    headers: {
                        'X-Parse-Application-Id':
                            'XpRShKqJcxlqE5EQKs4bmSkozac44osKifZvLXCL', // This is the fake app's application id
                        'X-Parse-Master-Key':
                            'Mr2UIBiCImScFbbCLndBv8qPRUKwBAq27plwXVuv', // This is the fake app's readonly master key
                    },
                }
            )

            const data = await response.json() // Here you have the data that you need
            return data.results.map((item) => {
                return {
                    value: item.ProgrammingLanguage,
                    label: item.ProgrammingLanguage,
                }
            })
        },
        // getDispText: function (value) {
        //   this.dispText = value
        // },
        // getDispQDistinctionText: function (value) {
        //   this.dispQDistinctionText = value
        // },
        // getDispFacilityText: function (value) {
        //   this.dispFacilityText = value
        // },
        inputClear() {
            this.searchValue = ''
            this.value = []
            this.$refs.medicines.setValue(null)
            this.$refs.qDistinction.setValue(null)
            this.$refs.facility.setValue(null)
            //   this.dispText = ""
            //   this.dispQDistinctionText = ""
            //   this.dispFacilityText = ""
        },
        sendInputInfo() {
            //   this.$store.dispatch('getOrganizationSearchInfo')
            //   this.$store.dispatch('setIsOrganizationSearch', !this.$store.getters.getIsOrganizationSearch)
        },
        setSelectValue(value) {
            this.selectValue = value
        },
        setSelectValue2(value) {
            this.selectValue2 = value
        },
        setSelectValue3(value) {
            this.selectValue3 = value
        },
        // ========================================
        // 詳細条件クリックイベント
        // ========================================
        detailBottunClick: function (event) {
            this.isDetailClick = !this.isDetailClick
            this.$emit('isDetailClick', this.isDetailClick)
        },
        // ========================================
        // 検索ボタン押下イベント
        // ========================================
        searchClick: function (event) {
            // すべて
            if (this.checkId == 1) {
                // 検索APIを呼び出し(画面入力値)
                this.$store.dispatch('searchAll', this.searchValue)

                // 一括検索結果画面へ遷移
                this.$router.push('/searchResultAll')
            }
            // DI ナレッジシェア
            else if (this.checkId == 2) {
                this.$router.push('/searchResultAll')
            }
            // 組織内 DI 記録（Q&A）
            else if (this.checkId == 3) {
                this.$router.push('/searchOrganization')
            }
            // 症例（プレアボイド）
            else if (this.checkId == 4) {
                this.$router.push('/searchOrganization')
            }
            // DI 辞書
            else if (this.checkId == 5) {
                this.$router.push('/searchOrganization')
            }
            // 製薬企業情報
            else if (this.checkId == 6) {
                this.$router.push('/searchOrganization')
            }

            // this.$router.push('/searchResultAll')
        },
        // ========================================
        // DropDown 選択したアイテムＩＤ取得
        // ========================================
        getCheckId(data) {
            this.checkId = data
        },
    },
}
</script>

<style></style>
