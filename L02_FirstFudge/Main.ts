namespace L02_FirstFudge {

    import f = FudgeCore;

    window.addEventListener("load", hndLoad);

    let viewport: f.Viewport;

    function hndLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        f.RenderManager.initialize();
        f.Debug.log(canvas);

        let node1: f.Node = new f.Node("Quad");
        let mesh1: f.MeshQuad = new f.MeshQuad();
        let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh1);

        node1.addComponent(cmpMesh);

        let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));
        let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        node1.addComponent(cmpMaterial);

        let node2: f.Node = new f.Node("Quad");
        let mesh2: f.MeshQuad = new f.MeshQuad();
        let cmpMesh2: f.ComponentMesh = new f.ComponentMesh(mesh2);
        cmpMesh2.pivot.translateX(10)

        node2.addComponent(cmpMesh2);

        let mtrSolidBlue: f.Material = new f.Material("SolidBlue", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("BLUE")));
        let cmpMaterial2: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidBlue);
        node2.addComponent(cmpMaterial2);
        

        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(100);
        cmpCamera.pivot.rotateY(180);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", node1, cmpCamera, canvas);

        f.Debug.log(viewport);
        viewport.draw();
    }
}