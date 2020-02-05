import React from 'react';
import './sing-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';


class SingIn extends React.Component {
     constructor(props){
         super(props);

         this.state = {
             email:'',
             password:''
         }
     }

     handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({email:"",password:""})
     }

     handleChange = (event) =>{

        const {value, name} = event.target;
        this.setState({[name]:value})

     }

     render(){
         
        return (
            <div className="sing-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                           type="email" 
                           handleChange={this.handleChange} 
                           value={this.state.email} 
                           label="email"
                           required/>

                    <FormInput name="password"
                           type="password"
                           handleChange={this.handleChange}
                           value={this.state.password}
                           label="password"
                           required/>

                    <div className='buttons'>
                    <CustomButton>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                    </div>
                </form> 
            </div>
        );
     }
}

export default SingIn;