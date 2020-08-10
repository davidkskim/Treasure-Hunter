// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml3 .letter',
  opacity: [0,1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i+1)
}).add({
  targets: '.ml3',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

var rainbow = Math.floor(Math.random() * 25);
var bomb = Math.floor(Math.random() * 25);
while (rainbow === bomb) {
  bomb = Math.floor(Math.random() * 25)
}
console.log(rainbow, bomb);

var count = 0;
const treasure = (location) => {
  var counter = count++
  document.getElementById("counter").innerHTML = "# of turns: " + count;
  console.log(count);
  if (location == rainbow){
    //WINNING CONDITION!
    document.getElementById(location).innerHTML = '<img src="https://lh3.googleusercontent.com/proxy/MYo3f8syuywSTPhmKF5lOhYqSHflF_bhI6l8JQJ1Gte59LtvK3sGyKp3_kJJrz6w-Yp0Z8s99bykgfgR5iol9PzWHYpx5ppfRum9uqG9EwxcTVG4MisE6Pb_hrD_MRBEWjQcBN6vySSOyfo" width="104px" height="104px">'
    document.getElementById("gameBoard").style.pointerEvents = "none";
    setTimeout(function () {
      alert("You're rich!");
    }, 500);
  }
  //LOSING CONDITION
  else if (location == bomb){
    document.getElementById(location).innerHTML = '<img src="https://cdn.pixabay.com/photo/2017/01/31/19/15/octopus-2026573_960_720.png" width="104px" height="104px">'
    document.getElementById("gameBoard").style.pointerEvents = "none";
    setTimeout(function () {
      alert("You died!");
    }, 500);
  }
  //NEUTRAL CONDITION
  else {
    document.getElementById(location).innerHTML = '<img src="https://pngimg.com/uploads/sand/sand_PNG43.png" width="104px" height="104px">'
    document.getElementById(location).style.pointerEvents = "none";
    if (counter == 14){
      document.getElementById("gameBoard").style.pointerEvents = "none";
      setTimeout(function () {
        alert("You've run out of turns!");
      }, 500);
    }
  }
}
