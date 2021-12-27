<template>
    <div
        class="
            flex flex-col
            cs:flex-row
            pt-2
            border-t-2 border-b-2 border-grayline
            cs:border-t-0 cs:border-b-0
        "
    >
        <div
            class="ml-0 cs:ml-2 pl-0 cs:pl-2.5 flex justify-center pb-2"
            v-for="item in list"
            :key="item"
        >
            <a
                :href="item.imageLinkUrl"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img class="w-60 h-10" :src="item.imageUrl" alt="" />
            </a>
        </div>
    </div>
</template>

<script>
import gakkai_ad_banner_a from '../../assets/image/gakkai_ad_banner_a.jpg'
import kit_on_banner from '../../assets/image/kit_on_banner.jpg'

export default {
    components: {},
    props: {},
    data() {
        return {
            dispList: [],
            list: [
                {
                    companyName: 'kit_on_banner',
                    systemName: 'kit_on_banner',
                    imageUrl: kit_on_banner,
                    imageLinkUrl: 'https://www.k-idea.jp/kit-on/',
                },
                {
                    companyName: 'gakkai_ad_banner_a',
                    systemName: 'gakkai_ad_banner_a',
                    imageUrl: gakkai_ad_banner_a,
                    imageLinkUrl: 'https://www.k-idea.jp/ai-pharma/contact/ ',
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
