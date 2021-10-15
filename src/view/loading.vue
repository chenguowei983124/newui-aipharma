<template>
    <!-- ロード -->
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
        <div class="notoSansJpAndTwentyFourBold text-white">Loading</div>
    </div>
</template>
