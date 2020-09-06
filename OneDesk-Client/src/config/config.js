import firebase from "firebase";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBYgZWvarTGpqs2ztO2HRMQaMarligLYp8",
  authDomain: "onedeskdash.firebaseapp.com",
  databaseURL: "https://onedeskdash.firebaseio.com",
  projectId: "onedeskdash",
  storageBucket: "onedeskdash.appspot.com",
  messagingSenderId: "312429769263",
  appId: "1:312429769263:web:a9ea9d217168ba71ae8cda",
  measurementId: "G-VXS47MH0R4",
  clientId:
    "312429769263-4fd8152ekesmjt2hqug98cedclm0f8b6.apps.googleusercontent.com",
  scopes: [
    "email",
    "profile",
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/tasks",
  ],
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
    "https://www.googleapis.com/discovery/v1/apis/drive/v2/rest",
    "https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest",
  ],
};

firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth();
export const func = firebase.functions();
