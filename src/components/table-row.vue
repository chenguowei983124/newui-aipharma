<template>
    <div class="flex flex-wrap justify-around">
        <div class="w-1/4">
            {{ row_data.name }}
        </div>
        <div class="pt-2 w-1/4">{{ row_data.company }}</div>
        <div class="pt-2 w-1/4">dd</div>
        <div class="pt-2 w-1/4">dd</div>
    </div>
</template>

<script>

export default {
  components: {},
  props: {
    // row_data: []
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
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
