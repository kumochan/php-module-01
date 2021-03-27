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
    draw(){
        drawSprite(playerImg, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    }

    earnReward(player, reward){
        let x1 = player.x;
        let y1 = player.y;
        let w1 = player.width;
        let h1 = player.height;
        let x2 = reward.x;
        let y2 = reward.y;
        let w2 = reward.width;
        let h2 = reward.height;
        if (
            ((x1 + w1) >= x2 && (x1 + w1) <= (x2 + w2 + w1)) && ((y1 + h1) >= y2 && (y1 + h1) <= (y2 + h2 + h1))
        )
        {
            count ++;
            reward.x = Math.random() * (canvas.width - 100);
            reward.y = Math.random() * (canvas.height - 100);
        }
    }

    movePlayer(){
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
        }
    }

    //handle change picture player
    handlePlayerMove(character){
        if(character.frameX < 3){
            character.frameX++;
        } else{
            character.frameX = 0;
        }
    }
}

let player = new Player(200, 200, 32, 48, 0, 0, 5,false);