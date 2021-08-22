<template>
    <div>
        <div
            class="
                flex
                justify-start
                items-center
                h-10
                rounded-l-lg
                bg-backgroundMain
            "
            @click="isDown = !isDown"
        >
            <a class="text-searchDropdown font-bold pl-2 text-xs NotoSansJp">
                {{ itemValue }}
            </a>
            <img
                class="h-2 ml-1 mr-1"
                src="../../assets/image/triangle-down.svg"
                alt=""
                v-if="isDown == false"
            />
            <img
                class="h-2 ml-1 mr-1"
                src="../../assets/image/triangle-up.svg"
                alt=""
                v-else
            />
        </div>
        <div
            class="absolute bg-backgroundMain w-48"
            v-if="isDown"
            @click="isSelect = !isSelect"
        >
            <div v-for="item in itemList" :key="item">
                <div v-for="value in item" :key="value">
                    <!-- タイトルアイテム -->
                    <div class="flex">
                        <a class="w-6"></a>
                        <a
                            v-if="value.itemStyle == 'title'"
                            class="NotoSansJp text-base font-bold"
                            >{{ value.title }}</a
                        >
                    </div>

                    <!-- 未選択アイテム -->
                    <div v-if="value.id != checkedID">
                        <div
                            class="flex hover:text-searchDropdown"
                            @click="itemClick(value)"
                        >
                            <a class="w-6"></a>

                            <!-- すべてアイテム -->
                            <a
                                v-if="value.itemStyle == 'All'"
                                class="
                                    hover:text-searchDropdown
                                    NotoSansJp
                                    text-base
                                    font-bold
                                "
                                >{{ value.title }}</a
                            >

                            <!-- すべて以外アイテム -->
                            <a
                                v-if="value.itemStyle == 'item'"
                                class="
                                    pl-4
                                    hover:text-searchDropdown
                                    NotoSansJp
                                    text-base
                                    font-normal
                                    text-dropdownListItem
                                "
                                >{{ value.title }}</a
                            >
                        </div>
                    </div>

                    <!-- 選択したアイテム -->
                    <div v-if="value.id == checkedID">
                        <div
                            class="flex hover:text-searchDropdown"
                            @click="itemClick(value)"
                        >
                            <img
                                class="w-6 h-6"
                                src="../../../assets/image/check.svg"
                            />

                            <!-- すべてアイテム -->
                            <a
                                v-if="value.itemStyle == 'All'"
                                class="
                                    text-searchDropdown
                                    NotoSansJp
                                    text-base
                                    font-bold
                                    hover:text-searchDropdown
                                "
                                >{{ value.title }}</a
                            >

                            <!-- すべて以外アイテム -->
                            <a
                                v-if="value.itemStyle == 'item'"
                                class="
                                    text-searchDropdown
                                    pl-4
                                    NotoSansJp
                                    text-base
                                    font-normal
                                    hover:text-searchDropdown
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

export default {
  components: {},
  props: {},
  data() {
    return {
      isDown: false,
      isSelect: true,
      itemValue: 'すべて',
      checkedID: 1,
      itemList: [
        [{ 'id': '1', 'title': 'すべて', 'itemStyle': 'All' }],
        [{ 'id': '2', 'title': 'Q&A', 'itemStyle': 'title' }],
        [{ 'id': '3', 'title': 'KIT-DI DB', 'itemStyle': 'item' }],
        [{ 'id': '4', 'title': '施設 DI DB', 'itemStyle': 'item' }],
        [{ 'id': '5', 'title': 'おくすり事例', 'itemStyle': 'title' }],
        [{ 'id': '6', 'title': 'おくすり事例', 'itemStyle': 'item' }],
        [{ 'id': '7', 'title': '副作用事例', 'itemStyle': 'item' }],
        [{ 'id': '8', 'title': 'DI 辞書', 'itemStyle': 'title' }],
        [{ 'id': '9', 'title': 'DI 辞書', 'itemStyle': 'item' }],
        [{ 'id': '10', 'title': '掲示板', 'itemStyle': 'title' }],
        [{ 'id': '11', 'title': '全体', 'itemStyle': 'item' }],
        [{ 'id': '12', 'title': '施設', 'itemStyle': 'item' }],
        [{ 'id': '13', 'title': '他の検索エンジン', 'itemStyle': 'title' }],
        [{ 'id': '14', 'title': 'GooGle', 'itemStyle': 'item' }],
        [{ 'id': '15', 'title': 'PubMEd', 'itemStyle': 'item' }],
        [{ 'id': '16', 'title': 'J-STAGE', 'itemStyle': 'item' }],
        [{ 'id': '17', 'title': 'Safe-DI', 'itemStyle': 'item' }]
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
      }


    }
  },
  created() {

  }
}
</script>
<style scoped>
</style>
