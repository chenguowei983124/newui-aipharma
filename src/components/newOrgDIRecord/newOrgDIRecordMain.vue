<template>
    <div class="flex border-b-2 border-unlineblue mt-8 md:h-20">
        <!-- 左 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div
            class="flex flex-col w-full md:w-191.25 justify-center mx-2 md:mx-0"
        >
            <div class="text-googleTitle notoSansJpAndTwentyFourBold">
                組織内DI 記録（Q&A） {{ title }}
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
    <div class="flex pt-8">
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
                    <label class="notoSansJpAndSixteenBold">
                        質問・タイトル
                    </label>
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
                    <div class="rounded-sm border mt-2" aria-readonly="true">
                        <editor
                            :api-key="$constant.APIKEY"
                            initialValue="<p>Initial editor content</p>"
                            v-model="base.answer.text"
                            :init="{
                                selector: 'textarea#drive-demo',
                                height: 200,
                                readonly: true,
                                menubar: false,
                                statusbar: false,
                                plugins:
                                    'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
                                toolbar:
                                    ' undo redo | bold italic underline strikethrough | fontsizeselect forecolor removeformat | alignleft aligncenter alignright alignjustify |  numlist bullist | image table link | fullscreen  preview pagebreak ',
                            }"
                        />
                        <!-- <tinymce-edit v-model="base.answer.text"></tinymce-edit> -->
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
                                v-model="item.title"
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
                            {{ !!item.filename ? item.filename : '' }}
                        </p>
                        <div
                            :class="!!item.filename == '' ? 'hidden' : 'block'"
                        >
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
                                    !!item.filename
                                        ? ''
                                        : '※ファイルが選択されていません。'
                                }}
                            </p>
                            <div
                                :class="
                                    !!item.filename == '' ? 'block' : 'hidden'
                                "
                            >
                                <x-icon-svg
                                    class=""
                                    @click="onClearItem(base.file, index)"
                                ></x-icon-svg>
                            </div>
                        </div>
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
                    @onCancelEvent="cancelEvent"
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
                    <Multiselect
                        mode="tags"
                        v-model="detail.mediTypes"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="false"
                        :options="
                            $store.getters.getCommonInfo_qa_classify_class
                        "
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>
                <div id="quesClass" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 質問区分 </label>
                    <Multiselect
                        mode="tags"
                        v-model="detail.quesClass"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="false"
                        :options="
                            $store.getters.getCommonInfo_qa_category_lists
                        "
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>
                <div id="mediName" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 医薬品名 </label>
                    <Multiselect
                        mode="tags"
                        v-model="detail.mediName"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="false"
                        :options="$store.getters.getCommonInfo.medicine_tags"
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>
                <div id="sideEffects" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 副作用 </label>
                    <Multiselect
                        mode="tags"
                        v-model="detail.sideEffects"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="false"
                        :options="$store.getters.getCommonInfo.side_effects"
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>
                <div id="keyWord" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> キーワード </label>
                    <multiselectEdit
                        v-model="detail.keyWord"
                        :multiSelectItemList="
                            $store.getters.getCommonInfo.keyword_tags
                        "
                    ></multiselectEdit>
                </div>
                <div id="questioner" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 質問者 </label>
                    <!-- <div class="flex space-x-2"> -->
                    <vue-single-select
                        class="w-42.5"
                        ref="AskedPerson"
                        :name="'patientGenderList'"
                        :default-value="detail.questioner.prefession"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="
                            $store.getters.getCommonInfo_AskedPerson
                        "
                        @selected="setPrefessionValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                              border border-transparent focus:outline-none"
                    ></vue-single-select>

                    <Multiselect
                        mode="tags"
                        v-model="detail.questioner.department"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="false"
                        :options="
                            $store.getters.getCommonInfo
                                .asked_person_medical_departments
                        "
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                    <!-- </div> -->
                </div>
                <div id="patientGender" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 患者性別 </label>
                    <vue-single-select
                        class="w-42.5"
                        :name="'patientGenderList'"
                        :default-value="detail.patientGender"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="
                            $store.getters.getCommonInfo_PatientGgender
                        "
                        :leftLableDisp="false"
                        @selected="setPatientGenderValue"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                              border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
                <div id="references" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 参考資料 </label>
                    <Multiselect
                        mode="tags"
                        v-model="detail.references"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="false"
                        :options="
                            $store.getters.getCommonInfo.qa_reference_material_lists.map(
                                (item) => {
                                    return {
                                        value: item.name,
                                        label: item.name,
                                    }
                                }
                            )
                        "
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>
                <div id="diseaseName" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> 疾患名 </label>
                    <Multiselect
                        mode="tags"
                        v-model="$data['detail']['diseaseName']"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="false"
                        :options="$store.getters.getCommonInfo.diseases"
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>
                <div
                    v-for="(item, index) in $store.getters.getCommonInfo
                        .custom_details"
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
                            :default-value="
                                $data['detail']['custom_details'][index].value
                            "
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

                        <Multiselect
                            mode="tags"
                            v-model="
                                $data['detail']['custom_details'][index].value
                            "
                            :closeOnSelect="false"
                            :searchable="true"
                            :createTag="false"
                            :options="item.data"
                            :classes="$constant.multiselectCss"
                            v-if="item.data_type == 'multiple'"
                        ></Multiselect>

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
                    @onCancelEvent="cancelEvent"
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
const URL_BASE_PMID = 'https://www.ncbi.nlm.nih.gov/pubmed/'
const URL_BASE_DOI = 'http://www.google.com/'
const URL_API_QIS = 'https://aipharma-rev.kit-ai.jp/api/qa/get_qa_informations'
import Multiselect from '@vueform/multiselect'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: {
        newOrgDIRecordButtons,
        vueSingleSelect,
        litepieDatepicker,
        tinymceEdit,
        Multiselect,
        multiselectEdit,
        xIconSvg,
        Editor,
    },
    data() {
        return {
            qa_informations: {},
            title:
                JSON.stringify(this.$route.query) !== '{}' &&
                this.$route.query.id !== ''
                    ? '編集'
                    : '投稿',
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

            base: {
                question: '',
                answer: {
                    text: '',
                    isKeep: true,
                },
                source: [
                    {
                        title: '',
                        url: '',
                    },
                ],
                pmid: '',
                doi: '',
                file: [
                    {
                        filename: '',
                        base64: '',
                        filetype: '',
                        filesize: '',
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
                custom_details: {},
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
            this.base.file.push({
                filetype: '',
                filesize: '',
                filename: '',
                base64: '',
            })
        },
        onAddSource: function () {
            this.base.source.push({ title: '', url: '' })
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
                console.log(file)
                const reader = new FileReader()
                reader.readAsDataURL(file)
                let f = {
                    filename: file.name,
                    filesize: file.size,
                    filetype: file.type,
                }
                reader.onload = () => {
                    Object.assign(f, { base64: reader.result })
                    // this.base.file.push(f)
                    this.base.file[idx] = f
                }
                console.log(this.base.file)
            }
        },
        setPrefessionValue(value) {
            console.log(value)
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
            let param = this.setParam()

            console.log(param)
            this.$serve.postOwnQA(param).then((res) => {
                if (res.data.status === 'success') {
                    this.$swal
                        .fire({
                            text: '一時保存に成功しました。',
                            icon: '',
                            showCancelButton: false,
                            confirmButtonText: 'OK',
                        })
                        .then(() => {
                            this.$router.go(-1)
                        })
                } else {
                    this.$swal
                        .fire({
                            text: '一時保存に失敗しました。',
                            icon: '',
                            showCancelButton: false,
                            confirmButtonText: 'OK',
                        })
                        .then(() => {})
                }
            })
        },
        saveEvent(kind) {
            let param = this.setParam()
            Object.assign(param.qa, { id: this.$route.query.id })

            console.log(param)
            this.$serve.postUpdateOwnQA(param).then((res) => {
                if (res.data.status === 'success') {
                    this.$swal
                        .fire({
                            text: '投稿に成功しました。',
                            icon: '',
                            showCancelButton: false,
                            cancelButtonText: 'キャンセル',
                            confirmButtonText: 'OK',
                        })
                        .then(() => {
                            // this.clearInput()
                            this.$router.go(-1)
                        })
                } else {
                    this.$swal
                        .fire({
                            text: '投稿に失敗しました。',
                            icon: '',
                            showCancelButton: false,
                            confirmButtonText: 'OK',
                        })
                        .then(() => {})
                }
            })
        },
        cancelEvent() {
            this.$router.go(-1)
        },
        setParam() {
            let qaCustomDetails = []
            console.log(this.detail.custom_details[0].id)
            for (let i = 0; i < this.detail.custom_details.length; i++) {
                let item = {
                    customDetailId: this.detail.custom_details[i].id,

                    text:
                        this.detail.custom_details[i].type === 'text'
                            ? this.detail.custom_details[i].value
                            : '',
                    customChoiceNameSingle:
                        this.detail.custom_details[i].type === 'multiple'
                            ? this.detail.custom_details[i].value
                            : [],
                    customChoiceNameMultiple:
                        this.detail.custom_details[i].type === 'single'
                            ? this.detail.custom_details[i].value
                            : [],
                }
                qaCustomDetails.push(item)
            }
            let param = {
                qa: {
                    shareScope: this.detail.publicRange,
                    patientGender: this.detail.patientGender,
                    qaSource: this.base.source,
                    qaPubmeds: {
                        name: this.base.pmid,
                    },
                    qaDocuments: {
                        file: this.base.files,
                    },
                    qaMedicines: this.detail.mediName,
                    keywordTags: this.detail.keyWord,
                    qaAskedPersonMedicalDepartments:
                        this.detail.questioner.department,
                    qaSideEffects: this.detail.sideEffects,
                    qaDiseases: this.detail.diseaseName,
                    answer: this.base.answer.text,
                    askedAt: this.detail.questionDate,
                    qaCustomDetails: qaCustomDetails,
                    question: this.base.question,
                    qaQaClassifyClasses: this.detail.mediTypes,
                    categories: '',
                    referenceMaterials: this.detail.references,
                    note: this.detail.memo,
                    askedPersonClassId: this.detail.questioner.prefession,
                    publishFlag: 0,
                },
            }
            return param
        },
        initCustomDetails() {
            const custom_details =
                this.$store.getters.getCommonInfo.custom_details
            var result = []
            custom_details.map((cd) => {
                switch (cd.data_type) {
                    case 'single':
                    case 'text':
                        result.push({
                            id: cd.id,
                            type: cd.data_type,
                            title: cd.title,
                            value: '',
                        })
                        break
                    case 'multiple':
                        result.push({
                            id: cd.id,
                            type: cd.data_type,
                            title: cd.title,
                            value: [],
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
                console.log('result1', typeof list[0])
                if (typeof list[0] == 'string') return list
                else {
                    // list of object
                    var result = []
                    list.map((node) => {
                        if (!node.id) return
                        result.push(node.name)
                    })
                    console.log('result2', result)
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

                        item = { value: node.name, title: node.name }
                    }
                    result.push(item)
                })
                console.log('result3', result)
                return result
            }
        },

        getSsItems(title) {
            const qais = this.qa_informations
            var result = []

            Object.keys(qais).map((key) => {
                // map of object
                try {
                    if (
                        key == 'custom_details' ||
                        !(qais[key] instanceof Array)
                    )
                        return
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
                        result = this.getItemsFromList(
                            qais.patient_gender,
                            false
                        )
                        break
                    default:
                        console.log('getSsItems-failed', title)
                }
            }
            return result
        },
        getMsItems(title) {
            const qais = this.$store.getters.getCommonInfo
            var result = []

            Object.keys(qais).map((key) => {
                // map of object
                try {
                    if (
                        key == 'custom_details' ||
                        !(qais[key] instanceof Array)
                    )
                        return
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
                        result = this.getItemsFromList(
                            qais.asked_person_medical_departments
                        )
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
        // 検索結果画面で編集押下時、IDよりデータ取得
        async doSearch() {
            this.dispEditor = false

            let result = this.$serve
                .getOwnEditInfo(this.$route.query.id)
                .then((res) => {
                    console.log(res.data.qa)
                    this.base.question = res.data.qa.question
                    this.base.answer.text = res.data.qa.answer
                    this.base.source = res.data.qa.qaSource
                    this.base.pmid = res.data.qa.pubmed
                    this.url.pmid.text = URL_BASE_PMID + res.data.qa.pubmed

                    // this.base.doi = res.data.qas[0].doi
                    // this.base.doi = res.data.qas[0].urls.doi
                    // for (
                    //     let i = 0;
                    //     i <= res.data.qas[0].documents.length;
                    //     i++
                    // ) {
                    //     this.base.file.filename =
                    //         res.data.qas[0].documents[i].name
                    // }
                    // 薬の分類
                    for (
                        let i = 0;
                        i < res.data.qa.qaClassifyClasses.length;
                        i++
                    ) {
                        this.detail.mediTypes.push(
                            res.data.qa.qaClassifyClasses[i].name
                        )
                    }
                    // 質問区分

                    for (let i = 0; i < res.data.qa.categories.length; i++) {
                        this.detail.quesClass.push(
                            res.data.qa.categories[i].name
                        )
                    }

                    // 医薬品名
                    for (let i = 0; i < res.data.qa.medicines.length; i++) {
                        this.detail.mediName.push(res.data.qa.medicines[i].name)
                    }

                    // 副作用
                    for (let i = 0; i < res.data.qa.sideEffects.length; i++) {
                        this.detail.sideEffects.push(
                            res.data.qa.sideEffects[i].name
                        )
                    }

                    // キーワード
                    for (let i = 0; i < res.data.qa.keywordTags.length; i++) {
                        this.detail.keyWord.push(
                            res.data.qa.keywordTags[i].name
                        )
                    }

                    // 質問者
                    this.detail.questioner.prefession =
                        res.data.qa.askedPersonClassName
                    for (
                        let i = 0;
                        i < res.data.qa.askedPersonMedicalDepartments.length;
                        i++
                    ) {
                        this.detail.questioner.department.push(
                            res.data.qa.askedPersonMedicalDepartments[i].name
                        )
                    }

                    // 患者性別
                    this.detail.patientGender = res.data.qa.patientGender

                    // 参照資料
                    for (
                        let i = 0;
                        i < res.data.qa.referenceMaterials.length;
                        i++
                    ) {
                        this.detail.references.push(
                            res.data.qa.referenceMaterials[i].name
                        )
                    }

                    // 疾患名
                    for (let i = 0; i < res.data.qa.diseases.length; i++) {
                        this.detail.diseaseName.push(
                            res.data.qa.diseases[i].name
                        )
                    }
                    // カスタム項目
                    for (let i = 0; i < res.data.qa.customDetails.length; i++) {
                        for (
                            let j = 0;
                            j < this.detail.custom_details.length;
                            j++
                        ) {
                            if (
                                this.detail.custom_details[j].id ===
                                res.data.qa.customDetails[i].id
                            ) {
                                this.detail.custom_details[j].value =
                                    res.data.qa.customDetails[i].data
                            }
                        }
                    }

                    // 備考
                    this.detail.memo = res.data.qa.note
                    // 公開範囲
                    if (res.data.qa.shareScope === '全体公開') {
                        this.detail.publicRange = true
                    } else {
                        this.detail.publicRange = false
                    }

                    // 質問日
                    this.detail.questionDate = res.data.qa.createdAt
                })
        },
    },
    created() {
        // this.get_qa_informations()
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
    mounted() {
        if (
            JSON.stringify(this.$route.query) !== '{}' &&
            this.$route.query.id !== ''
        ) {
            this.doSearch()
        }
    },
}
</script>
<style></style>
