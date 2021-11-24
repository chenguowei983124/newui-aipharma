const searchResulstLable_organization = 'organization'
// メニューリスト
const formList = {
    TOP: 'top',
    ALL: 'all',
    DI: 'searchDiKnowledge',
    NDI: 'newOrgDIRecord',
    OWN: 'searchOrganizantion',
    PVD: 'searchPreavoids',
    BBS: 'searchBulletinBoard',
    BBSR: 'BBSRecord',
    EDI: 'searchNotification',
}
// 様式リスト
const style = [
    { value: '0', title: '全様式' },
    { value: '1', title: '様式1' },
    { value: '2', title: '様式2' },
    { value: '3', title: '様式3' },
]
// パラメータリスト
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
// 順 区分リスト
const organizationDateSort = [
    { value: 'last_updated_at_desc', title: '最終編集日が新しい順' },
    { value: 'last_updated_at_asc', title: '最終編集日が古い順' },
    { value: 'asked_at_desc', title: '質問日が新しい順' },
    { value: 'asked_at_asc', title: '質問日が古い順' },
    { value: 'good_feedback_count_desc', title: 'Goodが多い順' },
    { value: 'bad_feedback_count_desc', title: 'Badが多い順' },
    { value: 'comment_feedback_count_desc', title: 'コメントが多い順' },
    { value: 'facility_qa_number_asc', title: 'Q&A-ID昇順' },
    { value: 'facility_qa_number_desc', title: 'Q&A-ID降順' },
    // { value: '0', title: '最終編集日が新しい順' },
    // { value: '1', title: '最終編集日が古い順' },
    // { value: '2', title: 'Goodが多い順' },
    // { value: '3', title: 'Badが多い順' },
    // { value: '4', title: 'コメント数が多い順' },
    // { value: '5', title: 'コメント数が少ない順' },
    // { value: '6', title: 'Q&A-ID昇順' },
    // { value: '7', title: 'Q&A-ID降順' },
]
// 順 区分リスト
const preavoidsDateSort = [
    { value: '0', title: '投稿日が新しい順' },
    { value: '1', title: '投稿日が古い順' },
    { value: '2', title: '登録日が新しい順' },
    { value: '3', title: '登録日が古い順' },
]
// 件数表示 区分リスト
const organizationCountSort = [
    { value: '0', title: '20件 表示' },
    { value: '1', title: '50件 表示' },
    { value: '2', title: '100件 表示' },
]
// 掲示板検索　順 区分リスト
const singleSelectItem = [
    { value: 'created_at-desc', title: '投稿日が新しい順' },
    { value: 'created_at-asc', title: '投稿日が古い順' },
]
const APIKEY = 'qph8nbd0u6yvubz8os1ghqw2txzvs1uq3qng582s4w0t63vp'

const managementitemList = [
    { title: 'データ登録', itemStyle: 'title' },
    {
        title: '組織内DI 記録（Q&A）登録',
        itemStyle: 'item',
        routerPath: '/newOrgDIRecord',
    },
    {
        title: '症例（プレアボイド）登録',
        itemStyle: 'item',
        routerPath: '/newOrgDIRecord',
    },
    { title: 'マイデータ', itemStyle: 'title' },
    {
        title: '組織内DI 記録（Q&A）',
        itemStyle: 'item',
        routerPath: '/newOrgDIRecord',
    },
    {
        title: '症例（プレアボイド）',
        itemStyle: 'item',
        routerPath: '/newOrgDIRecord',
    },
    { title: '下書き一覧', itemStyle: 'item', routerPath: '/newOrgDIRecord' },
]

const managementPcitemList = [
    { title: 'データ登録', itemStyle: 'title' },
    {
        title: '組織内DI 記録 登録',
        itemStyle: 'item',
        routerPath: '/newOrgDIRecord',
    },
    { title: '症例 登録', itemStyle: 'item', routerPath: '/newOrgDIRecord' },
    { title: 'マイデータ', itemStyle: 'title' },
    {
        title: '組織内DI 記録 ',
        itemStyle: 'item',
        routerPath: '/newOrgDIRecord',
    },
    { title: '症例', itemStyle: 'item', routerPath: '/newOrgDIRecord' },
    { title: '下書き一覧', itemStyle: 'item', routerPath: '/newOrgDIRecord' },
]

