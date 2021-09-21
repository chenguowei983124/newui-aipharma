import { createStore } from "vuex";
import user from '../store/modules/user'
import announcements from '../store/modules/announcements'
import common from '../store/modules/common'
import home from '../store/modules/home'
import searchAll from '../store/modules/searchAll'
import organization from '../store/modules/organization'
const store = createStore({
    modules: {
        user,
        announcements,
        common,
        home,
        searchAll,
        organization
    }
})

export default store
