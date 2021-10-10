const searchResulstLable_organization = "organization"
const formList = {
    "TOP": "top",
    "ALL": "all",
    "DI": "searchDiKnowledge",
    "OWN": "searchOrganizantion",
    "PVD": "searchPreavoids",


}
const style = [
    { "value": "0", "title": "全様式" },
    { "value": "1", "title": "様式1" },
    { "value": "2", "title": "様式2" },
    { "value": "3", "title": "様式3" },
    { "value": "4", "title": "副作用" }
]

const searchParam={
    "KEYWORD":"keyword",
    "TAGS":"tags",
    "MEDICINE":"medicine",
    "QACATEGORY":"qacategory",
    "FACILITY":"facility_flag",
    "DETAILNUMBER":"detailNumber",
    "SORT":"SORT",
    "PAGE":"page",
    "PAID":"qaId",
}
export default {
    searchResulstLable_organization,
    style,
    formList,
    searchParam
}
