<template>
  <div>
    <div class="flex border-b-2 border-unlineblue min-w-max">
      <!-- 左 -->
      <div
        class="flex-grow max-h-full min-w-min hidden md:block mid:block"
      ></div>
      <div class="flex w-full md:w-191.25 mx-2 md:mx-0">
        <div
          class="
            text-googleTitle
            notoSansJpAndTwentyBlack
            cs:notoSansJpAndTwentyFourBlack cs:text-2xl
            pt-5
            pb-2.5
            pr-5
            md:pt-5 md:pb-5
          "
        >
          製薬企業情報
        </div>
      </div>
      <!-- 右 -->
      <div
        class="flex-grow max-h-full min-w-min hidden md:block mid:block"
      ></div>
    </div>
    <div class="flex">
      <!-- 左 -->
      <div
        class="flex-grow max-h-full min-w-min hidden md:block mid:block"
      ></div>

      <!-- 中央 -->
      <div class="w-full md:w-191.25">
        <div class="flex">
          <!-- 検索バー -->
          <div
            class="
              block
              md:flex
              lm:flex
              bg-blueline
              w-full
              md:w-191.25 md:h-10
              mt-0
              md:mt-5
            "
          >
            <div class="block cs:flex">
              <div class="flex">
                <div v-for="(item, index) in pamButtons" :key="index">
                  <button
                    class="
                      mt-1.5
                      text-center
                      rounded-md
                      border-b-2 border-pageblue
                      hover:opacity-50
                      bg-white
                      text-blueline
                      notoSansJpAndEighteenBold
                    "
                    v-if="item.row === 1"
                    :class="[
                      item.id === 0
                        ? item.focus
                          ? 'ml-1.5 w-22 h-10 cs:w-16.5 lm:w-16.5 cs:h-7.5 lm:h-7.5 border-backgroundMain bg-backgroundMain'
                          : 'ml-1.5 w-22 h-10 cs:w-16.5 lm:w-16.5 cs:h-7.5 lm:h-7.5 border-pageblue bg-white'
                        : item.focus
                        ? 'ml-3.25 cs:ml-1.5 w-10 h-10 cs:w-7.5 lm:w-7.5 cs:h-7.5 lm:h-7.5 border-backgroundMain bg-backgroundMain'
                        : 'ml-3.25 cs:ml-1.5 w-10 h-10 cs:w-7.5 lm:w-7.5 cs:h-7.5 lm:h-7.5 border-pageblue bg-white',
                    ]"
                    @click="buttonClick(item)"
                  >
                    {{ item.title }}
                  </button>
                </div>
              </div>
              <div class="flex ml-21.5 cs:ml-0">
                <div
                  class="
                    visible
                    cs:hidden
                    w-22
                    h-10
                    spm:w-16.5
                    lm:w-16.5
                    spm:h-7.5
                    lm:h-7.5
                  "
                ></div>
                <div v-for="(item, index) in pamButtons" :key="index">
                  <div class="w-full" v-if="item.row === 2">
                    <button
                      class="
                        mt-1.5
                        text-center
                        rounded-md
                        border-b-2
                        hover:opacity-50
                        bg-white
                        text-blueline
                        notoSansJpAndEighteenBold
                      "
                      v-if="item.row === 2"
                      :class="[
                        item.id === 6
                          ? item.focus
                            ? 'ml-4.5 cs:ml-1.5 w-10 h-10 cs:w-7.5 lm:w-7.5 cs:h-7.5 lm:h-7.5 border-backgroundMain bg-backgroundMain'
                            : 'ml-4.5 cs:ml-1.5 w-10 h-10 cs:w-7.5 lm:w-7.5 cs:h-7.5 lm:h-7.5 border-pageblue bg-white'
                          : item.focus
                          ? 'ml-3.25 cs:ml-1.5 w-10 h-10 cs:w-7.5 lm:w-7.5 cs:h-7.5 lm:h-7.5 border-backgroundMain bg-backgroundMain'
                          : 'ml-3.25 cs:ml-1.5 w-10 h-10 cs:w-7.5 lm:w-7.5 cs:h-7.5 lm:h-7.5 border-pageblue bg-white',
                      ]"
                      @click="buttonClick(item)"
                    >
                      {{ item.title }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full mb-2 md:mb-0">
              <input
                type="text"
                v-model="keyWord"
                class="
                  mt-1.5
                  ml-1.5
                  h-10
                  cs:h-7.5
                  w-full
                  rounded-l-sm
                  focus:placeholder-opacity-0
                  rounded-none
                  border-326EB5Lins
                  focus:outline-none
                  focus:ring-1
                  focus:ring-326EB5Lins
                  focus:border-transparent
                  pl-2
                "
                placeholder="会社名"
                @click="searchClick"
                @keydown.enter="searchClick"
                name=""
                id=""
              />
              <!-- 検索ボタン -->
              <button
                @click="searchClick"
                class="
                  orangeButtonColors
                  text-white
                  rounded-r-sm
                  w-17.5
                  cs:w-13
                  mt-1.5
                  h-10
                  cs:h-7.5
                  flex-none
                  mr-2.5
                "
              >
                <!-- 検索ボタンのアイコン -->
                <div class="flex justify-center">
                  <search-svg class="cs:h-4 cs:w-4 w-5.5 h-5.5"></search-svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <!-- 検索キー -->
        <div
          class="
            border-b-2 border-blueline
            notoSansJpAndTwentyBold
            text-view
            mt-5
            cs:mt-10
            lm:mt-10
            pb-2.5
            px-2
          "
        >
          {{ title }}
        </div>
        <div
          class="block spm:flex lm:flex mt-5 border-b border-blueline px-2"
          v-for="item in dispList"
          :key="item"
        >
          <div class="flex-none cs:flex-grow">
            <!-- 会社名 -->
            <div class="notoSansJpAndEighteenBold -mt-1">
              {{ item.companyName }}
            </div>
            <!-- 医療関係者向けサイト、一般向けサイト -->
            <div class="flex mt-3.5">
              <a :href="item.proUrl" target="_blank">
                <div
                  class="
                    border border-aiSwitch
                    w-43.75
                    h-7.5
                    spm:h-6
                    lm:h-6
                    notoSansJpAndTwelveMedium
                    rounded-sm
                    text-center text-aiSwitch
                    pt-1.5
                    spm:pt-0.5
                    lm:pt-0.5
                  "
                >
                  医療関係者向けサイト
                </div></a
              >
              <a :href="item.genUrl" target="_blank">
                <div
                  class="
                    border border-notice
                    w-43.75
                    h-7.5
                    spm:h-6
                    lm:h-6
                    notoSansJpAndTwelveMedium
                    rounded-sm
                    text-center text-notice
                    pt-1.5
                    spm:pt-0.5
                    lm:pt-0.5
                    ml-2
                  "
                >
                  一般向けサイト
                </div>
              </a>
            </div>

            <!-- 電話番号、サイトなど -->
            <div class="mt-2 spm:mt-1 lm:mt-1 notoSansJpAndTwelveRegular">
              {{ item.title1 }}
            </div>

            <div
              class="mt-1 spm:mt-0 lm:mt-0 notoSansJpAndSixteenBold text-view"
            >
              {{ item.medicineCounter }}
            </div>

            <div class="mt-2 spm:mt-1 lm:mt-1 notoSansJpAndTwelveRegular">
              {{ item.title2 }}
            </div>
            <div v-if="item.infoCounter === '' && item.webUrl === ''">
              <div class="notoSansJpAndFourteenMedium text-black">
                担当MR にお尋ねください
              </div>
            </div>
            <div class="flex notoSansJpAndSixteenBold text-view" v-else>
              <div class="notoSansJpAndSixteenBold text-view">
                {{ item.infoCounter }}
              </div>
              <a href="item.webUrl" target="_blank" v-if="item.webUrl !== ''">
                <div class="ml-2 underline">Webサイト</div>
              </a>
              <a
                :href="item.iconUrl"
                target="_blank"
                v-if="item.iconUrl !== ''"
              >
                <div class="ml-2 mt-1.5 md:mt-2">
                  <externalLink
                    class="w-3.5 h-3.5 md:h-3 md:w-3"
                    fill="#32a5dc"
                    stroke="#32a5dc"
                  ></externalLink>
                </div>
              </a>
            </div>
          </div>
          <div
            class="
              flex-none
              w-full
              pb-5
              spm:w-50
              lm:w-50
              flex
              justify-center
              mt-5
              spm:mt-0
              lm:mt-0
            "
          >
            <div>
              <a
                :class="[
                  item.chatbotUrl != ''
                    ? 'block'
                    : 'hidden spm:block lm:block spm:invisible lm:invisible',
                ]"
                :href="item.chatbotUrl"
              >
                <div
                  class="
                    w-65
                    spm:w-43.75
                    lm:w-43.75
                    h-7.5
                    spm:h-6
                    lm:h-6
                    rounded-sm
                    border-2 border-chatbot
                    notoSansJpAndTwelveMedium
                    flex
                    justify-center
                    text-chatbot
                    ml-0
                    spm:ml-6
                    lm:ml-6
                  "
                  :class="[
                    item.chatbotUrl !== ''
                      ? 'block'
                      : 'hidden spm:block lm:block spm:invisible lm:invisible',
                  ]"
                >
                  <chatbot class="w-4 h-4 mt-1 mr-1"></chatbot>
                  <div class="mt-0.5">チャットボット</div>
                </div>
              </a>

              <div
                class="
                  mt-2
                  spm:mt-3.5
                  w-65
                  spm:w-50
                  lm:w-50
                  h-15
                  spm:h-12.5
                  lm:h-12.5
                  bg-gray-400
                "
              ></div>
              <div
                class="
                  mt-2
                  spm:mt-3.5
                  w-65
                  spm:w-50
                  lm:w-50
                  h-15
                  spm:h-12.5
                  lm:h-12.5
                  bg-gray-400
                "
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex-grow max-h-full min-w-min hidden md:block mid:block"
      ></div>
    </div>
  </div>
