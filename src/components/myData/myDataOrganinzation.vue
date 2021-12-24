<template>
    <div v-if="$store.getters.organizationSearchInfo != undefined">
        <div class="space-y-3.75 mt-3.75">
            <div
                v-for="(item, index) in $store.getters.organizationSearchInfo
                    .qas"
                :key="index"
            >
                <div class="border-2 rounded-lg border-blueline">
                    <!-- Group -->
                    <div
                        class="
                            notoSansJpAndTwelveMedium
                            text-white
                            h-4.5
                            flex-grow
                            -ml-0.5
                            -mt-0.5
                        "
                    >
                        <!-- 70*18 px -->
                        <result-detail-row-item
                            itemSize="size"
                            itemType="1"
                            :typeKB="item.group"
                            v-if="item.group != undefined"
                        ></result-detail-row-item>
                    </div>
                    <div class="p-4">
                        <!-- Q -->
                        <div
                            class="
                                flex
                                justify-between
                                border-b border-blueline
                                items-center
                                pb-5
                            "
                        >
                            <div class="flex items-center">
                                <div
                                    class="
                                        notoSansJpAndTwentyEightBold
                                        text-view
                                        w-5
                                    "
                                >
                                    Q
                                </div>
                                <div
                                    class="
                                        flex-grow
                                        notoSansJpAndSixteenBold
                                        ml-5
                                    "
                                >
                                    {{ item.question }}
                                </div>
                            </div>
                            <!-- 編集 フラグ [0,1]{{ item.editFlag }} -->
                            <edit-and-delete
                                :editEvent="editDetail"
                                :deleteEvent="deleteDetail"
                                :id="String(item.id)"
                                :dataInfo="item"
                            ></edit-and-delete>
                        </div>
                        <!-- A -->
                        <div class="flex justify-between mt-5 items-start">
                            <div class="flex w-5 h-6 text-notlooked text-sm">
                                <div
                                    class="
                                        flex
                                        items-center
                                        notoSansJpAndTwentyEightBold
                                    "
                                >
                                    A
                                </div>
                            </div>

                            <div
                                id="answerTab"
                                class="
                                    flex-grow
                                    break-all
                                    notoSansJpAndFourteenBold
                                    pl-5
                                "
                            >
                                <!-- {{ item.answer }} -->
                                <div
                                    v-show="
                                        !(
                                            isDetailDisp[
                                                $store.getters
                                                    .organizationSearchInfo.qas[
                                                    index
                                                ].id
                                            ] ===
                                            $store.getters
                                                .organizationSearchInfo.qas[
                                                index
                                            ].id
                                        )
                                    "
                                    v-html="
                                        item.answer.toString().split('\n')[0]
                                    "
                                ></div>
                                <!-- class="overflow-x-auto" -->
                                <div
                                    v-show="
                                        isDetailDisp[
                                            $store.getters
                                                .organizationSearchInfo.qas[
                                                index
                                            ].id
                                        ] ===
                                        $store.getters.organizationSearchInfo
                                            .qas[index].id
                                    "
                                    v-html="
                                        item.answer
                                            .replace(
                                                '<ol>',
                                                `<ol style='list-style-type: decimal;'>`
                                            )
                                            .replace(
                                                '<ul>',
                                                `<ul style='list-style-type: disc;'>`
                                            )
                                    "
                                ></div>
                            </div>
                        </div>
                        <!-- 更新情報 pc/sp-->
                        <div class="flex flex-col pt-5 pl-0 md:pl-10">
                            <div
                                class="
                                    space-y-1.5
                                    notoSansJpAndElevenRegular
                                    text-dropdownListItem
                                "
                            >
                                <div class="flex space-x-4">
                                    <div>最終編集日：{{ item.updatedAt }}</div>
                                    <div>質問日：{{ item.askedAt }}</div>
                                </div>
                                <div
                                    class="
                                        flex flex-wrap
                                        space-x-2
                                        items-center
                                    "
                                >
                                    出典・引用：
                                    <div
                                        v-for="urls in item.urls"
                                        :key="urls"
                                        class="
                                            text-light-blue-300
                                            hover:text-light-blue-500
                                        "
                                    >
                                        <a
                                            href="{{urls.url}}"
                                            target="view_window"
                                            >{{ urls.title }}</a
                                        >
                                    </div>
                                </div>
                                <div class="flex">
                                    PubMed：
                                    <div
                                        v-if="item.pubmed != ''"
                                        class="
                                            hover:text-light-blue-500
                                            underline
                                            break-all
                                        "
                                    >
                                        <a
                                            href="https://www.ncbi.nlm.nih.gov/pubmed/{{
                                                item.pubmed
                                            }}"
                                            target="view_window"
                                            >https://www.ncbi.nlm.nih.gov/pubmed/{{
                                                item.pubmed
                                            }}</a
                                        >
                                    </div>
                                </div>
                                <div class="flex">
                                    J-STAGE：
                                    <!-- <div class="flex-none"></div> -->
                                    <div
                                        v-if="item.pubmed != ''"
                                        class="
                                            hover:text-light-blue-500
                                            underline
                                        "
                                    >
                                        <a
                                            href="https://www.ncbi.nlm.nih.gov/pubmed/{{
                                                item.pubmed
                                            }}"
                                            target="view_window"
                                            >https://www.ncbi.nlm.nih.gov/pubmed/{{
                                                item.pubmed
                                            }}</a
                                        >
                                    </div>
                                </div>
                                <div
                                    class="
                                        flex flex-wrap
                                        space-x-2
                                        items-center
                                    "
                                >
                                    ファイル :
                                    <div
                                        v-for="documents in item.documents"
                                        :key="documents"
                                        class="
                                            ml-1
                                            cursor-pointer
                                            hover:text-light-blue-500
                                        "
                                    >
                                        <a
                                            href="{{documents.url}}"
                                            target="view_window"
                                            >{{ documents.name }}</a
                                        >
                                    </div>
                                </div>
                                <div>施設規模：{{ item.facilityScale }}</div>
                            </div>
                            <div class="flex flex-wrap space-x-2 mt-2">
                                <div
                                    class="tagsCss"
                                    v-for="keywordTags in item.keywordTags"
                                    :key="keywordTags"
                                    @click="sendMsgToParent(keywordTags.name)"
                                >
                                    # {{ keywordTags.name }}
                                </div>
                            </div>
                            <div
                                class="
                                    flex flex-col
                                    font-NotoSansJp
                                    text-xs
                                    justify-end
                                    items-end
                                    mt-4
                                    md:mt-0
                                "
                            >
                                <div class="flex flex-row space-x-2 items-end">
                                    <div class="text-searchDropdown">
                                        {{ item.viewCount }} view
                                    </div>
                                    <!-- good -->
                                    <button
                                        class="
                                            flex
                                            items-center
                                            justify-end
                                            text-white
                                            font-NotoSansJp
                                            goodButtonColors
                                        "
                                        @click="openGoodMessageBox(1, index)"
                                    >
                                        <div class="mr-3">
                                            {{ item.feedbackGood }}
                                        </div>
                                        <good class="h-4 w-4 mr-1"></good>
                                    </button>
                                    <!-- bad -->
                                    <button
                                        class="
                                            flex
                                            justify-end
                                            items-center
                                            text-white
                                            font-NotoSansJp
                                            badButtonColors
                                        "
                                        @click="openGoodMessageBox(2, index)"
                                    >
                                        <div class="mr-3">
                                            {{ item.feedbackBad }}
                                        </div>
                                        <bad class="h-4 w-4 mr-1"></bad>
                                    </button>
                                    <!-- comment -->
                                    <button
                                        class="
                                            flex
                                            justify-end
                                            items-center
                                            text-white
                                            commentButtonColors
                                        "
                                        @click="openCommentMessageBox(index)"
                                    >
                                        <div class="mr-2">
                                            {{ item.feedbackComment }}
                                        </div>

                                        <talk class="h-5 w-5 mr-1"></talk>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- 詳細情報 pc/sp -->
                        <div
                            :class="[
                                isDetailDisp[
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                ] ==
                                $store.getters.organizationSearchInfo.qas[index]
                                    .id
                                    ? 'block'
                                    : 'hidden',
                            ]"
                        >
                            <div class="flex flex-row justify-center text-sm">
                                <div class="box">
                                    <span class="line"></span>
                                    <span class="text"
                                        ><div
                                            class="
                                                border-b border-notice
                                                notoSansJpAndTwelveMedium
                                                text-dropdownListItem
                                                flex
                                                justify-center
                                                items-center
                                                cursor-pointer
                                            "
                                            @click="
                                                openDetailsDisp(
                                                    $store.getters
                                                        .organizationSearchInfo
                                                        .qas[index].id
                                                )
                                            "
                                        >
                                            詳細情報
                                            <triangle-down-svg
                                                class="w-2 h-2"
                                                :class="[
                                                    isDetailsDisp[
                                                        $store.getters
                                                            .organizationSearchInfo
                                                            .qas[index].id
                                                    ] ===
                                                    $store.getters
                                                        .organizationSearchInfo
                                                        .qas[index].id
                                                        ? 'transform rotate-180'
                                                        : '',
                                                ]"
                                                fill="#666666"
                                                stroke="#666666"
                                            ></triangle-down-svg></div
                                    ></span>
                                    <span class="line"></span>
                                </div>
                            </div>
                            <div
                                :class="[
                                    isDetailsDisp[
                                        $store.getters.organizationSearchInfo
                                            .qas[index].id
                                    ] ===
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                        ? 'block'
                                        : 'hidden',
                                ]"
                            >
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        pb-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">Q&A-ID</div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.facilityQaNumber }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            薬の分類
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="qaQaClassifyClasses in item.qaQaClassifyClasses"
                                                :key="qaQaClassifyClasses"
                                            >
                                                {{ qaQaClassifyClasses.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            質問区分
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="categories in item.categories"
                                                :key="categories"
                                            >
                                                {{ categories.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            医薬品名
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="medicineName in item.medicines"
                                                :key="medicineName"
                                            >
                                                {{ medicineName.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            副作用名
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="medicineName in item.medicines"
                                                :key="medicineName"
                                            >
                                                {{ medicineName.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            質問者 - 職種
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            {{ item.askedPersonClassName }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            質問者 - 診療科
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="askedPersonMedicalDepartments in item.askedPersonMedicalDepartments"
                                                :key="
                                                    askedPersonMedicalDepartments
                                                "
                                            >
                                                {{
                                                    askedPersonMedicalDepartments.name
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            参考資料
                                        </div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="referenceMaterials in item.referenceMaterials"
                                                :key="referenceMaterials"
                                            >
                                                {{ referenceMaterials.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">疾患名</div>
                                        <div class="w-2">:</div>
                                        <div class="flex flex-wrap">
                                            <div
                                                class="mr-2"
                                                v-for="referenceMaterials in item.referenceMaterials"
                                                :key="referenceMaterials"
                                            >
                                                {{ referenceMaterials.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                    v-for="customDetails in item.customDetails"
                                    :key="customDetails"
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30 flex-none">
                                            {{ customDetails.title }}
                                        </div>
                                        <div class="w-2">:</div>
                                        <!-- single -->
                                        <div
                                            v-if="
                                                customDetails.dataType ==
                                                'single'
                                            "
                                        >
                                            {{ customDetails.data }}
                                        </div>
                                        <!-- multiple -->
                                        <div
                                            v-if="
                                                customDetails.dataType ==
                                                'multiple'
                                            "
                                            class="flex flex-wrap space-x-2"
                                        >
                                            <!-- {{ customDetails.data }} -->
                                            <div
                                                v-for="data in customDetails.data"
                                                :key="data"
                                            >
                                                {{ data }}
                                            </div>
                                        </div>
                                        <!-- text -->
                                        <div
                                            v-if="
                                                customDetails.dataType == 'text'
                                            "
                                        >
                                            {{ customDetails.data }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        md:flex md:flex-row
                                        detailsLineColors
                                        py-1.5
                                    "
                                >
                                    <div class="flex flex-auto">
                                        <div class="w-30">備考</div>
                                        <div class="w-2">:</div>
                                        <div class="">
                                            {{ item.note }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="
                            bg-backgroundMain
                            rounded-b-lg
                            text-center text-view
                            h-7.5
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                        "
                        @click="
                            openDetailDisp(
                                $store.getters.organizationSearchInfo.qas[index]
                                    .id
                            )
                        "
                    >
                        <div
                            v-show="
                                !(
                                    isDetailDisp[
                                        $store.getters.organizationSearchInfo
                                            .qas[index].id
                                    ] ===
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                )
                            "
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-3 h-3"
                                fill="#32a5dc"
                                stroke="#32a5dc"
                            ></triangle-down-svg>
                            <div
                                class="text-xs font-NotoSansJp font-medium mr-1"
                            >
                                開く
                            </div>
                        </div>
                        <div
                            v-show="
                                isDetailDisp[
                                    $store.getters.organizationSearchInfo.qas[
                                        index
                                    ].id
                                ] ===
                                $store.getters.organizationSearchInfo.qas[index]
                                    .id
                            "
                            class="flex items-center"
                        >
                            <triangle-down-svg
                                class="w-3 h-3 transform rotate-180"
                                fill="#32a5dc"
                                stroke="#32a5dc"
                            ></triangle-down-svg>
                            <div
                                class="text-xs font-NotoSansJp font-medium mr-1"
                            >
                                閉じる
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            :class="[
                $store.getters.getCommentMessageBox
                    ? 'block fixed top-0 z-99 left-0 right-0 bottom-0 windowBackground'
                    : 'hidden',
            ]"
        >
            <comment-message-box
                :qaId="qaId"
                :rowIndex="rowIndex"
                :commentsFlag="commentsFlag"
            ></comment-message-box>
        </div>
    </div>
</template>

<script>
import TriangleDownSvg from '../common/svgImage/triangleDownSvg.vue'
import resultDetailRow from '../common/searchResult/resultAllDetailRow.vue'
import Good from '../common/svgImage/good.vue'
import bad from '../common/svgImage/bad.vue'
import talk from '../common/svgImage/talk.vue'
import xIconSvg from '../common/svgImage/xIconSvg.vue'
import dotsHorizontal from '../common/svgImage/dotsHorizontal.vue'
import GoodMessageBox from '../common/messageBox/goodMessageBox.vue'
import ResultDetailRowItem from '../common/searchResult/resultDetailRowItem.vue'
import CommentMessageBox from '../common/messageBox/commentMessageBox.vue'
import EditAndDelete from '../common/searchResult/editAndDelete.vue'

export default {
  components: {
    TriangleDownSvg,
    resultDetailRow,
    Good,
    bad,
    talk,
    xIconSvg,
    dotsHorizontal,
    GoodMessageBox,
    ResultDetailRowItem,
    CommentMessageBox,
    EditAndDelete,
  },
  props: {
    freeword: '',
  },
  data() {
    return {
      goodMessageBox: false,
      // 組織内 DI 記録（Q&A） ドット-水平
      isOrgDotsClick: [],
      isDetailDisp: [],
      isDetailsDisp: [],
      activeIndex: -1,
      resultData: Object,
      result: Object,
      qaId: '',
      rowIndex: 0,
      commentsFlag: '',
    }
  },
  unmounted() { },
  mounted() {
  },
  watch: {
    $route: function () {
      if (this.$route.path != '/myData/org') {
        return
      }

      this.$store.dispatch('setOrganizationSearchInfo', {})
      this.execSearch()
    },
  },
  methods: {
    // CommentMessageBoxを閉じる
    closeCommentMessageBox() {
      this.$store.dispatch('setCommentMessageBox', false)
    },
    editOrganizationSearchInfo(index, count) {
      // 1件のみの場合
      if (count == 1) {
        this.isOrgDotsClick[index] = index
      } else {
        this.isOrgDotsClick[index] =
          this.isOrgDotsClick[index] == index ? [] : index
      }
    },
    execSearch() {
      // 設定　NULL
      this.openDetailDisp('')
      this.$store.dispatch('setLoadingShowFlg', false)
      this.$store.dispatch('setIsLoadingShow', true)

      let result
      // QAID存在チェック

      this.$serve
        .getMydataOwnData(this.freeword)
        .then((response) => {
          this.$store.dispatch('setOrganizationSearchInfo', response)
          // 1件のみの場合、全回答情報を表示
          if (response.data.allCount == 1) {
            this.openDetailDisp(
              response.data.qas[0].id,
              response.data.allCount
            )
          } else {
            this.isDetailDisp = []
          }

          this.$store.dispatch('setLoadingShowFlg', true)
          this.$store.dispatch('setIsLoadingShow', false)
        })


    },

    // 詳細情報 クリック タグ
    sendMsgToParent: function (data) {
      this.$emit('listenToChildEvent', data)
    },
    // 開くボタン押下
    openDetailDisp(index, count) {
      // 1件のみの場合
      if (count == 1) {
        this.isDetailDisp[index] = index
      } else {
        this.isDetailDisp[index] =
          this.isDetailDisp[index] == index ? [] : index
        if (this.isDetailsDisp[index] == index) {
          this.isDetailsDisp[index] =
            this.isDetailsDisp[index] == index ? [] : index
        }
      }
    },
    // 明細の詳細情報リンク押下
    openDetailsDisp(index) {
      this.isDetailsDisp[index] =
        this.isDetailsDisp[index] == index ? [] : index
    },

    openGoodMessageBox(type, index) {
      let params = {
        fbType: type,
        qaId: this.$store.getters.organizationSearchInfo.qas[index].id,
      }
      this.$serve.sendFeedback(params).then((res) => {
        if (res.data.status == 'create') {
          this.$toast.success(res.data.message, {
            position: 'top-right',
          })
          this.$store.getters.organizationSearchInfo.qas[
            index
          ].feedbackGood = res.data.goodFeedbackCount
          this.$store.getters.organizationSearchInfo.qas[
            index
          ].feedbackBad = res.data.badFeedbackCount
          this.$store.getters.organizationSearchInfo.qas[
            index
          ].feedbackComment = res.data.commentFeedbackCount
        }
      })
    },
    // クリック コメント ボタン
    openCommentMessageBox(index) {
      this.qaId = this.$store.getters.organizationSearchInfo.qas[index].id
      this.rowIndex = index
      this.commentsFlag = 'orgComments'
      this.$store.dispatch(
        'setCommentMessageBox',
        !this.$store.getters.getCommentMessageBox
      )
    },
    ActicleDetail(index) {
      this.activeIndex = this.activeIndex == index ? -1 : index
    },

    // 該当明細編集押下
    editDetail(dataInfo) {
      let params = {
        id: dataInfo.id,
      }
      this.$router.push({
        path: '/newOrgDIRecord',
        query: params,
      })
      console.log('該当明細編集押下', dataInfo.id)
    },
    // 該当明細削除押下
    deleteDetail(dataInfo) {
      this.$swal
        .fire({
          text: '本当に削除してよろしいですか？',
          icon: '',
          showCancelButton: true,
          cancelButtonText: 'キャンセル',
          confirmButtonText: '削除',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$serve.deleteQa(dataInfo.id).then((res) => {
              this.$swal.fire({
                text: '削除されました。',
                icon: '',
                showCancelButton: false,
                confirmButtonText: 'OK',
              })
              this.$emit('close', false)
              this.execSearch()
            })
          }
        })
      console.log('該当明細削除押下', dataInfo.id)
    },
  },
}
</script>

<style>
.box {
    height: 40px;
    width: 100%;
    /* background-color: wheat; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.line {
    height: 2px;
    flex-grow: 2;
    border-top: 1px dashed #666666;
}

.text {
    margin: 0 5px;
}

/* html　様式設定 */

#answerTab .table {
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    border-spacing: 0;
}

#answerTab table th {
    padding: 10px 30px;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}

#answerTab table td {
    padding: 10px 30px;
    border-left: 1px solid #999;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}
</style>
