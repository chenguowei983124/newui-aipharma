<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-7"
        :fill="fill"
        :stroke="stroke"
        viewBox="0 0 200 93.379"
    >
        <path
            d="M604.251,2223.5l50,46.688,50,46.691h-200l50-46.691Z"
            transform="translate(-504.251 -2223.5)"
        />
    </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: "rgb(255, 255, 225)"
    }, stroke: {
      type: String,
      default: "rgb(255, 255, 225)"
    }
  }
}
</script>

<style>
</style>
