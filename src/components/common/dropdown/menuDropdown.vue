<template>
    <div class="flex justify-between items-center">
        <div class="flex-none">
            <div class="flex relative">
                <!-- Menu icon 30px*22.5px -->
                <div
                    class="
                        w-12.5
                        h-12.5
                        md:w-15 md:h-15
                        bg-gray-400
                        cursor-pointer
                    "
                    @click="linkClick"
                    v-if="$store.getters.getIsMenuClick == false"
                >
                    <ground-menu-svg></ground-menu-svg>
                </div>
                <!-- x icon -->
                <div
                    class="
                        w-12.5
                        h-12.5
                        md:w-15 md:h-15 md:ml-25
                        bg-gray-400
                        cursor-pointer
                    "
                    :class="{
                        'absolute z-99 -bottom-12.5  md:top-0 md:-left-25':
                            $store.getters.getIsMenuClick,
                    }"
                    v-if="$store.getters.getIsMenuClick"
                    @click="linkClick"
                >
                    <ground-menu-x-svg></ground-menu-x-svg>
                </div>
                <!-- Logo img -->
                <transition
                    enter-active-class="transition duration-150 ease-out transform"
                    enter-from-class="scale-95 opacity-0"
                    enter-to-class="scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in transform"
                    leave-from-class="scale-100 opacity-100"
                    leave-to-class="scale-95 opacity-0"
                    class="border-b-2 md:border-b-0"
                >
                    <router-link
                        class="
                            w-43.75
                            h-12.5
                            md:w-30
                            mid:w-37.5
                            bg-white
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                            mid:cursor-default
                        "
                        :class="{
                            'absolute z-99 -bottom-12.5 md:w-37.5 left-12 md:top-0 md:left-15 h-12.5 md:h-15':
                                $store.getters.getIsMenuClick,
                        }"
                        @click="scrollToTop"
                        to="/myhome"
                    >
                        <menu-logo-svg
                            class="
                                w-21
                                h-9.5
                                mx-4
                                mt-1
                                md:mt-2
                                active:opacity-50
                                hover:opacity-50
                            "
                            v-if="isDispaly || $store.getters.getIsMenuClick"
                        ></menu-logo-svg>

                        <div
                            class="
                                md:hidden
                                w-18
                                h-8
                                flex
                                items-center
                                pl-1.25
                                border-l-2 border-gray-300
                                font-NotoSansJp font-normal
                                text-xxs
                            "
                            :class="[
                                $store.getters.getIsMenuClick ? 'hidden ' : '',
                            ]"
                        >
                            {{ $store.getters.topManagementInfo.hospital }}
                        </div>
                    </router-link>
                </transition>
            </div>
        </div>
    </div>
    <div
        class=""
        :class="{
            'fixed top-0 left-0 right-0 bottom-0 z-75 windowBackground':
                $store.getters.getIsMenuClick,
        }"
        @click.self="linkClick"
    ></div>
    <div
        class="w-56.25 md:w-52.5 bg-gray-200"
        :class="{
            'absolute z-99 -left-0.5 top-12.5 md:top-15 md:left-0':
                $store.getters.getIsMenuClick,
        }"
        v-if="$store.getters.getIsMenuClick"
    >
        <!-- The first one -->
        <div
            class="flex justify-between bg-gray-300 h-7.5 cursor-pointer"
            @click="
                ;(itemType1 = !itemType1),
                    (itemType2 = false),
                    (itemType3 = false)
            "
        >
            <div class="ml-3.75 mt-1">
                <div
                    class="flex items-center cursor-pointer"
                    v-for="items in menuItemList"
                    :key="items"
                >
                    <div
                        v-if="items.itemStyle == 'title'"
                        class="notoSansJpAndFourteenBold"
                    >
                        {{ items.title }}
                    </div>
                </div>
            </div>
            <!-- Triangle icon -->
            <div class="cursor-pointer mt-2.5 mr-3.75">
                <icon-down v-if="itemType1 == false" class=""></icon-down>

                <icon-down v-else class="transform rotate-180"></icon-down>
            </div>
        </div>
        <div class="" v-for="items in menuItemList" :key="items">
            <router-link :to="{ path: items.path }" @click="linkClick">
                <div v-if="itemType1">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            h-7
                            pl-10
                            notoSansJpAndFourteenRegular
                            text-tags
                            flex
                            items-center
                            cursor-pointer
                        "
                        :class="[
                            items.id == menuItemList.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        <div class="hover:opacity-50 active:opacity-50 ">
                            {{ items.title }}
                        </div>
                    </div>
                    <div
                        v-if="items.itemStyle == 'subproject'"
                        class="
                            h-7
                            pl-16
                            notoSansJpAndFourteenRegular
                            text-tags
                            flex
                            items-center
                            cursor-pointer
                        "
                        :class="[
                            items.id == menuItemList.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        <div class="hover:opacity-50 active:opacity-50">
                            {{ items.title }}
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <!-- The second one -->
        <div
            class="flex justify-between bg-gray-300 h-7.5 cursor-pointer"
            :class="[itemType1 ? '' : 'border-t-2 border-white']"
            @click="
                ;(itemType2 = !itemType2),
                    (itemType1 = false),
                    (itemType3 = false)
            "
        >
            <div class="ml-3.75 mt-1">
                <div
                    class="flex items-center cursor-pointer"
                    v-for="items in menuItemList2"
                    :key="items"
                >
                    <div
                        v-if="items.itemStyle == 'title'"
                        class="notoSansJpAndFourteenBold"
                    >
                        {{ items.title }}
                    </div>
                </div>
            </div>
            <!-- Triangle icon -->
            <div class="cursor-pointer mt-2.5 mr-3.75">
                <icon-down v-if="itemType2 == false" class=""></icon-down>

                <icon-down v-else class="transform rotate-180"></icon-down>
            </div>
        </div>
        <div class="" v-for="items in menuItemList2" :key="items">
            <router-link :to="{ path: items.path }" @click="linkClick">
                <div v-if="itemType2">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            notoSansJpAndFourteenRegular
                            text-tags
                            h-7
                            pl-10
                            pt-0.5
                            cursor-pointer
                            hover:opacity-50
                            active:opacity-50
                        "
                        :class="[
                            items.id == menuItemList2.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        {{ items.title }}
                    </div>
                </div>
            </router-link>
        </div>
        <!-- The third -->
        <div
            class="flex justify-between bg-gray-300 h-7.5 cursor-pointer"
            :class="[itemType2 ? '' : 'border-t-2 border-white']"
            @click="
                ;(itemType3 = !itemType3),
                    (itemType1 = false),
                    (itemType2 = false)
            "
        >
            <div class="ml-3.75 mt-1">
                <div
                    class="flex items-center cursor-pointer"
                    v-for="items in menuItemList3"
                    :key="items"
                >
                    <div
                        v-if="items.itemStyle == 'title'"
                        class="notoSansJpAndFourteenBold"
                    >
                        {{ items.title }}
                    </div>
                </div>
            </div>
            <!-- Triangle icon -->
            <div class="cursor-pointer mt-2.5 mr-3.75">
                <icon-down v-if="itemType3 == false" class=""></icon-down>

                <icon-down v-else class="transform rotate-180"></icon-down>
            </div>
        </div>
        <div class="" v-for="items in menuItemList3" :key="items">
            <div v-if="itemType3">
                <router-link :to="items.path" @click="linkClick">
                    <div
                        v-if="items.itemStyle == 'item'"
                        class="
                            notoSansJpAndFourteenRegular
                            text-tags
                            h-7
                            pl-10
                            pt-0.5
                            cursor-pointer
                            hover:opacity-50
                            active:opacity-50
                        "
                        :class="[
                            items.id == menuItemList3.length
                                ? ''
                                : 'border-b-2 border-white',
                        ]"
                    >
                        {{ items.title }}
                    </div>
                </router-link>
                <div
                    v-if="items.itemStyle == 'urlitem'"
                    class="
                        notoSansJpAndFourteenRegular
                        text-tags
                        h-7
                        pl-10
                        pt-0.5
                        cursor-pointer
                        hover:opacity-50
                        active:opacity-50
                    "
                >
                    <a
                        download="https://neo-ai-di-dev.kit-ai.jp/user/home/get_user_manual"
                        target="_blank"
                        href="https://neo-ai-di-dev.kit-ai.jp/user/home/get_user_manual"
                        >{{ items.title }}</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import menuLogoSvg from '../svgImage/menuLogoSvg.vue'
