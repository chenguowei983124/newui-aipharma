<template>
    <div class="pt-2">
        <div>
            <div
                class="flex space-x-2"
                :class="[isDetailClick ? 'block' : 'hidden']"
            >
                <litepie-datepicker
                    ref="datepicker"
                    :asSingle="true"
                    i18n="ja"
                    v-model="dateValue"
                    :autoApply="false"
                    :formatter="{
                        date: 'YYYY-MM-DD',
                        month: 'MMM',
                    }"
                ></litepie-datepicker>
                <div class="w-8 text-white text-center mt-1.5 font-black">
                    ―
                </div>
                <litepie-datepicker
                    ref="datepicker"
                    :asSingle="true"
                    i18n="ja"
                    v-model="dateValue"
                    :autoApply="false"
                    :formatter="{
                        date: 'YYYY-MM-DD',
                        month: 'MMM',
                    }"
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
                    "
                    type="button"
                    value="クリア"
                />
            </div>
        </div>
        <!-- 三行目、四行目、五行目 -->
        <div
            class="space-y-2 bg-backgroundMainSearch pt-2"
            :class="[isDetailClick ? 'block' : 'hidden']"
        >
            <!-- 質問区分 -->
            <vue-single-select
                :name="'field2'"
                :default-value="defaultValue"
                :placeholder="'-- Choose an option --'"
                :default-input-attribs="defaultInputAttribs"
                :default-options="$constant.style"
                @selected="setSelectValue2"
                leftLableTitle="様式"
                buttonStyle="w-9.5 h-7.5 pt-3 bg-searchBar rounded-r right-0"
                inputStyle="w-full text-left pl-10  notoSansJpAndFourteenRegular border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none"
                iconColor="#32a5dc"
            ></vue-single-select>

            <!-- 質問区分 -->
            <vue-single-select
                :name="'field3'"
                :default-value="defaultValue"
                :placeholder="'-- Choose an option --'"
                :default-input-attribs="{ tabindex: 1 }"
                :default-options="$store.getters.qa_classify_facility"
                @selected="setSelectValue3"
                leftLableTitle="施設"
                buttonStyle="w-9.5 h-7.5 pt-3 bg-searchBar rounded-r right-0"
                inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-10 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
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
                pt-2
            "
        >
            <div class="flex space-x-2">
                <button
                    class="
                        bg-personDataInfo
                        text-black
                        notoSansJpAndSixteenBold
                        w-28
                        h-8
                    "
                    @click="clearClick"
                >
                    条件をクリア
                </button>
                <button
                    class="
                        bg-searchBunnon
                        text-white
                        notoSansJpAndSixteenBold
                        w-28
                        h-8
                        flex flex-row
                        justify-center
                    "
                    @click="searchButtonClick"
                >
                    <div class="mt-1">検索</div>
                    <search-svg class="mt-1"></search-svg>
                </button>
            </div>
            <div class="hidden md:block mid:block">
                <div
                    class="
                        flex
                        items-center
                        border-2 border-white
                        text-white text-center
                        notoSansJpAndFourteenRegular
                        w-24
                        h-8
                        pl-2.5
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
                    ></triangle-down-svg>
                </div>
            </div>
        </div>
        <!-- 七行目　-->
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
import searchSvg from '../common/svgImage/searchSvg.vue'
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import Multiselect from '@vueform/multiselect'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../dateRange/litepie-datepicker.vue'
import { ref } from 'vue'
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
        litepieDatepicker,
    },
    data() {
        return {
            searchValue: '',
            checkId: '',
            isDetailClick: false,
            selectValue: '',
            selectValue2: '',
            selectValue3: '',
            value: [],
            defaultValue: null,
            defaultInputAttribs: {
                tabindex: 1,
            },
            dispText: '',
        }
    },
    methods: {
        dateChanged: function ($event) {
            console.log($event.target.value)
        },
        clicking: function ($event) {
            console.log('pushKafka')
            console.log(this.$refs.inputDate)
        },
        clearClick: function () {
            console.log(this.$constant.style)
            //   this.dispText = ""
        },
        getDispText: function (value) {
            this.dispText = value
        },
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
    setup() {
        const dateValue = ref([])
        return {
            dateValue,
        }
    },
}
</script>

<style></style>
