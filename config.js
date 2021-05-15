import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBn-Uds5vL3R7gfTipEZlZq4-TFKDihHho",
    authDomain: "wily-app-fb5dc.firebaseapp.com",
    projectId: "wily-app-fb5dc",
    storageBucket: "wily-app-fb5dc.appspot.com",
    messagingSenderId: "599283431235",
    appId: "1:599283431235:web:d91969aef5d8743991a1f6"
  };

//firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig); 
}
else { 
    firebase.app(); 
}
export default firebase.firestore();