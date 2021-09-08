<template>
    <div class="flex space-x-1 justify-center">
        <div :class="page[0]" @click="proGroupClick">{{ pageValue[0] }}</div>
        <div :class="page[1]" @click="proClick">{{ pageValue[1] }}</div>
        <div :class="page[2]" @click="PageClick(2)">{{ pageValue[2] }}</div>
        <div :class="page[3]" @click="PageClick(3)">{{ pageValue[3] }}</div>
        <div :class="page[4]" @click="PageClick(4)">{{ pageValue[4] }}</div>
        <div :class="page[5]" @click="PageClick(5)">{{ pageValue[5] }}</div>
        <div :class="page[6]" @click="PageClick(6)">{{ pageValue[6] }}</div>
        <div :class="page[7]" @click="nextClick">{{ pageValue[7] }}</div>
        <div :class="page[8]" @click="nextGroupClick">{{ pageValue[8] }}</div>
    </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data() {
    return {
      page: ["basePage", "basePage", "currentPage", "basePage", "basePage", "basePage", "basePage", "basePage", "basePage"],
      pageValue: ["<<", "<", 1, 2, 3, 4, 5, ">", ">>"],
      currentPageIndex: 2
    };
  },
  couputed: {
    currentPageIndex: function () {
      page[this.currentPageIndex] = 'currentPage'
    }
  },
  watch: {},
  methods: {
    proClick: function () {
      this.pageValue[2] = this.pageValue[2] - 1
      this.pageValue[3] = this.pageValue[3] - 1
      this.pageValue[4] = this.pageValue[4] - 1
      this.pageValue[5] = this.pageValue[5] - 1
      this.pageValue[6] = this.pageValue[6] - 1
      this.currentPageIndex = currentPageIndex - 1
    },
    nextClick: function () {
      this.pageValue[2] = this.pageValue[2] + 1
      this.pageValue[3] = this.pageValue[3] + 1
      this.pageValue[4] = this.pageValue[4] + 1
      this.pageValue[5] = this.pageValue[5] + 1
      this.pageValue[6] = this.pageValue[6] + 1
      this.currentPageIndex = currentPageIndex + 1
    }, proGroupClick: function () {
      let step = 5
      if (this.pageValue[2] <= 5) {
        console.log(this.pageValue[2])
        console.log(this.pageValue[2] - 1)
        step = this.pageValue[2] - 1
      }
      this.pageValue[2] = this.pageValue[2] - step
      this.pageValue[3] = this.pageValue[3] - step
      this.pageValue[4] = this.pageValue[4] - step
      this.pageValue[5] = this.pageValue[5] - step
      this.pageValue[6] = this.pageValue[6] - step
    },
    nextGroupClick: function () {
      const step = 5
      this.pageValue[2] = this.pageValue[2] + step
      this.pageValue[3] = this.pageValue[3] + step
      this.pageValue[4] = this.pageValue[4] + step
      this.pageValue[5] = this.pageValue[5] + step
      this.pageValue[6] = this.pageValue[6] + step
    }, PageClick: function (index) {
      this.page[2] = 'basePage'
      this.page[3] = 'basePage'
      this.page[4] = 'basePage'
      this.page[5] = 'basePage'
      this.page[6] = 'basePage'
      this.page[index] = 'currentPage'
    }
  },
  created() {

  }
}
</script>
<style scoped>
</style>
