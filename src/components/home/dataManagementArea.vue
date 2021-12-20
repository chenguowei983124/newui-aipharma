<template>
    <div class="md:flex">
        <div class="flex-none">
            <div
                class="
                    rounded-lg
                    bg-backgroundMain
                    md:w-50
                    h-121
                    grid
                    justify-items-center
                "
            >
                <div class="">
                    <!-- 最初の行 -->
                    <div class="md:flex justify-between w-42.5 my-3.75">
                        <div class="h-12.5 flex flex-col justify-center">
                            <div class="notoSansJpAndSixteenRegular">
                                {{ $store.getters.topManagementInfo.user_name }}
                            </div>
                            <div class="notoSansJpAndTwelveRegular">
                                {{ '先生' }}
                            </div>
                        </div>

                        <div class="flex justify-start items-center">
                            <div
                                class="
                                    rounded-full
                                    h-12.5
                                    w-12.5
                                    bg-backgroundMainSearch
                                "
                            >
                                <div
                                    class="
                                        flex
                                        justify-center
                                        pt-2.5
                                        text-white
                                        notoSansJpAndTwentyNormal
                                    "
                                >
                                    {{
                                        $store.getters.topManagementInfo
                                            .lastName
                                    }}
                                </div>
                            </div>
                            <top-portrait-icon class="ml-2"></top-portrait-icon>
                        </div>
                    </div>
                    <!-- 二行目 -->
                    <div
                        class="
                            notoSansJpAndTwelveRegular
                            text-left
                            h-3.75
                            mb-3.75
                        "
                    >
                        {{ $store.getters.topManagementInfo.hospital }}
                    </div>
                    <!-- 三行目 -->
                    <div
                        class="
                            bg-backgroundMainSearch
                            text-center text-white
                            notoSansJpAndFourteenRegular
                        "
                    >
                        <button class="h-5 w-42.5">
                            <div
                                v-if="
                                    $store.getters.topManagementInfo.role ==
                                    'user'
                                "
                            >
                                利 用 者
                            </div>
                            <div v-else>管 理 者</div>
                        </button>
                    </div>
                </div>
                <!-- 四行目 -->
                <div class="flex flex-col h-22.5 w-42.5 space-y-2.5">
                    <button
                        class="
                            orangePillShapeButtonColors
                            h-10
                            rounded-full
                            notoSansJpAndSixteenblack
                            text-white
                        "
                        @click="ediRecordClick"
                    >
                        お知らせ 投稿
                    </button>

                    <button
                        class="
                            orangePillShapeButtonColors
                            h-10
                            rounded-full
                            notoSansJpAndSixteenblack
                            text-white
                        "
                        @click="bbsRecordClick"
                    >
                        掲示板 投稿
                    </button>
                </div>
                <!-- 五行目 -->
                <div class="flex flex-col h-22.5 w-42.5 space-y-2.5">
                    <button
                        class="
                            yellowPillShapeButtonColors
                            h-10
                            rounded-full
                            notoSansJpAndSixteenblack
                            text-white
                        "
                        @click="orgDiRecordClick"
                    >
                        組織内DI 記録 登録
                    </button>

                    <button
                        class="
                            yellowPillShapeButtonColors
                            h-10
                            rounded-full
                            notoSansJpAndSixteenblack
                            text-white
                        "
                    >
                        症例 登録
                    </button>
                </div>
                <div
                    class="
                        h-31
                        w-42.5
                        rounded
                        border-personOrganizationButton
                        font-NotoSansJp
                        mb-3.75
                    "
                >
                    <div
                        class="
                            text-white
                            font-bold
                            bg-personOrganizationButton
                            rounded-t
                            h-7.5
                            pl-2.5
                            pt-1
                        "
                    >
                        マイデータ
                    </div>
                    <div
                        class="
                            bg-personGroupInformation
                            rounded-b
                            border-personOrganizationButton border-2
                            grid
                            justify-items-start
                            space-y-2.5
                            py-1
                        "
                    >
                        <div
                            class="ml-2.5"
                            v-for="item in $store.getters.topManagementItemList"
                            :key="item"
                        >
                            <div v-if="item.itemStyle == 'title'">
                                {{ item.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopPortraitIcon from '../home/topPortraitIcon.vue'

export default {
  components: { TopPortraitIcon },
  props: {},
  data() {
    return {
      isDown: false,
    }
  },
  watch: {},
  methods: {
    itemClick() {
      this.isDown = !this.isDown
    },
    orgDiRecordClick() {
      this.$router.push({
        path: '/newOrgDIRecord',
      })
    },
    bbsRecordClick() {
      this.$router.push({
        path: '/newBbsRecord',
      })
    },
    ediRecordClick() {
      this.$router.push({
        path: '/newEdiRecord',
      })
    },
    async getUserData() {
      await this.$serve
        .getManagementInfo(this.$store.getters.getOidcCode)
        .then((res) => {
          this.$store.dispatch('getTopManagementInfo', res)
          localStorage.setItem(
            'store',
            JSON.stringify(this.$store.state)
          )
        })
    },
  },
  created() { },
  mounted() {
    this.getUserData()
    // this.$store.dispatch('getTopManagementInfo')
  },
}
</script>
<style scoped></style>
