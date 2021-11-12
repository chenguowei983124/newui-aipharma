<template>
    <div class="relative">
        <div
            class="
                bg-gray-300
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
            <dots-horizontal></dots-horizontal>
        </div>
        <div
            class="fixed top-0 left-0 right-0 bottom-0 z-75"
            v-if="boxDispFlg"
            @click.self="boxClose"
        ></div>
        <div
            class="
                rounded-md
                border-2 border-gray-400
                bg-white
                h-20
                w-16
                absolute
                -m-5
                mt-2
                items-center
                z-75
            "
            v-if="boxDispFlg"
        >
            <div class="mx-3.5 space-y-2 font-NotoSansJp font-bold my-2.5">
                <div @click="editClick(id)">編集</div>
                <div @click="deleteClick(id)">削除</div>
            </div>
        </div>
    </div>
</template>

<script>
import dotsHorizontal from '../svgImage/dotsHorizontal.vue'
export default {
    components: { dotsHorizontal },
    props: {
        index: Number,
        id: String,
        editEvent: {
            type: Function,
            default: () => {},
        },
        deleteEvent: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {
            dispFlg: false,
            boxDispFlg: false,
        }
    },
    couputed: {},
    watch: {},
    methods: {
        boxClose() {
            this.boxDispFlg = !this.boxDispFlg
        },
        editClick() {
            this.editEvent('editClick', this.id)
            this.boxClose()
        },
        deleteClick() {
            console.log('deleteClick', this.id)
            this.deleteEvent(this.id)
            this.boxClose()
        },
    },
    created() {},
}
</script>
<style scoped></style>
