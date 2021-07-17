import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
firebase.initializeApp(
  {
    apiKey: "AIzaSyDHY5ytxC4MM5E6s353X6RMMxR69sMXO_Y",
    authDomain: "fir-practise-871d4.firebaseapp.com",
    projectId: "fir-practise-871d4",
    storageBucket: "fir-practise-871d4.appspot.com",
    messagingSenderId: "236820653435",
    appId: "1:236820653435:web:5039ce580fb620830949de",
    measurementId: "G-82JST2ZHCC"
  }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
