//keydown event
//used function argument to get which letter is pressed on the keyboard
//and pass the value to two functions , 1st for sound and 2nd for animation
document.addEventListener("keydown", function(eve){
    var keypress = eve.key;
    console.log(keypress);
    sound(keypress);
    animate(keypress);
})

//click event
//used inside a loop because we have to account which button from a group of buttons is pressed
//with query sellectorall , we can use index of [i] from loop the get which button from a group/list of buttons is pressed
//using this.html , we know the text value of the button pressed and now can operate it in the same way as with the keyborad
var i = 0;
while( i<= (document.querySelectorAll(".button").length)){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var mousepress = this.innerHTML;
        sound(mousepress);
        animate(mousepress);
    })
    i+=1;
}

//for sound , used switch case to get the audio to match with the respective key
function sound(arg){
    switch(arg){
        case "z":
            var audioz = new Audio("./sounds/tom-1.mp3");
            audioz.play();
            break;
        case "x":
            var audiox = new Audio("./sounds/tom-2.mp3");
            audiox.play();
            break;
        case "c":
            var audioc = new Audio("./sounds/tom-3.mp3");
            audioc.play();
            break;
        case "v":
            var audiov = new Audio("./sounds/tom-4.mp3");
            audiov.play();
            break;
        case "b":
            var audiob = new Audio("./sounds/crash.mp3");
            audiob.play();
            break;
        case "n":
            var audion = new Audio("./sounds/kick-bass.mp3");
            audion.play();
            break;
        case "m":
            var audiom = new Audio("./sounds/snare.mp3");
            audiom.play();
            break;
        default:
            console.log();
    }
}

//jus added a class with different properties when a value in this function is passed
//settimeout() used to revert or remove the class after some time
//this funtion uses two arguments , 1st is the actual function to be executed in the condition and 2nd is the time interval
function animate(arg){
    document.querySelector("." + arg).classList.add("buttonpressed");
    setTimeout(function(){
        document.querySelector("." + arg).classList.remove("buttonpressed");
    }, 100)
}