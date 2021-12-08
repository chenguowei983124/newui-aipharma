<template>
    <div :class="searchBarFixedClass">
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
                        space-x-2
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
                            active:opacity-50
                            hover:opacity-50
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
import menuDropdownItem from '../dropdown/menuDropdown.vue'
import personalInfo from './personalInfo.vue'
import portraitIcon from './portraitIcon.vue'
import issueIcon from './issueIcon.vue'
import managementIcon from './managementIcon.vue'
export default {
    props: {
        form: {
            type: String,
            default: 'top',
        },
    },
    components: {
        personalInfo,
        menuDropdownItem,
        portraitIcon,
        issueIcon,
        managementIcon,
    },
    computed: {
        searchBarFixedClass: function () {
            if (this.$props.form == this.$constant.formList.TOP) {
                return 'fixed md:static flex justify-between h-12.5 md:h-15 w-full z-99 bg-whiteborder-b-2 grayline '
            } else if (this.$props.form == this.$constant.formList.ALL) {
                return 'fixed flex justify-between h-12.5 md:h-15 w-full lm:w-270 z-99 bg-white border-b-2 grayline'
            } else if (this.$props.form == this.$constant.formList.DI) {
                return 'fixed flex justify-between h-12.5 md:h-15 w-full lm:w-270 z-99 bg-white border-b-2 grayline'
            } else if (this.$props.form == this.$constant.formList.OWN) {
                return 'fixed flex justify-between h-12.5 md:h-15 w-full lm:w-270 z-99 bg-white border-b-2 grayline'
            } else if (this.$props.form == this.$constant.formList.PVD) {
                return 'fixed flex justify-between h-12.5 md:h-15 w-full lm:w-270 z-99 bg-white border-b-2 grayline'
            } else if (this.$props.form == this.$constant.formList.NDI) {
                return 'flex justify-between h-12.5 md:h-15 w-full lm:w-270 z-99 bg-white border-b-2 grayline'
            } else if (this.$props.form == this.$constant.formList.BBS) {
                return 'fixed flex justify-between h-12.5 md:h-15 w-full lm:w-270 z-99 bg-white border-b-2 grayline'
            } else if (this.$props.form == this.$constant.formList.BBSR) {
                return 'flex justify-between h-12.5 md:h-15 w-full lm:w-270 z-99 bg-white border-b-2 grayline'
            } else if (this.$props.form == this.$constant.formList.EDI) {
                return 'fixed flex justify-between h-12.5 md:h-15 w-full border-b-2 grayline lm:w-270 z-99 bg-white'
            } else if (this.$props.form == this.$constant.formList.PIO) {
                return 'flex justify-between h-12.5 md:h-15 w-full lm:w-270 border-b-2 grayline z-99 bg-white'
            } else if (this.$props.form == this.$constant.formList.PAM) {
                return 'flex justify-between h-12.5 md:h-15 w-full lm:w-270 border-b-2 grayline z-99 bg-white'
            }
        },
    },
}
</script>

<style></style>
