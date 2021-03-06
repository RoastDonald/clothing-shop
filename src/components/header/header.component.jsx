import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import './header.styles.scss';

import {auth} from '../../firebase/firebase.utils';
import CartDropDown from '../cart-dropdown/cart-dropdown.cmponent';


const Header = ({currentUser, hidden})=>(
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>


        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>

            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser?
                <div className="option" onClick={()=> auth.signOut()}>Sing out</div>
                :
                <Link className="option" to="/signin">Sign in</Link>
            }
        <CartIcon />
        </div>
        {hidden ? null:
        <CartDropDown/>
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});


export default connect(mapStateToProps)(Header);