// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBehbefaoG6CDoJuoqXaNmxWbYc7D9SBeE",
    authDomain: "tridentcv-26b02.firebaseapp.com",
    databaseURL: "https://tridentcv-26b02.firebaseio.com",
    projectId: "tridentcv-26b02",
    storageBucket: "tridentcv-26b02.appspot.com",
    messagingSenderId: "148413471546",
    appId: "1:148413471546:web:9fa9ab2020791eb0104e03",
    measurementId: "G-QMGSP5CBH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();