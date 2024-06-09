
var userName =localStorage.getItem ("name")
var logBtn =document.getElementById("logBtn")


mainName.innerHTML =userName


logBtn.addEventListener("click",function () {
    localStorage.removeItem("name")
    
})