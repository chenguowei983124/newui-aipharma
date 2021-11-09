<template>
    <div class="">
        <div class="flex flex-col mx-auto pt-12 justify-between h-312.5">
            <div :class="[dispEditor ? ' h-245 ' : 'h-292.5 ']">
                <div
                    class="flex justify-between h-10 border-b-2 border-blueline"
                >
                    <div class="notoSansJpAndTwentyBold">スレッド</div>
                    <div class="h-10 w-10 mt-2" @click="closeClick">
                        <x-icon-svg
                            defaultClass="h-6 w-6"
                            defaultStrokeWidth="3"
                            color="#65bbe5"
                        ></x-icon-svg>
                    </div>
                </div>

                <div
                    class="relative overflow-y-scroll mb-10 mt-5"
                    :class="[dispEditor ? ' h-245 ' : 'h-270']"
                >
                    <div v-if="postList.length > 0">
                        <div>
                            <div class="flex">
                                <div>
                                    <!-- Group -->
                                    <div class="flex justify-between">
                                        <div class="flex">
                                            <result-detail-row-item
                                                itemType="1"
                                                :typeKB="postList[0].group"
                                                v-if="
                                                    postList[0].group !=
                                                    undefined
                                                "
                                            ></result-detail-row-item>
                                            <result-detail-row-item
                                                itemType="2"
                                                addStyle="ml-2"
                                                :itemValue="postList[0].date"
                                                v-if="
                                                    postList[0].date !=
                                                    undefined
                                                "
                                            ></result-detail-row-item>
                                        </div>

                                        <!-- 告知ラベル -->
                                        <result-detail-row-item
                                            itemType="1"
                                            :typeKB="
                                                postList[0].notificationType
                                            "
                                            v-if="
                                                postList[0].notificationType !=
                                                undefined
                                            "
                                            addStyle="flex justify-center items-center mr-1.25 md:flex-none border-t-2 "
                                        ></result-detail-row-item>
                                    </div>
                                    <div
                                        class="
                                            mt-2
                                            notoSansJpAndFourteenRegular
                                        "
                                    >
                                        {{ postList[0].urlTitle }}
                                    </div>
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
                                            <div
                                                class="
                                                    notoSansJpAndSixteenRegular
                                                "
                                            >
                                                {{ postList[0].userName }}
                                            </div>
                                            <div
                                                class="
                                                    notoSansJpAndTwelveRegular
                                                "
                                            >
                                                {{ postList[0].workplace }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="
                                            h-8
                                            w-8
                                            border-2
                                            rounded
                                            text-center
                                            p-0.5
                                            bg-gray-100
                                        "
                                    >
                                        ・・・
                                    </div>
                                </div>
                            </div>
                            <!-- <div
                        v-for="(article, index) in postList"
                        :key="index"
                        @click="clickItem(article)"
                    >
                        <result-detail-row
                            class="searchResult_bbsDetail_blue"
                            :row="article"
                        >
                        </result-detail-row>
                    </div> -->
                        </div>
                        <div class="mt-2 notoSansJpAndFourteenRegular">
                            {{ postList[0].title }}
                        </div>
                        <div class="mt-2 flex justify-between">
                            <div>ロキソニンの用途は</div>
                            <div class="flex items-end">
                                <!-- view数 -->
                                <result-detail-row-item
                                    itemType="4"
                                    itemTitle=" view"
                                    :itemValue="
                                        postList[0].viewCount.toString()
                                    "
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
                                            <div
                                                class="
                                                    notoSansJpAndSixteenRegular
                                                "
                                            >
                                                {{ items.user_data.user_name }}
                                            </div>
                                            <div
                                                class="
                                                    notoSansJpAndTwelveRegular
                                                "
                                            >
                                                {{ items.user_data.workplace }}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="
                                                h-8
                                                w-8
                                                border-2
                                                rounded
                                                text-center
                                                p-0.5
                                                bg-gray-100
                                            "
                                        >
                                            ・・・
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 notoSansJpAndFourteenRegular">
                                    {{ items.content }}
                                </div>
                                <div
                                    class="flex justify-between items-end mt-2"
                                >
                                    <div>{{ items.updated_at }}</div>
                                    <div class="flex items-end">
                                        <!-- view数 -->
                                        <result-detail-row-item
                                            itemType="4"
                                            itemTitle=" view"
                                            :itemValue="
                                                postList[0].viewCount.toString()
                                            "
                                            addStyle="md:ml-2.5 md:flex-none"
                                            v-if="
                                                postList[0].viewCount !=
                                                undefined
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
            <div>
                <div
                    class="border-2 h-8 overflow-hidden"
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
                            // plugins: 'image media link tinydrive code imagetools',
                            height: 130,
                            menubar: false,
                            statusbar: false,
                            //content_style: `p{line-height: 1;} body {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;line-height: 1.0; margin: 1rem;}`,
                            //content_css: '/mycontent.css',
                            plugins:
                                'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
                            toolbar:
                                'myButton | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image table media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                            //tinydrive_token_provider: 'http://localhost:8002/jwt',
                            images_upload_handler: images_upload_handler,
                        }"
                    />
                    <div class="flex justify-end space-x-2">
                        <input type="button" value="送信" />
                        <input
                            type="button"
                            value="閉じる"
                            @click="dispEditor = !dispEditor"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import XIconSvg from '../common/svgImage/xIconSvg.vue'
import resultDetailRow from '../common/searchResult/resultBBS.vue'
import ResultDetailRowItem from '../common/searchResult/resultDetailRowItem.vue'
import Good from '../common/svgImage/good.vue'
import bad from '../common/svgImage/bad.vue'
import Editor from '@tinymce/tinymce-vue'
export default {
    components: {
        XIconSvg,
        Editor,
        resultDetailRow,
        ResultDetailRowItem,
        Good,
        bad,
    },
    props: { id: '' },
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
        clickItem() {
            this.dispFlg = !this.dispFlg
        },

        async doSearch(pgNo = 1) {
            // console.log('doSearch', this.params, this.$store.getters.getOidcCode)
            const PAGE_LIMIT = 10
            Object.assign(this.params, { division: 'BBS' })
            const queryStringData = {
                page: 1,
                id: this.id,
                limit: PAGE_LIMIT,
            }

            const response = await this.$serve.getPostList(queryStringData)
            console.log('getPostList-result', response.data)
            if (pgNo == 1) {
                this.postList = this.formatPostList(response.data.data)
            } else {
                this.postList = this.postList.concat(response.data.data)
            }
            this.pagination = response.data.pagination
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
                }
                list.push(listDetail)
            }
            console.log('list', list)
            return list
        },
    },
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
