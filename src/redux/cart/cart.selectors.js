import { createSelector } from "reselect"

const selectCart = state => state.cart//to select the cart from the root store

/*
* create selector takes two arguments on as array of selectors and another as the callback function
*/
export const selectCartItems = createSelector([selectCart], cart => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce(
    (accumlatedQuantity, cartItems) => accumlatedQuantity + cartItems.quantity,
    0
))