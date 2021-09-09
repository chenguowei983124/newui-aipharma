<template>
    <div class="md:flex">
        <div class="flex-none">
            <div
                class="
                    rounded-md
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
                            <div class="notoSansJpAndSixteenBold">
                                {{ $store.getters.topManagementInfo.name }}
                            </div>
                            <div class="notoSansJpAndTwelve">
                                {{
                                    $store.getters.topManagementInfo.title ==
                                    'doctor'
                                        ? '先生'
                                        : ''
                                }}
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
                                        notoSansJpAndTwentyBold
                                    "
                                >
                                    {{
                                        $store.getters.topManagementInfo
                                            .lastName
                                    }}
                                </div>
                            </div>
                            <div class="">
                                <div
                                    class="flex justify-end cursor-pointer"
                                    @click="itemClick"
                                >
                                    <icon-down
                                        class="ml-2"
                                        v-if="isDown == false"
                                    ></icon-down>
                                    <icon-down
                                        class="ml-2 transform rotate-180"
                                        v-if="isDown == true"
                                    ></icon-down>
                                    <!-- <div
                                        class="
                                            absolute
                                            border-2 border-black
                                            rounded-md
                                            bg-white
                                            w-25
                                            h-33.5
                                            space-y-2.5
                                            py-2.5
                                            mt-8
                                        "
                                        v-if="isDown"
                                    >
                                        <div
                                            v-for="item in $store.getters
                                                .topManagementItemUserList"
                                            :key="item"
                                        >
                                            <div
                                                class="
                                                    notoSansJpAndFourteenRegular
                                                    hover:opacity-50
                                                    active:opacity-50
                                                    cursor-pointer
                                                    ml-2.5
                                                "
                                            >
                                                {{ item.title }}
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- リスト -->
                                    <div
                                        :class="{
                                            'absolute top-0 left-0 right-0 bottom-0 z-75':
                                                isDown,
                                        }"
                                        class="
                                            absolute
                                            flex
                                            justify-end
                                            mid:pr-16
                                            pt-88.75
                                        "
                                    >
                                        <div
                                            class="
                                                absolute
                                                border-2 border-black
                                                rounded-md
                                                bg-white
                                                w-25
                                                h-33.5
                                                space-y-2.5
                                                py-2.5
                                            "
                                            v-if="isDown"
                                        >
                                            <div
                                                v-for="item in $store.getters
                                                    .topManagementItemUserList"
                                                :key="item"
                                            >
                                                <div
                                                    class="
                                                        notoSansJpAndFourteenRegular
                                                        hover:opacity-50
                                                        active:opacity-50
                                                        cursor-pointer
                                                        ml-2.5
                                                    "
                                                >
                                                    {{ item.title }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 二行目 -->
                    <div
                        class="
                            notoSansJpAndTwelveBold
                            text-center
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
                            notoSansJpAndTwelve
                        "
                    >
                        <button class="h-5 w-42.5">
                            {{ $store.getters.topManagementInfo.authority }}
                        </button>
                    </div>
                </div>
                <!-- 四行目 -->
                <div class="flex flex-col h-22.5 w-42.5 space-y-2.5">
                    <button
                        class="
                            bg-personInformationButton
                            hover:opacity-50
                            active:bg-red-600
                            active:opacity-100
                            h-10
                            rounded-full
                            notoSansJpAndSixteenblack
                            text-white
                        "
                    >
                        お知らせ 登録
                    </button>

                    <button
                        class="
                            bg-personInformationButton
                            hover:opacity-50
                            active:bg-red-600
                            active:opacity-100
                            h-10
                            rounded-full
                            notoSansJpAndSixteenblack
                            text-white
                        "
                    >
                        掲示板 登録
                    </button>
                </div>
                <!-- 五行目 -->
                <div class="flex flex-col h-22.5 w-42.5 space-y-2.5">
                    <button
                        class="
                            bg-personOrganizationButton
                            hover:opacity-50
                            active:bg-personInformationButton
                            active:opacity-100
                            h-10
                            rounded-full
                            notoSansJpAndSixteenblack
                            text-white
                        "
                    >
                        組織内DI 記録 登録
                    </button>

                    <button
                        class="
                            bg-personOrganizationButton
                            hover:opacity-50
                            active:bg-personInformationButton
                            active:opacity-100
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
                        rounded-md
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
                            rounded-t-lg
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
                            rounded-b-lg
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
import iconDown from '../svgImage/iconDown.vue';

export default {
  components: { iconDown },
  props: {},
  data() {
    return {
      isDown: false,
    };
  },
  couputed: {},
  watch: {},
  methods: {
    itemClick() {
      console.log(this.isDown)
      this.isDown = !this.isDown
      console.log(this.isDown)
    },
  },
  created() {

  }
}
</script>
<style scoped>
</style>
