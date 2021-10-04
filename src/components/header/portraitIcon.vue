<template>
    <!-- portrait -->
    <div>
        <div class="md:border-l-2 border-gray-300">
            <div class="flex items-center space-x-1 w-12.5 md:w-13.75 md:ml-2">
                <div
                    class="
                        relative
                        rounded-full
                        h-9
                        w-9
                        md:h-10
                        md:w-10
                        bg-backgroundMainSearch
                        flex
                        justify-center
                        items-center
                    "
                    :class="{
                        'z-99': $store.getters.getPortraitClick,
                    }"
                >
                    <div
                        class="
                            text-white
                            notoSansJpAndFifteenLight
                            md:text-base
                        "
                    >
                        {{ $store.getters.topManagementInfo.lastName }}
                    </div>
                </div>
                <div class="flex justify-center">
                    <div
                        class="
                            whitespace-nowrap
                            flex
                            items-center
                            cursor-pointer
                        "
                        @click="clickDown"
                    >
                        <icon-down
                            v-if="$store.getters.getPortraitClick == false"
                        ></icon-down>
                        <icon-down
                            class="transform rotate-180"
                            :class="{
                                'z-99': $store.getters.getPortraitClick,
                            }"
                            v-if="$store.getters.getPortraitClick == true"
                        ></icon-down>
                    </div>
                    <!-- pc リスト マスクレイヤー -->
                    <div
                        :class="{
                            'absolute top-0 left-0 right-0 bottom-0 z-75':
                                $store.getters.getPortraitClick,
                        }"
                        @click="clickDown"
                    >
                        <div v-if="$store.getters.getPortraitClick == true">
                            <div
                                class="
                                    hidden
                                    md:block
                                    mid:block
                                    border-2 border-gray-700
                                    rounded-md
                                    bg-white
                                    w-25
                                    my-13
                                    md:ml-40
                                    mid:ml-47.5
                                    md:pl-3.5
                                    md:pb-1.5
                                "
                                v-if="$store.getters.getPortraitClick"
                            >
                                <div
                                    v-for="item in $store.getters
                                        .topManagementItemUserList"
                                    :key="item"
                                >
                                    <div
                                        class="
                                            md:mt-1.5
                                            text-black
                                            font-bold
                                            hover:opacity-50
                                            active:opacity-50
                                            cursor-pointer
                                        "
                                    >
                                        {{ item.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- sp リスト マスクレイヤー -->
                    <div
                        class="block md:hidden mid:hidden"
                        :class="{
                            'fixed top-0 left-0 right-0 bottom-0 bg-lock z-75':
                                $store.getters.getPortraitClick,
                        }"
                        @click="clickDown"
                    >
                        <div v-if="$store.getters.getPortraitClick == true">
                            <!-- リスト -->
                            <div class="flex justify-center mt-12.5">
                                <div
                                    class="
                                        border-2 border-black
                                        bg-white
                                        w-88.75
                                        h-82.5
                                    "
                                >
                                    <div
                                        class="
                                            h-45.75
                                            pt-2.5
                                            pb-2.5
                                            space-y-2.5
                                        "
                                    >
                                        <div
                                            class="bg-white flex justify-center"
                                        >
                                            <div
                                                class="
                                                    rounded-full
                                                    h-18
                                                    w-18
                                                    bg-backgroundMainSearch
                                                    flex
                                                    justify-center
                                                    items-center
                                                "
                                            >
                                                <div
                                                    class="
                                                        text-white text-3xl
                                                        font-light
                                                        font-NotoSansJp
                                                    "
                                                >
                                                    {{
                                                        $store.getters
                                                            .topManagementInfo
                                                            .lastName
                                                    }}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                font-NotoSansJp
                                                space-x-1
                                                flex
                                                justify-center
                                                items-baseline
                                            "
                                        >
                                            <div class="">
                                                {{
                                                    $store.getters
                                                        .topManagementInfo.Name
                                                }}
                                            </div>
                                            <div class="text-xs">
                                                {{
                                                    $store.getters
                                                        .topManagementInfo
                                                        .title == 'doctor'
                                                        ? '先生'
                                                        : ''
                                                }}
                                            </div>
                                        </div>

                                        <div
                                            class="
                                                font-NotoSansJp
                                                text-center text-xs
                                            "
                                        >
                                            {{
                                                $store.getters.topManagementInfo
                                                    .hospital
                                            }}
                                        </div>

                                        <div class="flex justify-center">
                                            <div
                                                class="
                                                    w-15
                                                    h-4
                                                    bg-cardTitle
                                                    text-white
                                                    font-NotoSansJp
                                                    text-xs
                                                    font-light
                                                    flex
                                                    justify-center
                                                "
                                            >
                                                {{
                                                    $store.getters
                                                        .topManagementInfo
                                                        .authority
                                                }}
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <router-link :to="{ path: 'helloWorld' }"> -->
                                    <div
                                        v-for="item in $store.getters
                                            .topManagementItemUserList"
                                        :key="item"
                                    >
                                        <div
                                            class="
                                                h-9
                                                flex
                                                justify-center
                                                items-center
                                                cursor-pointer
                                                border-t-2 border-black
                                                font-NotoSansJp
                                            "
                                        >
                                            {{ item.title }}
                                        </div>
                                    </div>
                                    <!-- </router-link> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import iconDown from "../svgImage/iconDown.vue"
export default {
  emits: ['clickDown'],
  components: { iconDown },
  data() {
    return {
      isDown: false,
    }
  },
  methods: {
    clickDown() {
      this.$store.dispatch('setPortraitClick', !this.$store.getters.getPortraitClick)
      //   this.$store.getters.getPortraitClick = !this.$store.getters.getPortraitClick;
      //   let _this = this;
      //   document.addEventListener('click', function (e) {
      //     console.log(_this.$refs.chickBox.contains(e.target))
      //     if (_this.$refs.chickBox.contains(e.target)) {
      //       console.log("点击的是页面内" + _this.btnShow)
      //       return;
      //     } else {
      //       _this.btnShow = false;
      //       console.log("点击的是页面外" + _this.btnShow)
      //     }
      //   })
    },
  }
}
</script>

<style>
</style>
