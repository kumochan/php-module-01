let pause = true
const text = document.querySelector('b')
text.addEventListener('click',(e) =>{
    e.target.parentElement.parentElement.style.display = 'none';
    pause  = false;
})

//player image
const playerImg = new Image();
playerImg.src = "img/rome.png";

var limitLength;

//background image
const background = new Image();
background.src = "img/Brick_04.png";

//function draw image for all character
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
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
        pause = true;
        document.querySelector('#end').style.display = 'flex';
        document.querySelector('#result').innerHTML = `GAME OVER<br>Your score is ${count}`;
        document.getElementById('saveScore').addEventListener('click', function (){
            let name = document.getElementById('name').value;
            scoreArray.push([name,count]);
            console.log(scoreArray)
            localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
        });
    }
}

function drawDeath(count){
    switch (count){
        case 0: limitLength = 3;
            break;
        case 10: limitLength = 8;
            break;
        case 20: limitLength = 16;
            break;
        case 30: limitLength = 32;
            break;
    }
}

function drawScore(count){
    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('Score: ' + count, 10, 50);
}

let scoreArray;
window.onload = function (){
    if (localStorage.getItem("scoreArray") === null) {
        scoreArray = [];
    } else {
        scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
    }
}

const reward = new Reward();
const reward_gift = new Reward();
var characters = new Character();
var arrDeath = characters.pushCharactor(100);


function animate(){
    if(!pause) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        player.draw();
        player.movePlayer();
        player.handlePlayerMove(player);

        drawDeath(count);

        for (let i = 0; i < limitLength; i++) {
            if (count % 5 == 0 && count != 0) {
                arrDeath[i].draw(false);
                arrDeath[i].updateSpeed(4);
            } else if (count % 15 == 0 && count != 0) {
                arrDeath[i].draw(false);
                arrDeath[i].updateSpeed(7);
            }
            else {
                arrDeath[i].draw(true);
                arrDeath[i].updateSpeed(2);
            }
            
            arrDeath[i].update();
            checkLose(player, arrDeath[i]);
        }


        reward.draw();
        player.earnReward(player, reward);
        drawScore(count);
    }
    requestAnimationFrame(animate);
}

animate();


