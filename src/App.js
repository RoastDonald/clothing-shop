import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shoppage/shoppage.component';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/header/header.component";
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';
import SignInandSignUpPage from './pages/signin-and-signup/signin-and-signup-component';

class App extends React.Component {
 

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{ //opens port and continue to be listen
      if(userAuth){
        
        const {setCurrentUser} = this.props;
    
      
      const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(user =>{
        setCurrentUser(
          {
            currentUser:{
            id:user.id,
            ...user.data()
            }
          })
      })
    }
      else{
        setCurrentUser({
          currentUser:userAuth
        })
      }
    })

  }


  componentWillUnmount(){
    this.unsubscribeFromAuth(); // close subscription (port)
  }


  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route
          exact 
          path="/signin" 
          render={()=>
            this.props.currentUser ?(
                  <Redirect to='/'/>
                  ):
                  (<SignInandSignUpPage/>)}/>

      </Switch>
    </div>
  );
  }
}


const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
