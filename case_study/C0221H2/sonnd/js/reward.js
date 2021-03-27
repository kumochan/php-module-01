const fire = new Image();
fire.src = "img/chest.png";

// Score
var count = 0;

// gift_type
var gift_type = 1;

class Reward {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 50;
        this.height = 50;
    }

    draw(){
        this.drawByScore();
    }

    drawByScore(){
        if(count<10) {
            this.drawGift_1();
        } else if(count >= 10 && count <20) {
            this.drawGift_2();
        } else if(count >= 20 && count <30) {
            this.drawGift_3();
        } else if(count > 30) {
            this.drawGift_4();
        }
    }



    drawGift_1() {
        // hom go thuong
            drawSprite(fire, 0, 0, 118, 118, this.x, this.y, this.width, this.height);
    }

    drawGift_2() {
        // hom tim
            drawSprite(fire, 118, 0, 118, 118, this.x, this.y, this.width, this.height);
    }

    drawGift_3() {
        // hom bang bo
            drawSprite(fire, 0, 118, 118, 118, this.x, this.y, this.width, this.height);
    }

    drawGift_4() {
        // hom xanh
            drawSprite(fire, 118, 118, 118, 118, this.x, this.y, this.width, this.height);
    }

}