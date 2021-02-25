function addUser(){
    var usernameStr=document.querySelector('#username').value;
    
    localStorage.setItem('usernameStr', usernameStr);
    location='kwitter_room.html';
}