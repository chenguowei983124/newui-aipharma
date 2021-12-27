<template>
    <div>
        <result-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="所属内DI記録"
            titleStyle="notoSansJpAndEighteenBold text-center text-white"
        >
            <div class="searchResult_detail_blue">
                <div class="">
                    <div
                        class="
                            mt-2.5
                            pm:mt-5
                            lm:mt-5
                            mb-2.5
                            ml-2.5
                            pm:ml-5
                            lm:ml-5
                            w-34
                            h-6
                            pt-0.5
                            notoSansJpAndTwelveMedium
                            border border-notice
                            rounded-sm
                            text-center text-notice
                            cursor-pointer
                        "
                        @click="owgDelete"
                    >
                        一覧から選択して削除
                    </div>
                    <div
                        class="
                            block
                            pm:hidden
                            lm:hidden
                            border-b border-blueline
                        "
                    ></div>
                </div>
                <mydata-list
                    class="notoSansJpAndTwelveMedium text-center"
                    :dataList="orgDataList"
                    :allCheck="owgAllCheck"
                    :oneCheck="owgOneCheck"
                    :appendedClick="appendedClick"
                    :editClick="editClick"
                    :titleList="orgTitleList"
                ></mydata-list>
            </div>
        </result-tag>
        <div class="mt-5"></div>
        <result-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="症例（プレアボイド）"
            titleStyle="notoSansJpAndEighteenBold text-center text-white"
        >
            <div class="searchResult_detail_blue">
                <div class="">
                    <div
                        class="
                            mt-2.5
                            pm:mt-5
                            lm:mt-5
                            mb-2.5
                            ml-2.5
                            pm:ml-5
                            lm:ml-5
                            w-34
                            h-6
                            pt-0.5
                            notoSansJpAndTwelveMedium
                            border border-notice
                            rounded-sm
                            text-center text-notice
                            cursor-pointer
                        "
                        @click="owgDelete"
                    >
                        一覧から選択して削除
                    </div>
                    <div
                        class="
                            block
                            pm:hidden
                            lm:hidden
                            border-b border-blueline
                        "
                    ></div>
                </div>
                <mydata-list
                    class="notoSansJpAndTwelveMedium text-center"
                    :dataList="pvdDataList"
                    :allCheck="owgAllCheck"
                    :oneCheck="owgOneCheck"
                    :appendedClick="appendedClick"
                    :editClick="editClick"
                    :titleList="pvdTitleList"
                ></mydata-list>
            </div>
        </result-tag>

        <div class="mt-5"></div>
        <result-tag
            headerStyle="titleOnlyUnderlineBgColorBlue"
            title="掲示板"
            titleStyle="notoSansJpAndEighteenBold text-center text-white"
        >
            <div class="searchResult_detail_blue">
                <div class="">
                    <div
                        class="
                            mt-2.5
                            pm:mt-5
                            lm:mt-5
                            mb-2.5
                            ml-2.5
                            pm:ml-5
                            lm:ml-5
                            w-34
                            h-6
                            pt-0.5
                            notoSansJpAndTwelveMedium
                            border border-notice
                            rounded-sm
                            text-center text-notice
                            cursor-pointer
                        "
                        @click="owgDelete"
                    >
                        一覧から選択して削除
                    </div>
                    <div
                        class="
                            block
                            pm:hidden
                            lm:hidden
                            border-b border-blueline
                        "
                    ></div>
                </div>
                <mydata-list
                    class="notoSansJpAndTwelveMedium text-center"
                    :dataList="bbsDataList"
                    :allCheck="owgAllCheck"
                    :oneCheck="owgOneCheck"
                    :appendedClick="appendedClick"
                    :editClick="editClick"
                    :titleList="bbsTitleList"
                ></mydata-list>
            </div>
        </result-tag>
    </div>
</template>

<script>
import resultTag from '../common/searchResult/resultTag.vue'
import mydataList from '../common/searchResult/mydataList.vue'
export default {
  components: {
    resultTag, mydataList
  },
  props: {},
  data() {
    return {
      orgTitleList: {
        content: "質問",
        file: "添付",
        date: "最終保存日付"
      },
      pvdTitleList: {
        content: "内容",
        file: "",
        date: "最終保存日付"
      },
      bbsTitleList: {
        content: "タイトル",
        file: "添付",
        date: "最終保存日付"
      },
      orgDataList: [
        {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "1",
          routerPath: "/newOrgDIRecord",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "asdfa",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }
      ]
      , pvdDataList: [
        {
          check: false,
          content: "脳出欠でコイル塞栓術後経過◯◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "1",
          routerPath: "/newOrgDIRecord",
          delete: false
        }, {
          check: false,
          content: "顆粒球減少症のため緊急入院◯◯◯◯◯◯◯◯◯…",
          file: "asdfa",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "前立腺癌、骨転移性◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "右尿管癌のため手術予定の患◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "顆粒球減少症のため緊急入院◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "脳出欠でコイル塞栓術後経過◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "顆粒球減少症のため緊急入院◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "前立腺癌、骨転移性◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "右尿管癌のため手術予定の患◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "顆粒球減少症のため緊急入院◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }
      ]
      , bbsDataList: [
        {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "1",
          routerPath: "/newOrgDIRecord",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "asdfa",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }, {
          check: false,
          content: "痛み止めとして処方される◯◯◯◯◯◯◯◯◯…",
          file: "",
          dateTime: "2021 年 12 月 12 日  00:00",
          id: "",
          routerPath: "",
          delete: false
        }
      ]
    }
  },

  watch: {
    $route: function () {
      if (this.$route.path != '/myData/list') {
        return
      }
    },
  },

  methods: {
    async appendedClick(id) {
      this.$store.dispatch('setDownload', true)

      let params = {
        id: id,
      }
      await this.$serve.downloadPreavoidData(params).then((res) => {
        const filename = '123.xls'
        // const filename = this.getFileNameFromContentDisposition(
        //     res.headers['content-disposition']
        // )
        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(res.data, filename)
        } else {
          const blob = new Blob([res.data], {
            type: 'application/octet-stream',
          })
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = filename
          link.click()
        }
      })
    },
    getFileNameFromContentDisposition(disposition) {
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
      const matches = filenameRegex.exec(disposition)
      if (matches != null && matches[1]) {
        const fileName = matches[1].replace(/['"]/g, '')
        return decodeURI(fileName)
      } else {
        return null
      }
    },
    owgAllCheck(checked) {
      for (let i = 0; i < this.orgDataList.length; i++) {
        this.orgDataList[i].check = checked
      }
    },
    owgOneCheck(index) {
      this.orgDataList[index].check = !this.orgDataList[index].check
    },
    owgDelete() {
      for (let i = 0; i < this.orgDataList.length; i++) {
        if (this.orgDataList[i].check == true) {
          this.orgDataList[i].delete = true
        }
      }
    },
    editClick(row) {
      let params = {
        id: row.id,
      }
      this.$router.push({
        path: row.routerPath,
        query: params,
      })
    }


  },
  mounted() {

  },
}
</script>
<style scoped></style>
