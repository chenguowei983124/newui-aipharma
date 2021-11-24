<template>
    <div class="mx-auto h-screen-60 md:h-screen-69" id="div_postList">
        <div class="flex justify-between h-10 border-b-2 border-blueline">
            <div class="notoSansJpAndTwentyBold">スレッド</div>
            <div class="h-10 w-10 mt-1" @click="closeClick">
                <x-icon-svg color="#65bbe5"></x-icon-svg>
            </div>
        </div>

        <!-- "" -->
        <div
            class="overflow-y-scroll"
            :class="[dispEditor ? 'h-7/10' : 'h-full md:h-9/10']"
        >
            <div class="mt-4 pl-2 pr-2">
                <div v-if="postList.length > 0">
                    <div>
                        <div class="flex flex-grow">
                            <div>
                                <div class="flex justify-between pl-2 pr-8">
                                    <div class="flex">
                                        <result-detail-row-item
                                            itemType="1"
                                            :typeKB="postList[0].group"
                                            v-if="
                                                postList[0].group != undefined
                                            "
                                        ></result-detail-row-item>
                                        <result-detail-row-item
                                            itemType="2"
                                            addStyle="ml-2"
                                            :itemValue="postList[0].date"
                                            v-if="postList[0].date != undefined"
                                        ></result-detail-row-item>
                                    </div>

                                    <result-detail-row-item
                                        itemType="1"
                                        :typeKB="postList[0].notificationType"
                                        v-if="
                                            postList[0].notificationType !=
                                            undefined
                                        "
                                        addStyle="flex justify-center items-center mr-1.25 md:flex-none  "
                                    ></result-detail-row-item>
                                </div>
                                <div
                                    class="
                                        mt-8
                                        notoSansJpAndEighteenMedium
                                        break-all
                                        pl-2
                                        pr-8
                                    "
                                >
                                    {{ postList[0].urlTitle }}
                                </div>
                                <div class="flex mt-5">
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
                                            <div
                                                class="notoSansJpAndSixteenBold"
                                            >
                                                {{ postList[0].userName }}
                                            </div>
                                            <div
                                                class="
                                                    ml-1
                                                    notoSansJpAndTwelveRegular
                                                "
                                            >
                                                先生
                                            </div>
                                        </div>

                                        <div class="notoSansJpAndTwelveBold">
                                            {{ postList[0].workplace }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <edit-and-delete
                                    :editEvent="editDetail"
                                    :deleteEvent="deleteDetail"
                                    :id="String(postList[0].post_id)"
                                    :dataInfo="postList[0]"
                                ></edit-and-delete>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-5 ml-2"
                        v-html="
                            postList[0].title
                                .replace(
                                    '<ol>',
                                    `<ol style='list-style-type: decimal;'>`
                                )
                                .replace(
                                    '<ul>',
                                    `<ul style='list-style-type: disc;'>`
                                )
                        "
                    ></div>
                    <div class="mt-5 flex">
                        <div
                            class="flex flex-wrap mt-2"
                            v-for="tagItem in postList[0].tag"
                            :key="tagItem"
                        >
                            <div
                                class="
                                    rounded-full
                                    border-2 border-gray-300
                                    bg-gray-100
                                    h-6
                                    notoSansJpAndTwelveRegular
                                    pl-1
                                    pr-1
                                    text-center
                                    mr-1
                                    cursor-pointer
                                "
                                @click="tagClick(tagItem.name)"
                            >
                                # {{ tagItem.name }}
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 flex justify-end">
                        <div class="flex items-end">
                            <result-detail-row-item
                                itemType="4"
                                itemTitle=" view"
                                :itemValue="postList[0].viewCount.toString()"
                                v-if="postList[0].viewCount != undefined"
                            ></result-detail-row-item>
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
                                        postList[0].feedback.mine.id
                                    )
                                "
                            >
                                <div class="mr-3">
                                    {{ postList[0].feedback.good }}
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
                                        postList[0].feedback.mine.id
                                    )
                                "
                            >
                                <div class="mr-3">
                                    {{ postList[0].feedback.bad }}
                                </div>
                                <bad class="h-4 w-4 mr-1"></bad>
                            </button>
                        </div>
                    </div>
                    <div
                        class="mt-3 ml-10 border-t-2 border-blueline"
                        v-for="(items, index) in postList[0].commnet"
                        :key="index"
                    >
                        <make-detail-row
                            :postList="postList"
                            :items="items"
                            :index="index"
                            :exeSearchData="doSearch"
                            :putFeedbacks="putFeedbacks"
                        ></make-detail-row>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-2">
            <div
                class="rounded border-2 h-8 pl-5"
                @click="dispEditor = !dispEditor"
                v-if="!dispEditor"
                v-html="
                    InputComment.toString()
                        .split(`<p>&nbsp;</p>`)[0]
                        .replace(
                            '<ol>',
                            `<ol style='list-style-type: decimal;'>`
                        )
                        .replace('<ul>', `<ul style='list-style-type: disc;'>`)
                "
            ></div>

            <div v-if="dispEditor">
                <editor
                    api-key="qph8nbd0u6yvubz8os1ghqw2txzvs1uq3qng582s4w0t63vp"
                    initialValue="<p>Initial editor content</p>"
                    v-model="InputComment"
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
                        @click="dispEditor = !dispEditor"
                    >
                        <div class="mr-3 notoSansJpAndFourteenBold">閉じる</div>
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
                        @click="sendPosts(postList[0].post_id)"
                    >
                        <div
                            class="
                                mr-1.5
                                notoSansJpAndFourteenBold
                                cursor-pointer
                            "
                        >
                            送信
                        </div>
                        <send-message-icon-svg
                            class="mr-1 cursor-pointer"
                        ></send-message-icon-svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import XIconSvg from '../common/svgImage/bbsXIconSvg.vue'
