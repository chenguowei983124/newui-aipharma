<template>
    <div class="flex border-b-2 border-blue-200 mt-5 md:h-10 max-h-screen">
        <!-- 左 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div
            class="
                flex flex-col
                w-full
                md:w-191.25
                justify-center
                mx-2
                md:mx-0
                mb-5
            "
        >
            <div class="text-googleTitle notoSansJpAndTwentyFourBold">
                掲示板 登録
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
                <div id="patientGender" class="mt-3">
                    <div class="flex">
                        <label class="notoSansJpAndSixteenBold">
                            公開範囲
                        </label>
                        <label class="text-red-500 ml-1"> * </label>
                    </div>
                    <vue-single-select
                        class="w-full md:w-1/2"
                        :name="'patientGenderList'"
                        :default-value="-1"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.bbsScops"
                        @selected="setScopeValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                          border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
                <div id="patientGender" class="mt-3">
                    <div class="flex">
                        <label class="notoSansJpAndSixteenBold">
                            ジャンル
                        </label>
                        <label class="text-red-500 ml-1"> * </label>
                    </div>
                    <vue-single-select
                        class="w-full md:w-1/2"
                        :name="'patientGenderList'"
                        :default-value="-1"
                        :default-input-attribs="{ tabindex: 1 }"
                        :default-options="$constant.bbsGenre"
                        @selected="setPatientGenderValue"
                        :leftLableDisp="false"
                        buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0"
                        inputStyle="w-full text-left notoSansJpAndFourteenRegular pl-2 border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                          border border-transparent focus:outline-none"
                    ></vue-single-select>
                </div>
                <div id="memo" class="mt-3">
                    <div class="flex">
                        <label class="notoSansJpAndSixteenBold">
                            タイトル
                        </label>
                        <label class="text-red-500 ml-1"> * </label>
                    </div>
                    <textarea
                        v-model="base.title"
                        class="
                            block
                            w-full
                            NotoSansJp-normal
                            rounded-sm
                            pl-4
                            placeholder-gray-500
                            focus:placeholder-opacity-0
                            ring-1
                            border-transparent border-grayline
                            focus:outline-none
                            focus:ring-1
                            focus:ring-326EB5Lins
                            focus:border-transparent
                        "
                        type="text"
                        placeholder=""
                    ></textarea>
                </div>
                <div id="patientGender" class="mt-3">
                    <div class="flex">
                        <label class="notoSansJpAndSixteenBold"> 本文 </label>
                        <label class="text-red-500 ml-1"> * </label>
                    </div>
                    <editor
                        api-key="wymbw7u3lecjz7f30u9h8j0b174d0zrusk9f2j7ey9eu3xlz"
                        initialValue="<p>Initial editor content</p>"
                        v-model="this.base.answer"
                        :init="{
                            selector: 'textarea#drive-demo',
                            height: 200,
                            menubar: false,
                            statusbar: false,
                            content_style: `p{line-height: 1;} body {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;line-height: 1.0; margin: 1rem;}`,

                            plugins:
                                'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
                            toolbar:
                                'myButton | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image table media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                            images_upload_handler: images_upload_handler,
                        }"
                    />
                </div>
                <div id="mediTypes" class="mt-3">
                    <label class="notoSansJpAndSixteenBold"> タグ </label>
                    <Multiselect
                        class="h-7.5"
                        mode="tags"
                        v-model="base.tags"
                        :closeOnSelect="false"
                        :searchable="true"
                        :createTag="true"
                        :options="[
                            { value: 'batman', label: 'Batman' },
                            { value: 'robin', label: 'Robin' },
                            { value: 'joker', label: 'Joker' },
                        ]"
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>
                <new-org-DI-record-buttons
                    id="bButtons"
                    parent="base"
                    :disableSave="!isValid"
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
import newOrgDIRecordButtons from './newBbsRecordButtons.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../common/dateRange/litepie-datepicker.vue'
import tinymceEdit from './bbsTinymceEdit.vue'
import Multiselect from '@vueform/multiselect'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: {
        newOrgDIRecordButtons,
        vueSingleSelect,
        litepieDatepicker,
        tinymceEdit,
        Multiselect,
        Editor,
    },
    data() {
        return {
            qa_informations: {},

            base: {
                scope: '',
                genre: '',
                title: '',
                answer: {
                    text: '',
                    isKeep: false,
                },
                tags: [],
            },
        }
    },
    methods: {
        setPatientGenderValue(value) {
            this.base.genre = value
        },
        setScopeValue(value) {
            this.base.scope = value
        },
    },

    computed: {
        validation() {
            const base = this.base
            return {
                question: !!base.scope,
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
