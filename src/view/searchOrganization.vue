<template>
    <div>
        <my-mid-header class="hidden md:block"></my-mid-header>
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
                z-99
            "
        >
            <!-- メニューリスト -->
            <menu-dropdown-item :isDispaly="true"></menu-dropdown-item>

            <data-manager-dropdown
                class="pr-2"
                :class="{ 'md:hidden': true }"
            ></data-manager-dropdown>
        </header>
        <!-- 内容 -->
        <search-organization-layout></search-organization-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myHeader from '../components/myTopHeader.vue'
import MyMidHeader from '../components/myAllHeader.vue';

import menuDropdownItem from '../components/dropdown/menuDropdown.vue'
import dataManagerDropdown from '../components/dropdown/dataManagerDropdown.vue';

import searchOrganizationLayout from '../layout/searchOrganizationLayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: {
    myHeader,
    MyMidHeader,
    menuDropdownItem,
    dataManagerDropdown,
    searchOrganizationLayout,
    homeBottomTemplate
  },

}

</script>
