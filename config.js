import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDd7L75w_hzjRlD6H3WZ373AexT3JOLRDw",
    authDomain: "willy-app-8e02f.firebaseapp.com",
    databaseURL: "https://willy-app-8e02f.firebaseio.com",
    projectId: "willy-app-8e02f",
    storageBucket: "willy-app-8e02f.appspot.com",
    messagingSenderId: "277417159034",
    appId: "1:277417159034:web:cfbfeb69caf03856458ec3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
