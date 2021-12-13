<template>
    <div class="fullOverlay" v-show="$store.getters.getIsLoadingShow">
        <span class="loader">Loading...</span>
    </div>
</template>
<style scoped>
.fullOverlay {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    z-index: 2147483647;
}

.loader,
.loader:before,
.loader:after {
    background: rgba(50, 165, 220, 1);
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
}
.loader {
    color: rgba(50, 165, 220, 1);
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;

    position: fixed;
    inset: 0;
    margin: auto;
}
.loader:before,
.loader:after {
    position: absolute;
    top: 0;
    content: '';
}
.loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}
.loader:after {
    left: 1.5em;
}
@-webkit-keyframes load1 {
    0%,
    80%,
    100% {
        box-shadow: 0 0;
        height: 4em;
    }
    40% {
        box-shadow: 0 -2em;
        height: 5em;
    }
}
@keyframes load1 {
    0%,
    80%,
    100% {
        box-shadow: 0 0;
        height: 4em;
    }
    40% {
        box-shadow: 0 -2em;
        height: 5em;
    }
}
</style>
