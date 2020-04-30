"use strict";
var Snake;
(function (Snake) {
    var f = FudgeCore;
    window.addEventListener("load", hndLoad);
    let viewport;
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        f.Debug.log(canvas);
        let mesh = new f.MeshQuad();
        let mtrSolidWhite = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));
        let snake = new f.Node("Snake");
        for (let i = 0; i < 4; i++) {
            let node = new f.Node("Quad");
            let cmpMesh = new f.ComponentMesh(mesh);
            node.addComponent(cmpMesh);
            cmpMesh.pivot.scale(f.Vector3.ONE(0.8));
            let cmpMaterial = new f.ComponentMaterial(mtrSolidWhite);
            node.addComponent(cmpMaterial);
            node.addComponent(new f.ComponentTransform(f.Matrix4x4.TRANSLATION(new f.Vector3(-1 * i, 0, 0))));
            snake.appendChild(node);
        }
        f.Loop.start();
        // snake.addComponent(new f.ComponentTransform(f.Matrix4x4.TRANSLATION(new f.Vector3(1, 0, 0))));
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(10);
        cmpCamera.pivot.rotateY(180);
        viewport = new f.Viewport();
        viewport.initialize("Viewport", snake, cmpCamera, canvas);
        f.Debug.log(viewport);
        viewport.draw();
    }
})(Snake || (Snake = {}));
//# sourceMappingURL=Snake.js.map