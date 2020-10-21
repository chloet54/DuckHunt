

var container = document.querySelector('#container');
var movingduck = document.querySelector('.Canard');
var speed = 70;
movingduck.style.top = '0px';
movingduck.style.left = '0px';



document.addEventListener('keydown', (event) => {
  var top = parseInt(movingduck.style.top);
  var left = parseInt(movingduck.style.left);

  if (event.key == 'ArrowRight') {
    if(left < 770) {
      left += speed; //left = left + speed
    }
  }
  if (event.key == 'ArrowLeft') {
    if(left > 0) {
      left -= speed; 
    }
  }
  if (event.key == 'ArrowDown') {
    if(top < 560) {
      top += speed; 
    }
  }
  if (event.key == 'ArrowUp') {
    if (top > 0) {
      top -= speed;
    }
  }

  movingduck.style.left = left + 'px';
  movingduck.style.top = top + 'px';
});


var timeHTML = document.querySelector('#time') //span
var huntHTML = document.querySelector('#hunt'); //span
var Canard = document.querySelector('.Canard'); //image
var duckHTML = document.querySelector('#duck'); //span


Canard.addEventListener('click', hunt);

//chasseur

var scoreHunt = 0;

function hunt(){
    scoreHunt ++;
    huntHTML.innerText = scoreHunt;
}

// canard

var scoreDuck = 0;

function duck(){
    scoreDuck ++;
    duckHTML.innerText = scoreDuck;
}

//temps

var intervalleTest = setInterval(chrono, 1000);
var intervalDuck10s = setInterval(duck, 10000);


var time = 0;

function chrono(){
    time++;
    timeHTML.innerText = time;
}

var stop = setTimeout(finish, 120000);

function finish(){
    clearInterval(intervalleTest);
    clearInterval(intervalDuck10s);
    Canard.removeEventListener('click', hunt);

}