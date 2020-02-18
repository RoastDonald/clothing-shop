import React from 'react';
import './custom-buttom.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...restProps})=>(
    <button className={`${inverted ? 'inveted' : ''}${isGoogleSignIn? 'google-sign-in':''} custom-button`} {...restProps}>
        {children}
    </button>
);

export default CustomButton;
