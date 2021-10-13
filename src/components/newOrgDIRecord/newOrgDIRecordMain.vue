<template>
  <div>
    <div class="flex border-b-2 border-blue-200">
      <!-- 左 -->
      <div id="top_block_left" class="flex-grow max-h-full min-w-min hidden md:block mid:block"/>
      <div>
        <br/>
        <div class="text-googleTitle notoSansJpAndTwentyTwoBold">
            組織内DI 記録（Q&A） 登録
        </div>
        <div class="notoSansJpAndTenNormal mt-5">
            個人情報及び著作権に抵触する恐れがあるファイルの取扱いにはご注意ください
        </div>
        <div class="notoSansJpAndTenNormal">
            ※公開設定にした場合でも添付ファイルおよびQA詳細は他施設（自施設とグループ施設以外）には公開されません
        </div>
        <br/>
      </div>
      <!-- 右 -->
      <div id="top_block_right" class="flex-grow max-h-full min-w-min hidden md:block mid:block"/>
    </div>
    <form action="">
      <div class="flex">
        <!-- 左 -->
        <div id="bottom_block_left" class="flex-grow max-h-full min-w-min hidden md:block mid:block"/>
        <div>
          <!-- 基本情報 -->
          <div id="base" class="pt-10">
            <div class="text-googleTitle notoSansJpAndTwentyTwoBold text-center">
                基本情報
            </div>
            <div id="question" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  質問
                </label>
                <input
                    v-model="base.question"
                    class="
                        block
                        h-10
                        w-full
                        NotoSansJp-normal
                        rounded-sm
                        pl-4
                        placeholder-gray-500
                        focus:placeholder-opacity-0
                        ring-1
                        border-transparent
                        focus:outline-none
                        focus:ring-1 focus:ring-326EB5Lins
                        focus:border-transparent
                    "
                    type="text"
                    placeholder=""
                />
            </div>
            <div id="answer" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  回答
                </label>
                <input
                    v-model="base.answer.text"
                    class="
                        block
                        h-10
                        w-full
                        NotoSansJp-normal
                        rounded-sm
                        pl-4
                        placeholder-gray-500
                        focus:placeholder-opacity-0
                        ring-1
                        border-transparent
                        focus:outline-none
                        focus:ring-1 focus:ring-326EB5Lins
                        focus:border-transparent
                    "
                    type="textarea"
                    placeholder=""
                />
                <div class="flex justify-end mt-1">
                  <input
                      v-model="base.answer.isKeep"
                      type="checkbox"
                      class="form-checkbox w-2.5 h-2.5 mt-1 ring-1"
                      checked
                  />
                  <label class="ml-0.5 notoSansJpAndTwelveRegular">
                    回答保留
                  </label>                
                </div>
            </div>
            <div id="source" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  出典・引用
                </label>
                <div v-for="(item, index) in base.source"
                :key="index" class="flex justify-between">
                  <input
                      v-model="item.name"
                      class="                          
                          h-10
                          w-70
                          NotoSansJp-normal
                          rounded-sm
                          pl-4
                          placeholder-gray-500
                          focus:placeholder-opacity-0
                          ring-1
                          border-transparent
                          focus:outline-none
                          focus:ring-1 focus:ring-326EB5Lins
                          focus:border-transparent
                      "
                      type="text"
                      placeholder="書籍・参考サイト名"
                  />
                  <input
                      v-model="item.url"
                      class="
                          ml-5                      
                          h-10
                          w-80
                          NotoSansJp-normal
                          rounded-sm
                          pl-4
                          placeholder-gray-500
                          focus:placeholder-opacity-0
                          ring-1
                          border-transparent
                          focus:outline-none
                          focus:ring-1 focus:ring-326EB5Lins
                          focus:border-transparent
                      "
                      type="text"
                      placeholder="URL（任意）"
                  />
                  <input
                      type="button"
                      class="
                          ml-5   
                          bg-gray-600
                          hover:opacity-50
                          active:bg-bg-gray-200
                          active:opacity-100
                          h-10
                          rounded-sm
                          notoSansJpAndTwelveBold
                          text-white
                      "
                      @click="onClearItem(base.source, index)"
                      value="クリア"
                  />
                </div>
                <input
                    type="button"
                    class="
                        bg-blue-400
                        hover:opacity-50
                        active:bg-bg-gray-200
                        active:opacity-100
                        h-5
                        w-15
                        rounded-sm
                        notoSansJpAndTwelveBold
                        text-white
                    "
                    @click="onAddSource"
                    value="+追加"
                />
            </div>
            <div id="pmid" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  PubMed
                </label>
                <input
                    v-model="base.pmid"
                    class="
                        block
                        h-10
                        w-full
                        NotoSansJp-normal
                        rounded-sm
                        pl-4
                        placeholder-gray-500
                        focus:placeholder-opacity-0
                        ring-1
                        border-transparent
                        focus:outline-none
                        focus:ring-1 focus:ring-326EB5Lins
                        focus:border-transparent
                    "
                    type="text"
                    placeholder="PMID"
                />
            </div>
            <div id="doi" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  J-STAGE
                </label>
                <input
                    v-model="base.doi"
                    class="
                        block
                        h-10
                        w-full
                        NotoSansJp-normal
                        rounded-sm
                        pl-4
                        placeholder-gray-500
                        focus:placeholder-opacity-0
                        ring-1
                        border-transparent
                        focus:outline-none
                        focus:ring-1 focus:ring-326EB5Lins
                        focus:border-transparent
                    "
                    type="text"
                    placeholder="DOI"
                />
            </div>
            <div id="file" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  ファイル
                </label>
                <div v-for="(item, index) in base.file"
                :key="index">
                  <div class="flex justify-between">
                    <input
                        class="
                            NotoSansJp-normal
                            rounded-sm
                            placeholder-gray-500
                            focus:placeholder-opacity-0
                            border-transparent
                            focus:outline-none
                            focus:ring-1 focus:ring-326EB5Lins
                            focus:border-transparent
                        "
                        type="file"
                        placeholder=""
                    />
                    <input
                        type="button"
                        class="
                            ml-5   
                            bg-gray-600
                            hover:opacity-50
                            active:bg-bg-gray-200
                            active:opacity-100
                            h-7
                            rounded-sm
                            notoSansJpAndTwelveBold
                            text-white
                        "
                        @click="onClearItem(base.file,index)"
                        value="クリア"
                    />
                  </div>
                </div>
                <input
                    type="button"
                    class="
                        bg-blue-400
                        hover:opacity-50
                        active:bg-bg-gray-200
                        active:opacity-100
                        h-5
                        w-15
                        rounded-sm
                        notoSansJpAndTwelveBold
                        text-white
                    "
                    @click="onAddFile"
                    value="+追加"
                />
            </div>
            <new-org-DI-record-buttons 
              parent="base"
              @onTmpSaveEvent="tmpSaveEvent"
              @onSaveEvent="saveEvent"
              >
            </new-org-DI-record-buttons>
          </div>
          <hr class="mt-10" >
          <!-- 詳細情報 -->
          <div id="detail" class="pt-10">
            <div class="notoSansJpAndTwentyTwoBold text-center">
                詳細情報
            </div>
            <div id="mediTypes" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                薬の分類
              </label>
              <input
                  v-model="detail.mediTypes"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="quesClass" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                質問区分
              </label>
              <input
                  v-model="detail.quesClass"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="mediName" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                医薬品名
              </label>
              <input
                  v-model="detail.mediName"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="sideEffects" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                副作用
              </label>
              <input
                  v-model="detail.sideEffects"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="keyWord" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                キーワード
              </label>
              <input
                  v-model="detail.keyWord"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="questioner" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  質問者
                </label>
                <div class="flex justify-between">
                  <vue-single-select
                      class="w-1/2"
                      :name="'prefessionList'"
                      :default-value="-1"
                      placeholder="職種"
                      :default-input-attribs="{ tabindex: 1 }"
                      :default-options="prefessionList"
                      @selected="setPrefessionValue"
                      :leftLableDisp="false"
                      buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                      inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                              border border-transparent focus:outline-none"
                  ></vue-single-select>
                  <input
                      v-model="detail.questioner.department"
                      class="
                          ml-2
                          w-1/2
                          NotoSansJp-normal
                          rounded-sm
                          placeholder-gray-500
                          focus:placeholder-opacity-0
                          ring-1
                          border-transparent
                          focus:outline-none
                          focus:ring-1 focus:ring-326EB5Lins
                          focus:border-transparent
                      "
                      type="text"
                      placeholder="診療科"
                  />                  
                </div>
            </div>
            <div id="patientGender" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                患者性別
              </label>
              <vue-single-select
                  class="w-1/2"
                  :name="'patientGenderList'"
                  :default-value="-1"
                  :default-input-attribs="{ tabindex: 1 }"
                  :default-options="patientGenderList"
                  @selected="setPatientGenderValue"
                  :leftLableDisp="false"
                  buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                  inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                          border border-transparent focus:outline-none"
              ></vue-single-select>
            </div>
            <div id="references" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                参考資料
              </label>
              <input
                  v-model="detail.references"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="diseaseName" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                疾患名
              </label>
              <input
                  v-model="detail.diseaseName"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="singleSelectItem" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                シングルセレクト項目
              </label>
              <vue-single-select
                  class="w-full"
                  :name="'patientGenderList'"
                  :default-value="-1"
                  :default-input-attribs="{ tabindex: 1 }"
                  :default-options="patientGenderList"
                  @selected="setPatientGenderValue"
                  :leftLableDisp="false"
                  buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                  inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                          border border-transparent focus:outline-none"
              ></vue-single-select>
            </div>
            <div id="multiSelectItem" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                マルチセレクト項目
              </label>
              <input
                  v-model="detail.multiSelectItem"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              />
            </div>
            <div id="textItem" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                テキスト項目
              </label>
              <textarea
                  v-model="detail.textItem"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              ></textarea>
            </div>
            <div id="memo" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                備考
              </label>
              <textarea
                  v-model="detail.memo"
                  class="
                      block
                      w-full
                      NotoSansJp-normal
                      rounded-sm
                      pl-4
                      placeholder-gray-500
                      focus:placeholder-opacity-0
                      ring-1
                      border-transparent
                      focus:outline-none
                      focus:ring-1 focus:ring-326EB5Lins
                      focus:border-transparent
                  "
                  type="text"
                  placeholder=""
              ></textarea>
            </div>
            <div id="questionDate" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                質問日
              </label>
              <div class="w-1/3">
                <litepie-datepicker
                      ref="datepicker"
                      :asSingle="true"
                      i18n="ja"
                      v-model="detail.questionDate"
                      :autoApply="true"
                      :formatter="{
                          date: 'YYYY.MM.DD',
                          month: 'MMM',
                      }"
                  ></litepie-datepicker>
              </div>
            </div>
            <div id="publicRange" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                公開範囲
              </label>
              <div class="block">
                <input
                    v-model="detail.publicRange"
                    type="checkbox"
                    class="form-checkbox w-3 h-3 text-white ring-1"
                    checked
                />
                <label class="ml-0.5 notoSansJpAndTwelveRegular">
                  他施設（自施設、グループ施設以外）にも公開
                </label>                
              </div>
              <label class="ml-4 notoSansJpAndTwelveBold">
                ※公開に同意する場合にのみチェックを入れてください
              </label>
            </div>
            <new-org-DI-record-buttons 
              parent="detail"
              @onTmpSaveEvent="tmpSaveEvent"
              @onSaveEvent="saveEvent"
              >
            </new-org-DI-record-buttons>
          </div>
        </div>
        <!-- 右 -->
        <div id="top_block_right" class="flex-grow max-h-full min-w-min hidden md:block mid:block"/>
      </div>
    </form>
  </div>
