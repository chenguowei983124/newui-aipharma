<template>
    <div class="flex border-b-2 border-blue-200">
        <!-- 左 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
        <div class="flex w-full md:w-191.25 mx-2 md:mx-0">
            <div
                class="
                    text-googleTitle
                    notoSansJpAndTwentyBold
                    pt-2.5
                    pb-2.5
                    pr-5
                    md:pt-5 md:pb-5
                "
            >
                お知らせ
            </div>
            <div
                class="
                    text-googleTitle
                    notoSansJpAndTwentyBold
                    pt-2.5
                    pb-2.5
                    md:pt-5 md:pb-5
                "
            >
                {{ title }}
            </div>
        </div>
        <!-- 右 -->
        <div
            class="flex-grow max-h-full min-w-min hidden md:block mid:block"
        ></div>
    </div>
    <div class="flex">
        <div class="flex-grow max-h-full min-w-min block"></div>
        <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-191.25">
            <div class="grid grid-cols-1 gap-1 md:space-y-2">
                <div id="patientGender" class="mt-3 md:mt-5">
                    <div class="flex">
                        <label class="notoSansJpAndSixteenBold">
                            公開範囲
                        </label>
                        <label class="text-red-500 ml-1"> * </label>
                    </div>
                    <vue-single-select
                        ref="scope"
                        class="w-full md:w-1/2 mt-1"
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
                <div id="patientGender" class="mt-3 md:mt-5">
                    <div class="flex">
                        <label class="notoSansJpAndSixteenBold">
                            ジャンル
                        </label>
                        <label class="text-red-500 ml-1"> * </label>
                    </div>
                    <vue-single-select
                        ref="genre"
                        class="w-full md:w-1/2 mt-1"
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
                <div id="memo" class="mt-3 md:mt-5">
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
                            inputLineCss
                            focus:outline-none
                            focus:ring-1
                            focus:border-326EB5Lins
                            focus:border-transparent
                            h-20
                            mt-1
                        "
                        type="text"
                        placeholder=""
                    ></textarea>
                </div>
                <div id="patientGender" class="mt-3 md:mt-5">
                    <div class="flex">
                        <label class="notoSansJpAndSixteenBold mb-1">
                            本文
                        </label>
                        <label class="text-red-500 ml-1"> * </label>
                    </div>
                    <editor
                        :api-key="$constant.APIKEY"
                        initialValue="<p>Initial editor content</p>"
                        v-model="base.answer"
                        :init="{
                            selector: 'textarea#drive-demo',
                            height: 150,
                            menubar: false,
                            statusbar: false,
                            plugins: 'advlist lists',
                            toolbar:
                                'undo redo | bold italic underline strikethrough | fontsizeselect forecolor removeformat | numlist bullist | ',
                        }"
                    />
                </div>
                <div id="mediTypes" class="mt-3 pb-8 md:mt-5">
                    <label class="notoSansJpAndSixteenBold"> タグ </label>
                    <Multiselect
                        ref="tag"
                        class="mt-1"
                        mode="tags"
                        v-model="base.tags"
                        placeholder="#タグ"
                        :filterResults="true"
                        :minChars="2"
                        :resolveOnLoad="true"
                        :delay="1000"
                        :searchable="true"
                        :createTag="true"
                        :loading="false"
                        :options="
                            async function (query) {
                                return await fetchLanguages(query) // check JS block for implementation
                            }
                        "
                        :classes="$constant.multiselectCss"
                    ></Multiselect>
                </div>

                <div class="md:pb-16 mt-4">
                    <div class="block">
                        <input
                            v-model="base.base"
                            type="checkbox"
                            class="form-checkbox w-3 h-3 text-white border"
                        />
                        <label class="notoSansJpAndFourteenRegular">
                            要閲覧ラベルを付ける場合にチェック
                        </label>
                    </div>
                </div>
                <new-edi-record-buttons
                    parent="base"
                    :disableSave="!isValid"
                    @onTmpSaveEvent="tmpSaveEvent"
                    @onSaveEvent="saveEvent"
                    @onCancelEvent="cancelEvent"
                    :editFlg="
                        JSON.stringify(this.$route.query) !== '{}'
                            ? true
                            : false
                    "
                >
                </new-edi-record-buttons>
            </div>
        </div>
        <div class="flex-grow max-h-full min-w-min block"></div>
    </div>
</template>

