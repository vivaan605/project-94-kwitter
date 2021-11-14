
firebaseConfig = {
    apiKey: "AIzaSyCSF4OgD5otM6XYlGuRRqW_c1E6uzAmYh4",
    authDomain: "kwitter-cdd5e.firebaseapp.com",
    databaseURL: "https://kwitter-cdd5e-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdd5e",
    storageBucket: "kwitter-cdd5e.appspot.com",
    messagingSenderId: "711946132947",
    appId: "1:711946132947:web:8b6a8a2bd87d6ad42c6326"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();
