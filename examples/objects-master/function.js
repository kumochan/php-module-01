// var objectName = { property1:value1, property2:value2 };

// Khai bao class
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
var hero = new Hero('pikachu.png', 20, 30, 200);
var hero_2 = new Hero('doraemon.png', 50, 200, 200);

// Ham start de bat dau di chuyen anh
function start(hero, id){
  //console.log(hero);
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  document.getElementById(id).innerHTML = hero.getHeroElement();
  // setTimeout(start, 500);
  
}

setInterval(function() {
    start(hero, 'game');
    start(hero_2,'doraemon');
  }, 500);

//=========
const canvass = document.getElementById('myCanvas');
const ctx2 = canvas.getContext('2d');

const img_demo = new Image();
img_demo.src = "img/sword0.png";
img_demo.addEventListener('load', e => {
  ctx2.drawImage(img_demo, 33, 71, 104, 124, 21, 20, 87, 104);
});
//=========
