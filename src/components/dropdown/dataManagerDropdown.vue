<template>
    <div>
        <div class="flex justify-end items-center space-x-2">
            <img
                class="h-12 w-12 rounded-full"
                src="../../assets/image/avatar.png"
                v-if="isDown == false"
            />
            <img
                class="h-3"
                src="../../assets/image/selectTriangle-down.svg"
                alt=""
                @click="isDown = !isDown"
                v-if="isDown == false"
            />
            <!-- 投稿ボタン -->
            <div>
                <div
                    class="
                        h-10
                        w-10
                        rounded-full
                        bg-searchBunnon
                        flex
                        justify-center
                        items-center
                        space-x-2
                    "
                >
                    <img
                        class=""
                        src="../../assets/image/iconmonstr-paper-plane.svg"
                        alt=""
                    />
                </div>
            </div>
            <!-- データ管理ボタン -->
            <div class="flex justify-end">
                <!-- リストボタン -->
                <div
                    class="
                        rounded-full
                        w-10
                        h-10
                        border-2
                        pt-1
                        pl-1.5
                        bg-gray-400
                    "
                    @click="isOpen = !isOpen"
                >
                    <img src="../../assets/image/iconmonstr-document.svg" />
                </div>
            </div>
        </div>

        <!-- データ管理ボタン マスクレイヤー -->
        <div
            :class="{
                'fixed top-0 left-0 right-0 bottom-0 bg-lock z-99': isOpen,
            }"
        >
            <div
                v-if="isOpen == true"
                class="flex justify-end items-center space-x-2 py-3 pr-2"
            >
                <!-- データ管理ボタン -->
                <div class="flex justify-end">
                    <!-- リストボタン -->
                    <div
                        class="
                            rounded-full
                            w-10
                            h-10
                            border-2
                            pt-1
                            pl-1.5
                            bg-personInfo
                        "
                        @click="isOpen = !isOpen"
                    >
                        <img src="../../assets/image/iconmonstr-document.svg" />
                    </div>
                </div>
            </div>
            <!-- リスト -->
            <div class="flex justify-center">
                <div
                    class="
                        rounded-md
                        max-h-96
                        w-5/6
                        border-black
                        font-NotoSansJp
                    "
                    v-if="isOpen"
                >
                    <div
                        class="
                            text-white
                            bg-cardTitlePmad
                            rounded-t-lg
                            font-bold
                            text-4xl
                            p-5
                        "
                    >
                        データ管理
                    </div>
                    <div
                        class="
                            bg-white
                            border-2
                            rounded-b-lg
                            border-gray-400
                            text-xxl
                            p-3
                        "
                    >
                        <div class="my-2" v-for="item in itemList" :key="item">
                            <div v-for="value in item" :key="value">
                                <div
                                    v-if="value.itemStyle == 'title'"
                                    class="font-bold"
                                >
                                    {{ value.title }}
                                </div>

                                <!-- ナビゲーション -->
                                <router-link :to="{ path: 'helloWorld' }">
                                    <div
                                        v-if="value.itemStyle == 'item'"
                                        class="mx-4 text-gray-600"
                                    >
                                        {{ value.title }}
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 三角 マスクレイヤー -->
        <div
            :class="{
                'fixed top-0 left-0 right-0 bottom-0 bg-lock z-99': isDown,
            }"
        >
            <div
                v-if="isDown == true"
                class="flex justify-end items-center space-x-2 py-2 pr-2"
            >
                <img
                    class="h-12 w-12 rounded-full"
                    src="../../assets/image/avatar.png"
                />
                <img
                    class="h-3 transform rotate-180"
                    src="../../assets/image/selectTriangle-down.svg"
                    alt=""
                    @click="isDown = !isDown"
                />
                <div>
                    <div
                        class="
                            h-10
                            w-10
                            rounded-full
                            bg-searchBunnon
                            flex
                            justify-center
                            items-center
                            space-x-2
                        "
                    >
                        <img
                            class=""
                            src="../../assets/image/iconmonstr-paper-plane.svg"
                            alt=""
                        />
                    </div>
                </div>
                <!-- データ管理ボタン -->
                <div class="flex justify-end">
                    <!-- リストボタン -->
                    <div
                        class="
                            rounded-full
                            w-10
                            h-10
                            border-2
                            pt-1
                            pl-1.5
                            bg-gray-400
                        "
                    >
                        <img src="../../assets/image/iconmonstr-document.svg" />
                    </div>
                </div>
            </div>
            <!-- リスト -->
            <div class="flex justify-center">
                <div
                    class="
                        border-2 border-black
                        rounded-md
                        bg-white
                        w-5/6
                        text-center
                    "
                    v-if="isDown"
                >
                    <div class="bg-white flex justify-center my-4">
                        <img
                            class="h-24 w-24 rounded-full"
                            src="../../assets/image/avatar.png"
                        />
                    </div>
                    <div class="flex justify-center space-x-4 my-4">
                        <div class="font-bold text-xll font-NotoSansJp">
                            {{ sites[0].name }}
                        </div>
                        <div class="text-2xl">
                            {{ sites[0].age }}
                        </div>
                    </div>

                    <div
                        class="
                            my-4
                            text-2xl
                            font-bold font-NotoSansJp
                            text-center
                        "
                    >
                        {{ sites[0].hospital }}
                    </div>

                    <div class="flex justify-center my-4">
                        <div
                            class="
                                bg-cardTitle
                                w-40
                                text-white text-2xl
                                font-NotoSansJp
                            "
                        >
                            {{ sites[0].authority }}
                        </div>
                    </div>

                    <!-- ナビゲーション -->
                    <router-link :to="{ path: 'helloWorld' }">
                        <div v-for="item in itemUserList" :key="item">
                            <div v-for="value in item" :key="value">
                                <div
                                    class="
                                        text-black
                                        font-bold
                                        hover:text-searchDropdown
                                        text-xxl
                                        my-4
                                    "
                                >
                                    {{ value.title }}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuDropdown from './menuDropdown.vue';

export default {
  components: {},
  props: {},
  data() {
    return {
      isOpen: false,
      sites: [{ id: 0, name: '木村 太郎', age: '先生', hospital: '◯◯◯◯◯◯◯◯◯◯大学病院', authority: '管 理 者', },
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

  },
  created() {

  }
}
</script>
