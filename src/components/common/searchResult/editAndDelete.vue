<template>
    <div class="cs:relative">
        <div
            class="
                bg-grayeeeeee
                h-10
                w-10
                flex
                items-center
                justify-center
                rounded
                flex-none
                cursor-pointer
                active:opacity-50
                hover:opacity-50
            "
            @click="boxClose"
        >
            <dots-horizontal class="w-5"></dots-horizontal>
        </div>
        <div
            class="
                fixed
                cs:hidden
                top-0
                left-0
                right-0
                bottom-0
                z-10
                windowBackground
            "
            v-if="boxDispFlg"
            @click.self="boxClose"
        ></div>
        <div
            class="
                rounded-md
                mid:border-tags
                bg-white
                h-20
                cs:w-16 cs:absolute
                fixed
                w-11/12
                z-10
                left-4
                cs:-left-6 cs:top-12
                top-96
                border border-tags
            "
            v-if="boxDispFlg"
        >
            <div
                class="
                    mid:mx-3.5
                    font-NotoSansJp font-bold
                    items-center
                    text-tags
                "
            >
                <div
                    class="
                        text-center
                        h-10
                        border-b-2 border-tags
                        cs:border-0
                        pt-1.5
                        cs:pt-2
                        cursor-pointer
                    "
                    @click="editClick"
                >
                    編集
                </div>
                <div
                    class="text-center h-10 pt-1.5 mid:pt-0 cursor-pointer"
                    @click="deleteClick"
                >
                    削除
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dotsHorizontal from '../svgImage/dotsHorizontal.vue'
export default {
    components: { dotsHorizontal },
    props: {
        dataInfo: {},
        index: Number,
        id: String,
        postId: String,
        editEvent: {
            type: Function,
            default: () => {},
        },
        deleteEvent: {
            type: Function,
            default: () => {},
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
        document.addEventListener('keyup', this.handleClickOutside)
    },
    unmounted() {
        document.removeEventListener('keyup', this.handleClickOutside)
        document.removeEventListener('click', this.handleClickOutside)
    },
    data() {
        return {
            dispFlg: false,
            boxDispFlg: false,
        }
    },
    methods: {
        handleClickOutside(e) {
            if (this.$el.contains(e.target)) {
                return
            }
            this.boxDispFlg = false
        },
        boxClose() {
            this.boxDispFlg = !this.boxDispFlg
        },
        editClick() {
            this.editEvent(this.dataInfo)
            this.boxClose()
        },
        deleteClick() {
            this.deleteEvent(this.dataInfo)
            this.boxClose()
        },
    },
    created() {},
}
</script>
<style scoped></style>
