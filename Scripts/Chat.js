    // Header Section 
    
// variable
        // upper Section 
//Divs
var UpperDiv = document.querySelector(".Upperbutton");
//Btns
var accountBtn = document.querySelector(".account");

// variable
        //Lower Section
//Divs
var lower = document.querySelector(".lower"),
//Btns
    createOrderbtn = document.querySelector(".create"),
    postSoftwareBtn = document.querySelector(".postSoftware");  

    // chatbtn = document.querySelector(".chats");



//PageLinking
// pageLinking(accountBtn, "Account.html")
        //header ended


            // body starts here 
    //Chat Div
var chats= document.querySelector(".mrDavis");

    //PageLinking
pageLinking(chats, "#")




        
// variable
var backBtn= document.querySelector(".backBtn");

backBtn.addEventListener("click", function(){
    window.history.back()
})



//PageLinking
pageLinking(accountBtn, "Account.html")





























            // Functions
function pageLinking(button, locate){
    button.addEventListener("click",function(){
        window.location.href=locate
    })
}