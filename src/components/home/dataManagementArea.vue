<template>
    <div class="md:flex">
        <div>asd</div>
        <!-- <div class="flex-none">
            <div class="rounded-md bg-personInfo md:p-4">
                <div class="md:flex justify-between items-center">
                    <div class="font-bold text-base font-NotoSansJp">
                        {{ sites[0].name }}
                    </div>
                    <div class="ml-4 flex justify-start items-center">
                        <img
                            class="rounded-full h-16 w-16"
                            src="../../assets/image/avatar.png"
                            avatar.png
                        />
                        <div class="">
                            <div
                                class="flex justify-end"
                                @click="isDown = !isDown"
                            >
                                <img
                                    class="h-3 mt-2 ml-2 mr-1"
                                    src="../../assets/image/selectTriangle-down.svg"
                                    alt=""
                                    v-if="isDown == false"
                                />
                                <img
                                    class="h-3 mt-2 ml-2 mr-1"
                                    src="../../assets/image/selectTriangle-up.svg"
                                    alt=""
                                    v-else
                                />
                                <div
                                    class="
                                        absolute
                                        border-2 border-gray-400
                                        rounded-md
                                        bg-white
                                        w-32
                                        mt-11
                                    "
                                    v-if="isDown"
                                >
                                    <div
                                        v-for="item in itemUserList"
                                        :key="item"
                                    >
                                        <div v-for="value in item" :key="value">
                                            <a
                                                class="
                                                    text-black
                                                    font-bold
                                                    text-sm
                                                    font-NotoSansJp
                                                    hover:text-searchDropdown
                                                "
                                            >
                                                {{ value.title }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="my-3 text-xs font-bold font-NotoSansJp text-center">
                    {{ sites[0].hospital }}
                </div>
                <div
                    class="
                        bg-cardTitle
                        text-center text-white text-sm
                        font-NotoSansJp
                        my-3
                    "
                >
                    {{ sites[0].authority }}
                </div>
                <div
                    class="
                        rounded-full
                        bg-searchBunnon
                        text-center text-white text-xl
                        font-bold font-NotoSansJp
                        flex
                        justify-center
                        my-4
                        py-2
                    "
                >
                    投　稿
                    <div class="mx-5"></div>
                    <img
                        class=""
                        src="../../assets/image/iconmonstr-paper-plane.svg"
                        alt=""
                    />
                </div>
                <div
                    class="rounded-md border-gray-400 text-base font-NotoSansJp"
                >
                    <div
                        class="
                            px-5
                            py-2
                            text-white
                            bg-cardTitlePmad
                            rounded-t-lg
                            font-bold
                        "
                    >
                        データ管理
                    </div>
                    <div
                        class="
                            bg-personDataInfo
                            px-5
                            py-2
                            border-2
                            rounded-b-lg
                            border-gray-400
                        "
                    >
                        <div class="my-1" v-for="item in itemList" :key="item">
                            <div v-for="value in item" :key="value">
                                <div
                                    v-if="value.itemStyle == 'title'"
                                    class="font-bold"
                                >
                                    {{ value.title }}
                                </div>
                                <div
                                    v-if="value.itemStyle == 'item'"
                                    class="mx-4 text-gray-600"
                                >
                                    {{ value.title }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      sites: [{ id: 0, name: '木村 太郎', hospital: '◯◯◯◯◯◯◯◯◯◯大学病院', authority: '施 設 管 理 者', },
      ],
      itemList: [
        [{ 'id': '1', 'title': 'Q&A', 'itemStyle': 'title' }],
        [{ 'id': '2', 'title': '投稿データ', 'itemStyle': 'item' }],
        [{ 'id': '3', 'title': '一時保存データ', 'itemStyle': 'item' }],
        [{ 'id': '4', 'title': 'おくすり事例', 'itemStyle': 'title' }],
        [{ 'id': '5', 'title': '投稿データ', 'itemStyle': 'item' }],
        [{ 'id': '6', 'title': '一時保存データ', 'itemStyle': 'item' }],
        [{ 'id': '7', 'title': '入出力', 'itemStyle': 'item' }],
        [{ 'id': '8', 'title': 'その他', 'itemStyle': 'title' }],
        [{ 'id': '9', 'title': '投稿データ', 'itemStyle': 'item' }],
        [{ 'id': '10', 'title': '一時保存データ', 'itemStyle': 'item' }],
      ],
      isDown: false,
      isSelect: true,
      itemUserList: [
        [{ 'id': '1', 'title': 'マイページ' }],
        [{ 'id': '2', 'title': '施設切替' }],
        [{ 'id': '3', 'title': '設定' }],
        [{ 'id': '4', 'title': 'ログアウト' }]
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
