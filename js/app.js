//dimentions
const width = 400;
const height = 400;

// Enemies our player must avoid
var Enemy = function(x,y) {
     // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x; 
    this.y = y ;
    this.speed = Math.floor(Math.random()*200);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
 
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    //if enemy reach end of canvas go back to start
    if (this.x>=400) {
        this.x=-5;
    } 
    else {
      this.x= this.x +this.speed*dt;
    }  
};

//function to check Collisions
Enemy.prototype.checkCollisions=function(){
    let enemyXleft=this.x-70;
    let enemyXRight=this.x+70;
    let enemyYTop=this.y-60;
    let enemyYBottom=this.y+60;
    if(player.x>enemyXleft&&player.x<enemyXRight
        &&player.y<enemyYBottom&&player.y>enemyYTop){
        player.x=200;
        player.y=400;
    }
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Player Class
var Player = function() {
     this.x= 200;
     this.y= 400;
     this.sprite ='images/char-horn-girl.png';
    ;
 
};
// Update the player position
Player.prototype.update = function() {
    this.x=this.x;
    this.y=this.y; 
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//functon to handle Input from player
Player.prototype.handleInput = function(key){
    x=this.x;
    y=this.y;
    let RightM,LeftMove,UpMove,DownMove,theunneeded,theunneededY;
    // if player press the left arrow it moves to left
    if(key=="left"){
        LeftMove= this.x= x-25;
        if (LeftMove<0){
            this.x= this.x+25;

        }
    }
    // if player press the right arrow it moves to right
    else if (key=="right"){
        RightM= this.x=x+25;
        if(RightM>=width){
            theunneeded=RightM-width;
            this.x= this.x-theunneeded;            
        }
    }
    // if player press the up arrow it moves up
    else if (key=="up"){
       UpMove = this.y= y-25;
        if(UpMove<0){
           
            this.y=400;
            Swal.fire(
               'Great Job , You Won!'
              );
        }

    }
    // if player press the down arrow it moves down
    else if ( key =='down'){
        DownMove= this.y= y+25;
        if(DownMove>=height){
            theunneededY = DownMove-height;
            this.y= this.y-theunneededY;
        }
    }

    //resetting the player position
    Player.prototype.reset = function(){
        this.x = 200;
        this.y = 400;

  }
}
//Player Object
let player = new Player(200,400);

let allEnemies = [
    new Enemy(0, 40),
    new Enemy(600, 120),
    new Enemy(500, 220)
];

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});