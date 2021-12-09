<template>
    <div class="space-y-2">
        <!-- 1.5行目 -->
        <div class="flex flex-row mx-2 md:mx-0 font-bold text-white pt-2">
            <!-- 検索対象 左-->
            <div class="w-20 flex text-sm md:text-base">検索対象</div>
            <!-- 右 -->
            <div class="flex-auto flex pt-0.5">
                <div class="flex flex-col md:flex-row">
                    <div class="flex flex-row">
                        <!-- Q -->
                        <div class="w-28 md:w-13">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="$store.getters.getCheckQDI"
                                    @change="onCheckQChange"
                                />
                                <span class="ml-1 text-xs md:text-mxss">Q</span>
                            </label>
                        </div>
                        <!-- A -->
                        <div class="w-20 md:w-13">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="$store.getters.getCheckADI"
                                    @change="onChangeCheckA"
                                />
                                <span class="ml-1 text-xs md:text-mxss">A</span>
                            </label>
                        </div>
                        <!-- コメント -->
                        <div class="w-20 md:w-20">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="$store.getters.getCheckCommentDI"
                                    @change="onChangeCheckComment"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >コメント</span
                                >
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <div class="w-28 md:w-30">
                            <!-- 添付ファイル名 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="
                                        $store.getters.getCheckAddFileNameDI
                                    "
                                    @change="onChangeCheckAddFileName"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >添付ファイル名</span
                                >
                            </label>
                        </div>
                        <div class="w-20 md:w-20">
                            <!-- 投稿者 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="
                                        $store.getters.getCheckContributorDI
                                    "
                                    @change="onChangeCheckContributor"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >投稿者</span
                                >
                            </label>
                        </div>
                        <div class="w-20 md:w-28">
                            <!-- 最終編集者 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="
                                        $store.getters.getCheckLastEditerDI
                                    "
                                    @change="onChangeCheckLastEditer"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >最終編集者</span
                                >
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <!-- 施設名（グループ施設用） -->
                        <div class="w-28 md:w-20">
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="
                                        $store.getters.getCheckFacilityNameDI
                                    "
                                    @change="onChangeCheckFacilityName"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >施設名</span
                                >
                            </label>
                        </div>
                        <div class="w-20 md:w-16">
                            <!-- 備考 -->
                            <label class="inline-flex items-center justify-end">
                                <input
                                    type="checkbox"
                                    class="checkboxCss"
                                    :checked="$store.getters.getCheckNoteDI"
                                    @change="onChangeCheckNote"
                                />
                                <span class="ml-1 text-xs md:text-mxss"
                                    >備考</span
                                >
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 二行目 -->
        <div>
            <div class="px-2 md:px-0">
                <div class="hidden">{{ dispTagValue }}</div>
                <Multiselect
                    ref="multDi"
                    v-model="tagValue"
                    mode="tags"
                    placeholder="#タグ"
                    :filterResults="true"
                    :minChars="1"
                    :resolveOnLoad="true"
                    :delay="0"
                    :searchable="true"
                    :options="
                        async function (query) {
                            return await fetchLanguages(query) // check JS block for implementation
                        }
                    "
                    :classes="$constant.multiselectCss"
                >
                    <template
                        v-slot:tag="{ option, handleTagRemove, disabled }"
                    >
                        <div class="multiselect-tag-style">
                            #
                            {{ option.label }}
                            <span
                                v-if="!disabled"
                                class="multiselect-tag-remove"
                                @mousedown.prevent="
                                    handleTagRemove(option, $event)
                                "
                            >
                                <span
                                    class="multiselect-tag-remove-icon"
                                ></span>
                            </span>
                        </div>
                    </template>
                    <template v-slot:option="{ option }">
                        <div class="w-full">
                            # {{ option.label }}
                            <div
                                class="float-right"
                                v-if="option.count !== undefined"
                            >
                                {{ option.count }}件
                            </div>
                        </div>
                    </template>
                </Multiselect>
            </div>
        </div>
        <!-- 三行目 -->
        <div class="flex space-x-44 justify-center bg-backgroundMainSearch">
            <div class="flex space-x-2">
                <button
                    class="
                        grayButtonColors
                        notoSansJpAndSixteenBold
                        buttonStyle
                    "
                    @click="inputClear"
                >
                    条件をクリア
                </button>
                <button
                    class="
                        orangeSearthButtonColors
                        notoSansJpAndEighteenBold
                        buttonStyle
                        flex flex-row
                        justify-center
                        items-center
                    "
                    @click="searchButtonClick"
                >
                    <div class="text-lg font-NotoSansJp font-bold">検 索</div>
                    <search-svg class="ml-1"></search-svg>
                </button>
            </div>
        </div>
        <!-- 四行目 -->
        <!-- <div
            class="bg-searchResultTitle rounded-b-lg block md:hidden mid:hidden"
        >
            <div
                class="flex h-8 justify-center items-center cursor-pointer"
                @click="detailBottunClick"
            >
                <triangle-down-svg
                    class="w-4 h-4"
                    :class="[isDetailClick ? 'transform rotate-180' : '']"
                    fill="#ffffff"
                    stroke="#ffffff"
                ></triangle-down-svg>
            </div>
        </div> -->
    </div>
