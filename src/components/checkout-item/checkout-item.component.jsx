import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearItem as clearItemOut, removeItem, addItem } from '../../redux/cart/cart.actions';
const CheckoutItem = ({cartItem, clearItem, removeCartItem, addCartItem})=>{
    const {name,quantity, price, imageUrl} = cartItem;


return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>

        <span className="name">{name}</span>
        <span className="quantity">

            <div className="arrow" onClick={()=>removeCartItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addCartItem(cartItem)}>&#10095;</div>

        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>clearItem(cartItem)}>
            &#9747;
        </div>

    </div>
)
}





const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemOut(item)),
    removeCartItem: item => dispatch(removeItem(item)),
    addCartItem: item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);