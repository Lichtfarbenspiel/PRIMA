"use strict";
var Snake;
(function (Snake_1) {
    var f = FudgeCore;
    class Snake extends f.Node {
        constructor() {
            super("Snake");
            this.dirCurrent = f.Vector3.X();
            console.log("Creating Snake");
            this.createSegment(4);
        }
        set direction(_new) {
            if (this.dirCurrent.equals(f.Vector3.SCALE(_new, -1)))
                return;
            console.log(this.dirCurrent, _new);
            this.dirNew = _new;
        }
        move() {
            this.dirCurrent = this.dirNew || this.dirCurrent;
            let nodes = this.getChildren();
            let nextTranslation = nodes[0].mtxLocal.translation;
            let tempTranslation = nodes[0].mtxLocal.translation;
            nodes[0].mtxLocal.translation = f.Vector3.SUM(nextTranslation, this.dirCurrent);
            
            for (let i = 1; i < nodes.length; i++) {
                tempTranslation = nodes[i].mtxLocal.translation;
                nodes[i].mtxLocal.translation = nextTranslation;
                nextTranslation = tempTranslation;
            }
        }
        createSegment(_segments) {
            let mesh = new f.MeshQuad();
            let mtrSolidWhite = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));
            for (let i = 0; i < _segments; i++) {
                let segment = new f.Node("Segment");
                let cmpMesh = new f.ComponentMesh(mesh);
                segment.addComponent(cmpMesh);
                cmpMesh.pivot.scale(f.Vector3.ONE(0.8));
                let cmpMaterial = new f.ComponentMaterial(mtrSolidWhite);
                segment.addComponent(cmpMaterial);
                segment.addComponent(new f.ComponentTransform(f.Matrix4x4.TRANSLATION(new f.Vector3(-1 * i, 0, 0))));
                this.appendChild(segment);
            }
        }
    }
    Snake_1.Snake = Snake;
})(Snake || (Snake = {}));
//# sourceMappingURL=Snake.js.map