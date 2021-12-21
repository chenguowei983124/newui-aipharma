<template>
    <div class="fixed top-0 bottom-0 bg-lock w-270 z-99">
        <div class="flex justify-center relative top-1/4">
            <div class="absolute">
                <div
                    class="
                        flex flex-col
                        w-93.75
                        mid:w-191.25
                        md:w-191.25
                        h-93.75
                        border-2 border-tags
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
                        <div class="text-tags">{{ title }}</div>
                        <comment-x-svg
                            @click="closeMessageBox()"
                            class="h-4 w-4 cursor-pointer"
                        ></comment-x-svg>
                    </div>
                    <div
                        class="
                            flex flex-row flex-grow
                            m-5
                            whitespace-pre-line
                            fontLatoAndTwelveRegular
                            overflow-y-auto
                            text-black
                            break-words
                        "
                    >
                        {{ data }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commentXSvg from '../svgImage/commentXSvg.vue'
export default {
    components: {
        commentXSvg,
    },
    props: { data: '', title: '' },

    data() {
        return {}
    },
    Activated() {},
    methods: {
        closeMessageBox() {
            this.$emit('closeMessageBox')
        },
    },
}
</script>

<style></style>
