import firebase from "firebase/app";
//импортируем эти модули чтобы работала БД и авторизация
import "firebase/auth";
import "firebase/database";

//Настройки firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKZxK5h0aHX2mXsv0AHEuA7-J6wh7nxgI",
  authDomain: "my-first-project-sergfeo.firebaseapp.com",
  databaseURL: "https://my-first-project-sergfeo-default-rtdb.firebaseio.com",
  projectId: "my-first-project-sergfeo",
  storageBucket: "my-first-project-sergfeo.appspot.com",
  messagingSenderId: "709127616593",
  appId: "1:709127616593:web:5dd0342f3012703413a070",
};

//Инициализация firebase
firebase.initializeApp(firebaseConfig);
