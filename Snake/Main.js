"use strict";
var Snake;
(function (Snake) {
    var f = FudgeCore;
    window.addEventListener("load", hndLoad);
    // let game: Game;
    let snake;
    let food;
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        f.Debug.log(canvas);
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(60);
        cmpCamera.pivot.translateY(10);
        cmpCamera.pivot.rotateX(-10);
        cmpCamera.pivot.rotateY(170);
        let game = createGame();
        Snake.viewport = new f.Viewport();
        Snake.viewport.initialize("Viewport", game, cmpCamera, canvas);
        document.addEventListener("keydown", hndControls);
        f.Debug.log(Snake.viewport);
        f.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        f.Loop.start(f.LOOP_MODE.TIME_REAL, 5);
    }
    function update(_event) {
        Snake.viewport.draw();
        snake.move();
        console.log("Loop running!");
    }
    function hndControls(_event) {
        switch (_event.code) {
            case f.KEYBOARD_CODE.ARROW_UP:
                snake.direction = f.Vector3.Y();
                break;
            case f.KEYBOARD_CODE.ARROW_DOWN:
                snake.direction = f.Vector3.Y(-1);
                break;
            case f.KEYBOARD_CODE.A:
            case f.KEYBOARD_CODE.ARROW_LEFT:
                snake.direction = f.Vector3.X(-1);
                break;
            case f.KEYBOARD_CODE.D:
            case f.KEYBOARD_CODE.ARROW_RIGHT:
                snake.direction = f.Vector3.X();
                break;
            case f.KEYBOARD_CODE.S:
                snake.direction = f.Vector3.Z();
                break;
            case f.KEYBOARD_CODE.W:
                snake.direction = f.Vector3.Z(-1);
                break;
        }
    }
    function createGame() {
        let game = new f.Node("Game");
        snake = new Snake.Snake();
        food = new Snake.Food();
        game.appendChild(food);
        game.appendChild(snake);
        return game;
    }
})(Snake || (Snake = {}));
//# sourceMappingURL=Main.js.map