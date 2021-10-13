<template>
  <div class="flex mt-5">
    <input
        type="button"
        class="
            bg-gray
            hover:opacity-50
            active:bg-personInformationButton
            active:opacity-100
            h-10
            rounded-full
            notoSansJpAndEighteenBold
            text-black
            w-86.25
        "
        @click="onTmpSave"
        value="下書き保存"
    />
    <input
        type="button"
        class="
            ml-2
            bg-personOrganizationButton
            hover:opacity-50
            active:bg-personInformationButton
            active:opacity-100
            h-10
            rounded-full
            notoSansJpAndEighteenBold
            text-white
            w-86.25
        "
        @click="onSave"
        value="登録する"
    />                
  </div>
</template>

<script>

export default {
  props: {
    parent: {},
  },
  data() {
    return {
    }
  },
  components: {
    // logo
  },
  methods: {
    onTmpSave: function () {
      this.$emit('onTmpSaveEvent', this.parent);
    }, 
    onSave: function () {
      this.$emit('onSaveEvent', this.parent);
    }, 
  },
}
</script>
<style>
</style>
