<template>
    <div>
        <div
            class="
                organizationResult_header_bg_gray
                notoSansJpAndEighteenBold
                mt-5
            "
        >
            エクスポート
        </div>
        <div
            class="
                notoSansJpAndFourteenRegular
                border-2 border-grayline
                rounded-b-lg
                bg-gray-100
            "
        >
            <div class="pl-5 pt-5">
                各様式毎に症例データを、インポートフォーム(Microsoft Excel
                ファイル) でエクスポートします。
            </div>
            <div class="pl-5">
                また、本フォームは一般社団法人 日本病院薬剤師会
                プレアボイド報告用入力支援フォームにも準拠しております。
            </div>

            <!-- 様式 -->
            <div class="pl-5 pt-5 pr-5">
                <vue-single-select
                    class="cursor-pointer w-80"
                    :name="'styles'"
                    ref="styles"
                    :default-value="defaultValue"
                    :placeholder="'-- Choose an option --'"
                    :default-input-attribs="{
                        tabindex: 1,
                    }"
                    :default-options="$constant.inputOutStyle"
                    @selected="setStyle"
                    buttonStyle="w-9.5 h-7.5 pt-3 bg-grayline rounded-r right-0 border-b-2 border-notice"
                    inputStyle="w-full text-left pl-2 notoSansJpAndFourteenBold border-2 h-7.5 border-grayline bg-white rounded placeholder-gray-500 focus:placeholder-opacity-0
                                border border-transparent focus:outline-none flex justify-items-center  "
                    iconColor="#ffffff"
                ></vue-single-select>
            </div>
            <div class="flex pl-5 pt-2.5">
                <div class="flex items-center pr-5">
                    <input
                        type="radio"
                        class="
                            form-radio
                            h-6
                            w-6
                            text-garyTitle
                            ring-1 ring-grayline
                        "
                        id=""
                        name="radio"
                        checked
                    />
                    <div class="pl-2 notoSansJpAndFourteenMedium">報告日</div>
                </div>
                <div class="flex items-center">
                    <input
                        class="
                            form-radio
                            h-6
                            w-6
                            text-garyTitle
                            ring-1 ring-grayline
                        "
                        type="radio"
                        name="radio"
                        id=""
                    />
                    <div class="pl-2 notoSansJpAndFourteenMedium">
                        システム登録日
                    </div>
                </div>
            </div>
            <!-- 対象期間 -->
            <div class="flex space-x-2 pl-5 pt-2.5 pr-5">
                <!-- "placement ? 'place-left' : 'place-right'" -->
                <litepie-datepicker
                    ref="datepickerFrom"
                    :asSingle="true"
                    i18n="ja"
                    v-model="dateValueFrom"
                    :autoApply="false"
                    :formatter="{
                        date: 'YYYY.MM.DD',
                        month: 'MMM',
                    }"
                    :leftLableDisp="dateValueFrom != '' ? false : true"
                    leftLableTitle="期間"
                    leftLableStyle="absolute -mt-7 pl-2 left-1  text-lg text-black notoSansJpAndFourteenBold z-1 pointer-events-none"
                ></litepie-datepicker>
                <div class="w-8 text-black text-center mt-1.5 font-black">
                    ―
                </div>
                <litepie-datepicker
                    ref="datepickerTo"
                    :asSingle="true"
                    i18n="ja"
                    v-model="dateValueTo"
                    :autoApply="false"
                    :formatter="{
                        date: 'YYYY.MM.DD',
                        month: 'MMM',
                    }"
                    :leftLableDisp="false"
                ></litepie-datepicker>

                <input
                    class="
                        w-9.5
                        block
                        bg-grayline
                        rounded
                        notoSansJpAndTenBold
                        text-white
                        flex-none
                        border-b-2 border-notice
                        cursor-pointer
                    "
                    type="button"
                    @click="dateClear"
                    value="クリア"
                />
            </div>
            <div class="pl-5 pt-2.5 pb-5 w-full flex justify-center">
                <input
                    type="button"
                    :class="
                        'ml-0 md:ml-2 mt-2 md:mt-0 ' +
                        ' bg-orange-400' +
                        ' hover:opacity-50' +
                        ' active:bg-personInformationButton' +
                        ' active:opacity-100' +
                        ' border-b-2 border-orange-700' +
                        ' h-10' +
                        ' rounded-md' +
                        ' notoSansJpAndEighteenBold' +
                        ' text-white' +
                        ' w-60' +
                        ' disabled:cursor-not-allowed'
                    "
                    @click="onSave"
                    value="エクスポート"
                />
            </div>
        </div>
    </div>
</template>

<script>
import aa from '../common/dateRange/litepie-datepicker.vue'
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../common/dateRange/litepie-datepicker.vue'
export default {
    components: { vueSingleSelect, litepieDatepicker },
    props: {},
    data() {
        return {
            defaultValue: 0,
            dateValueFrom: '',
            dateValueTo: '',
            style: '',
        }
    },
    couputed: {},
    watch: {},
    methods: {
        setStyle(value) {
            this.style = value
        },
        dateClear() {
            this.$refs.datepickerFrom.clearPicker()
            this.$refs.datepickerTo.clearPicker()
            this.dateValueFrom = ''
            this.dateValueTo = ''
        },
    },
    created() {},
}
</script>
<style scoped></style>
