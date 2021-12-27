<template>
    <div class="flex flex-row">
        <div class="h-screen-96"></div>
        <div class="flex flex-col w-screen justify-between">
            <div>
                <my-all-header :form="$constant.formList.BBS"></my-all-header>
                <!-- 内容 -->
                <search-bulletin-board-layout></search-bulletin-board-layout>
            </div>
            <!-- ボトム情報 -->
            <home-bottom-template class=""></home-bottom-template>
        </div>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import searchBulletinBoardLayout from '../layout/searchBulletinBoardLayout.vue'
import goodMessageBox from '../components/common/messageBox/goodMessageBox.vue'
import commentMessageBox from '../components/common/messageBox/commentMessageBox.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        searchBulletinBoardLayout,
        goodMessageBox,
        commentMessageBox,
        homeBottomTemplate,
    },
    created() {
        if (localStorage.getItem('store')) {
            this.$store.replaceState(
                Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(localStorage.getItem('store'))
                )
            )
        }
    },
}
</script>
