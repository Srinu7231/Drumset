var arr = ['crash.mp3','kick-bass.mp3','snare.mp3','tom-1.mp3','tom-2.mp3','tom-3.mp3','tom-4.mp3']
for (var i=0;i<7;i++){
document.querySelectorAll('.drum')[i].addEventListener('click',function (){
    var button = this.innerHTML;
    makesound(button);
    buttonAnimation(button);
});
}
    // switch (button){
    //     case 'w':
    //         var audio = new Audio('sounds/tom-1.mp3');
    //         audio.play();
    //         break;
    //     case 'a':
    //         var audio = new Audio('sounds/tom-2.mp3');
    //         audio.play();
    //         break;
    //     case 's':
    //         var audio = new Audio('sounds/tom-3.mp3');
    //         audio.play();
    //         break;
    //     case 'd':
    //         var audio = new Audio('sounds/tom-4.mp3');
    //         audio.play();
    //         break;
    //     case 'j':
    //         var audio = new Audio('sounds/kick-bass.mp3');
    //         audio.play();
    //         break;
    //     case 'k':
    //         var audio = new Audio('sounds/snare.mp3');
    //         audio.play();
    //         break;
    //     case 'l':
    //         var audio = new Audio('sounds/crash.mp3');
    //         audio.play();
    //         break;
    //     default:
    //         console.log(this);
    // }


// document.addEventListener('keypress',function (){
//     alert("Hello mister nv fool u ayipaye.......");
// });


document.addEventListener('keypress',function (event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch (key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            console.log(this);
    }
}

function buttonAnimation(Ekey){
    var druminop = document.querySelector('.'+Ekey);
    druminop.classList.add("pressed");
    setTimeout(function(){
        druminop.classList.remove('pressed');},100);
    }