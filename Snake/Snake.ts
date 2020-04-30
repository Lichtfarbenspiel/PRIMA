namespace Snake {
    import f = FudgeCore;

    window.addEventListener("load", hndLoad);

    let viewport: f.Viewport;

    function hndLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        f.Debug.log(canvas);

        
        let mesh: f.MeshQuad = new f.MeshQuad();
        let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.CSS("WHITE")));

        let snake: f.Node = new f.Node("Snake");

        for (let i: number = 0; i < 4; i++) {
            let node: f.Node = new f.Node("Quad");
            let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
            node.addComponent(cmpMesh);
            
            cmpMesh.pivot.scale(f.Vector3.ONE(0.8));

            let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
            node.addComponent(cmpMaterial);
            

            node.addComponent(new f.ComponentTransform(f.Matrix4x4.TRANSLATION(new f.Vector3(-1 * i, 0, 0))));

            snake.appendChild(node);
        }
    
    
        f.Loop.start();
            // snake.addComponent(new f.ComponentTransform(f.Matrix4x4.TRANSLATION(new f.Vector3(1, 0, 0))));
        
        
        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(10);

        cmpCamera.pivot.rotateY(180);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", snake, cmpCamera, canvas);

        f.Debug.log(viewport);
        viewport.draw();
    }
}