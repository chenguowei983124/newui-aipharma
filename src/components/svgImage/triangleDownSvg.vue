<template>
    <svg
        class="h-2 w-2"
        :fill="fill"
        :stroke="stroke"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 21l-12-18h24z" />
    </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: "rgb(58, 175, 226)"
    }, stroke: {
      type: String,
      default: "rgb(58, 175, 226)"
    }
  }
}
</script>

<style>
</style>
