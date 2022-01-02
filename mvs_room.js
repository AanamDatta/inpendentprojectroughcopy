var firebaseConfig = {
    apiKey: "AIzaSyBQZ1aUz_ra_7_QZUCMGqRo4KpW9zGuZLY",
  authDomain: "my-virtual-school-8b691.firebaseapp.com",
  projectId: "my-virtual-school-8b691",
  storageBucket: "my-virtual-school-8b691.appspot.com",
  messagingSenderId: "681522851809",
  appId: "1:681522851809:web:b7709cb1630c418105eca0",
  measurementId: "G-LH4ZWTPB3H"
  };

  app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("room_name"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row
   //End code
   });});}
   getData();
   function addroom(){
    RoomName= document.getElementById("roomname").value
    localStorage.setItem("roomname",RoomName) 
    window.location="mvs_page.html"
    firebase.database().ref("/").child(RoomName).update({
    purpose:"addingroomname"
    })
    }

    function redirecttoroomname(name) {
      console.log(name)
      localStorage.setItem("room_name",name)
window.location="mvs_page.html"

}
username= localStorage.getItem("Username")
document.getElementById("username").innerHTML="welcome "+username

function logout(){
   window.location = "index.html"
   localStorage.removeItem("Username")
   localStorage.removeItem("RoomName")


}
