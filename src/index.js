import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



/* Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9tP8U6J_Mdte7oWvkDeO-4vKnhpYewpM",
  authDomain: "react-music-pod.firebaseapp.com",
  projectId: "react-music-pod",
  storageBucket: "react-music-pod.appspot.com",
  messagingSenderId: "479738673677",
  appId: "1:479738673677:web:7df1eab49523704d50f344"
};

firebase.initializeApp(firebaseConfig);
*/
ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
