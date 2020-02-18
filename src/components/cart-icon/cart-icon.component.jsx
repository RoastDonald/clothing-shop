import  React from 'react';
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartCount} from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
});

const mapStateToProps = state =>({
    itemCount:selectCartCount(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon); 