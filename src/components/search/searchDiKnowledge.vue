<template>
    <div class="pt-2">
        <!-- 最初の行 -->

        <div>
            <Multiselect
                v-model="value"
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
                :classes="{
                    container:
                        'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none',
                    containerDisabled: 'cursor-default bg-gray-100',
                    containerOpen: 'rounded-b-none',
                    containerOpenTop: 'rounded-t-none',
                    containerActive: 'ring ring-green-500 ring-opacity-30',
                    singleLabel:
                        'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
                    multipleLabel:
                        'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
                    search: 'w-full absolute inset-0 outline-none appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5',
                    tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2',
                    tag: 'bg-organization text-white notoSansJpAndTwelveRegular py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
                    tagDisabled: 'pr-2 opacity-50',
                    tagRemove:
                        'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
                    tagRemoveIcon:
                        'bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
                    tagsSearchWrapper:
                        'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
                    tagsSearch:
                        'absolute inset-0 border-0 outline-none appearance-none p-0 text-base font-sans box-border w-full',
                    tagsSearchCopy:
                        'invisible whitespace-pre-wrap inline-block h-px',
                    placeholder:
                        'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400',
                    caret: 'bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
                    caretOpen: 'rotate-180 pointer-events-auto',
                    clear: 'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
                    clearIcon:
                        'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
                    spinner:
                        'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0',
                    dropdown:
                        'max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b',
                    dropdownTop:
                        '-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t',
                    dropdownHidden: 'hidden',
                    options: 'flex flex-col p-0 m-0 list-none',
                    optionsTop: 'flex-col-reverse',
                    group: 'p-0 m-0',
                    groupLabel:
                        'flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal',
                    groupLabelPointable: 'cursor-pointer',
                    groupLabelPointed: 'bg-gray-300 text-gray-700',
                    groupLabelSelected: 'bg-green-600 text-white',
                    groupLabelDisabled:
                        'bg-gray-100 text-gray-300 cursor-not-allowed',
                    groupLabelSelectedPointed:
                        'bg-green-600 text-white opacity-90',
                    groupLabelSelectedDisabled:
                        'text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed',
                    groupOptions: 'p-0 m-0',
                    option: 'flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3',
                    optionPointed: 'text-gray-800 bg-gray-100',
                    optionSelected: 'text-white bg-green-500',
                    optionDisabled: 'text-gray-300 cursor-not-allowed',
                    optionSelectedPointed: 'text-white bg-green-500 opacity-90',
                    optionSelectedDisabled:
                        'text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed',
                    noOptions: 'py-2 px-3 text-gray-600 bg-white',
                    noResults: 'py-2 px-3 text-gray-600 bg-white',
                    fakeInput:
                        'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
                    spacer: 'h-9 py-px box-content',
                }"
            />
        </div>

        <!-- 六行目　-->
        <div
            class="flex space-x-44 justify-center bg-backgroundMainSearch pt-2"
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
import { ref } from 'vue';
export default {
  props: {
    searchButtonClick: {
      type: Function,
      default: () => { }
    }
  },
  components: { searchDropdown, searchSvg, TriangleDownSvg, Multiselect, vueSingleSelect, litepieDatepicker },
  data() {
    return {
      searchValue: '',
      checkId: '',
      isDetailClick: false,
      selectValue: "",
      selectValue2: "",
      selectValue3: "",
      value: [],
      defaultValue: null,
      defaultInputAttribs: {
        tabindex: 1
      }
      , dispText: ""
    }

  },
  methods: {
    dateChanged: function ($event) {
      console.log($event.target.value)
    },
    clicking: function ($event) {
      console.log("pushKafka");
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
        where = '&where=' + encodeURIComponent(JSON.stringify({
          "ProgrammingLanguage": {
            "$regex": `${query}|${query.toUpperCase()}|${query[0].toUpperCase() + query.slice(1)}`
          }
        }))
      }

      const response = await fetch(
        'https://parseapi.back4app.com/classes/All_Programming_Languages?order=ProgrammingLanguage&keys=ProgrammingLanguage' + where,
        {
          headers: {
            'X-Parse-Application-Id': 'XpRShKqJcxlqE5EQKs4bmSkozac44osKifZvLXCL', // This is the fake app's application id
            'X-Parse-Master-Key': 'Mr2UIBiCImScFbbCLndBv8qPRUKwBAq27plwXVuv', // This is the fake app's readonly master key
          }
        }
      );

      const data = await response.json(); // Here you have the data that you need

      return data.results.map((item) => {
        return { value: item.ProgrammingLanguage, label: item.ProgrammingLanguage }
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
      this.$emit("isDetailClick", this.isDetailClick)
    },
    // ========================================
    // DropDown 選択したアイテムＩＤ取得
    // ========================================
    getCheckId(data) {
      this.checkId = data
    }
  }, setup() {
    const dateValue = ref([]);
    return {
      dateValue
    }
  }
}
</script>

<style>
</style>
