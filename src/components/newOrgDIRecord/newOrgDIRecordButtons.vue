<template>
  <div class="flex mt-5">
    <input
        type="button"
        class="
            bg-gray-200
            hover:opacity-50
            active:bg-personInformationButton
            active:opacity-100
            h-10
            rounded-full
            notoSansJpAndEighteenBold
            text-black
            w-86.25
            disabled:cursor-not-allowed
        "
        @click="onTmpSave"
        value="下書き保存"
    />
    <input
        type="button"
        :class="
            'ml-2'
            + ' bg-orange-400'
            + ' hover:opacity-50'
            + ' active:bg-personInformationButton'
            + ' active:opacity-100'
            + ' h-10'
            + ' rounded-full'
            + ' notoSansJpAndEighteenBold'
            + ' text-white'
            + ' w-86.25'
            + ' disabled:cursor-not-allowed'
            + ( disableSave ? ' opacity-50' : '' )
        "
        :disabled="disableSave"
        @click="onSave"
        value="登録する"
    />
  </div>
</template>

<script>

export default {
  props: {
    parent: {},
    disableSave: Boolean,
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
