<template>
  <div>
    <div class="flex border-b-2 border-blue-200" id="newDI_Title">
      <!-- 左 -->
      <div id="top_block_left" class="w-1/12 md:w-1/6"/>
      <div id="Title" class="flex-grow w-full">
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
      <div id="top_block_right" class="w-1/12 md:w-1/6"/>
    </div>
    <div class="flex" id="newDI_Content">
      <!-- 左 -->
      <div id="bottom_block_left" class="w-1/12 md:w-1/6"/>
      <div id="Contents" class="flex-grow w-full">
        <!-- 基本情報 -->
        <div id="base" class="pt-10">
          <div id="bTitle" class="text-googleTitle notoSansJpAndTwentyTwoBold text-center">
              基本情報
          </div>
          <div id="bItems">
            <div id="question" class="mt-3">
                <label class="notoSansJpAndFourteenBold">
                  質問
                </label>
                <label v-show="!validation.question" style="color: red;">
                  *
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
                <label v-show="!validation.answer" style="color: red;">
                  *
                </label>
                <div class="rounded-sm ring-1">
                  <tinymce-edit
                    v-model="base.answer.text"
                  ></tinymce-edit>
                </div>
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
                <div v-for="(item, index) in base.source" :key="index" 
                  class="
                    flex-wrap md:flex
                    justify-between mt-2
                  ">
                  <input
                      v-model="item.name"
                      class="                          
                          h-10
                          w-full md:w-1/2
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
                          flex-grow   
                          h-10
                          mt-2 md:mt-0
                          ml-0 md:ml-2
                          w-full md:w-0
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
                          mt-2 md:mt-0
                          ml-0 md:ml-2
                          md:w-1/12
                          bg-gray-400
                          hover:opacity-50
                          active:bg-bg-gray-200
                          active:opacity-100
                          h-10
                          rounded-sm
                          notoSansJpAndTwelveBold
                          text-white
                          border-b-2 border-gray-500 
                      "
                      @click="onClearItem(base.source, index)"
                      value="クリア"
                  />
                </div>
                <input
                    type="button"
                    class="
                        mt-2
                        bg-blue-300
                        hover:opacity-50
                        active:bg-bg-gray-200
                        active:opacity-100
                        h-10 md:h-7
                        w-15
                        rounded-sm
                        notoSansJpAndTwelveBold
                        text-white
                        border-b-2 border-blue-400
                    "
                    @click="onAddSource"
                    value="+追加"
                />
            </div>
            <div id="pmid" class="mt-3">
                <a :href="url.pmid" target="_blank" class="flex">
                  <label class="notoSansJpAndFourteenBold underline">
                    PubMed
                  </label>
                  <external-link
                      class="hover:opacity-50 active:opacity-50"
                  ></external-link>
                </a>
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
                <a :href="url.doi" target="_blank" class="flex">
                  <label class="notoSansJpAndFourteenBold underline">
                    J-STAGE
                  </label>
                  <external-link
                      class="hover:opacity-50 active:opacity-50"
                  ></external-link>
                </a>
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
                  <div class="flex justify-between mt-1">
                    <div class="flex">
                      <label 
                        :for="'addFile_'+index" 
                        class=" 
                            w-28
                            bg-gray-300
                            hover:opacity-50
                            active:bg-bg-gray-200
                            active:opacity-100
                            rounded-sm
                            notoSansJpAndFourteenBold
                            text-black
                            text-center
                            border border-gray-600 
                        "
                      >ファイルを選択</label>
                      <input :id="'addFile_'+index" class="hidden" type="file" @change="onFileChange"/>
                      <p class="ml-2">{{!!item.name ? item.name : '※ファイルが選択されていません。'}}</p>
                    </div>
                    <input
                        type="button"
                        class="
                            ml-5   
                            bg-gray-400
                            hover:opacity-50
                            active:bg-bg-gray-200
                            active:opacity-100
                            h-6
                            rounded-sm
                            notoSansJpAndTwelveBold
                            text-white
                            border-b-2 border-gray-500 
                        "
                        @click="onClearItem(base.file,index)"
                        value="クリア"
                    />
                  </div>
                </div>
                <input
                    type="button"
                    class="
                        mt-2
                        bg-blue-300
                        hover:opacity-50
                        active:bg-bg-gray-200
                        active:opacity-100
                        h-10 md:h-7
                        w-15
                        rounded-sm
                        notoSansJpAndTwelveBold
                        text-white
                        border-b-2 border-blue-400
                    "
                    @click="onAddFile"
                    value="+追加"
                />
            </div>
          </div>
          <new-org-DI-record-buttons id="bButtons"
            parent="base"
            :disableSave="!isValid"
            @onTmpSaveEvent="tmpSaveEvent"
            @onSaveEvent="saveEvent"
            >
          </new-org-DI-record-buttons>
        </div>
        <hr class="mt-10" >
        <!-- 詳細情報 -->
        <div id="detail" class="pt-10">
          <div id="dTitle" class="notoSansJpAndTwentyTwoBold text-center">
              詳細情報
          </div>
          <div id="dItems">
            <div id="mediTypes" class="mt-3">
              <label class="notoSansJpAndFourteenBold">
                薬の分類
              </label>
              <div id="msMediTypes">
                  <Multiselect
                      class="h-7.5"
                      v-model="detail.mediTypes"
                      mode="tags"
                      placeholder=""
                      :filterResults="false"
                      :minChars="1"
                      :resolveOnLoad="false"
                      :delay="0"
                      :searchable="true"
                      :options="multiSelectItemList"
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
                          tag: 'bg-gray-300 text-black notoSansJpAndTwelveRegular pl-2 rounded-full border-2 mr-1 mb-1 flex items-center whitespace-nowrap',
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
                          optionSelectedPointed:
                              'text-white bg-green-500 opacity-90',
                          optionSelectedDisabled:
                              'text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed',
                          noOptions: 'py-2 px-3 text-gray-600 bg-white',
                          noResults: 'py-2 px-3 text-gray-600 bg-white',
                          fakeInput:
                              'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
                          spacer: 'h-9 py-px box-content',
                      }"
                  ></Multiselect>
              </div>
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
                <div class="
                    justify-between
                    flex-wrap md:flex
                  ">
                  <vue-single-select
                      class="
                        w-full md:w-1/2
                      "
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
                          flex-grow
                          mt-2 md:mt-0
                          ml-0 md:ml-2
                          w-full md:w-0
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
                  class="w-full md:w-1/2"
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
              <div id="msMultiSelectItem">
                  <Multiselect
                      class="h-7.5"
                      v-model="detail.multiSelectItem"
                      mode="tags"
                      placeholder=""
                      :filterResults="false"
                      :minChars="1"
                      :resolveOnLoad="false"
                      :delay="0"
                      :searchable="true"
                      :options="multiSelectItemList"
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
                          tag: 'bg-gray-300 text-black notoSansJpAndTwelveRegular pl-2 rounded-full border-2 mr-1 mb-1 flex items-center whitespace-nowrap',
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
                          optionSelectedPointed:
                              'text-white bg-green-500 opacity-90',
                          optionSelectedDisabled:
                              'text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed',
                          noOptions: 'py-2 px-3 text-gray-600 bg-white',
                          noResults: 'py-2 px-3 text-gray-600 bg-white',
                          fakeInput:
                              'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
                          spacer: 'h-9 py-px box-content',
                      }"
                  ></Multiselect>
              </div>
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
              <div class="w-full md:w-1/3">
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
              <label class="ml-4 notoSansJpAndTwelveBold" style="color: red;">
                ※公開に同意する場合にのみチェックを入れてください
              </label>
            </div>
          </div>
          <new-org-DI-record-buttons id="dButtons"
            parent="detail"
            @onTmpSaveEvent="tmpSaveEvent"
            @onSaveEvent="saveEvent"
            >
          </new-org-DI-record-buttons>
        </div>
      </div>
      <!-- 右 -->
      <div id="bottom_block_right" class="w-1/12 md:w-1/6"/>
    </div>
  </div>
