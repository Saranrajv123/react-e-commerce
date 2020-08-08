import {addItemToCart} from "./CartUtils"
const defaultState = {
    hidden: true,
    cartItem: []
}

const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden
            }
        case "Add_CART_ITEM":
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
        default:
            return state

    }

}

export default cardReducer