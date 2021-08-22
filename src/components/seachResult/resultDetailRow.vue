<template>
    <div class="bg-white border-2 border-blue-300 rounded-b-lg w-full p-5">
        <div
            class="
                md:flex
                md:border-white
                space-x-3
                align-baseline
                items-center
            "
            :class="[index == 4 ? '' : 'border-b-2 border-blue-300']"
            v-for="(row, index) in sites"
            :key="row"
        >
            <div class="flex space-x-3 items-center align-baseline">
                <result-detail-row-item
                    :itemType="1"
                    :typeKB="row.group"
                ></result-detail-row-item>
                <result-detail-row-item
                    :itemType="1"
                    :typeKB="row.looked"
                ></result-detail-row-item>
                <result-detail-row-item
                    :itemType="2"
                    :itemValue="row.date"
                ></result-detail-row-item>
            </div>

            <span class="flex-grow truncate items-center align-baseline">
                <span
                    class="
                        flex
                        space-x-3
                        justify-start
                        items-center
                        align-baseline
                    "
                >
                    <result-detail-row-item
                        :itemType="3"
                        :itemValue="row.title"
                        :addStyle="getLookedTitle(row.looked)"
                    ></result-detail-row-item>
                    <result-detail-row-item
                        :itemType="1"
                        :typeKB="row.browseRequired"
                        addStyle="hidden md:block flex-none "
                    ></result-detail-row-item>
                </span>
            </span>

            <div class="flex-none flex space-x-3 items-center align-baseline">
                <result-detail-row-item
                    :itemType="1"
                    :typeKB="row.browseRequired"
                    addStyle="block md:hidden text-xs md:text-xxss md;flex-none"
                ></result-detail-row-item>
                <result-detail-row-item
                    :itemType="1"
                    :typeKB="row.notificationType"
                    addStyle="md:flex-none"
                ></result-detail-row-item>
                <result-detail-row-item
                    :itemType="4"
                    itemTitle=" view"
                    :itemValue="row.viewCount"
                    addStyle="md:flex-none"
                ></result-detail-row-item>
            </div>
        </div>
    </div>
</template>

<script>
import resultDetailRowItem from './resultDetailRowItem.vue'

export default {
  components: { resultDetailRowItem },
  props: { sites: [] },
  data() {
    return {

    };
  }, methods: {
    getLookedTitle(lookedKB) {
      if (lookedKB == "Looked") {
        return "truncate md:underline md:whitespace-pre  text-dropdownListItem"
      } else {
        return "truncate md:underline md:whitespace-pre"
      }
    }
  }
}
</script>
