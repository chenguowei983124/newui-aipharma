<template>
    <div>
        <!-- タイトル -->
        <div class="hidden md:block">
            <div class="flex ml-5 mr-5 mt-2">
                <div
                    class="
                        w-8
                        h-6.5
                        pt-1.25
                        flex-none
                        bg-backgroundMain
                        items-center
                    "
                >
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        :checked="checkAll"
                        @change="allChange"
                    />
                </div>

                <div
                    class="
                        ml-1.25
                        pt-1.25
                        flex-grow
                        w-full
                        h-6.5
                        bg-backgroundMain
                    "
                >
                    {{ titleList.content }}
                </div>
                <div
                    class="
                        ml-1.25
                        pt-1.25
                        flex-none
                        w-9.5
                        h-6.5
                        bg-backgroundMain
                    "
                    v-if="titleList.file != ''"
                >
                    {{ titleList.file }}
                </div>
                <div
                    class="
                        ml-1.25
                        pt-1.25
                        flex-none
                        w-48.75
                        h-6.5
                        bg-backgroundMain
                    "
                >
                    {{ titleList.date }}
                </div>
                <div
                    class="
                        ml-1.25
                        pt-1.75
                        flex-none
                        w-16.5
                        h-6.5
                        bg-backgroundMain
                    "
                >
                    <edit-icon class="w-3 h-3 ml-7"></edit-icon>
                </div>
            </div>
        </div>
        <div v-for="(row, index) in list" :key="index">
            <div class="ml-2.5 mr-2.5 pm:ml-5 pm:mr-5 lm:ml-5 lm:mr-5 py-1.75">
                <div class="flex justify-between" v-if="!row.delete">
                    <!-- 一行目 -->
                    <div>
                        <div
                            class="
                                w-3
                                pm:w-8 pm:h-6.5
                                lm:w-8 lm:h-6.5
                                pt-4
                                pm:pt-1.25
                                lm:pt-1.25
                                flex-none
                                items-center
                            "
                        >
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                :checked="row.check"
                                @change="oneChanged(index)"
                            />
                        </div>
                    </div>
                    <!-- 二行目 -->
                    <div class="ml-1.25 pm:flex lm:flex w-full truncate">
                        <div class="flex truncate flex-grow w-full">
                            <div
                                class="
                                    ml-1.25
                                    flex-grow
                                    w-full
                                    h-6.5
                                    text-left
                                    notoSansJpAndSixteenRegular
                                    truncate
                                "
                            >
                                {{ row.content }}
                            </div>
                        </div>
                        <div
                            class="
                                pt-1.25
                                flex-none
                                w-9.5
                                h-6.5
                                text-left
                                cursor-pointer
                                hidden
                                pm:block
                                lm:block
                            "
                            v-if="titleList.file != ''"
                        >
                            <appended
                                class="ml-4 w-7 h-3"
                                @click="appendedClick(row.id)"
                            ></appended>
                        </div>
                        <div class="flex ml-0 pm:ml-3 lm:ml-3">
                            <div
                                class="
                                    ml-1
                                    block
                                    pm:hidden
                                    lm:hidden
                                    notoSansJpAndFourteenRegular
                                "
                            >
                                {{ titleList.date }}
                            </div>
                            <div
                                class="
                                    ml-1.25
                                    flex-none
                                    w-48.75
                                    h-6.5
                                    text-left
                                    pm:text-center
                                    lm:text-center
                                    notoSansJpAndFourteenRegular
                                "
                            >
                                {{ row.dateTime }}
                            </div>
                        </div>
                    </div>
                    <!-- 三行目 -->
                    <div class="flex justify-end">
                        <div
                            class="
                                ml-1.25
                                pt-4
                                pm:pt-1.25
                                lm:pt-1.25
                                flex-none
                                w-5
                                h-2.5
                                pm:w-9.5 pm:h-6.5
                                lm:w-9.5 lm:h-6.5
                                text-left
                                cursor-pointer
                                pm:hidden
                                lm:hidden
                            "
                            v-if="titleList.file != ''"
                        >
                            <appended
                                class="w-5 h-2.5 pm:w-7 pm:h-3 lm:w-7 lm:h-3"
                                @click="appendedClick(row.id)"
                            ></appended>
                        </div>
                        <div
                            class="
                                ml-1.25
                                flex-none
                                w-10
                                h-10
                                pm:w-16.5 pm:h-6
                                lm:w-16.5 lm:h-6
                                text-left
                            "
                        >
                            <div
                                class="
                                    flex
                                    w-10
                                    h-10
                                    pm:w-16.5 pm:h-6
                                    lm:w-16.5 lm:h-6
                                    rounded-md
                                    border border-notice
                                    items-center
                                    cursor-pointer
                                "
                                @click="editClick(row)"
                            >
                                <div
                                    class="
                                        notoSansJpAndTwelveMedium
                                        text-center
                                        ml-1.5
                                        pm:ml-2.5
                                        lm:ml-2.5
                                    "
                                >
                                    編集
                                </div>
                                <edit-icon
                                    class="
                                        hidden
                                        pm:block
                                        lm:block
                                        w-3
                                        h-3
                                        ml-2
                                    "
                                ></edit-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                :class="[
                    index == dispCount - 1
                        ? ''
                        : 'mx-0 pm:mx-5 lm:mx-5 border-b border-blueline',
                ]"
            ></div>
        </div>

        <div
            class="
                bg-backgroundMain
                rounded-b-lg
                text-center text-view
                h-7.5
                flex
                justify-center
                items-center
                cursor-pointer
                notoSansJpAndTwelveMedium
            "
            @click="setDetailDisp"
        >
            <triangle-down-svg
                class="w-3 h-3"
                :class="[detailDisp ? 'transform rotate-180' : '']"
                fill="#32a5dc"
                stroke="#32a5dc"
            ></triangle-down-svg>
            <div>
                {{ detailDisp ? '閉じる' : '開く' }}
            </div>
        </div>
    </div>
</template>

<script>
import editIcon from '../svgImage/mydataEdit.vue'
import appended from '../svgImage/appended.vue'
import triangleDownSvg from '../svgImage/triangleDownSvg.vue'
export default {
  components: { editIcon, appended, triangleDownSvg },
  props: {
    dataList: [],
    titleList: {},
    allCheck: {
      type: Function,
      default: () => { },
    },
    oneCheck: {
      type: Function,
      default: () => { },
    },
    delete:
    {
      type: Function,
      default: () => { },
    },
    appendedClick: {
      type: Function,
      default: () => { },
    },
    editClick: {
      type: Function,
      default: () => { },
    }

  },
  data() {
    return {
      detailDisp: false,
      dispCount: 10,
      checkAll: false
    };
  },
  computed: {
    list() {
      let list = []
      for (let i = 0; i < this.dispCount; i++) {
        if (!this.dataList[i].delete) {
          list.push(this.dataList[i])
        }

      }
      return list
    }
  },
  watch: {},
  methods: {
    setDetailDisp() {
      this.detailDisp = !this.detailDisp
      if (this.detailDisp == false) {
        this.dispCount = 10
      } else {
        this.dispCount = this.dataList.length
      }

    },
    allChange() {
      console.log("allchange")
      this.checkAll = !this.checkAll
      this.allCheck(this.checkAll)
    },
    oneChanged(index) {
      console.log("oneChange")
      this.oneCheck(index)
    }

  },
  created() {

  }
}
</script>
<style scoped>
</style>
