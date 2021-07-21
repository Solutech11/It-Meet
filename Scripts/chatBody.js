    // Header Section 
    
// variable
        // upper Section 
//Divs
var UpperDiv = document.querySelector(".Upperbutton");
var buttomSec = document.querySelector(".buttomSec");
var chattingDiv = document.querySelector(".chatings")
var lower = document.querySelector(".lower");

//Btns
var sendbtn = document.querySelector(".send")

//input
var input= document.querySelector(".input")


//btn work
sendbtn.addEventListener("click", function(){
    var h3Add= document.createElement("h3");
    h3Add.className= "reciever";
    chattingDiv.appendChild(h3Add)
    h3Add.innerHTML= input.value+ " -"



    if (input.value=== "Hey"){
        sender("how are you?")
    }else if(input.value=== "Hi"){
        sender("Wazzup")
    }else if(input.value==="Im good nd you"){
        sender("Im also good. what do you need me to do?")

    }else if(input.value==="Im good" || input.value==="im good"){
        sender("thats nice. Iv been working all day")
    }else if(input.value==="Why"){
        sender("Its all because of you")
    }else if(input.value==="Im sorry"){
        sender("Thank you")
    }else if(input.value==="Have you eaten"){
        sender("No, But I'll eat later")
    }else if(input.value==="ok"){
        sender("Yh thanks")
        sender("ill be done in two weeks time")
    }else if(input.value==="Wow i cant wait"){
        sender("Yh you wil really be amazed")
    }else if(input.value==="Can i see the picture"){
        sender("Not now im busy")
    }else if(input.value==="What is the name of the app"){
        sender("IT-Meet")
    }else if(input.value==="Who owns the app"){
        sender("Solutech and Abdulazeez")
    }else if(input.value==="I need a car"){
        sender("check this carit website")
    }else if(input.value==="Im sleepy "){
        sender("Ok we will talk later")
    }else if(input.value==="Thunder fire you"){
        sender("have i done anything wrong")
    }else if(input.value==="Yes"){
        sender("ok")
    }else if(input.value==="No"){
        sender("ok")
    }else if(input.value==="Do you games"){
        sender("Yes my fav game is Gta V")
    }else if(input.value==="Give me a joke"){
        sender("Theo no fit loss.......... Daniel is the shortest..........Go nd sleep")
    }else if(input.value==="GTA V"){
        sender("Rockstar")
    }else if(input.value==="Lets play a game"){
        sender("No im busy")
    }else if(input.value==="I love you"){
        sender("I hate you")
    }else if(input.value==="juice world is gone"){
        sender("Ok, I pray God forgive him of his sins . LOL")
    }else if(input.value==="Gist me"){
        sender("The good people are the ones that die fast")
    }else if(input.value==="What do you want"){
        sender("hmm.....")
        sender("I want $9999999999999999999999 is what i want")
    }else if(input.value==="When you are done call me"){
        sender("Idont have your number")
    }else if(input.value===" Take "){
        sender("what")
    }else if(input.value==="Where do you live"){
        sender("Why do you wanna Know")
    }else if(input.value==="Something"){
        sender("fishy")
        sender("Its by Davido")

    }else{
        sender("Im busy, we will talk Later.")
    }
})

        
// variable
var backBtn= document.querySelector(".Back");

backBtn.addEventListener("click", function(){
    window.history.back()
})



//PageLinking
// pageLinking(accountBtn, "Account.html")





























            // Functions

//page linker
function pageLinking(button, locate){
    button.addEventListener("click",function(){
        window.location.href=locate
    })
}



// sender work
function sender(theWord){
    input.value.innerHTML=""

    setTimeout(function(){
        var h3Add= document.createElement("h3");
    h3Add.className= "sender";
    chattingDiv.appendChild(h3Add)
    h3Add.innerHTML= "- "+ theWord

    }, 1500);
}