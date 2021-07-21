    // Header Section 
    
// variable
        // upper Section 
//Divs
var UpperDiv = document.querySelector(".Upperbutton");
//Btns
var accountBtn = document.querySelector(".account"),
    LoginBtn =document.querySelector(".login"),
    SignupBtn = document.querySelector(".signup"),

        //Lower Section
//Divs
    lower = document.querySelector(".lower"),
//Btns
    // createOrderbtn = document.querySelector(".create"),
    postSoftwareBtn = document.querySelector(".postSoftware");
    // chatbtn = document.querySelector(".chats");



//PageLinking
pageLinking(accountBtn, "Account.html")
pageLinking(LoginBtn,"#")
pageLinking(SignupBtn, "#")
// pageLinking(createOrderbtn, "#")
pageLinking(postSoftwareBtn, "#")
// pageLinking(chatbtn, "ChatList.html")


var backBtn= document.querySelector(".backBtn");

backBtn.addEventListener("click", function(){
    window.history.back()
})



            // Functions
function pageLinking(button, locate){
    button.addEventListener("click",function(){
        window.location.href=locate
    })
}