import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeHiGnECbuumukP1aMoLlglDz6XZf740w",
    authDomain: "shopdb-38e8b.firebaseapp.com",
    databaseURL: "https://shopdb-38e8b.firebaseio.com",
    projectId: "shopdb-38e8b",
    storageBucket: "shopdb-38e8b.appspot.com",
    messagingSenderId: "560923372315",
    appId: "1:560923372315:web:e78d7f5208a40cd8f241be",
    measurementId: "G-HZLYPYRKGE"
  }

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
      if(!userAuth)return;

      const userRef = firestore.doc(`Users/${userAuth.uid}`);
      
      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const {displayName, email} = userAuth;

        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch(error){
          console.log(error);
        }
      }
      return userRef;
  } 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
    
  export default firebase;























