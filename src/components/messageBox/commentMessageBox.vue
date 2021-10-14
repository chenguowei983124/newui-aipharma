<template>
    <div class="flex justify-center">
        <!-- 710*650 -->
        <div
            class="
                flex flex-col
                w-93.75
                mid:w-191.25
                md:w-191.25
                h-80
                border-2 border-black
                items-center
                bg-gray-200
            "
        >
            <div
                class="
                    flex flex-row
                    justify-between
                    items-center
                    bg-gray-400
                    h-10
                    w-full
                    px-2
                "
            >
                <div class="">コメント</div>
                <button @click="openCommentMessageBox">
                    <x-icon-svg></x-icon-svg>
                </button>
            </div>
            <!-- 630*108 -->
            <div
                class="
                    w-80
                    mid:w-11/12
                    h-13.75
                    flex flex-row
                    border
                    rounded
                    border-black
                    bg-white
                "
            >
                <div class="flex-auto p-1">
                    <input
                        type="text"
                        placeholder="コメントを入力"
                        class="h-full w-full"
                    />
                </div>
                <div class="w-10 flex items-center justify-center">
                    <button class="bg-green-500 rounded">
                        <send-message-icon-svg></send-message-icon-svg>
                    </button>
                </div>
            </div>
            <div class="flex">
                <label class="inline-flex items-center justify-end">
                    <input
                        type="checkbox"
                        class="form-checkbox text-white"
                        checked
                    />
                    <span class="ml-2 text-xs">匿名で投稿</span>
                </label>
            </div>
            <!-- 630*144 -->
            <div class="space-y-2 mid:w-11/12">
                <div v-for="(items, index) in itemList" :key="items" class="">
                    <div
                        class="
                            p-2
                            w-80
                            mid:w-full
                            flex flex-col
                            border
                            rounded
                            text-xs
                            bg-white
                        "
                    >
                        <div
                            class="h-2/3 flex flex-row"
                            :class="[items.isShow ? 'hidden' : 'block']"
                        >
                            <div class="w-60">
                                <p
                                    class=""
                                    v-show="!items.isShow"
                                    style="word-break-word;"
                                >
                                    {{ items.title }}
                                </p>
                                <input
                                    class="w-60 h-full"
                                    type="text"
                                    v-show="items.isShow"
                                    v-model="items.title"
                                />
                            </div>
                            <div
                                class="
                                    w-20
                                    mid:w-full
                                    flex
                                    justify-end
                                    space-x-2
                                "
                            >
                                <div class="flex justify-center items-center">
                                    <button
                                        @click="editAddCheckpointsTitle(items)"
                                        class="
                                            bg-personOrganizationButton
                                            rounded
                                        "
                                    >
                                        <pencil-alt-icon-svg
                                            class="w-6 h-6"
                                        ></pencil-alt-icon-svg>
                                    </button>
                                </div>
                                <div class="flex justify-center items-center">
                                    <button
                                        @click="deleteFruit(index)"
                                        class="
                                            bg-personInformationButton
                                            rounded
                                            w-6
                                            h-6
                                        "
                                    >
                                        <trash-icon-svg
                                            class="w-6 h-5"
                                        ></trash-icon-svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="h-2/3 flex flex-row"
                            :class="[items.isShow ? 'block' : 'hidden']"
                        >
                            <div class="w-80 mid:w-full">
                                <div
                                    class="
                                        w-80
                                        mid:w-full
                                        flex
                                        justify-between
                                        border-0 border-black
                                        text-xs
                                    "
                                >
                                    <input
                                        class="
                                            w-60
                                            h-full
                                            placeholder-gray-500
                                            focus:placeholder-opacity-0
                                            border border-transparent
                                            focus:outline-none
                                            focus:ring-1 focus:ring-326EB5Lins
                                            focus:border-transparent
                                        "
                                        type="text"
                                        v-show="items.isShow"
                                        v-model="items.title"
                                    />
                                    <div
                                        class="
                                            w-20
                                            flex
                                            justify-end
                                            space-x-2
                                            mr-5
                                            mid:mr-0
                                        "
                                    >
                                        <button
                                            @click="
                                                editAddCheckpointsTitle(items)
                                            "
                                            class="bg-green-400 rounded"
                                        >
                                            <check-icon-svg></check-icon-svg>
                                        </button>
                                        <button
                                            @click="
                                                editAddCheckpointsTitle(items)
                                            "
                                            class="
                                                bg-red-400
                                                rounded
                                                w-6
                                                h-6
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >
                                            <x-icon-svg></x-icon-svg>
                                        </button>
                                        <!-- <button @click="deleteFruit(index)">
                                            <x-icon-svg></x-icon-svg>
                                        </button> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="h-1/3 flex justify-end items-center pt-2">
                            投稿日時 :{{ items.time }} 投稿者 :{{
                                items.manager
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PencilAltIconSvg from '../svgImage/pencilAltIconSvg.vue'
import TrashIconSvg from '../svgImage/trashIconSvg.vue'
import SendMessageIconSvg from '../svgImage/sendMessageIconSvg.vue'
import xIconSvg from '../svgImage/xIconSvg.vue'
import CheckIconSvg from '../svgImage/checkIconSvg.vue'
export default {
  components: { xIconSvg, SendMessageIconSvg, PencilAltIconSvg, TrashIconSvg, CheckIconSvg, },
  data() {
    return {
      itemList: [
        { 'id': '1', 'title': '情報が古いです。更新情報があります。', 'time': '2020.12.14', 'manager': '施設管理者' },
        { 'id': '2', 'title': '見ました。', 'time': '2020.12.14', 'manager': '施設管理者' },
        { 'id': '3', 'title': '見ました。', 'time': '2020.12.14', 'manager': '施設管理者' },

      ],
    }
  },
  methods: {
    deleteFruit: function (index) {
      // 指定されたindexの要素を1つ削除します。
      this.itemList.splice(index, 1)
    },
    editAddCheckpointsTitle(item) {
      item.isShow = !item.isShow
    },
    openCommentMessageBox() {
      //   console.log(this.$store.getters.getCommentMessageBox)
      this.$store.dispatch('setCommentMessageBox', !this.$store.getters.getCommentMessageBox)
    }
  }
}

</script>

<style>
</style>