import iconDown from '../svgImage/iconDown.vue'
import groundMenuXSvg from '../svgImage/groundMenuXSvg.vue'
import groundMenuSvg from '../svgImage/groundMenuSvg.vue'
import HomeIconSvg from '../svgImage/homeIconSvg.vue'
export default {
    name: 'dropdown',
    components: {
        menuLogoSvg,
        iconDown,
        groundMenuXSvg,
        groundMenuSvg,
        HomeIconSvg,
    },
    props: { isDispaly: false },
    data() {
        return {
            isOpen: false,
            itemType1: true,
            itemType2: false,
            itemType3: false,
            menuItemList: [
                {
                    id: '1',
                    title: 'メインメニュー',
                    itemStyle: 'title',
                    path: '',
                },
                {
                    id: '2',
                    title: 'DIナレッジシェア',
                    itemStyle: 'item',
                    path: '/searchDiKnowledge',
                },
                {
                    id: '3',
                    title: '所属内DI記録',
                    itemStyle: 'item',
                    path: '/searchOrganization',
                },
                {
                    id: '4',
                    title: '登録',
                    itemStyle: 'subproject',
                    path: '/newOrgDIRecord',
                },
                {
                    id: '5',
                    title: '症例（プレアボイド）',
                    itemStyle: 'item',
                    path: '/searchPreavoids',
                },
                { id: '6', title: '登録', itemStyle: 'subproject', path: '' },
                {
                    id: '7',
                    title: '入出力',
                    itemStyle: 'subproject',
                    path: '/preavoidsInputOut',
                },
                {
                    id: '8',
                    title: 'お知らせ',
                    itemStyle: 'item',
                    path: '/searchNotification',
                },
                {
                    id: '8',
                    title: '投稿',
                    itemStyle: 'subproject',
                    path: '/newEdiRecord',
                },
                {
                    id: '9',
                    title: '掲示板',
                    itemStyle: 'item',
                    path: '/searchBulletinBoard',
                },
                {
                    id: '10',
                    title: '投稿',
                    itemStyle: 'subproject',
                    path: '/newBbsRecord',
                },
                { id: '11', title: 'DI辞書', itemStyle: 'item', path: '' },
                {
                    id: '12',
                    title: '製薬企業情報',
                    itemStyle: 'item',
                    path: '/searchPharmaCompany',
                },
            ],
            menuItemList2: [
                { id: '1', title: 'マイデータ', itemStyle: 'title', path: '' },
                {
                    id: '2',
                    title: '所属内DI記録',
                    itemStyle: 'item',
                    path: '/mydata/org',
                },
                {
                    id: '3',
                    title: '症例（プレアボイド）',
                    itemStyle: 'item',
                    path: '/mydata/pvd',
                },
                {
                    id: '4',
                    title: '掲示板',
                    itemStyle: 'item',
                    path: '/mydata/bbs',
                },
                {
                    id: '5',
                    title: '下書き一覧',
                    itemStyle: 'item',
                    path: '/mydata/list',
                },
            ],
            menuItemList3: [
                {
                    id: '1',
                    title: 'お役立ちコンテンツ',
                    itemStyle: 'title',
                    path: '',
                },
                {
                    id: '2',
                    title: 'DIチャットボット',
                    itemStyle: 'item',
                    path: '/diChatbot',
                },
                {
                    id: '3',
                    title: 'お薬立ちリンク集',
                    itemStyle: 'item',
                    path: '/pharmaLink',
                },
                {
                    id: '4',
                    title: '医療者向けサービス紹介',
                    itemStyle: 'item',
                    path: '/prelusion',
                },
                { id: '5', title: '使い方', itemStyle: 'urlitem', path: '' },
                // 初回表示非表示
                // {
                //     id: '5',
                //     title: '動画',
                //     itemStyle: 'item',
                //     path: '',
                // },
                // {
                //     id: '6',
                //     title: '学会',
                //     itemStyle: 'item',
                //     path: '',
                // },
            ],
        }
    },
    watch: {},
    unmounted() {
        this.$store.dispatch('setMenuClick', '')
    },
    methods: {
        linkClick() {
            this.itemType1 = true
            this.itemType2 = false
            this.itemType3 = false
            this.$store.dispatch(
                'setMenuClick',
                !this.$store.getters.getIsMenuClick
            )
        },
        scrollToTop() {
            let currentScroll = document.documentElement.scrollTop,
                int = setInterval(frame, 6)

            function frame() {
                if (0 > currentScroll) {
                    clearInterval(int)
                } else {
                    currentScroll = currentScroll - 12
                    document.documentElement.scrollTop = currentScroll
                }
            }
        },
    },
}
</script>

<style></style>
