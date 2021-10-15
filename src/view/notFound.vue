<template>
    <div class="">
        <div class="flex flex-row h-screen justify-center">
            <div class="flex flex-col justify-between">
                <div></div>
                <notfound></notfound>
                <home-bottom-template></home-bottom-template>
            </div>
        </div>
    </div>
</template>

<script>
import notfound from '../layout/notfoundlayout.vue'
import homeBottomTemplate from '../components/common/homeBottomItem.vue'
export default {
  components: { notfound, homeBottomTemplate },
  props: {},
  couputed: {},
  watch: {},
  methods: {},
  created() { },
}
</script>
