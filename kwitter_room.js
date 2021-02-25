var firebaseConfig={
      apiKey: "AIzaSyAagAdw2SA3OOzXmbrVsrc1I-gVPBLqph0",
      authDomain: "covidbot-uvqm.firebaseapp.com",
      databaseURL: "https://covidbot-uvqm-default-rtdb.firebaseio.com",
      projectId: "covidbot-uvqm",
      storageBucket: "covidbot-uvqm.appspot.com",
      messagingSenderId: "564648753284",
      appId: "1:564648753284:web:9d69e8079eed01d1076ad1"
};

firebase.initializeApp(firebaseConfig);

var usernameStr=localStorage.getItem('usernameStr');

function addRoom(){
      var roomNameStr=document.querySelector('#room_name').value;

      firebase.database().ref("/").child(roomNameStr).update({purpose: "Adding Room Name"});
      localStorage.setItem('roomNameStr', roomNameStr);
      location='kwitter_page.html';
}

document.querySelector('#username').innerText='Welcome '+usernameStr+'!'

function getData(){
      firebase.database().ref("/").on('value', function(snapshot){
            document.getElementById("output").innerHTML='';
            snapshot.forEach(function(childSnapshot){
                  childKey=childSnapshot.key;

                  var roomNameStr=childKey;

                  console.log(roomNameStr);

                  var outputInnerHTML='<div class="room_name" id="'+roomNameStr+'" onclick="redirectToRoomName(this.id)">#'+roomNameStr+'</div><hr>';

                  document.querySelector('#output').innerHTML=outputInnerHTML;
            });
      });
}

getData();

function redirectToRoomName(roomNameStr){
      console.log(roomNameStr);
      localStorage.setItem('roomNameStr', roomNameStr);
      location='kwitter_page.html';
}

function logout(){
      localStorage.removeItem('usernameStr');
      localStorage.removeItem('roomNameStr');
      location='index.html';
}
