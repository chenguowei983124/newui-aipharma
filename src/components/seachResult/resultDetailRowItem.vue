<template>
    <span v-if="itemType == '1'" :class="itemClass">{{ title }}</span>
    <span v-if="itemType == '2'" :class="itemClass">{{ itemValue }}</span>
    <span v-if="itemType == '3'" :class="itemClass">{{ itemValue }}</span>
    <span v-if="itemType == '4'" :class="itemClass"
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
          style.push('searchResult_lable_whole')
        } else if (props.typeKB == "organization") {
          // 2:組織内 
          style.push("searchResult_lable_organization")
        } else if (props.typeKB == "group") {
          // 3:グループ 
          style.push("searchResult_lable_group")
        } else if (props.typeKB == "society") {
          // 4:学　会 
          style.push("searchResult_lable_society")
        } else if (props.typeKB == "safety") {
          // 5:安全 
          style.push("searchResult_lable_safety")
        } else if (props.typeKB == "recruitment") {
          // 6:採 用 
          style.push("searchResult_lable_recruitment")
        } else if (props.typeKB == "examination") {
          // 7:審 査 
          style.push("searchResult_lable_examination")
        } else if (props.typeKB == "browse") {
          // 8:要閲覧 
          style.push("searchResult_lable_browse")
        } else if (props.typeKB == "notice") {
          // 9: 告　知
          style.push("searchResult_lable_notice")
        } else if (props.typeKB == "event") {
          // 10:イベント
          style.push("searchResult_lable_notice ")
        } else if (props.typeKB == "other") {
          // 12:その他
          style.push("searchResult_lable_notice ")
        } else if (props.typeKB == "query") {
          // 13:アンケート
          style.push("searchResult_lable_notice ")
        } else if (props.typeKB == "questionnaire") {
          // 13:質問
          style.push("searchResult_lable_notice ")
        } else if (props.typeKB == "view") {
          // 14:view
          style.push("searchResult_lable_view")
        } else if (props.typeKB == "new") {
          // 15：New　
          style.push("searchResult_lable_new")
        } else if (props.typeKB == "update") {
          // 16：UPDATE
          style.push("searchResult_lable_update")
        } else if (props.typeKB == "notLooked") {
          // 17：未
          style.push("searchResult_lable_notLooked")
        } else if (props.typeKB == "Looked") {
          // 17：未
          style.push("hidden md:block invisible searchResult_lable_notLooked")
        } else if (props.typeKB == "eventType") {
          // 6:採 用 
          style.push("searchResult_lable_eventType")
        } else if (props.typeKB == "international") {
          // 6:採 用 
          style.push(" searchResult_lable_international")
        } else if (props.typeKB == "rescue") {
          // 6:採 用 
          style.push(" searchResult_lable_rescue")
        } else {
          style.push("")
        }

      } else if (props.itemType == "2") {
        // 2:日付
        style.push("searchResult_date_title")
      } else if (props.itemType == "3") {
        //3:タイトル
        style.push("searchResult_title")
      } else if (props.itemType == "4") {
        //3:view
        style.push("searchResult_lable_view")
      }
      // style追加
      if (props.addStyle != "") {

        style.push(props.addStyle)
      }
      return style
    })

    const title = computed(() => {
      // 1:全体
      if (props.typeKB == "whole") {
        return "全　体"
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
        return "安　全"
      }

      if (props.typeKB == "recruitment") {
        // 6:採 用 
        return "採　用"
      }

      if (props.typeKB == "examination") {
        // 7:審 査 
        return "審　査"
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
        return "質　問"
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

      if (props.typeKB == "international") {
        // 17：国　際
        return "国　際"
      }

      if (props.typeKB == "eventType") {
        // 17：イベント
        return "イベント"
      }

      if (props.typeKB == "rescue") {
        // 17：救済
        return "救　済"
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
