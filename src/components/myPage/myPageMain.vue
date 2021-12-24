<template>
    <div>
        <div class="flex border-b-2 border-unlineblue">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
            <div class="flex flex-col w-full md:w-191.25 mx-2 md:mx-0">
                <div class="flex justify-between pb-5 md:pb-3">
                    <div class="pt-4">
                        <div
                            class="
                                text-googleTitle
                                notoSansJpAndTwentyBlack
                                md:notoSansJpAndTwentyFourBold
                                lm:notoSansJpAndTwentyFourBold
                                md:text-2xl
                            "
                        >
                            マイページ
                        </div>
                    </div>
                    <div class="pt-5">
                        <div class="flex justify-center">
                            <button
                                class="
                                    orangeButtonColors
                                    rounded-md
                                    notoSansJpAndFourteenBold
                                    text-white text-center
                                    w-29.5
                                    h-8
                                    flex
                                    items-center
                                    px-3
                                    space-x-2
                                "
                                @click="onChange"
                            >
                                <div>
                                    <div>マイデータ</div>
                                </div>
                                <div>
                                    <mypage-mydata-change
                                        class="w-3 h-3 mt-0.5"
                                    ></mypage-mydata-change>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
        <div class="flex">
            <!-- 左 -->
            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>

            <!-- 中央 -->
            <div class="w-full md:w-191.25"></div>

            <div
                class="flex-grow max-h-full min-w-min hidden md:block mid:block"
            ></div>
        </div>
    </div>
</template>

<script>
import externalLink from '../common/svgImage/extarnalLink.vue'
import iconRight from '../common/svgImage/iconRight.vue'
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import mypageMydataChange from '../../components/common/svgImage/mypageMydataChange.vue'
export default {
  components: {
    externalLink,
    iconRight,
    TriangleDownSvg,
    mypageMydataChange
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    onChange() {
      this.$router.push('/myData')
    },
  },
  created() { },
  mounted() { },
}
</script>
<style scoped></style>
