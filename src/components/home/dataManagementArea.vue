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
                            <div class="font-bold text-base font-NotoSansJp">
                                {{ $store.getters.topManagementInfo.name }}
                            </div>
                            <div class="text-xs">
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
                                    bg-searchResultTitle
                                "
                            >
                                <div
                                    class="
                                        flex
                                        justify-center
                                        pt-2.5
                                        text-white text-xl
                                        font-bold
                                    "
                                >
                                    {{
                                        $store.getters.topManagementInfo.name.substring(
                                            0,
                                            2
                                        )
                                    }}
                                </div>
                            </div>
                            <div class="">
                                <div
                                    class="flex justify-end"
                                    @click="isDown = !isDown"
                                >
                                    <img
                                        class="h-3 ml-2"
                                        src="../../assets/image/selectTriangle-down.svg"
                                        alt=""
                                        v-if="isDown == true"
                                    />
                                    <img
                                        class="h-3 ml-2 transform rotate-180"
                                        src="../../assets/image/selectTriangle-down.svg"
                                        alt=""
                                        v-if="isDown == false"
                                    />
                                    <div
                                        class="
                                            absolute
                                            border-2 border-gray-400
                                            rounded-md
                                            bg-white
                                            w-25
                                            h-33.5
                                            mt-9
                                            space-y-2.5
                                            py-2.5
                                        "
                                        v-if="!isDown"
                                    >
                                        <div
                                            v-for="item in $store.getters
                                                .topManagementItemUserList"
                                            :key="item"
                                        >
                                            <div
                                                class="
                                                    text-black
                                                    font-bold
                                                    text-sm
                                                    font-NotoSansJp
                                                    hover:text-searchDropdown
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
                    <!-- 二行目 -->
                    <div
                        class="
                            text-xs
                            font-bold font-NotoSansJp
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
                            bg-searchResultTitle
                            text-center text-white text-xs
                            font-NotoSansJp
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
                            h-10
                            rounded-full
                            font-black
                            text-white
                        "
                    >
                        お知らせ 登録
                    </button>

                    <button
                        class="
                            bg-personInformationButton
                            h-10
                            rounded-full
                            font-black
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
                            h-10
                            rounded-full
                            font-black
                            text-white
                        "
                    >
                        組織内DI 記録 登録
                    </button>

                    <button
                        class="
                            bg-personOrganizationButton
                            h-10
                            rounded-full
                            font-black
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
                        border-yellow-500
                        text-base
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
                            border-yellow-500 border-2
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

export default {
  components: {},
  props: { sites: [] },
  data() {
    return {
      //   sites: [{ id: 0, name: '木村 太郎', hospital: '◯◯◯◯◯◯◯◯◯◯大学病院', authority: '施 設 管 理 者', },
      //   ],
      //   itemList: [
      //     [{ 'id': '1', 'title': 'Q&A', 'itemStyle': 'title' }],
      //     [{ 'id': '2', 'title': '投稿データ', 'itemStyle': 'item' }],
      //     [{ 'id': '3', 'title': '一時保存データ', 'itemStyle': 'item' }],
      //     [{ 'id': '4', 'title': 'おくすり事例', 'itemStyle': 'title' }],
      //     [{ 'id': '5', 'title': '投稿データ', 'itemStyle': 'item' }],
      //     [{ 'id': '6', 'title': '一時保存データ', 'itemStyle': 'item' }],
      //     [{ 'id': '7', 'title': '入出力', 'itemStyle': 'item' }],
      //     [{ 'id': '8', 'title': 'その他', 'itemStyle': 'title' }],
      //     [{ 'id': '9', 'title': '投稿データ', 'itemStyle': 'item' }],
      //     [{ 'id': '10', 'title': '一時保存データ', 'itemStyle': 'item' }],
      //   ],
      isDown: true,
      isSelect: true,
      itemUserList: [
        { 'id': '1', 'title': 'マイページ' },
        { 'id': '2', 'title': '施設切替' },
        { 'id': '3', 'title': '設定' },
        { 'id': '4', 'title': 'ログアウト' }
      ]
    };
  },
  couputed: {},
  watch: {},
  methods: {
    itemClick() {
      this.isDown = !this.isDown
    }
  },
  created() {

  }
}
</script>
<style scoped>
</style>
