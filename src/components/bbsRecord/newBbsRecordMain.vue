<template>
    <div class="flex border-b-2 border-blue-200 mt-5 md:h-10">
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
                pt-0
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
                        :default-value="this.base.scope"
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
                        :default-value="this.base.genre"
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
                        v-model="base.answer"
                        :init="{
                            selector: 'textarea#drive-demo',
                            height: 200,
                            menubar: false,
                            statusbar: false,
                            plugins: 'advlist lists',
                            toolbar:
                                'undo redo | bold italic underline strikethrough | numlist bullist | ',
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
import Multiselect from '@vueform/multiselect'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: {
        newOrgDIRecordButtons,
        vueSingleSelect,
        litepieDatepicker,
        Multiselect,
        Editor,
    },
    data() {
        return {
            qa_informations: {},
            params: {},
            base: {
                scope: '',
                genre: '',
                title: '',
                answer: '',
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
        tmpSaveEvent() {},
        saveEvent() {},
        async doSearch() {
            this.dispEditor = false
            this.InputComment = ''
            await this.$serve.postReadfeedbacks(this.id, '')

            Object.assign(this.params, { division: 'BBS' })
            const response = await this.$serve.getPostsrforId(
                '',
                this.$route.query.id
            )
            console.log(response.data.data[0].post.genre)
            this.base.genre = response.data.data[0].post.genre
            this.base.scope = response.data.data[0].post.scope
            this.base.title = response.data.data[0].post.title
            this.base.answer = response.data.data[0].post.content
        },
    },

    computed: {
        validation() {
            const base = this.base
            console.log(base.answer)
            return {
                question: !!base.scope,
                genre: !!base.genre,
                title: !!base.title,
                answer: !!base.answer,
            }
        },
        isValid() {
            var validation = this.validation
            return Object.keys(validation).every(function (key) {
                console.log(validation[key])
                return validation[key]
            })
        },
    },
    mounted() {
        if (JSON.stringify(this.$route.query) !== '{}') {
            this.doSearch()
        }
    },
}
</script>
<style></style>