import sendMessageIconSvg from '../common/svgImage/sendMessageIconSvg.vue'
import resultDetailRow from '../common/searchResult/resultBBS.vue'
import ResultDetailRowItem from '../common/searchResult/resultDetailRowItem.vue'
import Good from '../common/svgImage/good.vue'
import bad from '../common/svgImage/bad.vue'
import Editor from '@tinymce/tinymce-vue'
import EditAndDelete from '../common/searchResult/editAndDelete.vue'
import MakeDetailRow from './makeDetailRow.vue'

export default {
    components: {
        XIconSvg,
        Editor,
        sendMessageIconSvg,
        resultDetailRow,
        ResultDetailRowItem,
        Good,
        bad,
        EditAndDelete,
        MakeDetailRow,
    },
    props: {
        id: '',
        exeSearchRefishOpts: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {
            postList: [], // 列表数据
            params: {},
            dispFlg: false,
            dispEditor: false,
            InputComment: '',
        }
    },

    watch: {},
    methods: {
        tagClick(name) {
            let tagsLable = this.$store.getters.getSearchTagsLable
            tagsLable.push(name)
            this.$store.dispatch('setSearchTagsLable', tagsLable)
            this.exeSearchRefishOpts()
        },
        // ×押下
        closeClick() {
            this.$emit('close', false)
        },

        // 該当明細編集押下
        editDetail(dataInfo) {
            let params = {
                id: dataInfo.post_id,
            }
            this.$router.push({
                path: '/newBbsRecord',
                query: params,
            })
            console.log('該当明細編集押下', dataInfo.post_id)
        },
        // 該当明細削除押下
        deleteDetail(dataInfo) {
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
                        this.$serve
                            .deletePost('', dataInfo.post_id)
                            .then(() => {
                                this.$swal
                                    .fire({
                                        text: '削除されました。',
                                        icon: '',
                                        showCancelButton: false,
                                        confirmButtonText: 'OK',
                                    })
                                    .then(() => {
                                        this.$emit('close', false, 'delete')
                                    })
                            })
                    }
                })
        },
        async doSearch() {
            this.dispEditor = false
            this.InputComment = ''

            Object.assign(this.params, { division: 'BBS' })
            const response = await this.$serve.getPostsrforId('', this.id)

            this.postList = this.formatPostList(response.data.data)
        },
        formatPostList(data) {
            let list = []
            for (let i = 0; i < data.length; i++) {
                let listDetail = {
                    id: data[i].post.id,
                    post_id: data[i].post.post_id,
                    urlTitle: data[i].post.title,
                    title: data[i].post.content,
                    date: data[i].post.created_at,
                    group:
                        data[i].post.scope == 0
                            ? 'ownFacility'
                            : data[i].post.scope == 1
                            ? 'otherFacility'
                            : 'group',
                    viewCount: data[i].post.feedback.viewed,
                    notificationType: data[i].post.genre,
                    userName: data[i].post.user_data.user_name,
                    workplace: data[i].post.user_data.workplace,
                    commnetCount: data[i].post.commnet.length,
                    feedback: data[i].post.feedback,
                    tag: data[i].post.tag,
                    commnet: data[i].post.commnet,
                    user_id: data[i].post.user_id,
                }
                list.push(listDetail)
                console.log(list)
            }
            return list
        },
        putFeedbacks(kind, post_id, feedbackId, index) {
            let tempKind = kind
            console.log('user', this.$store.getters.topManagementInfo.user_id)

            if (index === undefined) {
                console.log('feedback', this.postList[0].feedback.mine.user_id)
                if (
                    this.postList[0].feedback.mine.kind == kind &&
                    this.postList[0].feedback.mine.user_id ==
                        this.$store.getters.topManagementInfo.user_id
                ) {
                    tempKind = 0
                }
            } else {
                console.log(
                    'feedback user_id',
                    this.postList[0].commnet[index].feedback.mine.user_id
                )
                console.log(
                    'feedback kind',
                    this.postList[0].commnet[index].feedback.mine.kind
                )
                if (
                    this.postList[0].commnet[index].feedback.mine.kind ==
                        kind &&
                    this.postList[0].commnet[index].feedback.mine.user_id ==
                        this.$store.getters.topManagementInfo.user_id
                ) {
                    tempKind = 0
                }
            }

            let params = {
                feedbackId: feedbackId,
                code: this.$store.getters.getOidcCode,
                feedback: {
                    post_id: post_id,
                    kind: tempKind,
                },
            }
            this.$serve.putfeedbacks(params, '').then((res) => {
                console.log(res)
                if (res.data.status === 'SUCCESS') {
                    if (index === undefined) {
                        Object.assign(
                            this.postList[0].feedback,
                            res.data.feedback
                        )
                    } else {
                        Object.assign(
                            this.postList[0].commnet[index].feedback,
                            res.data.feedback
                        )
                    }
                    console.log('tempKind', tempKind)
                    let message = '評価がキャンセルしました。'
                    if (tempKind === 1) {
                        message = 'Good評価ありがとうございました。'
                    }
                    if (tempKind === 2) {
                        message = 'Bad評価ありがとうございました。'
                    }
                    this.$toast.success(message, {
                        position: 'top-right',
                    })
                }
            })
        },
        sendPosts(post_id) {
            let param = {
                code: this.$store.getters.getOidcCode,
                post: {
                    post_id: post_id,
                    content: this.InputComment,
                },
            }
            let res = this.$serve.postPosts(param)
            this.$toast.success('送信成功しました。', {
                position: 'top-right',
            })

            this.doSearch()
        },
    },
    mounted() {
        console.log('one')
        this.$serve.postReadfeedbacks(this.id, '')
        this.doSearch()
    },
}
</script>
<style type="text/css">
ol {
    list-style-type: decimal;
}
</style>
