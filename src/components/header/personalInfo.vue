<template>
    <div class="h-15">
        <div class="py-2 h-7.5">
            <div class="flex space-x-2 items-baseline whitespace-nowrap">
                <a class="font-NotoSansJp font-bold text-base">
                    {{ $store.getters.topManagementInfo.name }}</a
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
                    font-NotoSansJp font-medium
                    text-xs text-center
                    px-2
                    mt-1
                "
            >
                {{ $store.getters.topManagementInfo.authority }}
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
