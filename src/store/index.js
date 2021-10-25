import { createStore } from 'vuex'
import user from '../store/modules/user'
import announcements from '../store/modules/announcements'
import common from '../store/modules/common'
import home from '../store/modules/home'
import searchAll from '../store/modules/searchAll'
import organization from '../store/modules/organization'
import dIKnowledgeShare from '../store/modules/dIKnowledgeShare'
import preavoids from '../store/modules/preavoids'
const store = createStore({
    modules: {
        user,
        announcements,
        common,
        home,
        searchAll,
        organization,
        dIKnowledgeShare,
        preavoids,
    },
})

export default store