</template>

<script>
import newOrgDIRecordButtons from './newOrgDIRecordButtons.vue'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../dateRange/litepie-datepicker.vue'
import tinymceEdit from './tinymceEdit.vue'
import Multiselect from '@vueform/multiselect'
import externalLink from '../svgImage/extarnalLink.vue'

export default {
  components: {
    newOrgDIRecordButtons,
    vueSingleSelect,
    litepieDatepicker,
    tinymceEdit,
    Multiselect,
    externalLink,
  },
  data() {
    return {
      url: {
        pmid: "https://www.pmda.go.jp/",
        doi: "https://www.pmda.go.jp/",
      },
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
      multiSelectItemList: [
        {label: "A", value: "a"},
        {label: "B", value: "b"},
        {label: "C", value: "c"},
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
            content:"",
          }
        ],
      },
      detail: {        
        mediTypes: [],
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
    onFileChange (e) {
      console.log('onFileChange-1',e)
      const idx = e.target.id.slice(e.target.id.lastIndexOf('_')+1)
      if (e.target.files.length == 0)
        return;
      const fs = e.target.files
      // document.getElementById(e.target.id).value = '';
      this.addFile(fs,idx)
      e.target.value = ''
    },
    addFile (files,idx) {
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        let f = {
          name: file.name,
        }
        reader.onload = () => {
          Object.assign(f, {content: reader.result})
          // this.base.file.push(f)
          this.base.file[idx] = f
        }
      }
    },
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
      if (list.length > 1){
        list.splice(index, 1)
      } else {
        Object.keys(list[0]).map(key => {
          list[0][key] = null
        });
      }
    },
    onAddFile: function () {
      this.base.file.push({name:"", content:""})
    },
    onAddSource: function () {
      this.base.source.push({name:"", url:""})
    },
  },
  computed: {
    validation() {
      const base = this.base
      return {
        question : !!base.question,
        answer : !!base.answer.text,
      }
    },
    isValid() {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
}
</script>
<style>
</style>
