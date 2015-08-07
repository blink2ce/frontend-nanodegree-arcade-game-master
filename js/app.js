// Enemies our player must avoid
var Enemy = function(lineHeight) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = lineHeight;
    this.speed = Math.random()*500;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if(Math.abs(player.x - this.x) < 15 && Math.abs(player.y - this.y < 15)){
        player.reset();
    }
}



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var playerObject = function(){
    this.hero = 'images/char-boy.png';
    this.x = 205;
    this.y = 405;
}

playerObject.prototype.update = function(){
    //Update position based on event listeners

}

playerObject.prototype.render = function() {
    ctx.drawImage(Resources.get(this.hero), this.x, this.y);
}

playerObject.prototype.reset = function(){
    this.x = 205;
    this.y = 405;
}

playerObject.prototype.handleInput= function(allowedKeys){
    if(allowedKeys == 'left'){
        this.x = this.x - 101;
        if(this.x < 2){
            this.x = this.x + 101;
        }
    }
    if(allowedKeys == 'right'){
        this.x = this.x + 101;
        if(this.x > 505){
            this.x = this.x - 101;
        }
    }
    if(allowedKeys == 'down'){
        this.y = this.y + 83;
        if(this.y > 475){
            this.y = this.y - 83;
        }
    }
    if(allowedKeys == 'up'){
        this.y = this.y - 83;
    }
    if(this.y < 50){
        this.reset();
        alert("You won!");
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(60), new Enemy(143), new Enemy(226)];
var player = new playerObject;


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