const issueIconitemList = [
    { title: '投稿', itemStyle: 'title' },
    {
        title: 'お知らせ 登録',
        itemStyle: 'item',
        routerPath: '/searchNotification',
    },
    {
        title: '掲示板 登録',
        itemStyle: 'item',
        routerPath: '/newBbsRecord',
    },
]

const topManagementItemUserList = [
    { title: 'マイページ', routerPath: '/' },
    { title: '施設切替', routerPath: '/' },
    { title: '設定', routerPath: '/' },
    { title: 'ログアウト', routerPath: '/' },
]

const qaClassifyFacility = [
    { value: '0', title: '全体' },
    { value: '1', title: '自施設のみ' },
    { value: '2', title: '他施設のみ' },
    { value: '3', title: 'グループ施設のみ' },
    { value: '4', title: 'グループ施設+自施設' },
]

const bbsScops = [
    { value: 'select', title: '選択してください' },
    { value: '0', title: '全体' },
    { value: '1', title: '組織' },
    { value: '2', title: 'グループ' },
]

const searchBbsScops = [
    { value: '0', title: '全体' },
    { value: '1', title: '組織' },
    { value: '2', title: 'グループ' },
]
const bbsGenreInfo = [
    { value: 'notice', title: '告知' },
    { value: 'event', title: 'イベント' },
    { value: 'other', title: 'その他' },
]
const bbsGenre = [
    { value: 'select', title: '選択してください' },
    { value: 'notice', title: '告知' },
    { value: 'event', title: 'イベント' },
    { value: 'query', title: '質問' },
    { value: 'questionnaire', title: 'アンケート' },
    { value: 'other', title: 'その他' },
]
// 入力タグ様式
const multiselectCss = {
    container:
        'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none',
    containerDisabled: 'cursor-default bg-gray-100',
    containerOpen: 'rounded-b-none',
    containerOpenTop: 'rounded-t-none',
    containerActive: '',
    singleLabel:
        'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
    multipleLabel:
        'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
    search: 'w-full absolute inset-0 outline-none appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5',
    tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2',
    tag: 'bg-gray-300 text-black notoSansJpAndTwelveRegular pl-2 rounded-full border-2 mr-1 mb-1 flex items-center whitespace-nowrap',
    tagDisabled: 'pr-2 opacity-50',
    tagRemove:
        'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
    tagRemoveIcon:
        'bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
    tagsSearchWrapper:
        'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
    tagsSearch:
        'absolute inset-0 border-0 outline-none appearance-none p-0 font-NotoSansJp text-xs font-sans box-border w-full',
    tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
    placeholder:
        'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400',
    caret: 'bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
    caretOpen: 'rotate-180 pointer-events-auto',
    clear: 'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
    clearIcon:
        'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
    spinner:
        'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0',
    dropdown:
        'max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b',
    dropdownTop:
        '-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t',
    dropdownHidden: 'hidden',
    options: 'flex flex-col p-0 m-0 list-none',
    optionsTop: 'flex-col-reverse',
    group: 'p-0 m-0',
    groupLabel:
        'flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal',
    groupLabelPointable: 'cursor-pointer',
    groupLabelPointed: 'bg-gray-300 text-gray-700',
    groupLabelSelected: 'bg-green-600 text-white',
    groupLabelDisabled: 'bg-gray-100 text-gray-300 cursor-not-allowed',
    groupLabelSelectedPointed: 'bg-green-600 text-white opacity-90',
    groupLabelSelectedDisabled:
        'text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed',
    groupOptions: 'p-0 m-0',
    option: 'flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3',
    optionPointed: 'text-gray-800 bg-gray-100',
    optionSelected: 'text-white bg-green-500',
    optionDisabled: 'text-gray-300 cursor-not-allowed',
    optionSelectedPointed: 'text-white bg-green-500 opacity-90',
    optionSelectedDisabled:
        'text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed',
    noOptions: 'py-2 px-3 text-gray-600 bg-white',
    noResults: 'py-2 px-3 text-gray-600 bg-white',
    fakeInput:
        'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
    spacer: 'h-9 py-px box-content',
}

export default {
    searchResulstLable_organization,
    style,
    formList,
    searchParam,
    organizationDateSort,
    organizationCountSort,
    multiselectCss,
    managementitemList,
    managementPcitemList,
    topManagementItemUserList,
    qaClassifyFacility,
    issueIconitemList,
    bbsScops,
    bbsGenre,
    preavoidsDateSort,
    singleSelectItem,
    APIKEY,
    searchBbsScops,
}