<script>
import newEdiRecordButtons from './newEdiRecordButtons.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../common/dateRange/litepie-datepicker.vue'
import Multiselect from '@vueform/multiselect'
import Editor from '@tinymce/tinymce-vue'
import { onBeforeRouteUpdate } from 'vue-router'
export default {
    setup() {
        onBeforeRouteUpdate((to, from, next) => {
            console.log('asdfasdfasdfasdfasdfasfasdf')
            next()
        })
    },

    components: {
        newEdiRecordButtons,
        vueSingleSelect,
        litepieDatepicker,
        Multiselect,
        Editor,
    },
    data() {
        return {
            qa_informations: {},
            params: {},
            defaultScope: 'select',
            defaultGenre: 'select',
            base: {
                scope: 'select',
                genre: 'select',
                title: '',
                answer: '',
                tags: [],
                check: false,
            },
            title:
                JSON.stringify(this.$route.query) === '{}'
                    ? '  投稿'
                    : '  編集',
        }
    },

    methods: {
        // ジャンル選択した値取得
        setPatientGenderValue(value) {
            console.log('valueG', value)
            this.base.genre = value
        },

        // 公開範囲選択した値取得
        setScopeValue(value) {
            this.base.scope = value
        },
        //　一時保存
        tmpSaveEvent() {
            this.$swal
                .fire({
                    text: '下書き保存してよろしいですか？',
                    icon: '',
                    showCancelButton: true,
                    cancelButtonText: 'キャンセル',
                    confirmButtonText: '確認',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log('削除')
                        let params = {
                            code: this.$store.getters.getOidcCode,
                            post: {
                                division: 'BBS',
                                title: this.base.title,
                                content: this.base.answer,
                                genre: this.base.genre,
                                publish: false,
                                scope: this.base.scope,
                            },
                            tag: this.base.tags,
                        }
                        this.$serve.postPosts(params).then((res) => {
                            this.$swal
                                .fire({
                                    text: '保存されました。',
                                    icon: '',
                                    showCancelButton: false,
                                    cancelButtonText: 'キャンセル',
                                    confirmButtonText: 'OK',
                                })
                                .then(() => {
                                    // this.clearInput()
                                    this.$router.go(-1)
                                })
                        })
                    }
                })
        },
        // 登録
        saveEvent() {
            let flg = false
            flg = this.$swal
                .fire({
                    text: '投稿してよろしいですか？',
                    icon: '',
                    showCancelButton: true,
                    cancelButtonText: 'キャンセル',
                    confirmButtonText: '確認',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log('this.base', this.base)
                        let params = {
                            code: this.$store.getters.getOidcCode,
                            post: {
                                division: 'BBS',
                                title: this.base.title,
                                content: this.base.answer,
                                genre: this.base.genre,
                                publish: true,
                                scope: this.base.scope,
                            },
                            tag: this.base.tags,
                        }
                        if (JSON.stringify(this.$route.query) === '{}') {
                            this.$serve.postPosts(params).then((res) => {
                                this.$swal
                                    .fire({
                                        text: '投稿されました。',
                                        icon: '',
                                        showCancelButton: false,
                                        cancelButtonText: 'キャンセル',
                                        confirmButtonText: 'OK',
                                    })
                                    .then(() => {
                                        // this.clearInput()
                                        this.$router.go(-1)
                                    })
                            })
                        } else {
                            console.log(this.$route.query.id)
                            Object.assign(params.post, {
                                post_id: this.$route.query.id,
                            })
                            this.$serve
                                .putBbsPosts(params, this.$route.query.id)
                                .then((res) => {
                                    this.$swal
                                        .fire({
                                            text: '投稿されました。',
                                            icon: '',
                                            showCancelButton: false,
                                            cancelButtonText: 'キャンセル',
                                            confirmButtonText: 'OK',
                                        })
                                        .then(() => {
                                            // this.clearInput()
                                            this.$router.go(-1)
                                        })
                                })
                        }
                    }
                })
            if (flg) {
            }
        },
        cancelEvent() {
            this.$router.go(-1)
        },

        // 検索結果画面で編集押下時、IDよりデータ取得
        async doSearch() {
            this.dispEditor = false
            this.InputComment = ''
            await this.$serve.postReadfeedbacks(this.id, '')

            Object.assign(this.params, { division: 'BBS' })
            const response = await this.$serve.getPostsrforId(
                '',
                this.$route.query.id
            )
            //
            this.base.scope = response.data.data[0].post.scope
            this.$refs.scope.setValue(String(this.base.scope))

            this.base.genre = response.data.data[0].post.genre
            this.$refs.genre.setValue(this.base.genre)

            this.base.title = response.data.data[0].post.title
            this.base.answer = response.data.data[0].post.content
            for (let i = 0; i < response.data.data[0].post.tag.length; i++) {
                this.base.tags.push(response.data.data[0].post.tag[i].name)
            }
            this.$refs.tag.refreshOptions()
        },
        async fetchLanguages(query) {
            let result = {}
            if (query == null || query == '') {
                if (this.base.tags.length > 0) {
                    for (
                        let index = 0;
                        index < this.base.tags.length;
                        index++
                    ) {
                        let response = await this.$serve.getTagsMaster(
                            this.$store.getters.getOidcCode,
                            this.base.tags[index]
                        )
                        result = response.map((item) => {
                            if (item.name === this.base.tags[index]) {
                                return {
                                    value: item.name,
                                    label: item.name,
                                }
                            }
                        })

                        let setList = {
                            value: this.base.tags[index],
                            label: this.base.tags[index],
                        }

                        this.$refs.tag.select(setList)
                    }
                }
            } else {
                console.log('query', query)
                await this.$serve
                    .getTagsMaster(this.$store.getters.getOidcCode, query)
                    .then((response) => {
                        console.log(response)
                        result = response.map((item) => {
                            return {
                                value: item.name,
                                label: item.name,
                            }
                        })
                    })
            }
            return result
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
            let valid = false
            if (
                this.base.scope != 'select' &&
                this.base.genre != 'select' &&
                this.base.title !== '' &&
                this.base.answer !== ''
            ) {
                return true
            } else {
                return false
            }
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
