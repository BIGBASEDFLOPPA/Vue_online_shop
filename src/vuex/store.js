import Vue from 'vue'
import Vuex from 'vuex'


import commonActions from "@/vuex/actions/actions";
import apiRequest from "@/vuex/actions/api"
import getters from "@/vuex/getters/getters";
import mutations from "@/vuex/mutations/mutations";

const actions = { ...commonActions,...apiRequest}

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
       products: [],
        cart:[]
    },
    mutations,
    actions,
    getters
});
export default store;