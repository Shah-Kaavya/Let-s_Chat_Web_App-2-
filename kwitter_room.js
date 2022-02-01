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
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"     
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
    }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;      
});});}
getData();
function redirectToRoomName()
{
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}