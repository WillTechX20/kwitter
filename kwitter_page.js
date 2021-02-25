var usernameStr=localStorage.getItem('usernameStr');
var roomNameStr=localStorage.getItem('roomNameStr');
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

function logout(){
      localStorage.removeItem('usernameStr');
      localStorage.removeItem('roomNameStr');
      location='index.html';
}

function getData(){ 
      firebase.database().ref(roomNameStr).on('value', function(snapshot){ 
            document.getElementById("output").innerHTML=''; 
            snapshot.forEach(function(childSnapshot){ 
                  var childKey=childSnapshot.key; 
                  var childData=childSnapshot.val(); 

                  if(childKey!='purpose'){
                        var firebaseMessageId=childKey;
                        var messageData=childData;

                        console.log({firebaseMesageId: firebaseMessageId, messageData: messageData});

                        var nameStr=messageData.name;
                        var messageStr=messageData.messgae;
                        var likesCountNum=messageData.likes;
                        var i='<h4>'+nameStr+'<img class="user_tick" src="tick.png" alt="Tick"></h4>';
                        var j='<h4 class="message_h4">'+messageStr+'</h4>';
                        var k='<button class="btn btn-warning" id="'+firebaseMessageId+'" value="'+likesCountNum+'" onclick="updateLikes(this.id)">';
                        var l='<span class="glyphicon glyphicon-thumbs-up>Like: '+likesCountNum+'</span></button><hr>';
                        var m=i=j+k+l;

                        document.querySelector('output').innerHTML=document.querySelector('output').innerHTML+m;
                  } 
            });  
      });
}

getData();

function updateLikes(messageId){
      console.log('Like button clicked!: '+messageId);
      
      var localMessageId=messageId;
      var likesCountNum=document.querySelector(localMessageId).value;
      var updatedLikesCountNum=Number(likesCountNum)+1;
      
      console.log(updateLikes);
      firebase.database().ref(roomNameStr).child(messageId).update({likes: updatedLikesCountNum});

}

function send(){
      var messageStr=document.querySelector('#message').value;

      firebase.database().ref(roomNameStr).push({name: usernameStr, message: messageStr, likes: 0});
}