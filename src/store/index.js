import { createStore } from "vuex";
import user from '../store/modules/user'
import announcements from '../store/modules/announcements'
import common from '../store/modules/common'
import home from '../store/modules/home'
import searchAll from '../store/modules/searchAll'
const store = createStore({
    modules: {
        user,
        announcements,
        common,
        home,
        searchAll
    }
})

export default store
