<template>
    <div class="home">
        <transition name="toast">
            <Toast v-if="showToast" />
        </transition>
    </div>
</template>

<script>
import Toast from '../components/Toast'

export default {
  props: { message: "" },
  components: { Toast },
  mounted: {
  },
  methods: {
    triggerToast: function () {
      this.showToast = true;
      setTimeout(() => this.showToast = false, 3000)
    },
  }
}
</script>

<style>
/* enter transitions */
.toast-enter-active {
    animation: wobble 0.5s ease;
}
/* leave transitions */
.toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-leave-active {
    transition: all 0.3s ease;
}

@keyframes wobble {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    50% {
        transform: translateY(0px);
        opacity: 1;
    }
    60% {
        transform: translateX(8px);
        opacity: 1;
    }
    70% {
        transform: translateX(-8px);
        opacity: 1;
    }
    80% {
        transform: translateX(4px);
        opacity: 1;
    }
    90% {
        transform: translateX(-4px);
        opacity: 1;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>
