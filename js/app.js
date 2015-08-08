// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //Sets a random start place for each Enemy so that they are spaced evenly
    this.x = Math.random()*2000 - 1500;
    //Sets a random path for the Enemy so that the enemies can travel side by side
    this.y = 40 + Math.random()*200;
    this.speed = Math.random()*100;

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    //Resets the Player's position in the event of a collision
    if(Math.abs(player.x - this.x) < 30 && Math.abs(player.y - this.y < 30)){
        player.reset();
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Hero sprite that the player controls
var playerObject = function() {
    this.hero = 'images/char-boy.png';
    //Starting place for hero sprite
    this.x = 205;
    this.y = 405;
}

playerObject.prototype.update = function(){
    //Update position based on event listeners

}

//Draw the hero sprite on the board
playerObject.prototype.render = function() {
    ctx.drawImage(Resources.get(this.hero), this.x, this.y);
}


//Sends the hero sprite back to the start place, resetting the game
playerObject.prototype.reset = function() {
    this.x = 205;
    this.y = 405;
}

playerObject.prototype.handleInput= function(allowedKeys) {
    //If the Left arrow key is pressed, move the hero sprite to the next tile to the left
    if(allowedKeys == 'left') {
        this.x = this.x - 101;
        //But not off the board
        if(this.x < 2) {
            this.x = this.x + 101;
        }
    }
    if(allowedKeys == 'right') {
        this.x = this.x + 101;
        if(this.x > 505) {
            this.x = this.x - 101;
        }
    }
    if(allowedKeys == 'down') {
        this.y = this.y + 83;
        if(this.y > 475) {
            this.y = this.y - 83;
        }
    }
    if(allowedKeys == 'up') {
        this.y = this.y - 83;
    }
    //If the hero sprite gets to the water, reset the game and announce that the player has won.
    if(this.y < 50) { 
        this.reset();
        alert("You won!");
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

//Create 50 enemies
for(var i = 0; i < 50; i++) { 
    allEnemies.push(new Enemy());
}


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
