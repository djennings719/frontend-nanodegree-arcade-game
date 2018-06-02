// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.laneY = Math.random() * 3;

    this.jumpX = 20 + Math.random() * 50;

    this.minX = -90;

    this.x = this.minX;
    this.y = 85 * this.laneY;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers
    this.x += this.jumpX * dt;
    if(this.x > 505){
        this.x = this.minX;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    //console.log("render enemy... " + this.getX() + " " + this.getY() );
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.x = 210;
    this.y = 400;

    this.minX = 100;
    this.minY = 50;

    this.maxX = 405;
    this.maxY = 400;

    this.horizontalJump = 100;
    this.verticalJump = 85;

    this.moveHorizontal = 0;
    this.moveVertical = 0;

    this.sprite = 'images/char-boy.png'
}

Player.prototype.update = function(){
    if(this.moveHorizontal != 0){
        this.x += this.horizontalJump * this.moveHorizontal;
        this.moveHorizontal = 0;
    }
    else if(this.moveVertical != 0){
        this.y += this.verticalJump * this.moveVertical;
        this.moveVertical = 0;
    }
}

Player.prototype.render = function(){
    //console.log("render player... " + this.getX() + " " + this.getY() );
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(){
    //check to make sure we are not going off the screen to the left or right
    if(event.keyCode === 37){
        console.log("left");
        if(this.x > this.minX) {
            this.moveHorizontal = -1;
            this.moveVertical = 0;
            this.update();
        }
    }
    else if(event.keyCode === 38){
        console.log("up");
        if(this.y > this.minY) {
            this.moveHorizontal = 0;
            this.moveVertical = -1;
            this.update();
        }
    }
    else if(event.keyCode === 39){
        console.log("right");
        if(this.x < this.maxX) {
            this.moveHorizontal = 1;
            this.moveVertical = 0;
            this.update();
        }
    }
    else if(event.keyCode === 40){
        console.log("down");
        if(this.y < this.maxY) {
            this.moveHorizontal = 0;
            this.moveVertical = 1;
            this.update();
        }
    }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
