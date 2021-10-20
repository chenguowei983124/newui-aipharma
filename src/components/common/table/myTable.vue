<template>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
                class="
                    py-2
                    align-middle
                    inline-block
                    min-w-full
                    sm:px-6
                    lg:px-8
                "
            >
                <div class="shadow overflow-hidden border-b border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    <input type="checkbox" name="" id="" />
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    様式
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    報告日
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    システム 登録日
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    被疑薬
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    副作用名
                                </th>

                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    年齢
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    性別
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    外来/入院
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    治療中の疾患
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    内容
                                </th>
                                <th
                                    scope="col"
                                    class="
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        border-2 border-blueline
                                    "
                                >
                                    投稿者
                                </th>
                                <th
                                    scope="col"
                                    class="border-2 border-blueline"
                                >
                                    <span class="sr-only">管理</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="person in people" :key="person.email">
                                <td class="border-2 border-blueline">
                                    <input type="checkbox" name="" id="" />
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        border-2 border-blueline
                                    "
                                >
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10">
                                            {{ person.col2 }}
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        border-2 border-blueline
                                    "
                                >
                                    <div class="text-sm text-gray-900">
                                        {{ person.col3 }}
                                    </div>
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        border-2 border-blueline
                                    "
                                >
                                    <span class="text-sm text-gray-900">
                                        {{ person.col4 }}
                                    </span>
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col5 }}
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col6 }}
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col7 }}
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col8 }}
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col9 }}
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col10 }}
                                </td>
                                <td
                                    class="
                                        break-words
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col11 }}
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-sm text-gray-500
                                        border-2 border-blueline
                                    "
                                >
                                    {{ person.col12 }}
                                    <br />
                                    <div
                                        class="
                                            h-6
                                            bg-blue-500
                                            text-white
                                            w-18
                                            px-3
                                            pt-0.5
                                        "
                                    >
                                        自施設
                                    </div>
                                    <!-- <div
                                        class="
                                            notoSansJpAndTwelveMedium
                                            text-white
                                            h-4
                                        "
                                    > -->
                                    <!-- <result-detail-row-item
                                            itemType="1"
                                            :typeKB="item.group"
                                            v-if="item.group != undefined"
                                        ></result-detail-row-item> -->
                                    <!-- </div> -->
                                </td>
                                <td
                                    class="
                                        whitespace-nowrap
                                        text-right text-sm
                                        font-medium
                                        border-2 border-blueline
                                        space-y-1
                                    "
                                >
                                    <button
                                        class="
                                            h-7.5
                                            w-7.5
                                            bg-green-300
                                            rounded
                                            mx-1
                                        "
                                    >
                                        <download-icon-svg
                                            class="h-5 w-5 mx-1.25"
                                        ></download-icon-svg>
                                    </button>
                                    <br />
                                    <button
                                        class="
                                            h-7.5
                                            w-7.5
                                            bg-searchBunnon
                                            rounded
                                            mx-1
                                        "
                                    >
                                        <edit-icon-svg
                                            class="h-5 w-5 mx-1.25"
                                        ></edit-icon-svg>
                                    </button>
                                    <br />
                                    <button
                                        class="
                                            h-7.5
                                            w-7.5
                                            bg-personInformationButton
                                            rounded
                                            mx-1
                                        "
                                    >
                                        <trash-icon-svg
                                            class="h-5 w-5 mx-1.25"
                                        ></trash-icon-svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import downloadIconSvg from '../svgImage/downloadIconSvg.vue'
import EditIconSvg from '../svgImage/editIconSvg.vue'
import TrashIconSvg from '../svgImage/trashIconSvg.vue'
const people = [
  {
    col1: 'false',
    col2: '1',
    col3: '2021.01.01',
    col4: '2021.08.01',
    col5: 'ロキソプロフェンNa',
    col6: '薬剤性肝障害',
    col7: '40歳代',
    col8: '男',
    col9: '入院',
    col10: 'くも膜下出血',
    col11: '脳出血でコイル塞栓術後経過観察のためHCU へ入室された患者。２０２０／２／６の検査データよりALP、ALT　γGTP 上昇があった。ALP 上昇が始まったのが2/3。それよりも前から使用されていた薬剤をALP 上昇のキーワードで副作用報告データ検索した。',
    col12: '○○市民病院',
    col13: '',
  },
  {
    col1: 'false',
    col2: '2',
    col3: '2021.01.01',
    col4: '2021.08.01',
    col5: 'ロキソプロフェンNa',
    col6: '薬剤性肝障害',
    col7: '40歳代',
    col8: '男',
    col9: '入院',
    col10: 'くも膜下出血',
    col11: '脳出血でコイル塞栓術後経過観察の',
    col12: '○○市民病院',
    col13: '',
  },
  {
    col1: 'false',
    col2: '3',
    col3: '2021.01.01',
    col4: '2021.08.01',
    col5: 'ロキソプロフェンNa',
    col6: '薬剤性肝障害',
    col7: '40歳代',
    col8: '男',
    col9: '入院',
    col10: 'くも膜下出血',
    col11: '脳出血でコイル塞栓術後経過観察の',
    col12: '○○市民病院',
    col13: '',
  },
  {
    col1: 'false',
    col2: '3',
    col3: '2021.01.01',
    col4: '2021.08.01',
    col5: 'ロキソプロフェンNa',
    col6: '薬剤性肝障害',
    col7: '40歳代',
    col8: '男',
    col9: '入院',
    col10: 'くも膜下出血',
    col11: '脳出血でコイル塞栓術後経過観察の',
    col12: '○○市民病院',
    col13: '',
  },
  {
    col1: 'false',
    col2: '3',
    col3: '2021.01.01',
    col4: '2021.08.01',
    col5: 'ロキソプロフェンNa',
    col6: '薬剤性肝障害',
    col7: '40歳代',
    col8: '男',
    col9: '入院',
    col10: 'くも膜下出血',
    col11: '脳出血でコイル塞栓術後経過観察の',
    col12: '○○市民病院',
    col13: '',
  },
  // More people...
]

export default {
  components: { downloadIconSvg, TrashIconSvg, EditIconSvg },
  setup() {
    return {
      people,
    }
  },
}
</script>
