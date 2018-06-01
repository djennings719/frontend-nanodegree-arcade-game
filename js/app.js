// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var lane = Math.random() * 3;
    var x = 25 + Math.random() * 420;
    var y = 75 + Math.random() * 150;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.getX = function(){
        return x;
    }

    this.setX = function(newX){
        this.x = newX;
    }

    this.getY = function(){
        return y;
    }

    this.setY = function(newY){
        this.y = newY;
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.setX(this.getX() + this.getX() * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    //console.log("render enemy... " + this.getX() + " " + this.getY() );
    ctx.drawImage(Resources.get(this.sprite), this.getX(), this.getY());
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    var x = 210;
    var y = 400;

    this.sprite = 'images/char-boy.png'

    this.getX = function(){
        return x;
    }

    this.setX = function(newX){
        this.x = newX;
    }

    this.getY = function(){
        return y;
    }

    this.setY = function(newY){
        this.y = newY;
    }
}

Player.prototype.update = function(){

}

Player.prototype.render = function(){
    //console.log("render player... " + this.getX() + " " + this.getY() );
    ctx.drawImage(Resources.get(this.sprite), this.getX(), this.getY());
}

Player.prototype.handleInput = function(){
    //check to make sure we are not going off the screen to the left or right

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
