<template>
    <div class="flex border-b-2 border-blue-200 mt-5 md:h-20">
        <!-- 左 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div
            class="flex flex-col w-full md:w-191.25 justify-center mx-2 md:mx-0"
        >
            <div class="text-googleTitle notoSansJpAndTwentyFourBold">
                組織内DI 記録（Q&A） 登録
            </div>
            <div class="notoSansJpAndTwelveMedium mt-4">
                個人情報及び著作権に抵触する恐れがあるファイルの取扱いにはご注意ください
            </div>
            <div class="notoSansJpAndTwelveMedium mb-5">
                ※公開設定にした場合でも添付ファイルおよびQA詳細は他施設（自施設とグループ施設以外）には公開されません
            </div>
        </div>
        <!-- 右 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
    </div>
    <div class="flex pt-4">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-2">
                <!-- 基本情報 -->
                <div
                    id="bTitle"
                    class="
                        text-googleTitle
                        notoSansJpAndTwentyEightBold
                        md:notoSansJpAndThirtyBold
                        text-center
                    "
                >
                    基本情報
                </div>
                <div id="question" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 質問 </label>
                    <label v-show="!validation.question" style="color: red">
                        *
                    </label>
                    <input
                        v-model="base.question"
                        class="
                            mt-2
                            block
                            h-10
                            w-full
                            NotoSansJp-normal
                            rounded-sm
                            pl-4
                            placeholder-gray-500
                            focus:placeholder-opacity-0
                            inputLineCss
                            focus:outline-none
                            focus:ring-1
                            focus:border-326EB5Lins
                            focus:border-transparent
                        "
                        type="text"
                        placeholder=""
                    />
                </div>
                <div id="answer" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 回答 </label>
                    <label v-show="!validation.answer" style="color: red">
                        *
                    </label>
                    <div class="rounded-sm border mt-2">
                        <tinymce-edit v-model="base.answer.text"></tinymce-edit>
                    </div>
                    <div class="flex justify-end mt-1">
                        <input
                            v-model="base.answer.isKeep"
                            type="checkbox"
                            class="
                                form-checkbox
                                w-2.5
                                h-2.5
                                text-white
                                mt-1
                                ring-1 ring-grayline
                            "
                            checked
                        />
                        <label class="ml-1 notoSansJpAndTwelveRegular">
                            回答保留
                        </label>
                    </div>
                </div>
                <div>
                    <label class="notoSansJpAndSixteenBold"> 出典・引用 </label>
                    <div
                        class="
                            flex flex-col
                            md:flex-row
                            mt-2
                            space-y-2
                            md:space-y-0
                        "
                        v-for="(item, index) in base.source"
                        :key="index"
                    >
                        <div class="">
                            <input
                                v-model="item.name"
                                class="
                                    h-10
                                    w-88.75
                                    md:w-87.5
                                    NotoSansJp-normal
                                    rounded-sm
                                    pl-4
                                    placeholder-gray-500
                                    inputLineCss
                                    focus:placeholder-opacity-0
                                    focus:outline-none
                                    focus:ring-1
                                    focus:border-326EB5Lins
                                    focus:border-transparent
                                "
                                type="text"
                                placeholder="書籍・参考サイト名"
                            />
                        </div>
                        <div class="ml-0 md:ml-2.5">
                            <input
                                v-model="item.url"
                                class="
                                    h-10
                                    w-88.75
                                    md:w-87.5
                                    NotoSansJp-normal
                                    rounded-sm
                                    pl-4
                                    placeholder-gray-500
                                    focus:placeholder-opacity-0
                                    inputLineCss
                                    focus:outline-none
                                    focus:ring-1
                                    focus:border-326EB5Lins
                                    focus:border-transparent
                                "
                                type="text"
                                placeholder="URL（任意）"
                            />
                        </div>
                        <div class="ml-2.5 hidden md:block">
                            <input
                                type="button"
                                class="
                                    w-11.25
                                    bg-gray-400
                                    hover:opacity-50
                                    active:bg-bg-gray-200 active:opacity-100
                                    h-7.5
                                    md:h-10
                                    rounded-md
                                    notoSansJpAndTwelveBold
                                    text-white
                                    border-b-2 border-gray-500
                                "
                                @click="onClearItem(base.source, index)"
                                value="クリア"
                            />
                        </div>
                        <div
                            class="flex"
                            :class="
                                base.source.length == index + 1
                                    ? 'justify-between'
                                    : 'justify-end'
                            "
                        >
                            <div
                                class="bg-blue-400 block md:hidden"
                                :class="
                                    base.source.length == index + 1
                                        ? 'block'
                                        : 'hidden'
                                "
                            >
                                <input
                                    type="button"
                                    class="
                                        bg-blueline
                                        hover:opacity-50
                                        active:bg-bg-gray-200 active:opacity-100
                                        h-7
                                        md:h-7.5
                                        w-19.5
                                        rounded
                                        notoSansJpAndFourteenBold
                                        text-white
                                        border-b-2 border-bluelineB
                                    "
                                    @click="onAddSource"
                                    value="+追加"
                                />
                            </div>
                            <div class="bg-blue-500 block md:hidden">
                                <input
                                    type="button"
                                    class="
                                        w-11.25
                                        bg-gray-400
                                        hover:opacity-50
                                        active:bg-bg-gray-200 active:opacity-100
                                        h-7.5
                                        md:h-10
                                        rounded-md
                                        notoSansJpAndTwelveBold
                                        text-white
                                        border-b-2 border-gray-500
                                    "
                                    @click="onClearItem(base.source, index)"
                                    value="クリア"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <input
                    type="button"
                    class="
                        hidden
                        md:block
                        mt-2
                        bg-blueline
                        hover:opacity-50
                        active:bg-bg-gray-200 active:opacity-100
                        h-10
                        md:h-7
                        w-15
                        rounded-sm
                        notoSansJpAndFourteenBold
                        text-white
                        border-b-2 border-blue-400
                    "
                    @click="onAddSource"
                    value="+追加"
                />
                <div class="w-21 inline-block mt-2">
                    <a
                        :href="url.pmid.lable"
                        target="_blank"
                        class="flex items-center"
                    >
                        <label
                            class="
                                notoSansJpAndSixteenBold
                                underline
                                cursor-pointer
                            "
                        >
                            PubMed
                        </label>
                        <div class="hover:opacity-50 active:opacity-50">
                            <svg
                                id="_211012_ai_pharma_parts"
                                data-name="211012_ai_pharma_parts"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="w-3 h-3 mt-1 ml-1"
                            >
                                <path
                                    class="black"
                                    d="M32,5.12V12H28V6.83L17.41,17.41l-2.82-2.82L25.17,4H20V0h6.88A5.13,5.13,0,0,1,32,5.12ZM28,26.88A1.13,1.13,0,0,1,26.88,28H5.12A1.13,1.13,0,0,1,4,26.88V5.12A1.13,1.13,0,0,1,5.12,4H12V0H5.12A5.13,5.13,0,0,0,0,5.12V26.88A5.13,5.13,0,0,0,5.12,32H26.88A5.13,5.13,0,0,0,32,26.88V20H28Z"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
                <!-- <div class="flex-wrap mt-2"> -->
                <input
                    v-model="base.pmid"
                    class="
                        mt-2
                        block
                        h-10
                        w-full
                        md:w-1/2
                        NotoSansJp-normal
                        rounded-sm
                        pl-4
                        placeholder-gray-500
                        focus:placeholder-opacity-0
                        inputLineCss
                        focus:outline-none
                        focus:ring-1
                        focus:border-326EB5Lins
                        focus:border-transparent
                    "
                    type="text"
                    placeholder="PMID"
                    :onInput="onInputPmid"
                />
                <a :href="url.pmid.text" target="_blank" class="mt-2">
                    <label
                        class="
                            notoSansJpAndSixteenBold
                            underline
                            cursor-pointer
                            break-words
                        "
                    >
                        {{ url.pmid.text }}
                    </label>
                </a>
                <!-- </div> -->
                <div class="w-24 inline-block mt-2">
                    <a
                        :href="url.doi.lable"
                        target="_blank"
                        class="flex items-center"
                    >
                        <label
                            class="
                                notoSansJpAndSixteenBold
                                underline
                                cursor-pointer
                            "
                        >
                            J-STAGE
                        </label>
                        <div class="hover:opacity-50 active:opacity-50">
                            <svg
                                id="_211012_ai_pharma_parts"
                                data-name="211012_ai_pharma_parts"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="w-3 h-3 mt-1 ml-1"
                            >
                                <path
                                    class="black"
                                    d="M32,5.12V12H28V6.83L17.41,17.41l-2.82-2.82L25.17,4H20V0h6.88A5.13,5.13,0,0,1,32,5.12ZM28,26.88A1.13,1.13,0,0,1,26.88,28H5.12A1.13,1.13,0,0,1,4,26.88V5.12A1.13,1.13,0,0,1,5.12,4H12V0H5.12A5.13,5.13,0,0,0,0,5.12V26.88A5.13,5.13,0,0,0,5.12,32H26.88A5.13,5.13,0,0,0,32,26.88V20H28Z"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
                <!-- <div class="flex-wrap md:flex"> -->
                <input
                    v-model="base.doi"
                    class="
                        mt-2
                        block
                        h-10
                        w-full
                        md:w-1/2
                        NotoSansJp-normal
                        rounded-sm
                        pl-4
                        placeholder-gray-500
                        focus:placeholder-opacity-0
                        inputLineCss
                        focus:outline-none
                        focus:ring-1
                        focus:border-326EB5Lins
                        focus:border-transparent
                    "
                    type="text"
                    placeholder="DOI"
                    :onInput="onInputDoi"
                />
                <a :href="url.doi.text" target="_blank " class="ml-1 mt-2">
                    <label
                        class="
                            notoSansJpAndSixteenBold
                            underline
                            cursor-pointer
                            break-words
                        "
                    >
                        {{ url.doi.text }}
                    </label>
                </a>
                <!-- </div> -->

                <label class="notoSansJpAndSixteenBold"> ファイル </label>

                <div v-for="(item, index) in base.file" :key="index">
                    <div class="flex flex-row items-center">
                        <p class="ml-1 font-NotoSansJp text-mxs truncate">
                            {{ !!item.name ? item.name : '' }}
                        </p>
                        <div :class="!!item.name == '' ? 'hidden' : 'block'">
                            <x-icon-svg
                                class=""
                                @click="onClearItem(base.file, index)"
                            ></x-icon-svg>
                        </div>
                    </div>

                    <div class="flex justify-between items-center mt-2">
                        <div class="flex w-88.75 items-center">
                            <label
                                :for="'addFile_' + index"
                                class="
                                    flex
                                    items-center
                                    w-29.5
                                    h-7.5
                                    whitespace-nowrap
                                    bg-gray-300
                                    hover:opacity-50
                                    active:bg-bg-gray-200 active:opacity-100
                                    rounded-sm
                                    font-NotoSansJp
                                    px-2
                                    text-sm text-black text-center
                                    border border-gray-600
                                "
                                >ファイルを選択</label
                            >
                            <input
                                :id="'addFile_' + index"
                                class="hidden"
                                type="file"
                                @change="onFileChange"
                            />
                            <p class="ml-1 font-NotoSansJp text-mxs">
                                {{
                                    !!item.name
                                        ? ''
                                        : '※ファイルが選択されていません。'
                                }}
                            </p>
                            <div
                                :class="!!item.name == '' ? 'block' : 'hidden'"
                            >
                                <x-icon-svg
                                    class=""
                                    @click="onClearItem(base.file, index)"
                                ></x-icon-svg>
                            </div>
                        </div>
                        <!-- <input
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
                            @click="onClearItem(base.file, index)"
                            value="クリア"
                        /> -->
                    </div>
                </div>
                <input
                    type="button"
                    class="
                        mt-2
                        bg-blueline
                        hover:opacity-50
                        active:bg-bg-gray-200 active:opacity-100
                        h-10
                        md:h-7
                        w-15
                        rounded-sm
                        notoSansJpAndFourteenBold
                        text-white
                        border-b-2 border-blue-400
                    "
                    @click="onAddFile"
                    value="+追加"
                />
                <new-org-DI-record-buttons
                    id="bButtons"
                    parent="base"
                    :disableSave="!isValid"
                    @onTmpSaveEvent="tmpSaveEvent"
                    @onSaveEvent="saveEvent"
                >
                </new-org-DI-record-buttons>
                <hr class="mt-10" />
                <div
                    id="dTitle"
                    class="
                        notoSansJpAndTwentyEightBold
                        md:notoSansJpAndThirtyBold
                        text-gray-500 text-center
                    "
                >
                    詳細情報
                </div>
                <div id="mediTypes" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 薬の分類 </label>
                    <multiselectEdit
                        v-model="detail.mediTypes"
                        :multiSelectItemList="getMsItems('薬の分類')"
                    ></multiselectEdit>
                </div>
                <div id="quesClass" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 質問区分 </label>
                    <multiselectEdit
                        v-model="detail.quesClass"
                        :multiSelectItemList="getMsItems('質問区分')"
                    ></multiselectEdit>
                </div>
                <div id="mediName" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 医薬品名 </label>
                    <multiselectEdit
                        v-model="detail.mediName"
                        :multiSelectItemList="getMsItems('医薬品名')"
                    ></multiselectEdit>
                </div>
                <div id="sideEffects" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 副作用 </label>
                    <multiselectEdit
                        v-model="detail.sideEffects"
                        :multiSelectItemList="getMsItems('副作用')"
                    ></multiselectEdit>
                </div>
                <div id="keyWord" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> キーワード </label>
                    <multiselectEdit
                        v-model="detail.keyWord"
                        :multiSelectItemList="getMsItems('キーワード')"
                    ></multiselectEdit>
                </div>
                <div id="questioner" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 質問者 </label>
                    <div class="justify-between flex-wrap md:flex">
                        <vue-single-select
                            class="w-full md:w-1/2"
                            :name="'prefessionList'"
                            :default-value="-1"
                            placeholder="職種"
                            :default-input-attribs="{ tabindex: 1 }"
                            :default-options="getSsItems('職種')"
                            @selected="setPrefessionValue"
                            :leftLableDisp="false"
                            buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                            inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                              border border-transparent focus:outline-none"
                        ></vue-single-select>
                        <multiselectEdit
                            class="
                                flex-grow
                                mt-2
                                md:mt-0
                                ml-0
                                md:ml-2
                                w-full
                                md:w-0
                            "
                            v-model="detail.questioner.department"
                            :multiSelectItemList="getMsItems('質問者')"
                        ></multiselectEdit>
                    </div>
                </div>
                <div id="patientGender" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 患者性別 </label>
                    <vue-single-select
                        class="w-full md:w-1/2"
                        :name="'patientGenderList'"
                        :default-value="-1"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="getSsItems('患者性別')"
                        @selected="setPatientGenderValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                          border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
                <div id="references" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 参考資料 </label>
                    <multiselectEdit
                        v-model="detail.references"
                        :multiSelectItemList="getMsItems('参考資料')"
                    ></multiselectEdit>
                </div>
                <div id="diseaseName" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 疾患名 </label>
                    <multiselectEdit
                        v-model="$data['detail']['diseaseName']"
                        :multiSelectItemList="getMsItems('疾患名')"
                    ></multiselectEdit>
                </div>
                <div
                    v-for="(item, index) in qa_informations.custom_details"
                    :key="index"
                >
                    <div :id="'custom_details_' + item.id" class="mt-3">
                        <label class="notoSansJpAndSixteenBold">
                            {{ item.title }}
                        </label>
                        <vue-single-select
                            v-if="item.data_type == 'single'"
                            class="w-full"
                            :name="'singleSelect_' + item.id"
                            :default-value="0"
                            :default-input-attribs="{ tabindex: 1 }"
                            :default-options="
                                getItemsFromList(item.data, false)
                            "
                            v-model="
                                $data['detail']['custom_details'][index].value
                            "
                            @selectItemByMouse="setSingleSelectValue"
                            @selectItemByEnter="setSingleSelectValue"
                            :leftLableDisp="false"
                            buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                            inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                  border border-transparent focus:outline-none"
                        ></vue-single-select>

                        <multiselectEdit
                            v-if="item.data_type == 'multiple'"
                            v-model="
                                $data['detail']['custom_details'][index].value
                            "
                            :multiSelectItemList="item.data"
                        ></multiselectEdit>

                        <textarea
                            v-else-if="item.data_type == 'text'"
                            v-model="
                                $data['detail']['custom_details'][index].value
                            "
                            class="
                                block
                                w-full
                                NotoSansJp-normal
                                rounded-sm
                                pl-4
                                placeholder-gray-500
                                focus:placeholder-opacity-0
                                inputLineCss
                                focus:outline-none
                                focus:ring-1
                                focus:border-326EB5Lins
                                focus:border-transparent
                            "
                            type="text"
                            placeholder=""
                        ></textarea>
                    </div>
                </div>
                <div id="memo" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 備考 </label>
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
                            inputLineCss
                            focus:outline-none
                            focus:ring-1
                            focus:border-326EB5Lins
                            focus:border-transparent
                        "
                        type="text"
                        placeholder=""
                    ></textarea>
                </div>
                <div id="questionDate" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 質問日 </label>
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
                    <label class="notoSansJpAndSixteenBold"> 公開範囲 </label>
                    <div class="block">
                        <input
                            v-model="detail.publicRange"
                            type="checkbox"
                            class="form-checkbox w-3 h-3 text-white border"
                            checked
                        />
                        <label class="ml-0.5 font-NotoSansJp text-sm">
                            他施設（自施設、グループ施設以外）にも公開
                        </label>
                    </div>
                    <label
                        class="ml-4 font-NotoSansJp text-sm"
                        style="color: red"
                    >
                        ※公開に同意する場合にのみチェックを入れてください
                    </label>
                </div>
                <new-org-DI-record-buttons
                    id="dButtons"
                    parent="detail"
                    @onTmpSaveEvent="tmpSaveEvent"
                    @onSaveEvent="saveEvent"
                >
                </new-org-DI-record-buttons>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import newOrgDIRecordButtons from './newOrgDIRecordButtons.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../common/dateRange/litepie-datepicker.vue'
