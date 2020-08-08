export const cartDropdown = () => {
    return {
        type: "TOGGLE_CART_HIDDEN",
    }
}

export const addCartItem = (item) => {
    return {
        type: "Add_CART_ITEM",
        payload: item
    }
}