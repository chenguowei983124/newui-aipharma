<template>
    <div
        class="
            fixed
            md:static
            flex
            justify-between
            h-12.5
            md:h-15
            w-full
            z-99
            bg-white
        "
    >
        <div class="flex flex-row">
            <!-- first -->
            <div class="w-43.75 md:w-45 mid:w-52.5 block">
                <menu-dropdown-item :isDispaly="true"></menu-dropdown-item>
            </div>
            <!-- second -->
            <div class="flex-auto flex justify-start items-center space-x-2">
                <portrait-icon class="hidden md:block"></portrait-icon>
                <personal-info class="hidden md:block"></personal-info>
            </div>
        </div>
        <div class="flex flex-row">
            <!-- third -->
            <div class="flex items-center">
                <div
                    class="
                        w-37.5
                        md:w-30
                        mid:w-50
                        flex
                        justify-center
                        space-x-1.25
                    "
                >
                    <portrait-icon
                        class="block md:hidden mid:hidden"
                    ></portrait-icon>
                    <issue-icon class="block md:block mid:block"></issue-icon>
                    <management-icon
                        class="block md:block mid:block"
                    ></management-icon>
                </div>
            </div>

            <!-- Fourth -->
            <div class="w-0 md:w-25">
                <div class="hidden md:block mid:block">
                    <div
                        class="
                            underline
                            font-NotoSansJp
                            text-sm
                            cursor-pointer
                            pt-5
                        "
                    >
                        ヘルプ
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import menuDropdownItem from './dropdown/menuDropdown.vue';
import personalInfo from './header/personalInfo.vue';
import portraitIcon from './header/portraitIcon.vue';
import issueIcon from './header/issueIcon.vue';
import managementIcon from './header/managementIcon.vue';
export default {
  components: { personalInfo, menuDropdownItem, portraitIcon, issueIcon, managementIcon },

}
</script>

<style>
</style>
