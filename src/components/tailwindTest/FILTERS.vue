<template>
    <div>
        <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
            ></path>
        </svg>

        <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            ></path>
        </svg>
        <div class="filter grayscale blur-md contrast-200 ...">
            <img src="../../assets/logo.png" alt="" />
        </div>

        <div class="filter blur-lg ...">
            <img src="../../assets/logo.png" alt="" />
        </div>

        <div class="filter blur-sm ...">
            <img src="../../assets/logo.png" alt="" />
        </div>

        <div class="filter brightness-125 ...">
            <img src="../../assets/logo.png" alt="" />
        </div>

        <div class="filter contrast-125 ...">
            <img src="../../assets/logo.png" alt="" />
        </div>

        <div class="filter drop-shadow-lg ...">
            <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="backdrop-filter bg-yellow-400 ...">
            <div>asdfasdf</div>
            <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="backdrop-filter backdrop-blur-3xl ...">
            <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="backdrop-filter backdrop-invert md:backdrop-invert-0 ...">
            <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="backdrop-filter backdrop-brightness-125 ...">
            <img src="../../assets/logo.png" alt="" />
        </div>

        <div class="grid grid-cols-3 divide-x divide-green-500">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data() {
    return {

    };
  },
  couputed: {},
  watch: {},
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
</style>