</template>

<script>
import Chatbot from "../common/svgImage/chatbot.vue";
import searchSvg from "../common/svgImage/searchSvg.vue";
import externalLink from "../common/svgImage/extarnalLink.vue";
export default {
  components: { searchSvg, Chatbot, externalLink },
  props: {},
  data() {
    return {
      title: "すべて",
      keyWord: "",
      pamButtons: [
        { row: 1, id: 0, title: "すべて", focus: true },
        { row: 1, id: 1, title: "ア", focus: false },
        { row: 1, id: 2, title: "カ", focus: false },
        { row: 1, id: 3, title: "サ", focus: false },
        { row: 1, id: 4, title: "タ", focus: false },
        { row: 1, id: 5, title: "ナ", focus: false },
        { row: 2, id: 6, title: "ハ", focus: false },
        { row: 2, id: 7, title: "マ", focus: false },
        { row: 2, id: 8, title: "ヤ", focus: false },
        { row: 2, id: 9, title: "ラ", focus: false },
        { row: 2, id: 10, title: "ワ", focus: false },
      ],
      dispList: [],
      list: [
        {
          key: "ア",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "http://www.isei-pharm.co.jp/",
          proUrl: "",
          genUrl: "",
          title1: "■くすり相談窓口",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "http://www.isei-pharm.co.jp/",
          imageUrl1: "http://www.isei-pharm.co.jp/",
          imageUrl2: "http://www.isei-pharm.co.jp/",
        },
        {
          key: "ア",
          companyName: "岩城製薬株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■学術部",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "http://www.isei-pharm.co.jp/",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ア",
          companyName: "エーザイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "http://www.isei-pharm.co.jp/",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ア",
          companyName: "大木製薬株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ア",
          companyName: "大杉製薬株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "",
          webUrl: "",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ア",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■お問い合わせ窓口",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ア",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ア",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ア",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "カ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "サ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "タ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ナ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ハ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "マ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ヤ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ラ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ワ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ワ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ワ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ワ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
        {
          key: "ワ",
          companyName: "コーアイセイ株式会社",
          chatbotUrl: "",
          proUrl: "",
          genUrl: "",
          title1: "■hhc ホットライン",
          medicineCounter: "080-1234-5678",
          title2: "■資材請求",
          infoCounter: "123-4567-8912",
          webUrl: "http://www.isei-pharm.co.jp/",
          iconUrl: "",
          imageUrl1: "",
          imageUrl2: "",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    buttonClick(item) {
      for (let i = 0; i < this.pamButtons.length; i++) {
        if (item.id === this.pamButtons[i].id) {
          this.pamButtons[i].focus = true;
        } else {
          this.pamButtons[i].focus = false;
        }
      }
      console.log(this.pamButtons);
      this.title = item.title;

      this.searchGroupData(item.title);
    },
    searchGroupData(title) {
      this.dispList = [];
      for (let i = 0; i < this.list.length; i++) {
        if (title === "すべて") {
          this.dispList = this.list;
        } else {
          if (title === this.list[i].key) {
            this.dispList.push(this.list[i]);
          }
        }
      }
    },
    searchClick() {
      this.searchGroupData(this.title);
      let temmlist = [];
      if (this.keyWord !== "") {
        for (let i = 0; i < this.dispList.length; i++) {
          if (this.dispList[i].companyName.indexOf(this.keyWord) >= 0) {
            temmlist.push(this.dispList[i]);
          }
        }
        this.dispList = temmlist;
      }
    },
  },
  created() {},
  mounted() {
    this.dispList = this.list;
  },
};
</script>
<style scoped></style>
