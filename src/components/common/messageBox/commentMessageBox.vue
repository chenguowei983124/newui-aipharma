<template>
    <div class="flex justify-center relative top-1/4">
        <!-- 710*650 -->
        <div
            class="
                flex flex-col
                w-93.75
                mid:w-191.25
                md:w-191.25
                h-80
                border-2 border-black
                items-center
                bg-commentBgColor
                rounded-lg
                overflow-hidden
            "
        >
            <div
                class="
                    flex flex-row
                    justify-between
                    items-center
                    bg-garyTitle
                    notoSansJpAndEighteenBold
                    h-10
                    w-full
                    px-8
                    py-2
                    rounded-t-lg
                "
            >
                <div class="">コメント</div>
                <button @click="closeCommentMessageBox()">
                    <x-icon-svg></x-icon-svg>
                </button>
            </div>
            <!-- 630*108 -->
            <div
                class="
                    w-11/12
                    h-13.75
                    flex flex-row
                    mt-2
                    border
                    rounded
                    border-black
                    bg-white
                "
            >
                <div class="flex-auto p-1 notoSansJpAndTwelveRegular">
                    <textarea
                        style="resize: none"
                        v-model="inputComment"
                        rows="2"
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
                            focus:ring-1
                            focus:ring-326EB5Lins
                            focus:border-transparent
                        "
                        type="text"
                        placeholder="コメントを入力"
                    ></textarea>
                    <!-- <textarea
                        rows="2"
                        v-model="inputComment"
                        placeholder="コメントを入力"
                        class="h-full w-full pr-10"
                    /> -->
                </div>
                <div class="w-10 flex items-center justify-center">
                    <button class="bg-green-500 rounded" @click="sendMessage">
                        <send-message-icon-svg></send-message-icon-svg>
                    </button>
                </div>
            </div>
            <div class="w-11/12 flex justify-end mt-1">
                <!-- <label class="inline-flex items-center"> -->
                <input
                    type="checkbox"
                    class="form-checkbox text-white"
                    checked
                    v-model="flag"
                />
                <span class="ml-2 text-xs">匿名で投稿</span>
                <!-- </label> -->
            </div>
            <div class="hidden">{{ getCommentData }}</div>
            <!-- 630*144 -->
            <div class="space-y-2 w-11/12 overflow-auto mt-1">
                <div
                    v-for="(items, index) in getItemList"
                    :key="items"
                    class=""
                >
                    <div
                        class="
                            p-2
                            w-full
                            flex flex-col
                            rounded
                            text-xs
                            bg-white
                        "
                    >
                        <div
                            class="h-2/3 flex flex-row justify-between"
                            :class="[items.isShow ? 'hidden' : 'block']"
                        >
                            <div class="w-60">
                                <p
                                    class=""
                                    v-show="!items.isShow"
                                    style="word-break-word;"
                                >
                                    {{ items.comment }}
                                </p>
                                <input
                                    class="w-60 h-full"
                                    type="text"
                                    v-show="items.isShow"
                                    v-model="items.comment"
                                />
                            </div>
                            <div
                                class="
                                    w-20
                                    mid:w-full
                                    flex
                                    justify-end
                                    space-x-2
                                "
                            >
                                <div
                                    class="flex justify-center items-center"
                                    v-if="
                                        this.$store.getters.topManagementInfo
                                            .user_id == items.userId
                                    "
                                >
                                    <button
                                        @click="editAddCheckpointsTitle(items)"
                                        class="
                                            bg-personOrganizationButton
                                            rounded
                                        "
                                    >
                                        <pencil-alt-icon-svg
                                            class="w-6 h-6"
                                        ></pencil-alt-icon-svg>
                                    </button>
                                </div>
                                <div
                                    class="flex justify-center items-center"
                                    v-if="
                                        this.$store.getters.topManagementInfo
                                            .user_id == items.userId
                                    "
                                >
                                    <button
                                        @click="deleteFruit(items)"
                                        class="
                                            bg-personInformationButton
                                            rounded
                                            w-6
                                            h-6
                                        "
                                    >
                                        <trash-icon-svg
                                            class="w-6 h-5"
                                        ></trash-icon-svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="h-2/3 flex flex-row"
                            :class="[items.isShow ? 'block' : 'hidden']"
                        >
                            <div class="w-full">
                                <div
                                    class="
                                        w-full
                                        flex
                                        justify-between
                                        border-0 border-black
                                        text-xs
                                    "
                                >
                                    <textarea
                                        style="resize: none"
                                        class="
                                            w-11/12
                                            h-full
                                            placeholder-gray-500
                                            focus:placeholder-opacity-0
                                            border border-transparent
                                            focus:outline-none
                                            focus:ring-1
                                            focus:ring-326EB5Lins
                                            focus:border-transparent
                                        "
                                        type="text"
                                        v-show="items.isShow"
                                        v-model="editComment"
                                    ></textarea>
                                    <div
                                        class="
                                            w-20
                                            flex
                                            justify-end
                                            space-x-2
                                            mr-1
                                            mid:mr-0
                                        "
                                    >
                                        <button
                                            @click="
                                                editMessage(
                                                    items.id,
                                                    index,
                                                    items
                                                )
                                            "
                                            class="bg-green-400 rounded w-6 h-6"
                                        >
                                            <check-icon-svg></check-icon-svg>
                                        </button>
                                        <button
                                            @click="
                                                editAddCheckpointsTitle(items)
                                            "
                                            class="
                                                bg-red-400
                                                rounded
                                                w-6
                                                h-6
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >
                                            <x-icon-svg></x-icon-svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="h-1/3 flex justify-end items-center pt-2">
                            投稿日時 :{{ items.createdDate }} 投稿者 :{{
                                items.userName
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PencilAltIconSvg from '../svgImage/pencilAltIconSvg.vue'
import TrashIconSvg from '../svgImage/trashIconSvg.vue'
import SendMessageIconSvg from '../svgImage/sendMessageIconSvg.vue'
import xIconSvg from '../svgImage/xIconSvg.vue'
import CheckIconSvg from '../svgImage/checkIconSvg.vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
    components: {
        xIconSvg,
        SendMessageIconSvg,
        PencilAltIconSvg,
        TrashIconSvg,
        CheckIconSvg,
    },
    props: { qaId: '', rowIndex: 0 , commentsFlag: '' },
    computed: {
        getCommentData() {
            get: {
                if (this.$store.getters.getCommentMessageBox) {
                    this.searchMessage()
                    // let params = {
                    //     id: this.qaId,
                    // }
                    // await this.$serve.getComment(params).then((res) => {
                    //     this.$store.dispatch(
                    //         'setCommentInfo',
                    //         res.data.resultInfo
                    //     )
                    // })
                }
            }
        },
        getItemList() {
            // console.log(this.$store.getters.getCommentInfo)
            // console.log(this.$store.getters.topManagementInfo)
            return this.$store.getters.getCommentInfo
        },
    },

    data() {
        return {
            itemList: [],
            editComment: '',
            inputComment: '',
            flag: 'true',
        }
    },
    Activated() {},
    methods: {
        deleteFruit(items) {
            this.$swal
                .fire({
                    text: '本当に削除してよろしいですか？',
                    icon: '',
                    showCancelButton: true,
                    cancelButtonText: 'キャンセル',
                    confirmButtonText: '削除',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log('削除')
                        let params = {
                            feedbackId: items.id,
                        }
                        // this.$serve.deletePreavoidData(params)
                        this.$swal.fire({
                            text: '削除されました。',
                            icon: '',
                            showCancelButton: false,
                            cancelButtonText: 'キャンセル',
                            confirmButtonText: 'OK',
                        })
                        if (params != '') {
                            this.$serve.deleteComment(params).then((res) => {
                                if (res.data.status == 'success') {
                                    // this.swal.fire('', res.data.message, 'success')

                                    // 指定されたindexの要素を1つ削除します。
                                    // this.itemList = this.$store.getters.getCommentInfo
                                    // this.itemList.splice(index, 1)
                                    // this.$store.dispatch(
                                    //     'setCommentInfo',
                                    //     this.itemList
                                    // )
                                    this.searchMessage()
                                    // Good,Bad,comment更新
                                    if (this.commentsFlag == 'aiComments') {
                                        // Good
                                        this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[this.rowIndex].feedbackGood 
                                            = res.data.goodFeedbackCount
                                        // bad
                                        this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[this.rowIndex].feedbackBad 
                                            = res.data.badFeedbackCount
                                        //comment
                                        this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[this.rowIndex].feedbackComment 
                                            = res.data.commentFeedbackCount
                                    } else if (this.commentsFlag == 'diComments') {
                                        // Good
                                        this.$store.getters.dIKnowledgeShareSearchInfo.qas[this.rowIndex].feedbackGood 
                                            = res.data.goodFeedbackCount
                                        // bad
                                        this.$store.getters.dIKnowledgeShareSearchInfo.qas[this.rowIndex].feedbackBad 
                                            = res.data.badFeedbackCount
                                        //comment
                                        this.$store.getters.dIKnowledgeShareSearchInfo.qas[this.rowIndex].feedbackComment 
                                            = res.data.commentFeedbackCount
                                    } else if (this.commentsFlag == 'orgComments') {
                                        // Good
                                        this.$store.getters.organizationSearchInfo.qas[this.rowIndex].feedbackGood 
                                            = res.data.goodFeedbackCount
                                        // bad
                                        this.$store.getters.organizationSearchInfo.qas[this.rowIndex].feedbackBad 
                                            = res.data.badFeedbackCount
                                        //comment
                                        this.$store.getters.organizationSearchInfo.qas[this.rowIndex].feedbackComment 
                                            = res.data.commentFeedbackCount
                                    }
                                }
                            })
                        }
                    }
                })
        },
        editAddCheckpointsTitle(item) {
            item.isShow = !item.isShow
            this.editComment = item.comment
        },
        closeCommentMessageBox() {
            this.inputComment = ''
            this.$store.dispatch(
                'setCommentMessageBox',
                !this.$store.getters.getCommentMessageBox
            )
        },
        sendMessage() {
            let params = {
                qaId: this.qaId,
                fbComment: this.inputComment,
                checkboxFlag: this.flag,
            }
            this.$serve.sendComment(params).then((res) => {
                this.$toast.success(res.data.message, {
                    position: 'top-right',
                })

                // // 登録したコメントを表示
                // let row = {
                //     comment: res.data.qaFeedback.fbComment,
                //     createdDate: res.data.qaFeedback.createdAt,
                //     id: res.data.qaFeedback.id,
                //     updateDate: res.data.qaFeedback.updatedAt,
                //     userId: res.data.qaFeedback.userId,
                //     userName: res.data.qaFeedback.fbComment,
                // }
                // this.itemList = this.$store.getters.getCommentInfo
                // this.itemList.push(row)
                // this.$store.dispatch('setCommentInfo', this.itemList)
                this.searchMessage()

                // Good,Bad,comment更新
                if (this.commentsFlag == 'aiComments') {
                    // GOOd
                    this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[this.rowIndex].feedbackGood 
                        = res.data.goodFeedbackCount
                    // bad
                    this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[this.rowIndex].feedbackBad 
                        = res.data.badFeedbackCount
                    //comment
                    this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[this.rowIndex].feedbackComment 
                        = res.data.commentFeedbackCount
                    console.log(this.itemList)
                } else if (this.commentsFlag == 'diComments') {
                     // GOOd
                    this.$store.getters.dIKnowledgeShareSearchInfo.qas[this.rowIndex].feedbackGood 
                        = res.data.goodFeedbackCount
                    // bad
                    this.$store.getters.dIKnowledgeShareSearchInfo.qas[this.rowIndex].feedbackBad 
                        = res.data.badFeedbackCount
                    //comment
                    this.$store.getters.dIKnowledgeShareSearchInfo.qas[this.rowIndex].feedbackComment 
                        = res.data.commentFeedbackCount
                    console.log(this.itemList)
                } else if (this.commentsFlag == 'orgComments') {
                    // GOOd
                    this.$store.getters.organizationSearchInfo.qas[this.rowIndex].feedbackGood 
                        = res.data.goodFeedbackCount
                    // bad
                    this.$store.getters.organizationSearchInfo.qas[this.rowIndex].feedbackBad 
                        = res.data.badFeedbackCount
                    //comment
                    this.$store.getters.organizationSearchInfo.qas[this.rowIndex].feedbackComment
                        = res.data.commentFeedbackCount
                    console.log(this.itemList)
                }

                this.inputComment = ''
            })
        },
        editMessage(id, index, item) {
            let params = {
                feedbackId: id,
                fbComment: this.editComment,
                qaId: this.qaId,
            }
            this.$serve.updateComment(params).then((res) => {
                this.$toast.success(res.data.message, {
                    position: 'top-right',
                })
                this.searchMessage()
                this.editAddCheckpointsTitle(item)
            })

            // this.itemList = this.$store.getters.getCommentInfo
            // this.itemList[index].comment = this.editComment
            // this.$store.dispatch('setCommentInfo', this.itemList)
            // this.searchMessage()
            // this.editAddCheckpointsTitle(item)
        },
        async searchMessage() {
            let params = {
                qaId: this.qaId,
            }
            await this.$serve.getComment(params).then((res) => {
                this.$store.dispatch('setCommentInfo', res.data.resultInfo)
            })
        },
    },
}
</script>

<style></style>
