<template>
    <div>
        <div class="ml-2">
            <div class="mt-2 flex justify-between">
                <div class="flex">
                    <div
                        class="
                            rounded-full
                            h-12.5
                            w-12.5
                            bg-backgroundMainSearch
                        "
                    >
                        <img
                            class="rounded-full"
                            src="../../assets/image/image.png"
                            alt=""
                        />
                    </div>
                    <div class="ml-3 mt-2">
                        <div class="flex items-end">
                            <div class="notoSansJpAndSixteenBold">
                                {{ items.user_data.user_name }}
                            </div>
                            <div class="ml-1 notoSansJpAndTwelveRegular">
                                先生
                            </div>
                        </div>

                        <div class="notoSansJpAndTwelveBold">
                            {{ items.user_data.workplace }}
                        </div>
                    </div>
                </div>
                <div>
                    <edit-and-delete
                        :editEvent="editComment"
                        :deleteEvent="deleteComment"
                        :dataInfo="items"
                    ></edit-and-delete>
                </div>
            </div>
            <div class="mt-5">
                <div v-if="!isShow" v-html="items.content"></div>
                <div v-if="isShow">
                    <editor
                        api-key="qph8nbd0u6yvubz8os1ghqw2txzvs1uq3qng582s4w0t63vp"
                        initialValue="<p>Initial editor content</p>"
                        v-model="inputComment"
                        :init="{
                            selector: 'textarea#drive-demo',

                            height: 130,
                            menubar: false,
                            statusbar: false,
                            plugins: 'advlist lists',
                            toolbar:
                                ' bold italic underline strikethrough |  numlist bullist | ',
                        }"
                    />
                    <div
                        class="
                            flex
                            justify-end
                            space-x-2
                            h-10
                            border-l-2 border-b-2 border-r-2
                            items-center
                            pr-2
                        "
                    >
                        <button
                            class="
                                flex
                                items-center
                                justify-end
                                h-7.5
                                w-17.5
                                rounded
                                text-white
                                bg-gray_e6e6e6
                                cursor-pointer
                            "
                            @click="isShow = !isShow"
                        >
                            <div class="mr-3 notoSansJpAndFourteenBold">
                                閉じる
                            </div>
                        </button>
                        <button
                            class="
                                flex
                                items-center
                                justify-end
                                h-7.5
                                w-17.5
                                rounded
                                text-white
                                bg-whole
                                cursor-pointer
                            "
                        >
                            <div
                                class="
                                    mr-1.5
                                    notoSansJpAndFourteenBold
                                    pointer-events-none
                                "
                            >
                                送信
                            </div>
                            <send-message-icon-svg
                                class="mr-1 pointer-events-none"
                            ></send-message-icon-svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-end mt-5">
                <div class="latoAndFourteenBold">
                    {{ items.updated_at }}
                </div>
                <div class="flex items-end">
                    <button
                        class="
                            flex
                            items-center
                            justify-end
                            h-7.5
                            w-14
                            rounded
                            text-white
                            bg-whole
                        "
                        @click="
                            putFeedbacks(
                                '1',
                                postList[0].post_id,
                                items.feedback.mine.id,
                                index
                            )
                        "
                    >
                        <div class="mr-3">
                            {{ items.feedback.good }}
                        </div>
                        <good class="h-4 w-4 mr-1"></good>
                    </button>
                    <button
                        class="
                            flex
                            justify-end
                            items-center
                            h-7.5
                            w-14
                            rounded
                            text-white
                            bg-red-400
                            ml-1
                        "
                        @click="
                            putFeedbacks(
                                '2',
                                postList[0].post_id,
                                items.feedback.mine.id,
                                index
                            )
                        "
                    >
                        <div class="mr-3">
                            {{ items.feedback.bad }}
                        </div>
                        <bad class="h-4 w-4 mr-1"></bad>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import EditAndDelete from '../common/searchResult/editAndDelete.vue'
import Good from '../common/svgImage/good.vue'
import bad from '../common/svgImage/bad.vue'
import sendMessageIconSvg from '../common/svgImage/sendMessageIconSvg.vue'
export default {
    components: {
        EditAndDelete,
        Good,
        bad,
        Editor,
        sendMessageIconSvg,
    },
    props: {
        exeSearchRefishOpts: {
            type: Function,
            default: () => {},
        },
        items: {},
        postList: Array,
        index: 0,
    },
    data() {
        return {
            commentEditFlg: false,
            isShow: false,
            inputComment: this.items.content,
        }
    },
    couputed: {},
    watch: {},
    methods: {
        // コメント編集押下
        editComment(dataInfo) {
            this.isShow = true
        },

        // コメント削除押下
        deleteComment(dataInfo) {
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
                        this.$serve.deletePost('', dataInfo.postid, dataInfo.id)
                        this.$swal.fire({
                            text: '削除されました。',
                            icon: '',
                            showCancelButton: false,
                            confirmButtonText: 'OK',
                        })
                        this.doSearch()
                    }
                })
            console.log('コメント削除押下', dataInfo.id)
        },

        tagClick(name) {
            let tagsLable = this.$store.getters.getSearchTagsLable
            tagsLable.push(name)
            this.$store.dispatch('setSearchTagsLable', tagsLable)
            this.exeSearchRefishOpts()
        },
        putFeedbacks(kind, post_id, feedbackId, index) {
            console.log('text', this.postList[0].feedback)
            // console.log('text', this.postList[0].commnet[index].feedback)
            let tempKind = kind
            if (index === undefined) {
                if (this.postList[0].feedback.mine.kind == kind) {
                    tempKind = 2
                }
            } else {
                if (
                    this.postList[0].commnet[index].feedback.mine.kind == kind
                ) {
                    tempKind = 2
                }
            }

            let params = {
                feedbackId: feedbackId,
                post_id: post_id,
                kind: tempKind,
            }
            this.$serve.putfeedbacks(params, '').then((res) => {
                if (index === undefined) {
                    Object.assign(this.postList[0].feedback, res.data.feedback)
                } else {
                    Object.assign(
                        this.postList[0].commnet[index].feedback,
                        res.data.feedback
                    )
                }
            })
        },
    },
    created() {},
}
</script>
<style scoped></style>
