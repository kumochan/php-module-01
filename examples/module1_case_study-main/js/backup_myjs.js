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

class Character {
    constructor() {
        this.width = 32;
        this.height = 48;
        this.frameX = 2;
        this.minFrame = 0;
        this.x = Math.random() * canvas.width - this.width;
        this.y = Math.random() * canvas.height - this.height;
        this.speed = 1;
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
        if (this.action === 'up') {
            this.frameY = 3;
            this.minFrame = 0;
            this.maxFrame = 4;
        } else if (this.action === 'right') {
            this.frameY = 2;
            this.minFrame = 0;
            this.maxFrame = 4;
        } else if (this.action === 'left') {
            this.frameY = 1;
            this.minFrame = 0;
            this.maxFrame = 4;
        } else if (this.action === 'down') {
            this.frameY = 0;
            this.minFrame = 0;
            this.maxFrame = 4;
        }
    }
    draw() {
        drawSprite(imagesPlayer, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update(){
        if (this.action === 'up') {
            if (this.y < 0 - (this.height * 5)) {
                this.y = canvas.height + this.height;
                this.x = Math.random() * canvas.width;
            } else {
                this.y -= this.speed;
            }
        } else if (this.action === 'right') {
            if (this.x > canvas.width + (this.width * 5)) {
                this.x = 0 - this.width;
                this.y = Math.random() * canvas.height;
            } else {
                this.x += this.speed;
            }
        } else if (this.action === 'down') {
            if (this.y > canvas.height + (this.height * 5)) {
                this.y = 0 - this.height;
                this.x = Math.random() * canvas.width;
            } else {
                this.y += this.speed;
            }
        }
        else if (this.action === 'left') {
            if(this.x< 0 - (this.width * 5)){
                this.x = canvas.width + this.width;
                this.y = Math.random() * canvas.height;
            } else {
                this.x -= this.speed;
            }
        }
    }
}
for (i = 0; i < numberOfCharacters; i++){
    characters.push(new Character());
}

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

let player = new Player(200, 200, 32, 48, 0, 0, 1,false);

//player image
const playerImg = new Image();
playerImg.src = "img/rome.png";

//background image
const background = new Image();
background.src = "img/Brick_04.png";

//function draw image for all character
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//Score
let count = 0;

//skill player
const fire0 = new Image();
fire0.src = "img/sword0.png";
// const fire1 = new Image();
// fire0.src = "img/sword1.png";
// const fire2 = new Image();
// fire0.src = "img/sword2.png";
// const fire3 = new Image();
// fire0.src = "img/sword3.png";
// const sword0 = new Player(player.x, player.y, 30, 40, 0, 0, 1,false);
// function skillEffect(skill,player){
//     if(player.frameY === 0){
//         drawSprite(fire0, 0, 0, 114, 335,player.x ,player.y, 30, 40);
//
//         skill.y += skill.speed;
//     } else if (player.frameY === 1){
//         drawSprite(fire1, 0, 0, 114, 335,player.x ,player.y, 30, 40);
//     } else if (player.frameY === 2){
//         drawSprite(fire2, 0, 0, 114, 335,player.x ,player.y, 30, 40);
//     } else if (player.frameY === 3){
//         drawSprite(fire3, 0, 0, 114, 335,player.x ,player.y, 30, 40);
//     }
// }

class Skill {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speed = 10;
    }
    getPositionPlayer(player){
        this.x = player.x;
        this.y = player.y;
    }
    draw(player) {
        drawSprite(fire0, 0, 0, 114, 335, player.x, player.y, 30, 40);
    }

    move(){
        this.y += this.speed;
        drawSprite(fire0, 0, 0, 114, 335, this.x, this.y, 30, 40);


    }

    update() {


        // let array = [];
        // for(let i = this.y;i<canvas.height;i=i+this.speed){
        //     array.push(i);
        // }
        // // for (let i = 0;i<array.length;i++){
        // //     drawSprite(fire0, 0, 0, 114, 335, this.x, array[i], 30, 40);
        // // console.log(array[i])
        // // }
        // let count = 0;
        // let interval = setInterval(function (){
        //     drawSprite(fire0, 0, 0, 114, 335, this.x, array[count], 30, 40);
        //     console.log(array[count])
        //     if (count>array.length){
        //         clearInterval(interval);
        //     }
        //     count ++
        // },500)
    }
}




//===============



function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    drawSprite(playerImg, player.width * player.frameX, player.height * player.frameY, player.width, player.height,player.x ,player.y, player.width, player.height);

