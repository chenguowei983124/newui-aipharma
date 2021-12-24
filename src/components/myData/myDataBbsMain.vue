<template>
    <!-- 検索枠 -->
    <div id="searchBulletinBoardLayout ">
        <div class="flex h-screen-50">
            <div class="flex-grow min-w-min block"></div>

            <div class="flex-shrink mr-2.5 ml-2.5 w-full md:w-245">
                <div :class="[dispFlg ? 'flex' : '']">
                    <div
                        class="
                            grid grid-cols-1
                            pm:flex-auto
                            gap-1
                            pm:space-y-3.75
                        "
                    >
                        <bbs-list
                            :class="[
                                dispFlg
                                    ? 'hidden pm:w-full pm:flex-grow pm:block'
                                    : 'flex-grow w-full',
                            ]"
                            ref="bbsList"
                            @clickItemEvent="openDetail"
                            @closeBbsTalking="closeDispFlg"
                        ></bbs-list>
                    </div>
                    <div
                        class="
                            pm:ml-2 pm:mt-0 pm:border-l-2 pm:border-blueline
                            md:border-l-2 md:border-blueline
                            hidden
                            pm:block
                        "
                        v-if="dispFlg"
                    ></div>
                    <div
                        class="
                            grid grid-cols-1
                            gap-1
                            w-full
                            pm:space-y-3.75 pm:ml-2 pm:w-132.5 pm:flex-none
                        "
                        v-if="dispFlg"
                    >
                        <bbs-talking
                            class="
                                flex-grow
                                w-full
                                pm:ml-2 pm:w-132.5 pm:flex-none
                            "
                            ref="talking"
                            @close="getClose"
                            @resetBbsRouter="resetBbsRouter"
                            :id="id"
                            :exeSearchRefishOpts="exeSearchMultiSelectRefishOpt"
                            v-if="dispFlg"
                        >
                        </bbs-talking>
                    </div>
                </div>
            </div>
            <div class="flex-grow block"></div>
        </div>
    </div>
</template>

<script>
import bbsList from './myDataBbsList.vue'
import bbsTalking from '../searchBBS/searchBBSTalking.vue'
export default {
  components: { bbsList, bbsTalking },
  computed: {



  },
  props: {},
  data() {
    return {
      dispFlg: false,
      id: '',
    }
  },
  mounted() { },
  methods: {
    openDetail(val) {
      this.id = val
      if (this.dispFlg === true) {
        this.$refs.talking.doSearch()
      }

      this.dispFlg = true
    },

    getClose(value, deleteFlg) {
      this.dispFlg = value
      this.$refs.bbsList.talkingClosed(deleteFlg)
    },
    closeDispFlg() {
      this.dispFlg = false
    },
    resetBbsRouter() {
      this.$refs.bbsList.doSearch()
    },

  },
  created() { },
}
</script>
