<template>
    <div class="flex">
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
        <div
            class="
                flex-none
                md:block
                md:overflow-x-auto
                w-full
                md:w-270
                bg-white
            "
        >
            <router-view />
        </div>
        <div class="flex-grow max-h-full min-w-min bg-backgroundMain"></div>
    </div>
</template>
