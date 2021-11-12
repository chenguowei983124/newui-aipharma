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
                                <div
                                    class="
                                        h-10
                                        w-10
                                        border-2
                                        rounded
                                        text-center
                                        p-1.5
                                        bg-gray_ececec
                                        text-grayline
                                    "
                                    v-if="
                                        $store.getters.topManagementInfo
                                            .user_id == postList[0].user_id
                                    "
                                >
                                    ・・・
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 notoSansJpAndFourteenRegular break-all">
                        {{ postList[0].title }}
                    </div>
                    <div class="mt-5 flex">
                        <div class="flex flex-wrap mt-2">
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
                            >
                                # ロキソニンの用途は
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
                                            <div
                                                class="notoSansJpAndSixteenBold"
                                            >
                                                {{ items.user_data.user_name }}
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
                                            {{ items.user_data.workplace }}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <edit-and-delete
                                        :editEvent="editComment"
                                        :deleteEvent="deleteComment"
                                        :id="String(items.id)"
                                    ></edit-and-delete>
                                    <!-- <div
                                        class="
                                            h-10
                                            w-10
                                            border-2
                                            rounded
                                            text-center
                                            p-1.5
                                            bg-gray_ececec
                                            text-grayline
                                        "
                                        v-if="
                                            $store.getters.topManagementInfo
                                                .user_id ==
                                            items.feedback.mine.user_id
                                        "
                                    >
                                        ・・・
                                    </div> -->
                                </div>
                            </div>
                            <div class="mt-5 notoSansJpAndFourteenRegular">
                                {{ items.content }}
                            </div>
                            <div class="flex justify-between items-end mt-5">
                                <div class="latoAndFourteenBold">
                                    {{ items.updated_at }}
                                </div>
                                <div class="flex items-end">
                                    <result-detail-row-item
                                        itemType="4"
                                        itemTitle=" view"
                                        :itemValue="
                                            postList[0].viewCount.toString()
                                        "
                                        addStyle="md:ml-2.5 md:flex-none"
                                        v-if="
                                            postList[0].viewCount != undefined
                                        "
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
                                    >
                                        <div class="mr-3">
                                            {{ postList[0].feedback.good }}
                                        </div>
                                        <good class="h-4 w-4 mr-1"></good>
                                    </button>
                                    <div
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
                                    >
                                        <div class="mr-3">
                                            {{ postList[0].feedback.bad }}
                                        </div>
                                        <bad class="h-4 w-4 mr-1"></bad>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-2">
            <div
                class="rounded border-2 h-8"
                @click="dispEditor = !dispEditor"
                v-if="!dispEditor"
                v-html="InputComment.toString().split('\n')[0]"
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

                        toolbar: ' bold italic underline strikethrough | ',
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
                        "
                    >
                        <div class="mr-1.5 notoSansJpAndFourteenBold">送信</div>
                        <send-message-icon-svg
                            class="mr-1"
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
import MescrollVue from 'mescroll.js/mescroll.vue'
import EditAndDelete from '../common/searchResult/editAndDelete.vue'

export default {
    components: {
        XIconSvg,
        Editor,
        sendMessageIconSvg,
        resultDetailRow,
        ResultDetailRowItem,
        Good,
        bad,
        MescrollVue,
        EditAndDelete,
    },
    props: {
        id: '',
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
        closeClick() {
            console.log('100')
            this.$emit('close', false)
        },
        editComment(id) {
            console.log('editComment', id)
        },
        deleteComment(id) {
            console.log('deleteComment', id)
        },
        async doSearch() {
            console.log('userid', this.$store.getters.topManagementInfo.user_id)

            Object.assign(this.params, { division: 'BBS' })
            console.log('id', this.id)
            const response = await this.$serve.getPostsrforId('', this.id)
            console.log('getPostList-result', response.data)

            this.postList = this.formatPostList(response.data.data)
        },
        formatPostList(data) {
            let list = []
            for (let i = 0; i < data.length; i++) {
                console.log(data)
                console.log('item', data[i].post.feedback.viewed)
                let listDetail = {
                    id: data[i].post.id,
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
                console.log('aa', data[i].post.commnet)
                list.push(listDetail)
            }
            console.log('list', list)
            return list
        },
    },
    created() {},
    mounted() {
        this.doSearch()
    },
}
</script>
<style scoped>
/* .mescroll {
    position: fixed;
    top: 44px;
    bottom: 0;
    height: auto;
} */
</style>
