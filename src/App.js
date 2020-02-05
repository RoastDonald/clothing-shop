import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shoppage/shoppage.component';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import SingInAndSingUpPage from "./pages/signin-and-signup/signin-and-signup-component";
import {auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser:null
    }
  }


  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{ //opens port and continue to be listen
      this.setState({currentUser:user})

      console.log(user);
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth(); // close subscription (port)
  }


  render(){
  return (
    <div>
      <Header currentUser ={this.state.currentUser}/>
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route  path="/signin" component={SingInAndSingUpPage}/>

      </Switch>
    </div>
  );
  }
}

export default App;
