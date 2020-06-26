import React from 'react'
import app from 'firebase/app'
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

class Firebase extends React.Component{
  constructor(props) {
    super(props);
    if(!app.apps.length)
      app.initializeApp(config);
    this.state={
      app: app,
      user: undefined,
      token: undefined,
      database: app.database(),
      loggedIn: false,
      signInWithPopup: this.signInWithPopup,
    };
  }

  signInWithPopup = () => {
    let provider = new this.state.app.auth.GoogleAuthProvider();
    this.state.app.auth().signInWithPopup(provider).then((result) => {
      this.setState({
        user: result.user,
        token: result.credential.accessToken,
        loggedIn: true,
      });
    }).catch((error)=>{
      console.log(JSON.stringify(error));
    });
  }

  render() {
    return(
      <FirebaseContext.Provider value={this.state}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}

export default Firebase;