export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCardItem = cartItems.find(cartItem => cartItem.id ===  cartItemToAdd.id);
    console.log(cartItemToAdd, "cartItemToAdd")

    if (existingCardItem) {
        console.log(cartItems, "cartItems")
        return cartItems.map(cartItem => {
                if (cartItem.id === cartItemToAdd.id) {
                    return {...cartItem, quantity: cartItem.quantity + 1}
                } else {
                    return cartItem
                }
            })
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]


}