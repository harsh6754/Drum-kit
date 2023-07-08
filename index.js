// document.querySelector(".w").addEventListener("click",handleClick);
// handleClick() is wrong we should use handleClick only as handleClick() is the stright up call
// handleClick is just passing name it will be called when the function is needed


var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var c = this.innerHTML;
      playaudio(c);
     addAnimation(c);
    }
  )
}


function playaudio(c) {
  switch (c) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      break;
  }
}

document.addEventListener('keypress', function(c) {
  playaudio(c.key);
   addAnimation(c.key);
});

function addAnimation(key){

  var activeButton = document.querySelector("." + Key);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => button.addEventListener("click", () => {
//     alert("You clicked me");
// }));
// var audio = new Audio('sounds/tom-3.mp3');
// audio.play();
