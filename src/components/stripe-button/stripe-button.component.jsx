import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({total})=>{
    const priceForStripe = total * 100;
    const publishableKey = 'pk_test_gIFys9S0gReTPCyRnzLdM6dO00wP2rJlV8';
    const onToken = token =>{
        console.log(token);
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${total}$`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;