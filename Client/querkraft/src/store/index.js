import Vue from 'vue'
import Vuex from 'vuex'
import userAccount from './modules/userAccount'

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        userAccount
    }
})