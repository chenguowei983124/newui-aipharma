<template>
    <span v-if="itemType == 1" :class="itemClass" :title="sdf">{{
        title
    }}</span>
    <span v-if="itemType == 2" :class="itemClass" :title="sdf">{{
        itemValue
    }}</span>
    <span v-if="itemType == 3" :class="itemClass" :title="sdf">{{
        itemValue
    }}</span>
    <span v-if="itemType == 4" :class="itemClass" :title="sdf"
        >{{ itemValue }}{{ itemTitle }}</span
    >
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
  components: {},
  // itemType 1:ラベル 2:日付 3:タイトル
  // typeKB 1:全体 2:組織内 3:グループ 4:学　会 5:完 全 6:採 用 7:審 査 8:要閲覧 9: 告　知、10:イベント、11:その他、12:質問、13:アンケート
  //        14:view　15：New　16：UPDATE
  // itemStyle:ディフォルト以外
  // addStyle:追加
  // itemTitle
  props: { itemType: String, typeKB: String, itemStyle: String, addStyle: String, itemTitle: String, itemValue: String },
  data() {
    return {
      title: ''
    }

  },
  computed: {
  },
  setup(props) {
    const itemClass = computed(() => {
      const style = [];
      // ディフォルト以外
      if (props.itemStyle != null) {
        style.push(props.itemStyle)
        return style
      }

      if (props.itemType == "1") {

        // 1:全体
        if (props.typeKB == "whole") {
          style.push('w-17.5 bg-cardGroup2 searchResultGroup')
        }

        if (props.typeKB == "organization") {
          // 2:組織内 
          style.push("w-17.5 bg-cardGroup1 searchResultGroup")
        }

        if (props.typeKB == "group") {
          // 3:グループ 
          style.push("w-17.5 bg-cardGroup3 searchResultGroup")
        }

        if (props.typeKB == "society") {
          // 4:学　会 
          style.push("w-17.5 bg-cardGroup2 searchResultGroup")
        }

        if (props.typeKB == "safety") {
          // 5:安全 
          style.push("w-17.5 bg-cardTypePmad1 searchResultPmdaGroup")
        }

        if (props.typeKB == "recruitment") {
          // 6:採 用 
          style.push("w-17.5 bg-cardTypePmad2 searchResultPmdaGroup")
        }

        if (props.typeKB == "examination") {
          // 7:審 査 
          style.push("w-17.5 bg-cardTypePmad3 searchResultPmdaGroup")
        }

        if (props.typeKB == "browse") {
          // 8:要閲覧 
          style.push("w-10 searchResultBrowseRequiredStyle")
        }

        if (props.typeKB == "notice") {
          // 9: 告　知
          style.push("w-16.25 ring-1 ring-gray-400 searchResultNotificationStyle ")
        }

        if (props.typeKB == "event") {
          // 10:イベント
          style.push("w-16.25 ring-1 ring-gray-400 searchResultNotificationStyle ")
        }

        if (props.typeKB == "other") {
          // 12:その他
          style.push("w-16.25 ring-1 ring-gray-400 searchResultNotificationStyle ")
        }

        if (props.typeKB == "query") {
          // 13:アンケート
          style.push("w-16.25 ring-1 ring-gray-400 searchResultNotificationStyle ")
        }

        if (props.typeKB == "questionnaire") {
          // 13:アンケート
          style.push("w-16.25 ring-1 ring-gray-400 searchResultNotificationStyle ")
        }
        if (props.typeKB == "view") {
          // 14:view
          style.push("w-12.5 ring-1 ring-blue-400 searchResultViewCountStyle")
        }
        if (props.typeKB == "new") {
          // 15：New　
          style.push("w-12.5 border-4 border-red-500 searchResultPmdaGroup text-cardPmadNew")
        }
        if (props.typeKB == "update") {
          // 16：UPDATE
          style.push("w-20 border-4 border-yellow-500 archResultPmdaGroup text-cardPmadUpadte")
        }
        if (props.typeKB == "notLooked") {
          // 17：未
          style.push("w-4 h-4 block text-xxs font-NotoSansJp font-medium ring-1 ring-yellow-600 bg-cardLooked text-yellow-600 text-center")
        }
        if (props.typeKB == "Looked") {
          // 17：未
          style.push("w-4 h-4 invisible block text-xxs font-NotoSansJp font-medium ring-1 ring-yellow-600 bg-cardLooked text-yellow-600 text-center")
        }
      } else if (props.itemType == "2") {
        // 2:日付
        style.push("w-18.75 searchResultDateStyle")
      } else if (props.itemType == "3") {
        //3:タイトル
        style.push("searchResultTitleStyle")
      } else if (props.itemType == "4") {
        //3:タイトル
        style.push(" searchResultViewCountStyle")
      }
      // style追加
      if (props.addStyle != "") {
        console.log(props.addStyle)
        style.push(props.addStyle)
      }
      return style
    })

    const title = computed(() => {
      // 1:全体
      if (props.typeKB == "whole") {
        return "全体"
      }

      if (props.typeKB == "organization") {
        // 2:組織内 
        return "組織内"
      }

      if (props.typeKB == "group") {
        // 3:グループ  
        return "グループ"
      }

      if (props.typeKB == "society") {
        // 4:学　会 
        return "学　会"
      }

      if (props.typeKB == "safety") {
        // 5:安全 
        return "安全"
      }

      if (props.typeKB == "recruitment") {
        // 6:採 用 
        return "採 用"
      }

      if (props.typeKB == "examination") {
        // 7:審 査 
        return "審 査"
      }

      if (props.typeKB == "browse") {
        // 8:要閲覧 
        return "要閲覧"
      }

      if (props.typeKB == "notice") {
        // 9: 告　知
        return "告　知"
      }

      if (props.typeKB == "event") {
        // 10:イベント
        return "イベント"
      }

      if (props.typeKB == "other") {
        // 12:その他
        return "その他"
      }

      if (props.typeKB == "query") {
        // 13:質問
        return "質問"
      }

      if (props.typeKB == "questionnaire") {
        // 14:アンケート
        return "アンケート"
      }
      if (props.typeKB == "view") {
        // 15:view
        return "view"
      }
      if (props.typeKB == "new") {
        // 15：New　
        return "NEW"
      }
      if (props.typeKB == "update") {
        // 16：UPDATE
        return "UPDATE"
      }
      if (props.typeKB == "notLooked") {
        // 17：未
        return "未"
      }
      if (props.typeKB == "Looked") {
        // 17：未
        return " "
      }
    })
    return {
      itemClass, title
    }
  }
}
</script>
<style scoped>
</style>
