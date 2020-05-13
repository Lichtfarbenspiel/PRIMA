namespace Snake {

    import f = FudgeCore;

    export class Game extends f.Node {

        public snake: Snake;
        public food: Food;
        

        constructor() {
            super("Game");
            console.log("Creating Game");
            this.createStuff();
        }

        public createStuff(): void {
            let game: f.Node = new f.Node("Game");
            this.snake = new Snake();
            this.food = new Food();

            game.appendChild(this.snake);
            game.appendChild(this.food);
        }
    }   
}