</template>

<script>
import newOrgDIRecordButtons from './newOrgDIRecordButtons.vue'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../dateRange/litepie-datepicker.vue'

export default {
  components: {
    newOrgDIRecordButtons,
    vueSingleSelect,
    litepieDatepicker,
  },
  data() {
    return {
      prefessionList:[
        { "value": "0", "title": "薬剤師" },
        { "value": "1", "title": "先生" },
        { "value": "2", "title": "看護師" }
      ],
      patientGenderList: [
        { "value": "0", "title": "男" },
        { "value": "1", "title": "女" },   
        { "value": "2", "title": "不明" },      
      ],
      base: {
        question: "",
        answer: {
          text: "",
          isKeep: false,
        },
        source: [
          {
            name: "",
            url: "",
          }
        ],
        pmid: "",
        doi: "",
        file:[
          {
            name:"",
          }
        ],
      },
      detail: {        
        mediTypes: "",
        quesClass: "",
        mediName: "",
        sideEffects: "",
        keyWord: "",
        questioner: { 
          prefession: "",
          department: "", 
        },
        patientGender: "",
        references: "",
        diseaseName: "",
        singleSelectItem: "",
        multiSelectItem: [],
        textItem: "",
        memo: "",
        questionDate: "",
        publicRange: false,
      },
    }
  },
  methods: {
    tmpSaveEvent(kind){
      if (kind == 'base') {
        console.log('tmpSaveEvent',this.base)
      } else {
        console.log('tmpSaveEvent',this.detail)
      }
    },
    saveEvent(kind){
      if (kind == 'base') {
        console.log('saveEvent',this.base)
      } else {
        console.log('saveEvent',this.detail)
      }
    },
    setPrefessionValue(value) {
      console.log('setPrefessionValue', value)
      this.detail.questioner.prefession = value
    },
    setPatientGenderValue(value) {
      this.detail.patientGender = value
    },
    onClearItem: function(list, index) {
      if (list.length > 1)
        list.splice(index, 1)
    },
    onAddFile: function () {
      this.base.file.push({name:""})
    },
    onAddSource: function () {
      this.base.source.push({name:"", url:""})
    },
  },
}
</script>
<style>
</style>
