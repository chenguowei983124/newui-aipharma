<template>
    <div class="overflow-x-auto">
        <table class="w-245 min-w-full border-l border-t border-blueline">
            <thead>
                <tr class="flex bg-cardViewCount text-xs font-medium">
                    <th
                        class="
                            border-r border-b border-blueline
                            w-5.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        <input type="checkbox" name="" id="" />
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        様式
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        報告日
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        <div class="flex flex-col">
                            <div>システム</div>
                            <div>登録日</div>
                        </div>
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        被疑薬
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        副作用名
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        年齢
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        性別
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-17
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        外来 / 入院
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        治療中の疾患
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-54
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        内容
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-30
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        投稿者
                    </th>
                    <th
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        管理
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="flex text-xs font-NotoSansJp"
                    v-for="person in people"
                    :key="person"
                >
                    <td
                        class="
                            border-r border-b border-blueline
                            w-5.5
                            flex-none flex
                            items-center
                            justify-center
                        "
                    >
                        <input type="checkbox" name="" id="" />
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col2 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col3 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-17.5
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col4 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col5 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col6 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col7 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-8
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col8 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-17
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col9 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-21
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col10 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-54
                            flex-none flex
                            justify-center
                        "
                    >
                        {{ person.col11 }}
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-30
                            flex-none flex
                            justify-center
                        "
                    >
                        <div>
                            <div class="flex flex-col text-xs">
                                {{ person.col12 }}
                                <div
                                    class="
                                        mt-1
                                        h-5
                                        bg-blue-500
                                        text-white
                                        w-16
                                        flex
                                        justify-center
                                        items-center
                                    "
                                >
                                    自施設
                                </div>
                            </div>

                            <!-- <div
                                
                            >
                                
                            </div> -->
                        </div>
                    </td>
                    <td
                        class="
                            border-r border-b border-blueline
                            w-12.5
                            flex-none flex
                            justify-center
                        "
                    >
                        <div class="flex flex-col space-y-1.25">
                            <button
                                class="
                                    h-7.5
                                    w-7.5
                                    bg-downloadIcon
                                    rounded
                                    mx-1
                                    mt-1
                                "
                            >
                                <download-icon-svg
                                    class="h-5 w-5 mx-1.25"
                                ></download-icon-svg>
                            </button>
                            <button
                                class="h-7.5 w-7.5 bg-searchBunnon rounded mx-1"
                            >
                                <edit-icon-svg
                                    class="h-5 w-5 mx-1.25"
                                ></edit-icon-svg>
                            </button>
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
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
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
