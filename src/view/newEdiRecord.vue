<template>
    <div>
        <!-- トップ情報 -->
        <my-all-header :form="$constant.formList.BBSR"></my-all-header>
        <!-- 中間内容情報 -->
        <new-edi-record-layout></new-edi-record-layout>
        <!-- ボトム情報 -->
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import newEdiRecordLayout from '../layout/newEdiRecordLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        newEdiRecordLayout,
        homeBottomTemplate,
    },
}
</script>
