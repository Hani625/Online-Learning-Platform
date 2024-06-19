// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCNA1vD4iPGuFxcpP0y1g1l1FHCfIbJP2I",
    authDomain: "online-learning-platform-fb942.firebaseapp.com",
    databaseURL: "https://online-learning-platform-fb942-default-rtdb.firebaseio.com",
    projectId: "online-learning-platform-fb942",
    storageBucket: "online-learning-platform-fb942.appspot.com",
    messagingSenderId: "826398983036",
    appId: "1:826398983036:web:83742580fccfbd979adaf9",
    measurementId: "G-41K4RSZS6Q"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();