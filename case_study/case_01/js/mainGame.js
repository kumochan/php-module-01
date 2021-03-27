const canvas = document.getElementById("myCanvas");
canvas.width = 800;
canvas.height = 500;
const ctx =canvas.getContext('2d');

const key = [];
const imagesPlayer = new Image();
imagesPlayer.src = 'img/death.png';
const characterActions = ['up', 'right', 'left', 'down'];
const numberOfCharacters = 1;
const characters = [];



//main player
class Player {
    constructor(x, y , width, height, frameX, frameY, speed, moving) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.frameY = frameY;
        this.speed = speed;
        this.moving = moving;
    }
}

let player = new Player(200, 200, 32, 48, 0, 0, 1, false);

let fire__0 = new Player(200, 200, 32, 48, 0, 0, 1, false);

//player image
const playerImg = new Image();
playerImg.src = "img/rome.png";

//background image
const background = new Image();
background.src = "img/Brick_04.png";

const fire_0 = new Image();
fire_0.src = "img/sword0.png";

function drawFire(x,y) {
    ctx.drawImage(fire_0, 0, 0, 114, 335, 100, x, y, 40);
}



function draw() {
  var ctx = document.getElementById('myCanvas').getContext('2d');
  var img = new Image();
  img.src = fire_0;
  //ctx.drawImage(img, 0, 0);
  ctx.drawImage(img, 0, 0, 114, 335, 500, 300, 250, 40);
    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(70, 66);
    // ctx.lineTo(103, 76);
    // ctx.lineTo(170, 15);
    // ctx.stroke();
  //img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
};


function moveFire(img){
  this.moveRight = function(){
    ctx.drawImage(fire_0, 0, 0, 114, 335, 200, 200, 30, 40);
  }
};

// Tao doi tuong cua class
var hero = new moveFire(fire_0);

// Ham start de bat dau di chuyen anh
function start(hero){
  console.log(hero);
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  // document.getElementById(id).innerHTML = hero.getHeroElement();
  
}
//start(hero);
setInterval(function() {
    //start(hero);
  }, 500);


//====



function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    //drawSprite(playerImg, player.width * player.frameX, player.height * player.frameY, player.width, player.height,player.x ,player.y, player.width, player.height);
//drawSprite(fire__0, fire__0.width * fire__0.frameX, fire__0.height * fire__0.frameY, fire__0.width, fire__0.height,fire__0.x ,fire__0.y, fire__0.width, fire__0.height);
    drawFire(100, 20);
    drawFire(300, 20);


    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    requestAnimationFrame(animate); //callback animate() again and again
}

animate();



//function draw image for all character
// function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
//     ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
// }

//Score
let count = 0;

//skill player
const fire0 = new Image();
fire0.src = "img/sword0.png";




//===============




window.addEventListener('keydown', function (e){
    key[e.keyCode] = true;
    player.moving = true;
    movePlayer();
});


function movePlayer(){
    if(key[38] && player.y > 0){
        player.y -= player.speed;
        player.frameY = 3;
    } else if(key[39] && player.x + player.width < canvas.width){
        player.x += player.speed;
        player.frameY = 2;
    } else if(key[40] && player.y + player.height < canvas.height){
        player.y += player.speed;
        player.frameY = 0;
    } else if(key[37] && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1;
    } else if(key[32]){
        
    }

};

//===========





