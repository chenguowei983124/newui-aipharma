<template>
    <div class="bg-yellow-300 relative">
        <div class="toast-wrapper">
            <div class="toast">{{ message }}</div>
        </div>
    </div>
</template>
<script>
export default {
  props: { message: "" },
  data() {
    return {
    }
  }
}
</script>

<style>
.toast-wrapper {
    position: absolute;
    position: fixed;
    width: 120%;
    top: 20px;
    left: 20px;
}
.toast {
    padding: 20px;
    color: white;
    background: #ff0062;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: 0 auto;
}
</style>
