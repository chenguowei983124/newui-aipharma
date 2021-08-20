import { createStore } from "vuex";
import user from '../store/modules/user'
import announcements from '../store/modules/announcements'
const store = createStore({
    modules: {
        user,
        announcements,
    }
})

export default store
