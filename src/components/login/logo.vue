<template>
    <div class="flex justify-around">
        <logo-image class="w-50 h-24"></logo-image>
        <!-- <img class="w-0 md:w-60 md:h-32" :src="logoImage" alt="" /> -->
    </div>
</template>

<script>
import logoImage from '../common/svgImage/logoSvg.vue'
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