import tinymceEdit from './tinymceEdit.vue'
import multiselectEdit from './multiSelectEdit.vue'
import xIconSvg from '../common/svgImage/xIconSvg.vue'
const URL_BASE_PMID = "https://www.ncbi.nlm.nih.gov/pubmed/"
const URL_BASE_DOI = "http://www.google.com/"
const URL_API_QIS = "https://aipharma-rev.kit-ai.jp/api/qa/get_qa_informations"

export default {
  components: {
    newOrgDIRecordButtons,
    vueSingleSelect,
    litepieDatepicker,
    tinymceEdit,
    multiselectEdit,
    xIconSvg
  },
  data() {
    return {
      qa_informations: {},
      url: {
        pmid: {
          lable: 'https://www.pmda.go.jp/',
          text: '',
        },
        doi: {
          lable: 'http://www.google.com/',
          text: '',
        },
      },
      singleSelectItem: [
        { value: '0', title: '薬剤師' },
        { value: '1', title: '先生' },
        { value: '2', title: '看護師' },
      ],
      multiSelectItemListTest: [
        'AA',
        'BB',
        'CC',
        { label: 'A', value: 1 },
        { label: 'B', value: 2 },
        { label: 'C', value: 3 },
      ],
      base: {
        question: '',
        answer: {
          text: '',
          isKeep: false,
        },
        source: [
          {
            name: '',
            url: '',
          },
        ],
        pmid: '',
        doi: '',
        file: [
          {
            name: '',
            content: '',
          },
        ],
      },
      detail: {
        mediTypes: [],
        quesClass: [],
        mediName: [],
        sideEffects: [],
        keyWord: [],
        questioner: {
          prefession: '',
          department: [],
        },
        patientGender: '',
        references: [],
        diseaseName: [],
        memo: '',
        questionDate: '',
        publicRange: false,
        custom_details: {

        },
      },
    }
  },
  methods: {
    onInputPmid(e) {
      // console.log('onChangeURL',e)
      if (!!e.target.value) {
        this.url.pmid.text = URL_BASE_PMID + e.target.value
      } else {
        this.url.pmid.text = ''
      }
    },
    onInputDoi(e) {
      // console.log('onChangeURL',e)
      if (!!e.target.value) {
        this.url.doi.text = URL_BASE_DOI + e.target.value
      } else {
        this.url.doi.text = ''
      }
    },
    onClearItem: function (list, index) {
      if (list.length > 1) {
        list.splice(index, 1)
      } else {
        Object.keys(list[0]).map((key) => {
          list[0][key] = null
        })
      }
    },
    onAddFile: function () {
      this.base.file.push({ name: '', content: '' })
    },
    onAddSource: function () {
      this.base.source.push({ name: '', url: '' })
    },
    onFileChange(e) {
      // console.log('onFileChange-1', e)
      const idx = e.target.id.slice(e.target.id.lastIndexOf('_') + 1)
      if (e.target.files.length == 0) return
      const fs = e.target.files
      // document.getElementById(e.target.id).value = '';
      this.addFile(fs, idx)
      e.target.value = ''
    },
    addFile(files, idx) {
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        let f = {
          name: file.name,
        }
        reader.onload = () => {
          Object.assign(f, { content: reader.result })
          // this.base.file.push(f)
          this.base.file[idx] = f
        }
      }
    },
    setPrefessionValue(value) {
      this.detail.questioner.prefession = value
    },
    setPatientGenderValue(value) {
      this.detail.patientGender = value
    },
    setSingleSelectValue(event) {
      var id = ''
      var value = ''
      // valueの取得
      if (event.type == 'click') {
        value = event.target.childNodes[0].innerHTML
      } else {
        value = event.target.value
      }

      // idの取得
      var node = event.target.parentNode
      const limit = 10
      for (let i = 0; i < limit; i++) {
        if (!node.id.startsWith('custom_details_')) {
          node = node.parentNode
        } else {
          id = node.id.slice('custom_details_'.length)
          break
        }
      }

      if (!id || !value) {
        console.log('setSingleSelectValue-falied', event)
      } else {
        for (const cd of this.detail.custom_details) {
          if (cd.id == id && cd.type == 'single') {
            cd.value = value
            break
          }
        }
      }
    },
    tmpSaveEvent(kind) {
      if (kind == 'base') {
        console.log('tmpSaveEvent', this.base)
      } else {
        console.log('tmpSaveEvent', this.detail)
      }
    },
    saveEvent(kind) {
      if (kind == 'base') {
        console.log('saveEvent', this.base)
      } else {
        console.log('saveEvent', this.detail)
      }
    },
    get_qa_informations() {
      // var xhr = new XMLHttpRequest()
      // xhr.withCredentials = false;
      // xhr.open('GET', URL_API_QIS)
      // xhr.onload = function() {
      //   if (xhr.status != 200) {
      //     console.log('HTTP Error: ' + xhr.status)
      //   } else {
      //     this.qa_informations = JSON.parse(xhr.responseText)
      //   }
      // };
      // xhr.send();


      var result = JSON.parse('{"qa_classify_class":[{"id":"","name":"薬の分類"},{"id":1,"name":"医療用医薬品（内服薬）"},{"id":2,"name":"医療用医薬品（注射薬）"},{"id":3,"name":"医療用医薬品（外用薬-塗布）"},{"id":4,"name":"医療用医薬品（外用薬-貼付）"},{"id":5,"name":"医療用医薬品（外用薬-吸入）"},{"id":6,"name":"医療用医薬品（外用薬-点眼）"},{"id":7,"name":"医療用医薬品（外用薬-その他）"},{"id":8,"name":"医療用医薬品（歯科用）"},{"id":9,"name":"一般医薬品・要指導医薬品"},{"id":10,"name":"体外診断用医薬品"},{"id":11,"name":"治験薬"},{"id":12,"name":"医療機器・医療資材・衛生材料"},{"id":13,"name":"院内製剤・薬品"},{"id":14,"name":"食品"},{"id":15,"name":"不明"},{"id":16,"name":"その他"}],"approvals":[{"id":"","name":"全て"},{"id":0,"name":"未承認"},{"id":1,"name":"承認済"},{"id":2,"name":"見送り"}],"medicine_tags":["医薬品A","医薬品B","医薬品名","医薬品名２","ヨクネムール","med3","med1","med2","医薬品テスト","テスト","テスト薬2020/12/14","3,4-ジアミノピリジン　"],"keyword_tags":["キーワードA","キーワードB","キーワード①","キーワード②","key3","key1","key2","キーワードテスト"],"asked_person_medical_departments":["内科","外科","shinryou3","shinryou1","shinryou2","診療科テスト"],"qa_reference_material_lists":[{"id":"","name":"参考資料"},{"id":6,"name":"添付文書"},{"id":1,"name":"インタビューフォーム"},{"id":14,"name":"RMP"},{"id":15,"name":"製薬企業－資料（製品情報、配合変化表、患者資材等）"},{"id":16,"name":"製薬企業－コールセンター・MR"},{"id":17,"name":"製薬企業－ホームページ"},{"id":7,"name":"製薬会社"},{"id":9,"name":"書籍"},{"id":8,"name":"文献・論文"},{"id":2,"name":"会議録（学会要旨等）"},{"id":3,"name":"ガイドライン"},{"id":18,"name":"院内資料"},{"id":19,"name":"院内システム（部門システム等）"},{"id":5,"name":"資料"},{"id":10,"name":"ホームページ"},{"id":11,"name":"他病院・薬局の事例"},{"id":20,"name":"経験・症例"},{"id":21,"name":"専門医の意見・見解（エキスパート・オピニオン）"},{"id":4,"name":"質疑応答DB"},{"id":12,"name":"不明"},{"id":13,"name":"その他"}],"qa_category_lists":[{"id":"","name":"質問区分"},{"id":1,"name":"小児"},{"id":2,"name":"高齢者"},{"id":3,"name":"妊娠・授乳婦"},{"id":4,"name":"過敏症"},{"id":5,"name":"腎障害・透析"},{"id":6,"name":"肝障害"},{"id":7,"name":"配合変化・フィルター"},{"id":8,"name":"相互作用"},{"id":9,"name":"安定性・使用期限"},{"id":10,"name":"医薬品鑑別"},{"id":11,"name":"価格・処方制限"},{"id":12,"name":"警告・禁忌"},{"id":13,"name":"効能・効果"},{"id":14,"name":"採用の有無・請求方法"},{"id":15,"name":"手続き・制度"},{"id":16,"name":"製品不具合の調査"},{"id":17,"name":"資材関連"},{"id":18,"name":"処方の仕方"},{"id":19,"name":"製薬会社連絡"},{"id":20,"name":"組成・剤形・規格"},{"id":21,"name":"中毒"},{"id":22,"name":"調整方法"},{"id":23,"name":"TDM・体内動態"},{"id":24,"name":"副作用"},{"id":25,"name":"粉砕・簡易懸濁"},{"id":26,"name":"薬物治療・ガイドライン"},{"id":27,"name":"用法・用量"},{"id":28,"name":"漢方・生薬"},{"id":29,"name":"不明"},{"id":30,"name":"その他"},{"id":32,"name":"shi3"},{"id":33,"name":"shi1"},{"id":34,"name":"shi2"}],"asked_persons_class":[{"id":"","name":"職種"},{"id":1,"name":"患者・患者家族"},{"id":2,"name":"医師"},{"id":26,"name":"研修医師"},{"id":3,"name":"歯科医師"},{"id":27,"name":"研修歯科医師"},{"id":4,"name":"薬剤師"},{"id":5,"name":"看護師"},{"id":6,"name":"助産師"},{"id":7,"name":"理学療法士(PT)"},{"id":8,"name":"臨床工学技士(ME)"},{"id":9,"name":"臨床検査技師(CT)"},{"id":10,"name":"放射線技師(RT)"},{"id":11,"name":"栄養士"},{"id":12,"name":"ケアマネージャー"},{"id":13,"name":"保健師"},{"id":14,"name":"衛生検査技師"},{"id":15,"name":"作業療法士"},{"id":16,"name":"言語聴覚士"},{"id":17,"name":"救急救命士"},{"id":18,"name":"鍼灸師"},{"id":19,"name":"歯科衛生士"},{"id":20,"name":"歯科技工士"},{"id":21,"name":"事務"},{"id":24,"name":"SPD"},{"id":25,"name":"保育士"},{"id":22,"name":"不明"},{"id":23,"name":"その他"}],"patient_gender":[{"id":0,"name":"未選択"},{"id":1,"name":"男"},{"id":2,"name":"女"},{"id":3,"name":"不明"}],"side_effects":["副作用","副作用２","副作用3","副作用④","副作用③","huku3","huku1","huku2","あたらしい副作用"],"diseases":["疾患名","疾患名２","疾患名３","睡眠障害","睡眠睡眠睡眠睡眠睡眠不足","shikka3","shikkan1","shikkan2","あたらしい疾患名"],"custom_details":[{"id":1,"title":"シングルセレクト項目","data_type":"single","data":["シングルセレクト選択肢１","シングルセレクト選択肢２","3333333333"]},{"id":2,"title":"マルチセレクト項目","data_type":"multiple","data":["マルチセレクト選択肢１","マルチセレクト選択肢２"]},{"id":3,"title":"テキスト項目","data_type":"text"},{"id":5,"title":"マルチセレクトのテスト","data_type":"multiple","data":["マルチセレクトのテスト1","マルチセレクトのテスト2","マルチセレクトのテスト3","マルチセレクトのテスト4"]},{"id":6,"title":"マルチセレクト6","data_type":"multiple","data":["ワン","ツー","さん","ごー","ロックンロール","し"]},{"id":7,"title":"引用","data_type":"multiple","data":["ハンドブック","UP TO DATE","薬剤部本部からの情報"]},{"id":8,"title":"引用その他","data_type":"text"},{"id":12,"title":"カスタム項目シングル①②③④⑤⑥⑦⑧⑨⓪","data_type":"single","data":["カスタム選択肢１⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪","カスタム選択肢２⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪"]},{"id":13,"title":"マルチセレクト項目⓪①②③④⑤⑥⑦⑧⑨⓪","data_type":"multiple","data":["マルチ選択肢１⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪","マルチ選択肢２⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪①②③④⑤⑥⑦⑧⑨⓪"]},{"id":15,"title":"ms1015","data_type":"multiple","data":["a","b","c"]}],"status":"success"}')
      // console.log('get_qa_informations', result)
      this.qa_informations = result
    },
    initCustomDetails() {
      const custom_details = this.qa_informations.custom_details
      var result = []
      custom_details.map(cd => {
        switch (cd.data_type) {
          case 'single':
          case 'text':
            result.push({
              id: cd.id,
              type: cd.data_type,
              title: cd.title,
              value: ''
            })
            break
          case 'multiple':
            result.push({
              id: cd.id,
              type: cd.data_type,
              title: cd.title,
              value: []
            })
            break
          default:
            console.log('initCustomDetails-failed', cd)
        }
      })
      this.detail.custom_details = result
    },
    getItemsFromList(list, multiple = true) {
      if (multiple) {
        if (typeof list[0] == 'string')
          return list
        else {
          // list of object
          var result = []
          list.map((node) => {
            if (!node.id) return
            result.push(node.name)
          })
          return result
        }
      } else {
        var result = []
        // list of object
        list.map((node) => {
          var item = {}
          if (typeof node == 'string') {
            item = { value: node, title: node }
          } else {
            if (!node.id) return

            item = { value: node.id, title: node.name }
          }
          result.push(item)
        })
        return result
      }
    },

    getSsItems(title) {
      const qais = this.qa_informations
      var result = []

      Object.keys(qais).map((key) => { // map of object
        try {
          if (key == 'custom_details' || !(qais[key] instanceof Array)) return
          // console.log(key,qais[key])
          if (!qais[key][0].id && qais[key][0].name == title) {

            // qais[key].splice(0, 1)
            result = this.getItemsFromList(qais[key], false)
          }
        } catch (error) {
          console.log('getSsItems-error:', key, error)
        }
      })
      if (result.length == 0) {
        switch (title) {
          case '患者性別':
            result = this.getItemsFromList(qais.patient_gender, false)
            break
          default:
            console.log('getSsItems-failed', title)
        }
      }
      return result
    },
    getMsItems(title) {
      const qais = this.qa_informations
      var result = []

      Object.keys(qais).map((key) => { // map of object
        try {
          if (key == 'custom_details' || !(qais[key] instanceof Array)) return
          // console.log(key,qais[key])
          if (!qais[key][0].id && qais[key][0].name == title) {

            // qais[key].splice(0, 1)
            result = this.getItemsFromList(qais[key])
          }
        } catch (error) {
          console.log('getMsItems-error:', key, error)
        }
      })
      if (result.length == 0) {
        switch (title) {
          case 'キーワード':
            result = this.getItemsFromList(qais.keyword_tags)
            break
          case '医薬品名':
            result = this.getItemsFromList(qais.medicine_tags)
            break
          case '副作用':
            result = this.getItemsFromList(qais.side_effects)
            break
          case '質問者':
            result = this.getItemsFromList(qais.asked_person_medical_departments)
            break
          case '疾患名':
            result = this.getItemsFromList(qais.diseases)
            break
          default:
            console.log('getMsItems-failed', title)
        }
      }
      return result
    },
  },
  created() {
    this.get_qa_informations()
    this.initCustomDetails()
  },
  computed: {
    validation() {
      const base = this.base
      return {
        question: !!base.question,
        answer: !!base.answer.text,
      }
    },
    isValid() {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    },
  },
}
</script>
<style></style>
