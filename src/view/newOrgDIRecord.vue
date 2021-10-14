<template>
    <div>
        <my-all-header :form="$constant.formList.NDI"></my-all-header>
        <!-- 内容 -->
        <new-org-DI-record-layout></new-org-DI-record-layout>
        <home-bottom-template class="mt-20"></home-bottom-template>
    </div>
</template>

<script>
import myAllHeader from '../components/common/header/myAllHeader.vue'
import newOrgDIRecordLayout from '../layout/newOrgDIRecordLayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
    components: {
        myAllHeader,
        newOrgDIRecordLayout,
        homeBottomTemplate,
    },
}
</script>
