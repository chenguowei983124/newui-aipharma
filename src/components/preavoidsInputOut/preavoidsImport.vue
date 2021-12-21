<template>
    <div>
        <div
            class="
                organizationResult_header_bg_gray
                notoSansJpAndEighteenBold
                mt-5
                align-middle
            "
        >
            インポート
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
                Microsoft Excel で入力したファイルを利用して、AI-PHARMA
                にデータ登録することが出来ます。
            </div>

            <!-- 様式 -->
            <div class="pl-5 pt-5 pr-5">
                <vue-single-select
                    class="cursor-pointer w-80"
                    :name="'styles'"
                    ref="styles"
                    :default-value="base.style"
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
            <div class="pl-5 pt-2.5 flex items-center">
                <label
                    :for="addFile"
                    class="
                        flex
                        items-center
                        w-29.5
                        h-7.5
                        whitespace-nowrap
                        bg-garyTitle
                        hover:opacity-50
                        active:bg-gray-200 active:opacity-100
                        rounded-sm
                        px-2
                        text-black text-center
                        border border-notice
                        notoSansJpAndFourteenBold
                        cursor-pointer
                    "
                    >ファイルを選択</label
                >
                <input
                    :id="addFile"
                    class="hidden"
                    type="file"
                    @change="onFileChange"
                    accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                />
                <div class="ml-1 notoSansJpAndFourteenMedium">
                    <!-- <div v-if="base.file.name"></div> -->
                    {{
                        !!base.file.name
                            ? base.file.name
                            : '※ファイルが選択されていません。'
                    }}
                </div>
            </div>

            <div class="pl-5 pt-2.5 w-full flex justify-center">
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
                    @click="onImport"
                    value="インポート"
                />
            </div>
            <div class="pl-5 pt-5">
                <div class="notoSansJpAndSixteenBold">■インポートについて</div>
                <div class="notoSansJpAndFourteenRegular">
                    データをインポートする際には「インポートフォーム」をご利用ください。
                </div>
                <div class="notoSansJpAndFourteenRegular">
                    ファイル形式は、xlsx
                    形式のみ対応しております。その他のファイル形式は非対応です。
                </div>
                <div class="flex">
                    <div>
                        ※同姓同名のユーザーがいる場合にはご注意ください。対応方法は
                    </div>
                    <div
                        class="
                            underline
                            text-blueline
                            cursor-pointer
                            hover:opacity-50
                        "
                        @click="manualClick"
                    >
                        マニュアル
                    </div>
                    <div>をご参照ください。</div>
                </div>
            </div>
            <div class="pl-5 pr-5 pt-5">
                <my-table></my-table>
            </div>

            <div class="pl-5 pt-5 pb-5">
                <div class="notoSansJpAndSixteenBold">■フォームの活用方法</div>
                <div class="notoSansJpAndFourteenMedium">
                    ・収集変換フォームをご使用の場合
                </div>
                <div class="notoSansJpAndFourteenRegular pl-5">
                    方法 ➀
                    ：「保存画面」シートのみを残し（その他シートを削除し）、.xlsx
                    で保存し、インポートする。
                </div>
                <div class="notoSansJpAndFourteenRegular pl-5">
                    方法 ➁ ：「保存画面」をインポートフォームにコピー &
                    ペーストし、インポートする。
                </div>

                <div class="notoSansJpAndFourteenMedium pt-5">
                    ・報告・収集・インポートフォームをご使用の場合
                </div>
                <div class="notoSansJpAndFourteenRegular pl-5">
                    方法：「保存画面」をインポートフォームにコピー &
                    ペーストし、インポートする。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vueSingleSelect from '../common/dropdown/vueSingleSelect.vue'