</template>

<script>
import searchDropdown from './searchDropdown.vue'
import searchSvg from '../svgImage/searchSvg.vue'
import TriangleDownSvg from '../svgImage/triangleDownSvg.vue'
import Multiselect from '@vueform/multiselect'
import vueSingleSelect from '../dropdown/vueSingleSelect.vue'

export default {
    props: {
        searchButtonClick: {
            type: Function,
            default: () => {},
        },
    },
    components: {
        searchDropdown,
        searchSvg,
        TriangleDownSvg,
        Multiselect,
        vueSingleSelect,
    },
    data() {
        return {
            searchText: null,
            searchValue: '',
            checkId: '',
            isDetailClick: false,
            tagValue: this.$store.getters.getSearchTags,
            orgDiTagslist: [],
        }
    },
    watch: {
        tagValue() {
            this.$store.dispatch('setSearchTags', this.tagValue)
            this.$emit('tagValue', this.tagValue)
        },
    },
    computed: {
        dispTagValue() {
            this.tagValue = this.$store.getters.getSearchTags
            // if (this.inputFlg) {
            //     this.inputFlg = false
            let selectedItem = this.$store.getters.getorgTagsList
            for (let index = 0; index < this.orgDiTagslist.length; index++) {
                const element = this.orgDiTagslist[index]
                if (
                    this.orgDiTagslist[index].value ==
                    this.tagValue[this.tagValue.length - 1]
                ) {
                    let storeExistFlg = false
                    for (let i = 0; i < selectedItem.length; i++) {
                        if (
                            selectedItem[i].value ==
                            this.orgDiTagslist[index].value
                        ) {
                            storeExistFlg = true
                        }
                    }
                    if (!storeExistFlg) {
                        selectedItem.push(this.orgDiTagslist[index])
                        this.$store.dispatch('setOrgTagsList', selectedItem)
                        localStorage.setItem(
                            'store',
                            JSON.stringify(this.$store.state)
                        )
                    }
                }
            }
            // }

            return this.tagValue
        },
    },
    methods: {
        async fetchLanguages(query) {
            let searchTagsList = this.$store.getters.getSearchTagsLable
            let result = this.$store.getters.getorgTagsList
            if (query == null || query == '') {
                if (Object.keys(searchTagsList).length !== 0) {
                    for (let i = 0; i < searchTagsList.length; i++) {
                        let response = await this.$serve.getSuggestTags(
                            searchTagsList[i]
                        )
                        result = response.data.map((item) => {
                            return {
                                value: item.tagId,
                                label: item.name,
                                count: item.associatedCount,
                            }
                        })
                    }
                    let setList = {}
                    Object.keys(result).forEach(function (key) {
                        if (result[key].label == searchTagsList[0]) {
                            setList = {
                                value: result[key].value,
                                label: result[key].label,
                                count: result[key].count,
                            }
                        }
                    })
                    let flg = false
                    // 存在チェック
                    for (let index = 0; index < this.tagValue.length; index++) {
                        if (this.tagValue[index] == setList.value) {
                            flg = true
                        }
                    }
                    // 存在しない場合、入力に設定
                    this.$store.dispatch('setSearchTagsLable', [])
                    if (!flg) {
                        this.$refs.multDi.select(setList)
                    }
                    this.orgDiTagslist = result
                    this.inputFlg = true
                } else {
                    result = this.$store.getters.getorgTagsList
                }
            } else {
                this.inputFlg = true
                await this.$serve.getSuggestTags(query).then((response) => {
                    result = response.data.map((item) => {
                        return {
                            value: item.tagId,
                            label: item.name,
                            count: item.associatedCount,
                        }
                    })
                })
                this.orgDiTagslist = result
            }
            return result
        },
        inputClear() {
            this.tagValue = []
            this.$store.dispatch('setSearchWord', '')
            this.$store.dispatch('setSearchTags', [])
            // 施設 初回設置[index]
            this.$store.commit('setCheckQDI', true)
            this.$store.commit('setCheckADI', true)
            this.$store.commit('setCheckCommentDI', true)
            this.$store.commit('setCheckAddFileNameDI', true)
            this.$store.commit('setCheckContributorDI', true)
            this.$store.commit('setCheckLastEditerDI', true)
            this.$store.commit('setCheckFacilityNameDI', true)
            this.$store.commit('setCheckNoteDI', true)
        },
        // 詳細条件クリックイベント
        detailBottunClick: function (event) {
            this.isDetailClick = !this.isDetailClick
            this.$emit('isDetailClick', this.isDetailClick)
        },
        // 検索ボタン押下イベント
        searchClick: function (event) {
            // すべて
            if (this.checkId == 1) {
                // 検索APIを呼び出し(画面入力値)
                this.$store.dispatch('searchAll', this.searchValue)

                // 一括検索結果画面へ遷移
                this.$router.push('/searchResultAll')
            }
            // DI ナレッジシェア
            else if (this.checkId == 2) {
                this.$router.push('/searchResultAll')
            }
            // 組織内 DI 記録（Q&A）
            else if (this.checkId == 3) {
                this.$router.push('/searchOrganization')
            }
            // 症例（プレアボイド）
            else if (this.checkId == 4) {
                this.$router.push('/searchOrganization')
            }
            // DI 辞書
            else if (this.checkId == 5) {
                this.$router.push('/searchOrganization')
            }
            // 製薬企業情報
            else if (this.checkId == 6) {
                this.$router.push('/searchOrganization')
            }
        },
        // DropDown 選択したアイテムＩＤ取得
        getCheckId(data) {
            this.checkId = data
        },
        onCheckQChange() {
            this.$store.commit('setCheckQDI', !this.$store.getters.getCheckQDI)
        },
        onChangeCheckA() {
            this.$store.commit('setCheckADI', !this.$store.getters.getCheckADI)
        },
        onChangeCheckComment() {
            this.$store.commit(
                'setCheckCommentDI',
                !this.$store.getters.getCheckCommentDI
            )
        },
        onChangeCheckAddFileName() {
            this.$store.commit(
                'setCheckAddFileNameDI',
                !this.$store.getters.getCheckAddFileNameDI
            )
        },
        onChangeCheckContributor() {
            this.$store.commit(
                'setCheckContributorDI',
                !this.$store.getters.getCheckContributorDI
            )
        },
        onChangeCheckLastEditer() {
            this.$store.commit(
                'setCheckLastEditerDI',
                !this.$store.getters.getCheckLastEditerDI
            )
        },
        onChangeCheckFacilityName() {
            this.$store.commit(
                'setCheckFacilityNameDI',
                !this.$store.getters.getCheckFacilityNameDI
            )
        },
        onChangeCheckNote() {
            this.$store.commit(
                'setCheckNoteDI',
                !this.$store.getters.getCheckNoteDI
            )
        },
    },
}
</script>

<style></style>
