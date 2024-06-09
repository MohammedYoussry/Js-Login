
var signUpInput =document.getElementById("signUp");
var signupName =document.getElementById("signupName");
var nameChar = document.getElementById("nameChar");
var signupEmail =document.getElementById("signupEmail");
var emailChar = document.getElementById("emailChar");
var signinPassword = document.getElementById("signinPassword");
var passWord = document.getElementById("passWord");
var exist = document.getElementById("exist")
var success =  document.getElementById("success")
var allUsers=[];


if(localStorage.getItem("allUsers")!=null){

    allUsers= JSON.parse(localStorage.getItem("allUsers")) 
}




signUp.addEventListener("submit",function(e) {

    e.preventDefault()

    if(checkInput() ){

        addUser()

    }
  

})



function addUser() {

    var user ={
        name:signupName.value,
        email:signupEmail.value,
        password:signinPassword.value,
    }

    if (checkUsers(user)==true) {
        exist.classList.replace("d-none","d-block")
    }
    else{
        exist.classList.replace("d-block","d-none")
        success.classList.replace("d-none","d-block")
        // window.location.href="file:///D:/js%20-%20Login/Login/index.html";
        allUsers.push(user)
        localStorage.setItem("allUsers",JSON.stringify(allUsers))

    }
   
}



function validation(Regex,element,charElement) {

    var pattern = Regex

    
    if (pattern.test(element.value)) {

        
        charElement.classList.replace("d-block","d-none")
        element.classList.remove("is-invalid")
        element.classList.add("is-valid")
        return true
        
    }
    else{
       
        charElement.classList.replace("d-none","d-block")
        element.classList.add("is-invalid")
        return false
    } 
}


function checkInput() {

    if (validation(/^[a-zA-Z0-9$_]{3,}$/,signupName,nameChar)===true &&
        validation(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,signupEmail,emailChar) ==true&&
        validation(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\D).*$/,signinPassword,passWord) ==true) {

        return true
        
    }else{
        
        return false
    }
    
} 


function checkUsers(user) {
    for (let i = 0; i < allUsers.length; i++) {
       if ( allUsers[i].email.toLowerCase() == user.email.toLowerCase()) {

        
        return true
        
       }
    }
    
}


