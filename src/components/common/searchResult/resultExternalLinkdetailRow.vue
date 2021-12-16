<template>
    <div
        class="
            bg-white
            border-2 border-gray-400
            rounded-b-lg
            space-y-2
            p-4
            w-full
        "
    >
        <ul class="w-full" v-for="item in sites" :key="item">
            <li class="flex space-x-2 w-full items-center">
                <div>
                    <div
                        class="
                            font-NotoSansJp font-bold
                            text-base
                            underline
                            text-googleTitle
                            hover:opacity-50
                            active:opacity-50
                        "
                    >
                        <a :href="item.url" target="view_window">{{
                            item.urlTitle
                        }}</a>
                    </div>
                    <div>
                        <a class="font-NotoSansJp text-base">
                            {{ item.overview }}
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <!-- <div
            :class="{
                ' absolute rounded-md top-0 left-0 right-0 bottom-0 windowBackground z-0':
                    aaa,
            }" 
        ></div>-->
</template>

<script>
export default {
    props: {
        sites: Array,
        aaa: String,
    },
}
</script>

<style></style>
