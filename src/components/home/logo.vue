<template>
    <div class="flex justify-around invisible mid:visible">
        <logo-image class="w-0 h-0 md:w-50 mid:h-24"></logo-image>
        <!-- <img class="w-0 md:w-60 md:h-32" :src="logoImage" alt="" /> -->
    </div>
</template>

<script>
import logoImage from '../../components/common/svgImage/logoSvg.vue'
export default {
    components: { logoImage },
    props: {},
    data() {
        return {
            logoImage,
        }
    },
    couputed: {},
    watch: {},
    methods: {},
    created() {},
}
</script>
<style scoped></style>
