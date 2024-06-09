


var login = document.getElementById("login")

var signupEmail =document.getElementById("signupEmail")
var signinPassword =document.getElementById("signinPassword")
var loginIncorrect = document.getElementById("loginIncorrect")
var allUsers=[];

if(localStorage.getItem("allUsers")!=null){
    allUsers =JSON.parse(localStorage.getItem("allUsers")) 
}



login.addEventListener("submit",function (e) {

        e.preventDefault()
        loginUser()
    
})


function loginUser() {

    var userData ={
        email:signupEmail.value,
        password:signinPassword.value,
    }
    if(loginValid(userData)==true){
       
        loginIncorrect.classList.replace("d-block","d-none")
        window.location.href="main.html"
       
    }
    else{
        loginIncorrect.classList.replace("d-none","d-block")
     
    }
}


function loginValid(userData) {

    for (var i = 0; i < allUsers.length; i++) {
        
        if((allUsers[i].email.toLowerCase() == userData.email.toLowerCase()) && (allUsers[i].password == userData.password)){

        
            localStorage.setItem("name",allUsers[i].name)
            return true
        }
        
    }

    
}