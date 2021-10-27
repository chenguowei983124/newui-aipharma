<template>
    <div class="flex items-center">
        <div class="flex justify-end space-x-2">
            <!-- 肖像 -->
            <portrait-icon class="block md:hidden mid:hidden"></portrait-icon>

            <issue-icon class="block md:block mid:hidden"></issue-icon>

            <management-icon
                class="block md:block mid:hidden"
            ></management-icon>
        </div>
    </div>
</template>

<script>
import portraitIcon from '../header/portraitIcon.vue'
import issueIcon from '../header/issueIcon.vue'
import managementIcon from '../header/managementIcon.vue'

export default {
  components: { portraitIcon, issueIcon, managementIcon },
  props: {},
  watch: {},
  methods: {
  },
  created() {

  }
}
</script>
