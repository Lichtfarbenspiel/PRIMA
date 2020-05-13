"use strict";
// namespace Snake {
//     import f = FudgeCore;
//     window.addEventListener("load", hndLoad);
//     export let viewport: f.Viewport;
//     // let game: Game;
//     let snake: Snake;
//     let food: Food;
//     function hndLoad(_event: Event): void {
//         const canvas: HTMLCanvasElement = document.querySelector("canvas");
//         f.Debug.log(canvas);
//         let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
//         cmpCamera.pivot.translateZ(50);
//         cmpCamera.pivot.rotateY(180);
//         let game: f.Node = createGame();
//         viewport = new f.Viewport();
//         viewport.initialize("Viewport", game, cmpCamera, canvas);
//         document.addEventListener("keydown", hndControls);
//         f.Debug.log(viewport);
//         f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
//         f.Loop.start(f.LOOP_MODE.TIME_REAL, 5);
//     }
//     function update(_event: f.Eventƒ): void {
//         viewport.draw();
//         snake.move();
//         console.log("Loop running!");
//     }
//     function hndControls(_event: KeyboardEvent): void {
//         switch (_event.code) {
//             case f.KEYBOARD_CODE.ARROW_UP:
//                 snake.direction = f.Vector3.Y();
//                 break;
//             case f.KEYBOARD_CODE.ARROW_RIGHT:
//                 snake.direction = f.Vector3.X();
//                 break;
//             case f.KEYBOARD_CODE.ARROW_DOWN: 
//                 snake.direction = f.Vector3.Y(-1);
//                 break;
//             case f.KEYBOARD_CODE.ARROW_LEFT:
//                 snake.direction = f.Vector3.X(-1);
//                 break;
//         }
//     }
//     function createGame(): f.Node {
//         let game: f.Node = new f.Node("Game");
//         snake = new Snake();
//         food = new Food();
//         game.appendChild(food);
//         game.appendChild(snake);
//         return game;
//     }
// }
//# sourceMappingURL=Main.js.map