import React from 'react'
import './signin-and-signup-styles.scss';
import SingIn from '../../components/sing-in/sing-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInandSignUpPage = () =>(
    <div className="signin-and-signup">
        <SingIn/>
        <SignUp/>
        
    </div>
);

export default SignInandSignUpPage;