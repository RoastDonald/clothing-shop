import  React from 'react';
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount:selectCartCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon); 