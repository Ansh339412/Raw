
import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLkED8gfjCcZD9vQwhGmUwTJ7FjSXHAwI",
  authDomain: "telegram-app-bd607.firebaseapp.com",
  projectId: "telegram-app-bd607",
  storageBucket: "telegram-app-bd607.firebasestorage.app",
  messagingSenderId: "1092629760496",
  appId: "1:1092629760496:web:a67482e41f511b98b4f535",
  measurementId: "G-NM69GYWFX3",
  databaseURL:"https://telegram-app-bd607-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.database()