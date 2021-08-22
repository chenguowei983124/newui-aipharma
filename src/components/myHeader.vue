<template>
    <header
        class="hidden md:block bg-fixed justify-between h-15 w-full bg-white"
    >
        <div class="flex h-15 flex-row">
            <div class="w-48">
                <!-- メニューリスト -->
                <menu-dropdown-item :isDispaly="false"></menu-dropdown-item>
            </div>
            <div class="flex-auto"></div>
            <div class="w-15">
                <div class="flex justify-center my-5">
                    <div class="underline font-NotoSansJp text-sm">ヘルプ</div>
                </div>
            </div>
        </div>
    </header>
    <header class="md:hidden fixed flex justify-between h-15 w-full bg-white">
        <div class="flex justify-between space-x-2 items-center">
            <!-- メニューリスト -->
            <menu-dropdown-item :isDispaly="true"></menu-dropdown-item>
        </div>
        <div class="flex items-center space-x-2 pr-2">
            <data-manager-dropdown
                :class="{ 'md:hidden': true }"
            ></data-manager-dropdown>
        </div>
    </header>
</template>

<script>
import menuDropdownItem from './dropdown/menuDropdown.vue'
import dataManagerDropdown from './dropdown/dataManagerDropdown.vue';
export default {
  components: { menuDropdownItem, dataManagerDropdown },
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
