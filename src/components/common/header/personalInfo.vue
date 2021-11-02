<template>
    <div class="h-15">
        <div class="py-2 h-7.5">
            <div class="flex space-x-2 items-baseline whitespace-nowrap">
                <a class="font-NotoSansJp font-bold text-base">
                    {{ $store.getters.topManagementInfo.user_name }}</a
                >
                <a class="font-NotoSansJp font-normal text-xs">
                    {{
                        $store.getters.topManagementInfo.title == 'doctor'
                            ? '先生'
                            : ''
                    }}</a
                >
                <a class="font-NotoSansJp font-normal text-xs">
                    {{ $store.getters.topManagementInfo.hospital }}
                </a>
            </div>
        </div>
        <div class="h-7.5">
            <div
                class="
                    w-16
                    block
                    bg-backgroundMainSearch
                    text-white
                    font-NotoSansJp
                    text-xs text-center
                    font-light
                    px-2
                    py-0.5
                    mt-1
                "
            >
                <div v-if="$store.getters.topManagementInfo.role == 'user'">
                    利 用 者
                </div>
                <div v-else>管 理 者</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
