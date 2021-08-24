<template>
    <div>
        <input type="radio" name="tab" id="a1" class="hidden" checked />
        <input type="radio" name="tab" id="a2" class="hidden" />
        <div class="flex space-x-2 nav">
            <label
                for="a1"
                class="
                    w-1/2
                    md:text-left
                    md:underline
                    md:px-5
                    md:w-full
                    searchResultActiveTagTitleStyle
                "
            >
                <span> お知らせ</span></label
            >
            <label
                for="a2"
                class="w-1/2 md:hidden searchResultActiveTagTitleStyle"
            >
                <span> 掲示板</span></label
            >
        </div>
    </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data() {
    return {

    };
  },
  couputed: {},
  watch: {},
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
</style>
