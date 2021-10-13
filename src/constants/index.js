const searchResulstLable_organization = 'organization'
const formList = {
    TOP: 'top',
    ALL: 'all',
    DI: 'searchDiKnowledge',
    OWN: 'searchOrganizantion',
    PVD: 'searchPreavoids',
}
const style = [
    { value: '0', title: '全様式' },
    { value: '1', title: '様式1' },
    { value: '2', title: '様式2' },
    { value: '3', title: '様式3' },
    { value: '4', title: '副作用' },
]

const searchParam = {
    KEYWORD: 'keyword',
    TAGS: 'tags',
    MEDICINE: 'medicine',
    QACATEGORY: 'qacategory',
    FACILITY: 'facility_flag',
    DETAILNUMBER: 'detailNumber',
    SORT: 'SORT',
    PAGE: 'page',
    PAID: 'qaId',
}
const organizationDateSort = [
    { value: '0', title: '最終編集日が新しい順' },
    { value: '1', title: '最終編集日が古い' },
    { value: '2', title: 'Goodが多い順' },
    { value: '3', title: 'Badが多い順' },
    { value: '4', title: 'コメント数が多い順' },
    { value: '5', title: 'コメント数が少ない順' },
    { value: '6', title: 'Q&A-ID昇順' },
    { value: '7', title: 'Q&A-ID降順' },
]

const organizationCountSort = [
    { value: '0', title: '20件 表示' },
    { value: '1', title: '50件 表示' },
    { value: '2', title: '100件 表示' },
]
export default {
    searchResulstLable_organization,
    style,
    formList,
    searchParam,
    organizationDateSort,
    organizationCountSort,
}
