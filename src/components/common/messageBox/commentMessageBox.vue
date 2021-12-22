<template>
    <div class="flex justify-center relative top-1/4">
        <!-- 710*650 -->
        <div
            class="
                flex flex-col
                w-93.75
                mid:w-191.25
                md:w-191.25
                h-93.75
                pb-5
                border-2 border-tags
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
                    font-NotoSansJp
                    text-lg
                    h-10
                    w-full
                    px-5
                    py-2
                    rounded-t-lg
                "
            >
                <div class="text-tags">コメント</div>
                <comment-x-svg
                    @click="closeCommentMessageBox()"
                    class="h-4 w-4 cursor-pointer"
                ></comment-x-svg>
            </div>
            <div class="flex w-full mt-5">
                <div class="flex-none w-5">
                    <!-- This item will not grow -->
                </div>
                <div class="flex-grow">
                    <!-- 630*108 w-11/12-->
                    <div
                        class="
                            h-13.75
                            flex flex-row
                            border-2
                            rounded
                            border-garyTitle
                            bg-white
                        "
                    >
                        <div class="flex-auto notoSansJpAndTwelveRegular">
                            <!-- focus:ring-1
                                    focus:ring-326EB5Lins -->
                            <textarea
                                style="resize: none"
                                v-model="inputComment"
                                rows="2"
                                class="
                                    block
                                    w-full
                                    h-full
                                    NotoSansJp-normal
                                    rounded-sm
                                    pl-1
                                    placeholder-gray-500
                                    focus:placeholder-opacity-0
                                    border-transparent
                                    focus:outline-none focus:border-transparent
                                "
                                type="text"
                                placeholder="コメントを入力"
                            ></textarea>
                        </div>
                        <div class="mx-2.5 flex items-center justify-center">
                            <button
                                class="
                                    rounded
                                    h-7.5
                                    w-7.5
                                    pl-1.5
                                    commentSendButtonColors
                                "
                                @click="sendMessage"
                            >
                                <send-message-icon-svg
                                    class="w-4.5 h-4.5"
                                ></send-message-icon-svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex justify-end mt-1.25">
                        <!-- <label class="inline-flex items-center"> -->
                        <input
                            type="checkbox"
                            class="
                                form-checkbox
                                text-white
                                ring-1 ring-grayline
                            "
                            checked
                            v-model="flag"
                        />
                        <span class="ml-2 text-xs text-tags font-NotoSansJp"
                            >匿名で投稿</span
                        >
                        <!-- </label> -->
                    </div>
                    <div class="hidden">{{ getCommentData }}</div>
                    <!-- 630*144 w-11/12-->
                    <!-- <div class="overflow-auto h-50 mb-5"> -->
                    <div
                        class="space-y-2 mt-3.75 overflow-auto h-50 mb-5"
                        :class="[getItemList.length > 3 ? '-mr-4' : '']"
                    >
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
                                :class="[
                                    items.isShow ? 'border-notice border' : '',
                                ]"
                            >
                                <div
                                    class="h-2/3 flex flex-row justify-between"
                                    :class="[items.isShow ? 'hidden' : 'block']"
                                >
                                    <div class="w-full">
                                        <p
                                            class=""
                                            v-show="!items.isShow"
                                            style="word-break-word;"
                                        >
                                            {{ items.comment }}
                                        </p>
                                        <input
                                            class="h-full"
                                            type="text"
                                            v-show="items.isShow"
                                            v-model="items.comment"
                                        />
                                    </div>
                                    <div
                                        class="w-20 flex justify-end space-x-2"
                                    >
                                        <div
                                            class="
                                                flex
                                                justify-center
                                                items-start
                                            "
                                            v-if="
                                                this.$store.getters
                                                    .topManagementInfo
                                                    .user_id == items.userId
                                            "
                                        >
                                            <button
                                                class="
                                                    h-7.5
                                                    w-7.5
                                                    commentEditButtonColors
                                                    rounded
                                                    pl-1.5
                                                "
                                                @click="
                                                    editAddCheckpointsTitle(
                                                        items
                                                    )
                                                "
                                            >
                                                <edit-icon-svg
                                                    class="h-5 w-5"
                                                ></edit-icon-svg>
                                            </button>
                                        </div>
                                        <div
                                            class="
                                                flex
                                                justify-center
                                                items-start
                                            "
                                            v-if="
                                                this.$store.getters
                                                    .topManagementInfo
                                                    .user_id == items.userId
                                            "
                                        >
                                            <button
                                                @click="deleteFruit(items)"
                                                class="
                                                    commentDeleteButtonColors
                                                    rounded
                                                    h-7.5
                                                    w-7.5
                                                "
                                            >
                                                <trash-icon-svg
                                                    class="w-7.5 h-5.5"
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
                                                border-0 border-grayline
                                                text-xs
                                            "
                                        >
                                            <!--ring-1 ring-326EB5Lins 
                                                focus:ring-1
                                                focus:ring-326EB5Lins -->
                                            <textarea
                                                style="resize: none"
                                                class="
                                                    w-11/12
                                                    h-full
                                                    placeholder-gray-500
                                                    focus:placeholder-opacity-0
                                                    border border-transparent
                                                    focus:outline-none
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
                                                    class="
                                                        commentEditButtonColors
                                                        rounded
                                                        w-7.5
                                                        h-7.5
                                                        pl-1
                                                    "
                                                >
                                                    <check-icon-svg
                                                        class="text-white"
                                                    ></check-icon-svg>
                                                </button>
                                                <button
                                                    @click="
                                                        editAddCheckpointsTitle(
                                                            items
                                                        )
                                                    "
                                                    class="
                                                        commentCancelButtonColors
                                                        rounded
                                                        w-7.5
                                                        h-7.5
                                                        flex
                                                        items-center
                                                        justify-center
                                                    "
                                                >
                                                    <x-icon-svg
                                                        class="text-white"
                                                    ></x-icon-svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        h-1/3
                                        flex
                                        justify-end
                                        items-center
                                        text-xs
                                        font-NotoSansJp
                                        text-black
                                        pt-2
                                    "
                                >
                                    投稿日時 :{{ items.createdDate }}
                                    <span class="ml-2"
                                        >投稿者 :{{ items.userName }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- </div> -->
                </div>
                <div class="flex-none w-5">
                    <!-- This item will not grow -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EditIconSvg from '../svgImage/editIconSvg.vue'
import PencilAltIconSvg from '../svgImage/pencilAltIconSvg.vue'
import TrashIconSvg from '../svgImage/trashIconSvg.vue'
import SendMessageIconSvg from '../svgImage/sendMessageIconSvg.vue'
import xIconSvg from '../svgImage/xIconSvg.vue'
import commentXSvg from '../svgImage/commentXSvg.vue'
import CheckIconSvg from '../svgImage/checkIconSvg.vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
    components: {
        commentXSvg,
        EditIconSvg,
        xIconSvg,
        SendMessageIconSvg,
        PencilAltIconSvg,
        TrashIconSvg,
        CheckIconSvg,
    },
    props: { qaId: '', rowIndex: 0, commentsFlag: '' },
    computed: {
        getCommentData() {
            get: {
                if (this.$store.getters.getCommentMessageBox) {
                    this.searchMessage()
                }
            }
        },
        getItemList() {
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
                                    this.searchMessage()
                                    // Good,Bad,comment更新
                                    if (this.commentsFlag == 'aiComments') {
                                        // Good
                                        this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[
                                            this.rowIndex
                                        ].feedbackGood =
                                            res.data.goodFeedbackCount
                                        // bad
                                        this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[
                                            this.rowIndex
                                        ].feedbackBad =
                                            res.data.badFeedbackCount
                                        //comment
                                        this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[
                                            this.rowIndex
                                        ].feedbackComment =
                                            res.data.commentFeedbackCount
                                    } else if (
                                        this.commentsFlag == 'diComments'
                                    ) {
                                        // Good
                                        this.$store.getters.dIKnowledgeShareSearchInfo.qas[
                                            this.rowIndex
                                        ].feedbackGood =
                                            res.data.goodFeedbackCount
                                        // bad
                                        this.$store.getters.dIKnowledgeShareSearchInfo.qas[
                                            this.rowIndex
                                        ].feedbackBad =
                                            res.data.badFeedbackCount
                                        //comment
                                        this.$store.getters.dIKnowledgeShareSearchInfo.qas[
                                            this.rowIndex
                                        ].feedbackComment =
                                            res.data.commentFeedbackCount
                                    } else if (
                                        this.commentsFlag == 'orgComments'
                                    ) {
                                        // Good
                                        this.$store.getters.organizationSearchInfo.qas[
                                            this.rowIndex
                                        ].feedbackGood =
                                            res.data.goodFeedbackCount
                                        // bad
                                        this.$store.getters.organizationSearchInfo.qas[
                                            this.rowIndex
                                        ].feedbackBad =
                                            res.data.badFeedbackCount
                                        //comment
                                        this.$store.getters.organizationSearchInfo.qas[
                                            this.rowIndex
                                        ].feedbackComment =
                                            res.data.commentFeedbackCount
                                    }
                                }
                            })
                        }
                    }
                })
        },
        editAddCheckpointsTitle(item) {
            // 他明細編集中チェック
            if (this.isEditting(item)) {
                this.$swal
                    .fire({
                        text: '編集中のコメントを破棄してもよろしいでしょうか。',
                        icon: '',
                        showCancelButton: true,
                        cancelButtonText: 'キャンセル',
                        confirmButtonText: 'OK',
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            this.clearEditting()
                            item.isShow = !item.isShow
                            this.editComment = item.comment
                        } else {
                            return
                        }
                    })
            } else {
                item.isShow = !item.isShow
                this.editComment = item.comment
            }
        },
        // 編集中明細チェック
        isEditting(item) {
            let temp = Object.values(this.$store.getters.getCommentInfo)
            for (let i = 0; i <= temp.length - 1; i++) {
                if (temp[i].isShow !== undefined) {
                    if (temp[i].isShow && temp[i].id !== item.id) {
                        return true
                    }
                }
            }
            return false
        },
        // 編集中明細をクリア
        clearEditting() {
            let temp = Object.values(this.$store.getters.getCommentInfo)
            for (let i = 0; i <= temp.length - 1; i++) {
                if (temp[i].isShow !== undefined) {
                    temp[i].isShow = false
                }
            }
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
                this.searchMessage()
                // Good,Bad,comment更新
                if (this.commentsFlag == 'aiComments') {
                    // GOOd
                    this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[
                        this.rowIndex
                    ].feedbackGood = res.data.goodFeedbackCount
                    // bad
                    this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[
                        this.rowIndex
                    ].feedbackBad = res.data.badFeedbackCount
                    //comment
                    this.$store.getters.dIKnowledgeShareSearchAIInfo.qas[
                        this.rowIndex
                    ].feedbackComment = res.data.commentFeedbackCount
                    console.log(this.itemList)
                } else if (this.commentsFlag == 'diComments') {
                    // GOOd
                    this.$store.getters.dIKnowledgeShareSearchInfo.qas[
                        this.rowIndex
                    ].feedbackGood = res.data.goodFeedbackCount
                    // bad
                    this.$store.getters.dIKnowledgeShareSearchInfo.qas[
                        this.rowIndex
                    ].feedbackBad = res.data.badFeedbackCount
                    //comment
                    this.$store.getters.dIKnowledgeShareSearchInfo.qas[
                        this.rowIndex
                    ].feedbackComment = res.data.commentFeedbackCount
                    console.log(this.itemList)
                } else if (this.commentsFlag == 'orgComments') {
                    // GOOd
                    this.$store.getters.organizationSearchInfo.qas[
                        this.rowIndex
                    ].feedbackGood = res.data.goodFeedbackCount
                    // bad
                    this.$store.getters.organizationSearchInfo.qas[
                        this.rowIndex
                    ].feedbackBad = res.data.badFeedbackCount
                    //comment
                    this.$store.getters.organizationSearchInfo.qas[
                        this.rowIndex
                    ].feedbackComment = res.data.commentFeedbackCount
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
