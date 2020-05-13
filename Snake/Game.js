"use strict";
var Snake;
(function (Snake) {
    var f = FudgeCore;
    class Game extends f.Node {
        constructor() {
            super("Game");
            console.log("Creating Game");
            this.createStuff();
        }
        createStuff() {
            let game = new f.Node("Game");
            this.snake = new Snake.Snake();
            this.food = new Snake.Food();
            game.appendChild(this.snake);
            game.appendChild(this.food);
        }
    }
    Snake.Game = Game;
})(Snake || (Snake = {}));
//# sourceMappingURL=Game.js.map