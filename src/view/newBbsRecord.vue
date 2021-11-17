<template>
    <div class="h-screen flex flex-row">
        <div class="flex flex-col w-screen justify-between">
            <div>
                <!-- トップ情報 -->
                <my-all-header :form="$constant.formList.BBSR"></my-all-header>
                <!-- 中間内容情報 -->
                <new-org-DI-record-layout></new-org-DI-record-layout>
            </div>
            <!-- ボトム情報 -->
            <home-bottom-template></home-bottom-template>
        </div>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import newOrgDIRecordLayout from '../layout/newBbsRecordLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        newOrgDIRecordLayout,
        homeBottomTemplate,
    },
}
</script>
