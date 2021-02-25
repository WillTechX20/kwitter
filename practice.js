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

function addUser(){
    var usernameStr=document.querySelector('input').value;
    firebase.database().ref("/").child(usernameStr).update({purpose: "Adding User"});
    console.log('Success!')
}