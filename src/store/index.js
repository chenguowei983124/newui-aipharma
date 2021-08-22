import { createStore } from "vuex";
import user from '../store/modules/user'
import announcements from '../store/modules/announcements'
import common from '../store/modules/common'
import home from '../store/modules/home'
const store = createStore({
    modules: {
        user,
        announcements,
        common,
        home,
    }
})

export default store
