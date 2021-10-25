<template>
    <div class="space-y-2">
        <div class="flex mx-0 font-bold text-white pt-2">
            <!-- 検索対象 左-->
            <div class="w-20 flex text-sm md:text-base">検索対象</div>
            <!-- 右 -->
            <div class="flex flex-col md:flex-row pt-0.5"
                 v-for="(item, index) in filterBBS.targets"
                 :key="index"
            >
                <div :id="'st_'+item.name" class="w-1/3 md:ml-2 md:w-auto" >
                    <label class="inline-flex items-center justify-end">
                        <input
                            type="checkbox"
                            class="form-checkbox text-white"
                            v-model="$data['filterBBS']['targets'][index].value"
                        />
                        <span class="ml-1 text-xs md:text-mxss">{{item.title}}</span>
                    </label>
                </div>
            </div>
        </div>
        <!-- 二行目 -->
        <div>
            <div class="px-2 md:px-0">
                <Multiselect
                    v-model="filterBBS.tags"
                    mode="tags"
                    placeholder="#タグ"
                    :filterResults="false"
                    :minChars="1"
                    :resolveOnLoad="false"
                    :delay="0"
                    :searchable="true"
                    :options="tagList"
                    :classes="$constant.multiselectCss"
                />
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
                ref="medicines"
                :name="'field1'"
                :default-value="filterBBS.scope"
                :placeholder="'-- Choose an option --'"
                :default-input-attribs="{ tabindex: 1 }"
                :default-options="scopeList"
                @selected="setMedicineID"
                leftLableTitle="公開範囲"
                buttonStyle="w-9.5 h-7.5 pt-3 bg-searchBar rounded-r right-0"
                inputStyle="w-full text-left pl-20 notoSansJpAndFourteenRegular border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none "
                iconColor="#32a5dc"
            ></vue-single-select>

        </div>
        <div
            class="flex justify-between mx-2 md:mx-0 font-bold text-white space-x-2"
            :class="[isDetailClick ? 'block' : 'hidden']"
        >
            <div class="w-30 flex text-white md:text-base">期間（投稿日）</div>            
            <div class="w-1/3">
              <litepie-datepicker
                  ref="datepicker_from"
                  :asSingle="true"
                  i18n="ja"
                  v-model="filterBBS.create_from"
                  :autoApply="false"
                  :formatter="{
                      date: 'YYYY-MM-DD',
                      month: 'MMM',
                  }"
              ></litepie-datepicker>
            </div>
            <div class="w-8 text-white text-center mt-1.5 font-black">
                ―
            </div>        
            <div class="flex-grow">
              <litepie-datepicker
                  ref="datepicker_to"
                  :asSingle="true"
                  i18n="ja"
                  v-model="filterBBS.create_to"
                  :autoApply="false"
                  :formatter="{
                      date: 'YYYY-MM-DD',
                      month: 'MMM',
                  }"
              ></litepie-datepicker>
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
      default: () => { },
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
  data() {
    return {
      
      filterBBS: {
        targets:[
          {name: 'title', title: 'タイトル',value: true},
          {name: 'content', title: '内容',value: true},
          {name: 'coment', title: 'コメント',value: true},
          {name: 'creator', title: '投稿者',value: true},
          {name: 'updater', title: '最終編集者',value: true},
          {name: 'facility', title: '施設名',value: true},
        ],
        tags:[

        ],
        scope: '',
        create_from: '',
        create_to: ''
      },
      
      tagList: this.$store.getters.bbsDropDownInfo.tags,
    //    [
    //       'AA',
    //       'BB',
    //       'CC',
    //       { label: 'A', value: 1 },
    //       { label: 'B', value: 2 },
    //       { label: 'C', value: 3 },
    //   ],
      scopeList: [
          { value: '0', title: '全体' },
          { value: '1', title: '学会' },
          { value: '2', title: 'グループ' },
      ],
      searchText: null,
      checkId: '',
      isDetailClick: false,
      tagValue: this.$store.getters.getSearchTags,
    }
  },
  methods: {
    inputClear() {
      
      this.filterBBS.targets.map(t => {
        t.value = false
      })
      this.filterBBS.tags = []
      this.filterBBS.scope = ''
      this.filterBBS.create_from = ''
      this.filterBBS.create_to = ''
      this.$refs.medicines.setValue(null)
      this.$refs.datepicker_from.clearPicker()
      this.$refs.datepicker_to.clearPicker()
      this.$emit('clearSearchWordEvent','');
    },

    setMedicineID(value) {
      this.filterBBS.scope = value
    },
    // 詳細条件クリックイベント
    detailBottunClick: function (event) {
      this.isDetailClick = !this.isDetailClick
    },
  },
  created () {
    //   console.log('setFilterBBS',this.$data.filterBBS)
      this.$store.dispatch('setFilterBBS', this.$data.filterBBS)
  },
  updated () {
    this.$nextTick(function () {
      // ビュー全体がレンダリングされた後にのみ実行されるコード
      this.$store.dispatch('setFilterBBS', this.$data.filterBBS)
    })    
  },
  watch: {
    $route(to, from) {
      if (to.path == '/searchBulletinBoard' || from.path != '/searchBulletinBoard') return

    //   console.log('searchBBSTitle watch',to, from)
      this.inputClear()
    }
  },
}
</script>

<style></style>
