<template>
    <div class="flex justify-start items-center h-2.5 cursor-pointer">
        <div class="flex justify-end">
            <icon-down
                class="transform rotate-180"
                @click="itemClick"
                v-show="isDown"
            ></icon-down>
            <icon-down class="" @click="itemClick" v-show="!isDown"></icon-down>
            <div
                class="
                    absolute
                    border border-black
                    rounded
                    bg-white
                    w-25
                    h-33.5
                    space-y-2.5
                    py-2.5
                    mt-8
                "
                v-if="isDown"
            >
                <div
                    v-for="item in $constant.topManagementItemUserList"
                    :key="item"
                >
                    <!-- <router-link
                        :to="item.routerPath"
                        v-if="item.title !== 'ログアウト'"
                    >
                        <div
                            class="
                                notoSansJpAndFourteenRegular
                                hover:opacity-50
                                active:opacity-50
                                cursor-pointer
                                ml-2.5
                            "
                        >
                            {{ item.title }}
                        </div>
                    </router-link> -->

                    <div
                        class="
                            notoSansJpAndFourteenRegular
                            hover:opacity-50
                            active:opacity-50
                            cursor-pointer
                            ml-2.5
                        "
                        @click="linkClick(item)"
                    >
                        {{ item.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import iconDown from '../../components/common/svgImage/iconDown.vue'
export default {
    components: { iconDown },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
        document.addEventListener('keyup', this.handleClickOutside)
        this.searchText = this.initial
    },
    destroyed() {
        document.removeEventListener('keyup', this.handleClickOutside)
        document.removeEventListener('click', this.handleClickOutside)
    },

    data() {
        return {
            isDown: false,
        }
    },
    methods: {
        itemClick() {
            this.isDown = !this.isDown
        },
        handleClickOutside(e) {
            if (this.$el.contains(e.target)) {
                return
            }
            this.isDown = false
        },
        linkClick(item) {
            console.log('logout')
            if (item.id === 3) {
                this.$serve.postLogout().then((res) => {
                    localStorage.setItem('token', '')
                    this.$router.push('/')
                })
            } else {
                this.$router.push(item.routerPath)
            }
        },
    },
}
</script>

<style></style>
