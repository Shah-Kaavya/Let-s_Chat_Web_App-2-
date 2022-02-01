var firebaseConfig = {
  apiKey: "AIzaSyBbt9La5zNN-aQ6JJWyIRtwNjuvbxccF10",
  authDomain: "kwitterapp-812eb.firebaseapp.com",
  databaseURL: "https://kwitterapp-812eb-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-812eb",
  storageBucket: "kwitterapp-812eb.appspot.com",
  messagingSenderId: "1070243781459",
  appId: "1:1070243781459:web:e3ca5519790d70864d5fa6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0      
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
