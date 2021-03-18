import './style.css'

import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCnopyUwToTjJn3XWUQOG1fHFvLB1kNdFs",
  authDomain: "vidconnect-df1bf.firebaseapp.com",
  databaseURL: "https://vidconnect-df1bf-default-rtdb.firebaseio.com",
  projectId: "vidconnect-df1bf",
  storageBucket: "vidconnect-df1bf.appspot.com",
  messagingSenderId: "598043495392",
  appId: "1:598043495392:web:680dc8b36a1fc1b8fa3985"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

