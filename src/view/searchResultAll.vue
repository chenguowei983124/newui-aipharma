<template>
    <div>
        <!-- <my-header></my-header> -->
        <!-- <my-mid-header></my-mid-header> -->
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
            <div class="flex justify-between space-x-2 items-center">
                <!-- メニューリスト -->
                <menu-dropdown-item :isDispaly="true"></menu-dropdown-item>
            </div>

            <data-manager-dropdown
                class="pr-2"
                :class="{ 'md:hidden': true }"
            ></data-manager-dropdown>
        </header>
        <!-- 内容 -->
        <search-result-all-layout></search-result-all-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myHeader from '../components/myHeader.vue'
import MyMidHeader from '../components/myMidHeader.vue';

import menuDropdownItem from '../components/dropdown/menuDropdown.vue'
import dataManagerDropdown from '../components/dropdown/dataManagerDropdown.vue';

import searchResultAllLayout from '../layout/searchResultAllLayout.vue'
import homeBottomTemplate from '../components/homeBottomItem.vue'
export default {
  components: { myHeader, MyMidHeader, menuDropdownItem, dataManagerDropdown, searchResultAllLayout, homeBottomTemplate },

}

</script>
