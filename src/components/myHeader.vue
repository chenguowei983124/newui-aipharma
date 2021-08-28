<template>
    <header
        class="
            hidden
            md:block
            bg-fixed
            justify-between
            h-12.5
            md:h-15
            w-full
            bg-white
        "
    >
        <div class="flex h-15 flex-row">
            <div class="w-48">
                <!-- メニューリスト -->
                <menu-dropdown-item :isDispaly="false"></menu-dropdown-item>
            </div>
            <div class="flex-auto"></div>
            <div class="w-15 md:mr-12.5 md:mt-5">
                <div class="flex justify-center cursor-pointer">
                    <div class="underline font-NotoSansJp text-sm">ヘルプ</div>
                </div>
            </div>
        </div>
    </header>
    <header
        class="
            md:hidden
            fixed
            flex
            justify-between
            h-12.5
            md:h-15
            w-full
            bg-white
        "
    >
        <div class="flex justify-between space-x-2 items-center">
            <!-- メニューリスト -->
            <menu-dropdown-item :isDispaly="true"></menu-dropdown-item>
        </div>

        <data-manager-dropdown
            class="pr-2"
            :class="{ 'md:hidden': true }"
        ></data-manager-dropdown>
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