    //movePlayer();

    handlePlayerMove(player);
    for (i = 0; i < characters.length; i++ ){
        characters[i].draw();
        characters[i].update();
        checkLose(player, characters[i]);
        killEffect(player, characters[i]);
    }
    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('Score: '+ count, 10, 50);
    requestAnimationFrame(animate); //callback animate() again and again
}

animate();

window.addEventListener('keydown', function (e){
    key[e.keyCode] = true;
    player.moving = true;
    movePlayer();
});
// window.addEventListener('keyup', function (e){
//     delete key[e.keyCode];
//     player.moving = false;
// })

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
        //const skilll1 = new Skill(player.x,player.y);
        //
        // start();
        //fire(skilll1);
        // skilll1.update();
        drawSprite(fire0, 0, 0, 114, 335, 500, 500, 30, 40);

        var fire = new Fire(fire0, 20, 20);
        // drawSprite(fire0, 0, 0, 114, 335,20 ,20, 30, 40);
        // drawSprite(fire0, 0, 0, 114, 335, fire.x, fire.y, 30, 40);
        fire.draw(100, 100);
        //fire.draw(20,20);
        // console.log(fire.x);
        // fire.x = fire.getPositionFire(fire.x);
        // console.log(fire.x);
        // fire.moveFire(fire.x);
    }

};

//===========
function Hero(img, top, left, size){
  this.image = img;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.left);
  }

}

// Tao doi tuong cua class
var hero = new Hero('img/sword0.png', 20, 30, 200);

// Ham start de bat dau di chuyen anh
function start(hero, id){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  document.getElementById(id).innerHTML = hero.getHeroElement();
  // setTimeout(start, 500);
  
}

setInterval(function() {
    start(hero, 'game');
  }, 500);


//===========

// Ham start de bat dau di chuyen anh
function start(){
  drawSprite(fire0, 0, 0, 114, 335, 500, 500, 30, 40);
}

setInterval(function() {
    start();
  }, 500);

// 

function Fire(img, x, y){
    this.image = img;
    this.x = x;
    this.y = y;

    this.draw = function (x,y) {
        // console.log('go-here');
        // console.log(this.image);
        // console.log(x+"_"+y);
        drawSprite(this.image, 0, 0, 114, 335, x, y, 30, 40);
    };

    this.moveFire = function(fire){
        this.x += fire.x;
    };

    this.getPositionFire = function(x) {
        this.x += x;
        return this.x;
    };

};

// function fire(skilll1){
//     skilll1.getPositionPlayer(player);
//     skilll1.draw(player);
//     if(skilll1.y<canvas.height) {
//         console.log(skilll1.y)
//         setInterval(function() {
//             skilll1.move();
//         }, 500);
//     }
// }


//handle change picture player
function handlePlayerMove(character){
    if(character.frameX < 3){
        character.frameX++;
    } else{
        character.frameX = 0;
    }
}


//check lose
function checkLose(player, character){
    let x1, y1, w1, h1, x2, y2, w2, h2;
    x1 = player.x;
    y1 = player.y;
    h1 = player.height;
    w1 = player.width;
    x2 = character.x;
    y2 = character.y;
    h2 = character.height;
    w2 = character.width;
    if (
        ((x1 + w1) >= x2 && (x1 + w1) <= (x2 + w2 + w1)) && ((y1 + h1) >= y2 && (y1 + h1) <= (y2 + h2 + h1))
    )
    {
        console.log("you lose");
    }
}

function killEffect(weapon, character){
    let x1 = weapon.x;
    let y1 = weapon.y;
    let w1 = weapon.width;
    let h1 = weapon.height;
    let x2 = character.x;
    let y2 = character.y;
    let w2 = character.width;
    let h2 = character.height;
    if (
        ((x1 + w1) >= x2 && (x1 + w1) <= (x2 + w2 + w1)) && ((y1 + h1) >= y2 && (y1 + h1) <= (y2 + h2 + h1))
    )
    {
        count ++;
        character.x = Math.random() * canvas.width;
        character.y = Math.random() * canvas.height;
    }
}



