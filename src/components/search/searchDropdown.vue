<template>
    <div>
        <div
            class="flex justify-start items-center h-10 bg-searchBar"
            @click="isDown = !isDown"
            :class="[isDown ? 'rounded-tl-lg' : 'rounded-l-lg']"
        >
            <a class="text-searchDropdown font-bold pl-2 text-xs NotoSansJp">
                {{ itemValue }}
            </a>
            <div class="ml-1 mr-1">
                <triangle-down-svg v-if="isDown == false"></triangle-down-svg>
                <triangle-down-svg
                    v-else
                    class="transform rotate-180"
                ></triangle-down-svg>
            </div>
        </div>
        <div
            class="absolute bg-searchBar w-45 cursor-pointer"
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
                            class="NotoSansJp text-sm font-bold h-7.5"
                            >{{ value.title }}</a
                        >
                    </div>

                    <!-- 未選択アイテム -->
                    <div v-if="value.id != checkedID">
                        <div
                            class="flex hover:text-googleTitle"
                            @click="itemClick(value)"
                        >
                            <a class="w-4"></a>

                            <!-- すべてアイテム -->
                            <a
                                v-if="value.itemStyle == 'All'"
                                class="
                                    hover:text-googleTitle
                                    NotoSansJp
                                    text-sm
                                    font-bold
                                    h-7.5
                                "
                                >{{ value.title }}</a
                            >

                            <!-- すべて以外アイテム -->
                            <a
                                v-if="value.itemStyle == 'item'"
                                class="
                                    hover:text-googleTitle
                                    NotoSansJp
                                    text-sm
                                    font-bold
                                    text-b
                                    h-7.5
                                "
                                >{{ value.title }}</a
                            >
                        </div>
                    </div>

                    <!-- 選択したアイテム -->
                    <div v-if="value.id == checkedID">
                        <div
                            class="flex hover:text-googleTitle"
                            @click="itemClick(value)"
                        >
                            <check-svg class="mt-1"> </check-svg>
                            <!-- すべてアイテム -->
                            <a
                                v-if="value.itemStyle == 'All'"
                                class="
                                    text-googleTitle
                                    NotoSansJp
                                    text-sm
                                    font-bold
                                    hover:text-googleTitle
                                    h-7.5
                                "
                                >{{ value.title }}</a
                            >

                            <!-- すべて以外アイテム -->
                            <a
                                v-if="value.itemStyle == 'item'"
                                class="
                                    text-googleTitle
                                    NotoSansJp
                                    text-sm
                                    font-bold
                                    hover:text-googleTitle
                                    h-7.5
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
  props: {},
  data() {
    return {
      isDown: false,
      isSelect: true,
      itemValue: 'すべて',
      checkedID: 1,
      itemList: [
        [{ 'id': '1', 'title': 'すべて', 'itemStyle': 'All' }],
        [{ 'id': '2', 'title': 'DI ナレッジシェア', 'itemStyle': 'item' }],
        [{ 'id': '3', 'title': '組織内 DI 記録（Q&A）', 'itemStyle': 'item' }],
        [{ 'id': '4', 'title': '病例（プレアボイド）', 'itemStyle': 'item' }],
        [{ 'id': '5', 'title': 'DI 辞書', 'itemStyle': 'item' }],
        [{ 'id': '6', 'title': '製薬企業情報', 'itemStyle': 'item' }]
      ]
    };
  },
  couputed: {},
  watch: {},
  methods: {
    itemClick(value) {
      if (value.itemStyle != 'title') {
        this.checkedID = value.id
        this.itemValue = value.title
        this.isDown = !this.isDown
        this.$emit("getCheckedId", value.id)

      }
    }
  },
  created() {

  }
}
</script>
<style scoped>
</style>
