function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username==="supreet" && password==="user"){
        alert("login succesfully");
        return true;
      
    }
    else{
        alert("login failed");
        return true;
    }
}