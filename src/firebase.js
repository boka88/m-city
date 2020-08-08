import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyADZJn7MpT05OibqG3lobLuq60H3-srzXE",
  authDomain: "manc-city.firebaseapp.com",
  databaseURL: "https://manc-city.firebaseio.com",
  projectId: "manc-city",
  storageBucket: "manc-city.appspot.com",
  messagingSenderId: "369685380880",
  appId: "1:369685380880:web:17b696924b4390481a6f95",
  measurementId: "G-XWG2G3SHZ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')


export {
  firebase,
  firebaseMatches,
  firebasePromotions
}