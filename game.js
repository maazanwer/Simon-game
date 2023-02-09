// var gamepattern = []
// var clickedcolor = []
// var color = ["red", "blue", "green", "yellow"];
// var box = [];
// // (1) THE FIRST STEP IS THE KEYDOWN AS IT STARTS THE WHOLE PROCESS.....
// $(document).keydown(function(event) {
//   var started = event.key
//   box.push(started)
//   if (box.length === 1) {
//     nextsequence()
//   } else {}
// })
//
//
// function checkAnswer(currentlevel) {
//   if (gamepattern[currentlevel] === clickedcolor[currentlevel]) {
//     console.log("success");
//     if (gamepattern.length === clickedcolor.length) {
//       setTimeout(function() {
//         nextsequence()
//       }, 1000);
//
//     }
//   } else {
//     console.log("wrong");
//     $("#level-title").text("Game Over, Press Any Key to Restart")
//     playSound("wrong");
//     $("body").addClass("game-over")
//     setTimeout(function() {
//       $("body").removeClass("game-over")
//     }, 200)
//
// startOver()
//   }
//
// }
//
// function startOver() {
//   box = [];
//   gamepattern = [];
//   no = 1;
// }
//
// var no = 1
// // (2) THE SECOND STEP START AS IT GIVES A RANDOM VALUE AND SENDS IT TOWARDS THE EMPTY ARRAY MADE ABOVE
// function nextsequence() {
//   clickedcolor = []
//   $("#level-title").text("Level " + no++)
//   var random = Math.round(Math.random() * 3);
//   var chosencolor = color[random];
//   gamepattern.push(chosencolor);
//   $("#" + chosencolor).fadeOut(100).fadeIn(50)
//   playSound(chosencolor)
//
// }
//
//
// $(".btn").click(function() {
//   var currentColor = this.id
//   clickedcolor.push(currentColor)
//   animatePress(currentColor)
//   playSound(currentColor)
//   checkAnswer(clickedcolor.length - 1)
// })
//
//
//
// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed")
//   setTimeout(function() {
//     $("#" + currentColor).removeClass("pressed")
//   }, 100)
// }
//
// function playSound(currentColor) {
//   var audio1 = new Audio("sounds/" + currentColor + ".mp3");
//   audio1.play();
// }
var color = ["green", "red", "yellow", "blue"]
var gamepattern = []
var userpattern = []

var started = false;
$(document).keydown(function(){
  if (!started){
    nextsequence();
    started = true;
  }
})

no = 1
function nextsequence(){
  userpattern = []
  var math = Math.round(Math.random() * 3);
 var colorchosen = color[math];
$("#level-title").text("level " + no++ )
 $("#" + colorchosen).fadeOut(50).fadeIn(50);
 gamepattern.push(colorchosen)
sound(colorchosen);
}

$(".btn").click(function(){
  var id = $(this).attr("id")
  userpattern.push(id);
  animation(id)
  sound(id)
  checkAnswer(userpattern.length-1)
})

function checkAnswer(index){
  if (gamepattern[index] === userpattern[index]) {
    console.log("success");
    if (gamepattern.length === userpattern.length){
      setTimeout(function(){
      nextsequence()}, 1000);

    }
  } else {console.log("wrong")
$("#level-title").text("Game Over, Press any key to Restart")
startOver();

  }
}
function animation(id){
  $("#" + id).addClass("pressed");
  setTimeout(function(){
    $("#" + id).removeClass("pressed")
  }, 200);
}
function sound(id){
 var audio = new Audio("sounds/" + id + ".mp3");
 audio.play();
}
function startOver(){
  gamepattern = [];
  started = false;
no = 1
}
