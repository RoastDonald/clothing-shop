import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shoppage/shoppage.component';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import SingInAndSingUpPage from "./pages/signin-and-signup/signin-and-signup-component";
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user.actions';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser:null
    }
  }


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
        <Route  path="/signin" component={SingInAndSingUpPage}/>

      </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(App);
