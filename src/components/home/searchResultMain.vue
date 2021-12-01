<template>
    <div class="h-full space-y-2.5 md:space-y-3.75">
        <!-- お知らせ -->
        <resut-tag
            class="hidden md:block"
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="お知らせ"
            titleStyle="bulletinBoardInfoTitle"
            titleURL="searchNotification"
        >
            <result-detail-row
                class="searchResult_detail_blue"
                routerPath="searchNotification"
                :sites="$store.getters.topNoticeInfo.details"
                :sub2="['title']"
            >
            </result-detail-row>
        </resut-tag>
        <resut-tag
            class="block md:hidden"
            headerStyle="doubleTag"
            title="お知らせ"
            TitleStyle="notoSansJpAndEighteenBold"
            subTitle="掲示板"
            subTitleStyle="notoSansJpAndEighteenBold"
        >
            <div class="tab-a1 hidden">
                <result-detail-row
                    routerPath="searchNotification"
                    class="searchResult_detail_blue"
                    :sites="$store.getters.topNoticeInfo.details"
                    :sub2="['title']"
                >
                </result-detail-row>
            </div>
            <div class="tab-a2 hidden">
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchBulletinBoard"
                    :sites="$store.getters.topBulletinBoardInfo.details"
                    :sub2="['title']"
                >
                </result-detail-row>
            </div>
        </resut-tag>

        <!-- 掲示板 -->
        <resut-tag
            class="hidden md:block"
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="掲示板"
            titleStyle="bulletinBoardInfoTitle"
            titleURL="searchBulletinBoard"
        >
            <result-detail-row
                class="searchResult_detail_blue"
                routerPath="searchBulletinBoard"
                :sub2="['title']"
                :sites="$store.getters.topBulletinBoardInfo.details"
            >
            </result-detail-row>
        </resut-tag>

        <!-- 学会情報 -->
        <resut-tag
            headerStyle="titleOnlyUnderlineGrayLine"
            title="学会情報"
            titleStyle="scientifiSocietyInfoTitle"
            subTitle="予約はこちら"
            subTitleStyle="searchResult_header_reserveLink"
            subTitleURL="/"
        >
            <result-detail-row
                class="searchResult_detail_gray"
                :sites="$store.getters.topScientifiSocietyInfo.details"
                proDetailStyle="style2"
                midDetailStyle="style2"
                bakDetailStyle="style2"
                lineStyle="grayline"
                :sub1="['dateFrom', 'dateTo']"
                :sub2="['title', 'urlTitle']"
            >
                <div
                    :class="[
                        $store.getters.topScientifiSocietyInfo.details == ''
                            ? 'py-3 mid:py-0 mid:pb-3'
                            : 'py-3 ',
                    ]"
                >
                    <carousel class=""></carousel>
                </div> </result-detail-row
        ></resut-tag>

        <!-- PMDA -->
        <resut-tag
            headerStyle="titleOnlyUnderlineBgColorGray"
            title="PMDA"
            titleStyle="pdmaInfoTitle"
            rightStyle="icon"
            iconUrl="https://www.pmda.go.jp/"
            ><result-detail-row
                :class="[
                    $store.getters.topPMDAInfo.details == '' ? 'py-3 ' : '',
                ]"
                class="searchResult_detail_gray"
                lineStyle="grayline"
                :sub2="['title']"
                :sites="$store.getters.topPMDAInfo.details"
            >
            </result-detail-row
        ></resut-tag>

        <div
            class="
                md:grid md:grid-cols-2
                space-y-2 space-x-0
                md:space-y-0 md:space-x-4
            "
        >
            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorGray"
                title="医薬品更新情報"
                titleStyle="notoSansJpAndSixteenBold"
                ><result-detail-row class="searchResult_detail_gray">
                    <div class="h-15 font-bold">Coming Soon…</div>
                </result-detail-row></resut-tag
            >
            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorGray"
                title="Topics"
                titleStyle="latoAndSixteenBold"
                ><result-detail-row class="searchResult_detail_gray">
                    <div class="h-15 font-bold">Coming Soon…</div>
                </result-detail-row></resut-tag
            >
        </div>
        <resut-tag
            headerStyle="titleOnlyUnderlineGrayLine"
            title="その他の情報"
            titleStyle="notoSansJpAndEighteenBold"
            titleURL="/"
            ><result-detail-row
                class="
                    searchResult_detail_gray
                    md:flex
                    justify-between
                    md:space-x-4 md:space-y-0
                    space-y-2 space-x-0
                    md:p-4
                    p-2
                "
            >
                <div class="w-full border-2 h-20 bg-grayline">動画</div>
                <div class="w-full border-2 h-20 bg-grayline">
                    企業一覧
                </div></result-detail-row
            ></resut-tag
        >
    </div>
</template>

<script>
import resutTag from '../common/searchResult/resultTag.vue'
import resultDetailRow from '../common/searchResult/resultDetailRow.vue'
import carousel from '../common/searchResult/carousel.vue'

export default {
    components: {
        resutTag,
        resultDetailRow,
        carousel,
    },
    props: {},
    watch: {},
    setup() {},
    mounted() {
        this.$store.dispatch('getTopNotice', this.$store.getters.getOidcCode)
        this.$store.dispatch(
            'getTopBulletinBoardInfo',
            this.$store.getters.getOidcCode
        )
        this.$store.dispatch('getScientifiSocietyInfo')
        this.$store.dispatch('getTopPMDA')
        this.$store.dispatch('getCommonInfo')
    },
}
</script>
<style scoped></style>
