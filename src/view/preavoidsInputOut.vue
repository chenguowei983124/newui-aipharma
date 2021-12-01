<template>
    <div>
        <!-- トップ情報 -->
        <my-all-header :form="$constant.formList.PIO"></my-all-header>
        <!-- 中間内容情報 -->

        <preavoids-input-out-layout></preavoids-input-out-layout>
        <!-- ボトム情報 -->
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import preavoidsInputOutLayout from '../layout/preavoidsInputOutLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        preavoidsInputOutLayout,
        homeBottomTemplate,
    },
}
</script>
