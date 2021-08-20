<template>
    <div>
        <!-- <nav class="flex"> -->
        <Dropdown></Dropdown>
        <!-- </nav> -->
    </div>
</template>

<script>
import Dropdown from './DropdownItem.vue'
export default {
  name: 'navbar',
  components: { Dropdown },
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
