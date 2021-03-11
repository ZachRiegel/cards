import React, {useEffect, useState, useCallback} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import FirebaseContext from 'contexts/FirebaseContext'

const config = {
  apiKey: "AIzaSyBLq4im3fG2B1cSCkwn5mScN_Og7_Sl1ko",
  authDomain: "eldtimes.firebaseapp.com",
  databaseURL: "https://eldtimes.firebaseio.com",
  projectId: "eldtimes",
  storageBucket: "eldtimes.appspot.com",
  messagingSenderId: "652140980056",
  appId: "1:652140980056:web:27e74e6d9237d6e4"
};

const Firebase = (props) => {
   let [app, setApp] = useState(!firebase.apps.length
      ? firebase.initializeApp(config)
      : firebase.app()
   );
   let [database, setDatabase] = useState(app.database());
   let [auth, setAuth] = useState(app.auth());

  let [user, setUser] = useState();
  let [token, setToken] = useState();
  let [loggedIn, setLoggedIn] = useState();

   useEffect((user) => {
      auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoggedIn(!!user);
      });
   }, [auth]);

  let signInWithPopup = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider).then((result) => {
      return result.user;
   }).then((user) => {
      return database.ref('Users').child(user.uid).get().then((snapshot) => {
         if (!snapshot.exists()) return database.ref(`Users/${user.uid}`).update({
            characters: [],
            email: user.email,
         });
      });
   }).catch((error)=>{
      console.log(error);
    });
  };

  return(
    <FirebaseContext.Provider value={{
      user,
      token,
      database,
      loggedIn,
      signInWithPopup,
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}

export default Firebase;
