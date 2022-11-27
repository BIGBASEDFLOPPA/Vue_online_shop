export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_CART: (state,product) =>{
        if(state.cart.length){
             let isProductExists = false;
            state.cart.map(function (item) {
                if(item.article ===product.article){
                    // item.isProductExists = !item.isProductExists;
                    isProductExists = !isProductExists
                    item.quantity++
                }
            })
            if(!isProductExists) {
                state.cart.push(product)
            }
        }
        else {
            state.cart.push(product)
        }
    },
    REMOVE_FROM_CART: (state,index)=>{
        state.cart.splice(index, 1)
    },
    ADD_CART_ITEM:(state ,index)=>{
        state.cart[index].quantity++
    },
    DELETE_CART_ITEM:(state ,index)=> {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity-- }
    }
}