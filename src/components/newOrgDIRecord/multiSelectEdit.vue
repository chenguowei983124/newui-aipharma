<template>
    <Multiselect
        class="h-7.5"
        mode="tags"
        v-model="data"
        placeholder=""
        :filterResults="false"
        :minChars="1"
        :resolveOnLoad="false"
        :delay="0"
        :searchable="true"
        :options="multiSelectItemList"
        :classes="$constant.multiselectCss"
    ></Multiselect>
</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
    name: 'multiSelectEdit',
    props: {
        multiSelectItemList: {},
    },
    components: {
        Multiselect,
    },
}
</script>
<style></style>
