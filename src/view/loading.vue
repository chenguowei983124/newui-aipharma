<template>
    <!-- ロード -->
    <!--  -->
    <div
        class="
            fixed
            top-0
            bottom-0
            left-0
            right-0
            bg-lock
            z-99
            cursor-wait
            items-center
            flex
            justify-center
        "
        v-show="$store.getters.getIsLoadingShow"
    >
        <div class="notoSansJpAndFourteenBold md:notoSansJpAndTwentyTwoBold">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>...</span>
        </div>
    </div>
</template>
<style scoped>
div {
    color: rgba(0, 0, 0, 0.2);
    font-size: 2em;
    display: flex;
}
div span {
    animation: animate 3s linear infinite;
}
div span:nth-child(1) {
    animation-delay: 0s;
}
div span:nth-child(2) {
    animation-delay: 0.1s;
}
div span:nth-child(3) {
    animation-delay: 0.2s;
}
div span:nth-child(4) {
    animation-delay: 0.3s;
}
div span:nth-child(5) {
    animation-delay: 0.4s;
}
div span:nth-child(6) {
    animation-delay: 0.5s;
}
div span:nth-child(7) {
    animation-delay: 0.6s;
}
div span:nth-child(8) {
    animation-delay: 0.7s;
}

@keyframes animate {
    0%,
    100% {
        color: #fff;
        filter: blur(2px);
        text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
            0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
            0 0 300px #00b3ff, 0 0 400px #00b3ff;
    }

    25%,
    75% {
        color: rgba(0, 0, 0, 0.2);
        filter: blur(0px);
        text-shadow: none;
    }
}
/* .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    background: transparent;
    border: 3px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    font-family: sans-serif;
    font-size: 20px;
    color: #fff000;
    line-height: 150px;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-shadow: 0 0 10px #fff000;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.ring::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #fff000;
    border-right: 3px solid #fff000;
    border-radius: 50%;
    animation: animateCircle 2s linear infinite;
}
span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
}
span::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff000;
    top: -8px;
    right: -8px;
    box-shadow: 0 0 20px #fff000;
}
@keyframes animateCircle {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate {
    0% {
        transform: rotate(45deg);
    }
    100% {
        transform: rotate(405deg);
    }
} */
</style>
