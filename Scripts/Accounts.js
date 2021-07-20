    // Header Section 

// variable
        //Lower Section
//Divs
var lower = document.querySelector(".lower"),
//Btns
    createOrderbtn = document.querySelector(".create"),
    postSoftwareBtn = document.querySelector(".postSoftware"),
    chatbtn = document.querySelector(".chats");



//PageLinking
// pageLinking(accountBtn, "Account.html")
        //header ended


            // body starts here 
// variable
var backBtn= document.querySelector(".backBtn");

backBtn.addEventListener("click", function(){
    window.history.back()
})
pageLinking(chatbtn, "ChatList.html")
































            // Functions
function pageLinking(button, locate){
    button.addEventListener("click",function(){
        window.location.href=locate
    })
}