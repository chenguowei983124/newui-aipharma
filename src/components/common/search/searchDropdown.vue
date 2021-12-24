<template>
    <div class="z-75">
        <div
            class="
                flex
                justify-start
                items-center
                h-10
                bg-searchBar
                cursor-pointer
            "
            @click="isDown = !isDown"
            :class="[
                isDown ? 'rounded-tl' : 'rounded-l border-b-2 border-blueline',
            ]"
        >
            <a class="text-view pl-2 notoSansJpAndTwelveRegular">
                <!-- {{ itemList[checkedID][0].title }} -->
                {{ selectItemTitle }}
            </a>
            <div class="ml-1 mr-2">
                <triangle-down-svg v-show="isDown == false"></triangle-down-svg>
                <triangle-down-svg
                    v-show="isDown == true"
                    class="transform rotate-180"
                ></triangle-down-svg>
            </div>
        </div>

        <div
            class="
                absolute
                bg-searchBar
                w-45
                cursor-pointer
                z-10
                rounded-b-md rounded-tr-md
            "
            v-if="isDown"
            @click="isSelect = !isSelect"
        >
            <div v-for="item in itemList" :key="item">
                <div v-for="value in item" :key="value">
                    <!-- タイトルアイテム -->
                    <div class="flex">
                        <a class="w-4"></a>
                        <a
                            v-if="value.itemStyle == 'title'"
                            class="NotoSansJp text-xs font-bold h-7.5"
                            >{{ value.title }}</a
                        >
                    </div>

                    <!-- 未選択アイテム -->
                    <div v-if="value.id != checkedID" class="pl-2">
                        <div
                            class="flex topMouseover"
                            @click="itemClick(value)"
                        >
                            <a class="w-4"></a>

                            <!-- すべてアイテム -->
                            <a
                                v-if="value.itemStyle == 'All'"
                                class="
                                    topMouseover
                                    NotoSansJp
                                    text-xs
                                    font-semibold
                                    h-7.5
                                    pl-1
                                    pt-2
                                "
                                >{{ value.title }}</a
                            >

                            <!-- すべて以外アイテム -->
                            <a
                                v-if="value.itemStyle == 'item'"
                                class="
                                    topMouseover
                                    NotoSansJp
                                    text-xs
                                    font-semibold
                                    h-7.5
                                    pl-1
                                    pt-2
                                "
                                >{{ value.title }}</a
                            >
                        </div>
                    </div>

                    <!-- 選択したアイテム -->
                    <div v-if="value.id == checkedID" class="pl-2">
                        <div
                            class="flex topMouseover"
                            @click="itemClick(value)"
                        >
                            <check-svg class="mt-2"> </check-svg>
                            <!-- すべてアイテム -->
                            <a
                                v-if="value.itemStyle == 'All'"
                                class="
                                    text-googleTitle
                                    NotoSansJp
                                    text-xs
                                    font-semibold
                                    topMouseover
                                    h-7.5
                                    pl-1
                                    pt-2
                                "
                                >{{ value.title }}</a
                            >

                            <!-- すべて以外アイテム -->
                            <a
                                v-if="value.itemStyle == 'item'"
                                class="
                                    text-googleTitle
                                    NotoSansJp
                                    text-xs
                                    font-semibold
                                    topMouseover
                                    h-7.5
                                    pl-1
                                    pt-2
                                "
                                >{{ value.title }}</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import checkSvg from '../svgImage/checkSvg.vue'
import triangleDownSvg from '../svgImage/triangleDownSvg.vue'

export default {
  components: { checkSvg, triangleDownSvg },
  props: {
    checkedID: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    selectItemTitle() {
      let title = "すべて";
      for (let index = 0; index < this.itemList.length; index++) {
        if (this.checkedID == this.itemList[index][0].id) {
          title = this.itemList[index][0].title;
        }
      }
      return title;
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
    document.addEventListener('keyup', this.handleClickOutside)
    this.searchText = this.initial
  },
  destroyed() {
    document.removeEventListener('keyup', this.handleClickOutside)
    document.removeEventListener('click', this.handleClickOutside)
  },
  data() {
    console.log('checkedID', this.checkedID)
    return {
      isDown: false,
      isSelect: true,
      itemList: [
        [{ id: '0', title: 'すべて', itemStyle: 'All' }],
        [{ id: '1', title: 'DI ナレッジシェア', itemStyle: 'item' }],
        [
          {
            id: '2',
            title: '組織内 DI 記録（Q&A）',
            itemStyle: 'item',
          },
        ],
        [{ id: '3', title: '症例（プレアボイド）', itemStyle: 'item' }],
        [{ id: '7', title: 'お知らせ', itemStyle: 'item' }],
        [{ id: '6', title: '掲示板', itemStyle: 'item' }],

        [{ id: '4', title: 'DI 辞書', itemStyle: 'item' }],
        // [{ id: '5', title: '製薬企業情報', itemStyle: 'item' }],


      ],
    }
  },
  watch: {},
  methods: {
    itemClick(value) {
      if (value.itemStyle != 'title') {
        this.isDown = !this.isDown
        this.$emit('getCheckedId', value.id)
      }
    },
    handleClickOutside(e) {
      if (this.$el.contains(e.target)) {
        return
      }
      this.isDown = false
    },
  },
  created() { },
}
</script>
<style scoped></style>
