"use strict";
var L02_FirstFudge;
(function (L02_FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", hndLoad);
    let viewport;
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        f.RenderManager.initialize();
        f.Debug.log(canvas);
        let node1 = new f.Node("Quad");
        let mesh1 = new f.MeshQuad();
        let cmpMesh = new f.ComponentMesh(mesh1);
        node1.addComponent(cmpMesh);
        let mtrSolidWhite = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));
        let cmpMaterial = new f.ComponentMaterial(mtrSolidWhite);
        node1.addComponent(cmpMaterial);
        // let node2: f.Node = new f.Node("Quad");
        // let mesh2: f.MeshQuad = new f.MeshQuad();
        // let cmpMesh2: f.ComponentMesh = new f.ComponentMesh(mesh2);
        // cmpMesh2.pivot.translateX(10);
        // node1.addComponent(cmpMesh2);
        // let mtrSolidWhite2: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));
        // let cmpMaterial2: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite2);
        // node2.addComponent(cmpMaterial2);
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(5);
        cmpCamera.pivot.rotateY(180);
        viewport = new f.Viewport();
        viewport.initialize("Viewport", node1, cmpCamera, canvas);
        f.Debug.log(viewport);
        viewport.draw();
    }
})(L02_FirstFudge || (L02_FirstFudge = {}));
//# sourceMappingURL=Main.js.map