<template>
    <div class="md:flex">
        <div class="flex-none">
            <div
                class="md:w-50 mt-4 justify-items-center"
                v-for="item in list"
                :key="item"
            >
                <div v-if="item.itemStyle == 'path'">
                    <router-link :to="item.imageLinkUrl">
                        <a rel="noopener noreferrer">
                            <img
                                class="w-70 mid:w-70 md:w-full"
                                :src="item.imageUrl"
                                alt=""
                            />
                        </a>
                    </router-link>
                </div>
                <div v-else class="">
                    <a
                        :href="item.imageLinkUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="w-70 mid:w-70 md:w-full"
                            :src="item.imageUrl"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import banner_DI_chat from '../../assets/image/dichat.png'
import dinabi from '../../assets/image/dinabi.png'
import di_chatbot_banner from '../../assets/image/di_chatbot_banner.jpg'
import ai_detail_banner from '../../assets/image/ai_detail_banner.png'

export default {
    components: {},
    props: {},
    data() {
        return {
            dispList: [],
            list: [
                {
                    companyName: 'DI チャット',
                    systemName: 'DI チャット',
                    imageUrl: banner_DI_chat,
                    imageLinkUrl: 'https://www.shionogi.co.jp/med/dichat/',
                    itemStyle: 'linkUrel',
                },
                {
                    companyName: '武田ファーマ DIナビ',
                    systemName: '武田ファーマ DIナビ',
                    imageUrl: dinabi,
                    imageLinkUrl: 'https://www.med.takeda-teva.com/di-net/',
                    itemStyle: 'linkUrel',
                },
                {
                    companyName: 'DI-Chatbot',
                    systemName: 'DI-Chatbot',
                    imageUrl: di_chatbot_banner,
                    imageLinkUrl: '/diChatbot',
                    itemStyle: 'path',
                },
                {
                    companyName: 'AI-Detail',
                    systemName: 'AI-Detail',
                    imageUrl: ai_detail_banner,
                    imageLinkUrl: 'https://kissei-ai-detail.3esys.jp/',
                    itemStyle: 'linkUrel',
                },
            ],
        }
    },
    watch: {},
    methods: {},
    created() {},
    mounted() {
        this.dispList = this.list
    },
}
</script>
<style></style>
