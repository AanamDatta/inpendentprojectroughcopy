var firebaseConfig = {
    apiKey: "AIzaSyBQZ1aUz_ra_7_QZUCMGqRo4KpW9zGuZLY",
  authDomain: "my-virtual-school-8b691.firebaseapp.com",
  projectId: "my-virtual-school-8b691",
  storageBucket: "my-virtual-school-8b691.appspot.com",
  messagingSenderId: "681522851809",
  appId: "1:681522851809:web:b7709cb1630c418105eca0",
  measurementId: "G-LH4ZWTPB3H"
  };

  firebase.initializeApp(firebaseConfig);

  function logout(){
    window.location = "index.html"
    localStorage.removeItem("Username")
    localStorage.removeItem("roomname")
  
  }
  
  user_name = localStorage.getItem("Username")
  room_name = localStorage.getItem("roomname")

  function send() {
      msg = document.getElementById("message")
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,like:0
    })
    document.getElementById("message").innerHTML = ""

  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name =message_data['name']
message = message_data['message']
like= message_data['like']
namewithtag = "<h4> " + name + "</h4>"
messagewithtag = "<h4 class='message_h4'>" + message + "</h4>" 
likebutton = "<button onclick='updatelike(this.id)' class='btn btn-warning' id="+firebase_message_id+" value="+like+">"
spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+" </span> </button> <hr>";
row= namewithtag + messagewithtag + likebutton + spanwithtag 
document.getElementById("output").innerHTML +=row;
//End code
 } });  }); }
getData();

function updatelike() {
buttonid = firebase_message_id
likes = document.getElementById(buttonid).value
update_likes = Number(likes) + 1
firebase.database().ref(room_name).child(firebase_message_id).update({
like:update_likes
})
}

