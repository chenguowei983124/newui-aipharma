<template>
    <div class="space-y-4">
        <div
            class="
                flex flex-col
                md:flex-row
                mt-7.5
                md:mt-8 md:mx-5
                space-y-1
                md:space-y-0
            "
        >
            <div class="w-25 font-NotoSansJp text-base md:text-xl font-bold">
                検索結果：
            </div>
            <div
                class="
                    flex-auto flex flex-row
                    font-NotoSansJp
                    text-lg
                    md:text-xl
                    font-bold
                "
            >
                <div v-for="item in searchResults" :key="item" class="mr-2">
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="h-full space-y-2.5 md:space-y-3.75">
            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorBlue"
                title="DI ナレッジシェア"
                :titleUrlParam="setDiURL"
                titleStyle="bulletinBoardInfoTitle"
                titleURL="searchDiKnowledge"
            >
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchDiKnowledge"
                    :sites="diKnowledge"
                    :sub1="['keyword']"
                    :sub2="['question']"
                    :sub3="['certainty']"
                >
                </result-detail-row>
            </resut-tag>

            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorBlue"
                title="所属内DI記録"
                titleStyle="bulletinBoardInfoTitle"
                titleURL="searchOrganization"
                :titleUrlParam="setOwnURL"
                rightStyle="count"
                :countTitle="'該当：' + searchOrganizationCount + '件'"
                countStyle="searchResultAllCountLable"
            >
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchOrganization"
                    :sites="
                        $store.getters.getSearchAllOrganizationDidDocument
                            .details
                    "
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['status', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>

            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorBlue"
                title="症例（プレアボイド）"
                titleStyle="bulletinBoardInfoTitle"
                titleURL="/searchPreavoids"
                rightStyle="count"
                :countTitle="'該当：' + preAvoidCount + '件'"
                countStyle="searchResultAllCountLable"
            >
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchPreavoids"
                    :sites="$store.getters.getSearchAllPreAvoid.details"
                    :sub1="['group']"
                    :sub2="['title']"
                    :sub3="['status', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>

            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorBlue"
                title="DI 辞書"
                titleStyle="bulletinBoardInfoTitle"
                titleURL=""
                rightStyle="count"
                countTitle="該当：9999件"
                countStyle="searchResultAllCountLable"
            >
                <result-detail-row class="searchResult_detail_blue">
                    Coming soon
                </result-detail-row>
            </resut-tag>

            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorBlue"
                title="掲示板"
                titleStyle="bulletinBoardInfoTitle"
                titleURL="/searchBulletinBoard"
                rightStyle="count"
                :countTitle="'該当：' + bulletinBoardInfoCount + '件'"
                countStyle="searchResultAllCountLable"
            >
                <result-detail-row
                    class="searchResult_detail_blue"
                    routerPath="searchBulletinBoard"
                    :sites="
                        $store.getters.getSearchAllBulletinBoardInfo.details
                    "
                    :sub1="['group']"
                    :sub2="['titleHeightAuto']"
                    :sub3="['status', 'date', 'view']"
                >
                </result-detail-row>
            </resut-tag>

            <resut-tag
                headerStyle="titleOnlyUnderlineBgColorGray"
                title="Google"
                titleURL=""
                titleStyle="pdmaInfoTitle"
                rightStyle="icon"
                :iconUrl="googleSearchUrl"
            >
                <result-external-linkdetail-row
                    :sites="$store.getters.getSearchAllGoogleInfo.details"
                ></result-external-linkdetail-row>
            </resut-tag>

            <!-- <google-item></google-item> -->
            <pharmaceuticals-item></pharmaceuticals-item>
            <jstage-item></jstage-item>
        </div>
    </div>
</template>

<script>
import resutTag from '../common/searchResult/resultTag.vue'
import resultDetailRow from '../common/searchResult/resultAllDetailRow.vue'
import resultExternalLinkdetailRow from '../common/searchResult/resultExternalLinkdetailRow.vue'
import carousel from '../common/searchResult/carousel.vue'
import googleItem from '../common/searchResult/googleItem.vue'
import pharmaceuticalsItem from '../common/searchResult/pharmaceuticalsItem.vue'
import jstageItem from '../common/searchResult/jstageItem.vue'
export default {
    components: {
        resutTag,
        resultDetailRow,
        resultExternalLinkdetailRow,
        carousel,
        googleItem,
        pharmaceuticalsItem,
        jstageItem,
    },
    props: {},
    data() {
        return {}
    },
    computed: {
        diKnowledge: {
            get: function () {
                var diKnowledgeitems = []
                if (this.$store.getters.getSearchAIDiKnowledge != undefined) {
                    if (
                        Object.keys(this.$store.getters.getSearchAIDiKnowledge)
                            .length !== 0
                    ) {
                        diKnowledgeitems.push(
                            this.$store.getters.getSearchAIDiKnowledge
                        )
                    }
                }
                if (
                    this.$store.getters.getSearchAllDiKnowledge.details !=
                    undefined
                ) {
                    if (
                        Object.keys(
                            this.$store.getters.getSearchAllDiKnowledge.details
                        ).length !== 0
                    ) {
                        for (var i in this.$store.getters
                            .getSearchAllDiKnowledge.details) {
                            diKnowledgeitems.push(
                                this.$store.getters.getSearchAllDiKnowledge
                                    .details[i]
                            )
                        }
                    }
                }

                return diKnowledgeitems
            },
        },
        setOwnURL() {
            let params = {
                search: this.$route.query.search,
                // タグ
                tags: '',
                // 薬の分類
                medicine: '0',
                // 質問区分
                qacategory: '0',
                // 施設
                facility_flag: '0',
                // 表示件数
                displayed: '20',
                // ソート順
                sort: 'last_updated_at_desc',
                // ページ
                page: '1',
                // 検索対象 Q
                checkQ: true,
                // 検索対象 A
                checkA: true,
                // 検索対象 コメント
                checkComment: true,
                // 検索対象 添付ファイル名
                checkAddFileName: true,
                // 検索対象 投稿者
                checkContributor: true,
                // 検索対象 最終編集者
                checkLastEditer: true,
                // 検索対象 施設名
                checkFacilityName: true,
                // 検索対象 備考
                checkNote: true,
                timestamp: new Date().getTime(),
            }
            return params
        },
        setDiURL() {
            let params = {
                search: this.$route.query.search,
                // タグ
                tags: '',

                // 表示件数
                displayed: '20',
                // ソート順
                sort: 'last_updated_at_desc',
                // ページ
                page: '1',
                // 検索対象 Q
                checkQ: true,
                // 検索対象 A
                checkA: true,
                // 検索対象 コメント
                checkComment: true,
                // 検索対象 添付ファイル名
                checkAddFileName: true,
                // 検索対象 投稿者
                checkContributor: true,
                // 検索対象 最終編集者
                checkLastEditer: true,
                // 検索対象 施設名
                checkFacilityName: true,
                // 検索対象 備考
                checkNote: true,
                timestamp: new Date().getTime(),
            }
            return params
        },
        googleSearchUrl() {
            if (this.$route.query.search !== '') {
                return (
                    'https://www.google.co.jp/search?q=' +
                    this.$route.query.search
                )
            } else {
                  return ('https://www.google.co.jp/')
            }
        },
        searchResults: {
            get: function () {
                if (
                    this.$store.getters.getSearchAllOrganizationDidDocument
                        .details != undefined
                ) {
                    if (
                        Object.keys(
                            this.$store.getters
                                .getSearchAllOrganizationDidDocument.searchWords
                        ).length !== 0
                    ) {
                        return this.$store.getters
                            .getSearchAllOrganizationDidDocument.searchWords
                    }
                } else {
                    return this.$store.getters.getSearchAllDiKnowledge
                        .searchWords
                }
            },
        },
        searchOrganizationCount: {
            get: function () {
                if (
                    this.$store.getters.getSearchAllOrganizationDidDocument
                        .allCount != undefined
                ) {
                    return this.$store.getters
                        .getSearchAllOrganizationDidDocument.allCount
                } else {
                    return 0
                }
            },
        },
        preAvoidCount: {
            get: function () {
                if (
                    this.$store.getters.getSearchAllPreAvoid.allCount !=
                    undefined
                ) {
                    return this.$store.getters.getSearchAllPreAvoid.allCount
                } else {
                    return 0
                }
            },
        },
        bulletinBoardInfoCount: {
            get: function () {
                if (
                    this.$store.getters.getSearchAllBulletinBoardInfo
                        .allCount != undefined
                ) {
                    return this.$store.getters.getSearchAllBulletinBoardInfo
                        .allCount
                } else {
                    return 0
                }
            },
        },
    },
    unmounted() {
        this.$store.dispatch('setSearchWord', '')
    },
    methods: {
        getDispData() {
            if (this.$route.query.search != undefined) {
                this.$store.dispatch('setSearchWord',this.$route.query.search)
            } else {
                this.$store.dispatch('setSearchWord', '')
            }
            this.execSearch()
        },
        execSearch() {
            this.$store.dispatch('initSearchAllStatus')
            this.$store.dispatch('setLoadingShowFlg', false)
            this.$store.dispatch('setIsLoadingShow', true)

            this.$store.dispatch('searchALLLDiKnowledgeInfo')
            this.$store.dispatch('searchAIDiKnowledgeInfo')
            this.$store.dispatch('searchALLLOrganizationInfo')
            this.$store.dispatch('searchALLLPreAvoidInfo')
            this.$store.dispatch('searchALLBulletinBoardInfo')
            this.$store.dispatch('searchGoogleInfo')
        },
    },
    watch: {
        $route: function () {
            if (this.$route.path != '/searchResultAll') {
                return
            }
            if (JSON.stringify(this.$route.query.search) == '{}') {
                this.$store.dispatch('setSearchWord', '')
            }
            if (JSON.stringify(this.$route.query) !== '{}') {
                this.$store.dispatch(
                    'setSearchWord',
                    this.$route.query.search
                )
            }

            this.execSearch()
        },
    },
    mounted() {
        this.getDispData()
    },
}
</script>
<style scoped></style>
