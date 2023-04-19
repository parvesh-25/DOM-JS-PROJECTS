var numberOfButtons= document.querySelectorAll(".drum").length;
// Looping to get all button
for(var i = 0; i<numberOfButtons; i++ ){
// addeventListener need 2 param: event, and the function order
//  kita menggunakan anon function krn jika function biasa akan berbeda ketika kita panggil

// Detecting Button press
document.querySelectorAll(".drum")[i].addEventListener('click',function(){
    // use switch 
    var buttonInnerHTML = this.innerHTML;
    //  param key di makeSound kit isi dgn buttonInnerhtml
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
});
}

// Detecting Keyboard press
// event untuk memberitahu apa event yg terjadi, trmsk keyboard mana yg diklik
document.addEventListener('keypress',function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})


// buat fungsi utk memberi param ke switch, param key bisa dari keyboard / button
function makeSound(key){
    switch(key){
        // jika case = w, maka mainkan tom-1. klo sudh bukan w maka break
        case "w": var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "a":var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "d":var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "j":var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

        case "k":var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;

        case "l":var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
        
        //default bekerja seperti else, jika tidak ada kondisi yg terpenuhi
        default:
            console.log(buttonInnerHTML)
            ;
    }
}


// For animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    // memberi nama class tambahan ke activeButton supaya dpt akses ke css
    activeButton.classList.add("pressed")

    // beri batas waktu animasi, 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}