<template>
    <div class="pt-2 rounded-lg md:rounded-none -mb-2.5 md:-mb-0">
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
                <input
                    class="
                        w-9.5
                        block
                        bg-searchBar
                        border-b-2 border-blueline
                        rounded
                        notoSansJpAndTenBold
                        text-blueline
                        flex-none
                    "
                    type="button"
                    @click="dateClear"
                    value="クリア"
                />
            </div>
        </div>
        <!-- 三行目、四行目、五行目 -->
        <div
            class="space-y-2 bg-backgroundMainSearch pt-2 mx-2 md:mx-0"
            :class="[isDetailClick ? 'block' : 'hidden']"
        >
            <!-- 様式 -->
            <vue-single-select
                class="cursor-pointer"
                :name="'styles'"
                ref="styles"
                :default-value="defaultValue"
                :placeholder="'-- Choose an option --'"
                :default-input-attribs="defaultInputAttribs"
                :default-options="$constant.style"
                @selected="setStyles"
                leftLableTitle="様式"
                buttonStyle="pullDownButtonColors"
                inputStyle="w-full text-left pl-12 notoSansJpAndFourteenRegular border-2 h-7.5 border-blueCAE6F4 bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none flex justify-items-center  "
                iconColor="#32a5dc"
            ></vue-single-select>

            <!-- 施設区分 -->
            <vue-single-select
                class="cursor-pointer"
                :name="'facility'"
                ref="facility"
                :default-value="defaultValue"
                :placeholder="'-- Choose an option --'"
                :default-input-attribs="{ tabindex: 1 }"
                :default-options="$constant.qaClassifyFacility"
                @selected="setFacilityID"
                leftLableTitle="施設"
                buttonStyle="pullDownButtonColors"
                inputStyle="w-full text-left pl-12 notoSansJpAndFourteenRegular border-2 h-7.5 border-blueCAE6F4 bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none  flex justify-items-center "
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
                        grayButtonColors
                        notoSansJpAndSixteenBold
                        buttonStyle
                    "
                    @click="clearClick"
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
                        rounded
                        border border-white
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
        <!-- 七行目　-->
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
            isDetailClick: true,
            value: [],
            defaultValue: 0,
            defaultInputAttribs: {
                tabindex: 1,
            },
            dispText: '',
        }
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
    },

    methods: {
        dateClear: function () {
            this.$refs.datepickerFrom.clearPicker()
            this.$refs.datepickerTo.clearPicker()
        },
        clearClick: function () {
            this.$refs.datepickerFrom.clearPicker()
            this.$refs.datepickerTo.clearPicker()
            this.$refs.facility.setValue('0')
            this.$refs.styles.setValue('0')
            this.$store.dispatch('setSearchWord', '')
        },
        getDispText: function (value) {
            this.dispText = value
        },
        // 施設
        setFacilityID(value) {
            this.$store.dispatch('setFacilityID', value)
        },
        // 様式
        setStyles(value) {
            this.$store.dispatch('setStyles', value)
        },
        // 詳細条件クリックイベント
        detailBottunClick: function (event) {
            this.isDetailClick = !this.isDetailClick
            this.$emit('isDetailClick', this.isDetailClick)
        },
    },
    created() {
        this.$emit('isDetailClick', true)
    },
}
</script>

<style></style>
