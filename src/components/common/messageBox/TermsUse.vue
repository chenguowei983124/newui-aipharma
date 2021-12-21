<template>
    <div class="fixed top-0 bottom-0 bg-black bg-opacity-50 w-270 z-99">
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
                            notoSansJpAndEighteenBold
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
                            notoSansJpAndTwelveRegular
                            overflow-y-auto
                            text-black
                            break-words
                            scrollbarStyle scrollbarStyle-1
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
  Activated() { },
  methods: {
    closeMessageBox() {
      this.$emit('closeMessageBox')
    },
  },
}
</script>

<style scoped>
.scrollbarStyle {
    overflow: auto;
}
.scrollbar {
    width: 320px;
}
.scrollbarStyle-1::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 12px; /*高宽分别对应横竖滚动条的尺寸*/
}
.scrollbarStyle-1::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background-color: #999999;
    border: 1px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
.scrollbarStyle-1::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: #e6e6e6;
}
</style>
