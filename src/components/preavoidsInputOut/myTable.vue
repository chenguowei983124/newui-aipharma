<template>
    <div class="overflow-x-auto">
        <table class="w-180 min-w-full border-l border-t border-blueline">
            <thead>
                <tr
                    class="
                        flex
                        bg-cardViewCount
                        text-xs
                        font-medium
                        h-7.5
                        notoSansJpAndTwelveBold
                    "
                >
                    <th
                        class="
                            border-r border-b border-blueline
                            w-63
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        フォーム
                    </th>
                    <!-- <th
                        class="
                            border-r border-b border-blueline
                            w-50
                            flex-none flex
                            items-center
                            justify-center
                        "
                    ></th> -->
                    <th
                        class="
                            border-r border-b border-blueline
                            w-39
                            flex-none flex
                            items-center
                            justify-center
                            text-white
                            bg-backgroundMainSearch
                        "
                    >
                        様式 1
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-39
                            flex-none flex
                            items-center
                            justify-center
                            bg-toTop
                            text-white
                        "
                    >
                        様式 2
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-39
                            flex-none flex
                            items-center
                            justify-center
                            bg-whole
                            text-white
                        "
                    >
                        様式 3
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="flex text-xs font-NotoSansJp h-15"
                    v-for="item in detailList"
                    :key="item"
                >
                    <!-- フォーム -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-63
                            flex-none
                            justify-center
                            pl-2
                        "
                    >
                        <div class="notoSansJpAndFourteenBold">
                            {{ item.title }}
                        </div>
                        <div
                            class="notoSansJpAndTwelveRegular"
                            v-for="(contents, index) in item.content"
                            :key="index"
                        >
                            {{ contents }}
                        </div>
                    </td>

                    <!-- 様式 1 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-39
                            flex-none flex
                            justify-center
                        "
                    >
                        <excel></excel>
                    </td>
                    <!--  様式 2 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-39
                            flex-none flex
                            justify-center
                        "
                    >
                        <excel></excel>
                    </td>
                    <!-- 様式 3 -->
                    <td
                        class="
                            border-r border-b border-blueline
                            w-39
                            flex-none flex
                            justify-center
                        "
                    >
                        <excel></excel>
                    </td>
                </tr>
            </tbody>
        </table>
        <div></div>
    </div>
</template>

<script>
import excel from '../common/svgImage/excel.vue'
export default {
    components: { excel },
    props: {},
    data() {
        return {
            detailList: [
                {
                    title: 'インポートフォーム',
                    content: ['AI-PHARMAへのインポートフォーム'],
                },
                {
                    title: '入力・変換フォーム',
                    content: ['プレアボイド入力フォーム'],
                },
                {
                    title: '印刷フォーム',
                    content: ['インポートフォーム⇒印刷レイアウト'],
                },
                {
                    title: '岡山県病薬フォーム',
                    content: ['岡山県病薬の独自フォーム'],
                },
                {
                    title: '日病薬入力支援フォーム改',
                    content: [
                        '日病薬への報告、リストの作成、',
                        'AI-PHARMAへのインポート用フォーム',
                    ],
                },
            ],
        }
    },
    computed: {},
    mounted() {
        this.checkAll = false
    },
    methods: {},
}
</script>
