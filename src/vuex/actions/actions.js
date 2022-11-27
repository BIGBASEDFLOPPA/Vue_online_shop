export default {

    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit('ADD_CART_ITEM', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
        commit('DELETE_CART_ITEM', index)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
    }
}