namespace Snake {
    import f = FudgeCore;

    export class Snake extends f.Node {
        
        public dirCurrent: f.Vector3 = f.Vector3.X();
        public dirNew: f.Vector3;
        
        constructor() {
            super("Snake");
            console.log("Creating Snake");
            this.createSegment(4);
        }

        public set direction(_new: f.Vector3) {
            if (this.dirCurrent.equals(f.Vector3.SCALE(_new, -1)))
              return;
            console.log(this.dirCurrent, _new);
            this.dirNew = _new;
        }

        public move(): void {
            this.dirCurrent = this.dirNew || this.dirCurrent;
            let nodes: f.Node[] = this.getChildren();
            let nextTranslation: f.Vector3 = nodes[0].mtxLocal.translation;
            let tempTranslation: f.Vector3 = nodes[0].mtxLocal.translation;
      
            nodes[0].mtxLocal.translation = f.Vector3.SUM(nextTranslation, this.dirCurrent);
            
            for (let i: number = 1; i < nodes.length; i++) {
                tempTranslation = nodes[i].mtxLocal.translation;
                nodes[i].mtxLocal.translation = nextTranslation;
                nextTranslation = tempTranslation;
            }
        }

        private createSegment(_segments: number): void {
            let mesh: f.MeshCube = new f.MeshCube();
            let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));

            for (let i: number = 0; i < _segments; i++) {
                let segment: f.Node = new f.Node("Segment");
                let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
                segment.addComponent(cmpMesh);
                
                cmpMesh.pivot.scale(f.Vector3.ONE(0.8));

                let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
                segment.addComponent(cmpMaterial);
                

                segment.addComponent(new f.ComponentTransform(f.Matrix4x4.TRANSLATION(new f.Vector3(-1 * i, 0, 0))));

                this.appendChild(segment);
            }
        }
    }
}