<template>
    <div class="flex-wrap md:flex justify-center">
        <input
            type="button"
            class="
                bg-gray-200
                hover:opacity-50
                active:bg-personInformationButton active:opacity-100
                border-b-2 border-gray-500
                h-10
                rounded-full
                notoSansJpAndEighteenBold
                text-black
                w-full
                md:w-5/12
                disabled:cursor-not-allowed
            "
            v-if="!editFlg"
            @click="onTmpSave"
            value="下書き保存"
        />
        <input
            type="button"
            class="
                bg-gray-200
                hover:opacity-50
                active:bg-personInformationButton active:opacity-100
                border-b-2 border-gray-500
                h-10
                rounded-full
                notoSansJpAndEighteenBold
                text-black
                w-full
                md:w-5/12
                disabled:cursor-not-allowed
            "
            v-if="editFlg"
            @click="cancelClick"
            value="キャンセル"
        />
        <input
            type="button"
            :class="
                'ml-0 md:ml-2 mt-2 md:mt-0 ' +
                ' bg-orange-400' +
                ' hover:opacity-50' +
                ' active:bg-personInformationButton' +
                ' active:opacity-100' +
                ' border-b-2 border-orange-700' +
                ' h-10' +
                ' rounded-full' +
                ' notoSansJpAndEighteenBold' +
                ' text-white' +
                ' w-full md:w-5/12' +
                ' disabled:cursor-not-allowed' +
                (disableSave ? ' opacity-50' : '')
            "
            :disabled="disableSave"
            @click="onSave"
            value="投稿する"
        />
    </div>
</template>

<script>
export default {
    props: {
        parent: {},
        disableSave: Boolean,
        editFlg: false,
    },
    data() {
        return {}
    },
    components: {
        // logo
    },
    methods: {
        onTmpSave: function () {
            this.$emit('onTmpSaveEvent', this.parent)
        },
        onSave: function () {
            this.$emit('onSaveEvent', this.parent)
        },
        cancelClick: function () {
            this.$emit('onCancelEvent', this.parent)
        },
    },
}
</script>
<style></style>
