import {createSelector} from 'reselect';

const cartItems = state =>state.cart;

export const selectCartItems = createSelector(
    [cartItems],
    cart =>cart.cartItems
);


const selectCart = state =>state.cart;


export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((accum,item)=>accum+item.quantity*item.price,0));



export const selectCartCount = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((accum,item)=>accum+item.quantity,0));