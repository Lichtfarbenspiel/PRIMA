namespace Snake {
    import f = FudgeCore;

    export class Food extends f.Node {
        
        constructor() {
            super("Food");
            console.log("Creating Food");
            this.createFood();
        }

        public createFood(): void {
        
            let food: f.Node = new f.Node("Food");
            let mesh: f.MeshQuad = new f.MeshQuad();
            let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
            cmpMesh.pivot.scale(f.Vector3.ONE(0.8));
            console.log("adding mesh component to food");
            food.addComponent(cmpMesh);

            let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));
            let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
            console.log("adding material component to food");
            food.addComponent(cmpMaterial);

            // let maxHeightX: number = Math.floor(300) - 1;
            // let minHeightX: number = Math.ceil(-300) - 1;
            // let x: number = Math.floor(Math.random() * (maxHeightX - minHeightX + 1)) + minHeightX;
    
            // let maxWidthY: number = Math.floor(200) - 1;
            // let minWidthY: number = Math.ceil(-200) - 1;
            // let y: number = Math.floor(Math.random() * (maxWidthY - minWidthY + 1)) + minWidthY;
            
            // food.addComponent(new f.ComponentTransform(f.Matrix4x4.TRANSLATION(new f.Vector3(3, 3, 0))));
        }
    }
}
