import axios from 'axios'

const download = {
    async download() {
        const checkStartDate = new Date(sessionStorage.search_updated_from)
        const checkEndDate = new Date(sessionStorage.search_updated_to)
        const self = this
        // if (
        //     checkStartDate.toString() === 'Invalid Date' ||
        //     checkEndDate.toString() === 'Invalid Date'
        // ) {
        //     sessionStorage.removeItem('search_updated_from')
        //     sessionStorage.removeItem('search_updated_to')
        // }
        await axios
            .get(
                `${process.env.PREAVOID_API_URL}/api_preavoid/v1/preavoid/search.xlsx`,
                {
                    responseType: 'blob',
                    dataType: 'binary',
                    params: {
                        token: this.isApiToken,
                        comment: sessionStorage.search_comment,
                        updated_from: sessionStorage.search_updated_from,
                        updated_to: sessionStorage.search_updated_to,
                        style: sessionStorage.search_style,
                        facility: sessionStorage.search_facility,
                    },
                },
                {
                    Accept: 'application/octet-stream',
                }
            )
            .then((res) => {
                const filename = '123.xls'
                // this.getFileNameFromContentDisposition(
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
}
export default download
