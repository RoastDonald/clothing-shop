import {createSelector} from 'reselect';

const cartItems = state =>state.cart;

export const selectCartItems = createSelector(
    [cartItems],
    cart =>cart.cartItems
);

export const selectCartCount = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((accum,item)=>accum+item.quantity,0));