import litepieDatepicker from '../common/dateRange/litepie-datepicker.vue'
import myTable from './myTable.vue'
export default {
    components: { vueSingleSelect, litepieDatepicker, myTable },
    props: {},
    data() {
        return {
            base: {
                file: {},
                style: '1',
            },
        }
    },
    couputed: {},
    watch: {},
    methods: {
        onFileChange(e) {
            console.log('onFileChange-1', e)
            if (e.target.files.length == 0) return
            const fs = e.target.files || e.target.dataTransfer.files
            // document.getElementById(e.target.id).value = '';
            this.addFile(fs)
            //   e.target.value = ''
        },
        addFile(files) {
            console.log('files', files)
            console.log('files[0]', files[0])
            this.base.file = files[0]
            //   for (const file of files) {
            //     console.log(file)
            //     const reader = new FileReader()
            //     reader.readAsDataURL(file)
            //     let f = {
            //       filename: file.name,
            //       filesize: file.size,
            //       filetype: file.type,
            //     }
            //     reader.onload = () => {
            //       const dataURI = reader.result
            //       const base64EncodedFile = dataURI.replace(
            //         /data:.*\/.*;base64,/,
            //         ''
            //       )
            //       Object.assign(f, { base64: base64EncodedFile })
            //       // this.base.file.push(f)
            //       // this.base.file[idx] = { file: f }
            //       // Object.assign(f, { base64: reader.result })
            //       // // this.base.file.push(f)
            //       this.base.file = f
            //     }
            //     console.log(this.base.file)
            //   }
        },
        setStyle(value) {
            this.base.style = value
        },
        manualClick(type, style) {
            this.$store.dispatch('setDownload', true)
            //   let param = { token: 'CJwfSw4oWegAp5qp2MUcvUFy' }
            let param = {}
            this.$serve.downloadPreavoidManual(param).then((res) => {
                const filename = '【AI-PHARMA】利用画面マニュアル.pdf'
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
        onImport() {
            console.log('this.base.file', this.base.file)
            //   console.log("this.base.file", new FormData())
            const formdata = new FormData()
            //   formdata.append('token', rootState.apiToken)
            formdata.append('style', this.base.style)
            formdata.append('import_file', this.base.file)

            //   let param = {
            //     style: this.base.style,
            //     import_file: this.base.file,
            //   }
            this.$store.dispatch('setUpload', true)
            this.$serve.importPreavoidStyle(formdata).then((res) => {
                console.log(res)
                if (res.status === 200) {
                    let apiResult
                    try {
                        apiResult = res.data
                    } catch (e) {
                        apiResult = false
                    }
                    console.log('apiResult', apiResult)
                    if (apiResult.status === 'SAVE ERROR') {
                        this.$swal({
                            title: 'インポートに失敗しました。',
                            html: apiResult.message,
                            icon: 'error',
                        })
                    } else if (apiResult.status === 'SUCCESS') {
                        this.$swal({
                            title: 'インポートに成功しました。',
                            icon: 'success',
                        })
                    } else if (apiResult.status === 'EXIST UNINTENDED OWNER') {
                        this.$swal({
                            title: '登録に成功しました。',
                            html: '報告者名に紐づけられずインポート実行者がオーナーとなった事例があります。<br>出力されたExcelに記載の内容をご確認ください。',
                            icon: 'warning',
                        })
                        const filename = apiResult.data_name
                        const blob = new Blob(
                            [
                                Buffer.from(
                                    apiResult.file_data.replace(/^.*,/, ''),
                                    'base64'
                                ),
                            ],
                            {
                                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            }
                        )
                        if (window.navigator.msSaveOrOpenBlob) {
                            window.navigator.msSaveOrOpenBlob(blob, filename)
                        } else {
                            const link = document.createElement('a')
                            link.href = window.URL.createObjectURL(blob)
                            link.download = filename
                            link.click()
                        }
                    } else if (apiResult.status === 'VALIDATE ERROR') {
                        this.$swal({
                            title: '正常にインポートが完了しませんでした。',
                            html: '出力されたExcelに記載のエラー内容をご確認ください。',
                            icon: 'error',
                        })
                        const filename = apiResult.data_name
                        const blob = new Blob(
                            [
                                Buffer.from(
                                    apiResult.file_data.replace(/^.*,/, ''),
                                    'base64'
                                ),
                            ],
                            {
                                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            }
                        )
                        if (window.navigator.msSaveOrOpenBlob) {
                            window.navigator.msSaveOrOpenBlob(blob, filename)
                        } else {
                            const link = document.createElement('a')
                            link.href = window.URL.createObjectURL(blob)
                            link.download = filename
                            link.click()
                        }
                    }
                } else {
                    this.$swal({
                        title: 'インポートに失敗しました。',
                        icon: 'error',
                    })
                }
                this.base.file = {}
            })
        },
    },
    created() {},
}
</script>
<style scoped></style>
