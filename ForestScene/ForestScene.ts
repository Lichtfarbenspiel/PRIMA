namespace ForestScene{
    import ƒ = FudgeCore;
    window.addEventListener("DOMContentLoaded", init);
    
    let node: ƒ.Node;
    let camera: ƒ.Node;
    let viewPort: ƒ.Viewport;

    function init(): void {
        ƒ.RenderManager.initialize();
        createMiniForest();
        viewPort.draw();
       viewPort.showSceneGraph();
    }

    function createMiniForest(): void {
        let forest: ƒ.Node = new ƒ.Node("Forest");
        let clrLeaves: ƒ.Color = new ƒ.Color(0.2, 0.6, 0.3, 1);
        let clrNeedles: ƒ.Color = new ƒ.Color(0.1, 0.5, 0.3, 1);
        let clrTrunkTree: ƒ.Color = new ƒ.Color(0.5, 0.3, 0, 1);
        let clrCapMushroomBrown: ƒ.Color = new ƒ.Color(0.6, 0.4, 0, 1);
        let clrCapMushroomRed: ƒ.Color = new ƒ.Color(0.5, 0, 0, 1);
        let clrTrunkMushroom: ƒ.Color = new ƒ.Color(0.9, 0.8, 0.7, 1);
        let clrGround: ƒ.Color = new ƒ.Color(0.3, 0.6, 0.5, 1);
        let ground: ƒ.Node = createCompleteMeshNode("Ground", new ƒ.Material("Ground", ƒ.ShaderUniColor, new ƒ.CoatColored(clrGround)), new ƒ.MeshCube());
        let cmpGroundMesh: ƒ.ComponentMesh = ground.getComponent(ƒ.ComponentMesh);
        
        cmpGroundMesh.pivot.scale(new ƒ.Vector3(6, 0.05, 6));
        
        node = ground;
        createViewport();
    }

    function createCompleteMeshNode(_name: string, _material: ƒ.Material, _mesh: ƒ.Mesh): ƒ.Node {
        let node: ƒ.Node = new ƒ.Node(_name);
        let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(_mesh);
        let cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(_material);
        let cmpTransform: ƒ.ComponentTransform = new ƒ.ComponentTransform();

        node.addComponent(cmpMesh);
        node.addComponent(cmpMaterial);
        node.addComponent(cmpTransform);

        return node;
    }

    function createViewport(_canvas: HTMLCanvasElement = null): void {
        if (!_canvas) { 
        _canvas = document.createElement("canvas");
        _canvas.width = 800;
        _canvas.height = 600;
        document.body.appendChild(_canvas);
        }
        viewPort = new ƒ.Viewport();
        camera = createCamera();
        viewPort.initialize("viewport", node, camera.getComponent(ƒ.ComponentCamera), _canvas);
    }
    
    function createCamera(_translation: ƒ.Vector3 = new ƒ.Vector3(1, 1, 10), _lookAt: ƒ.Vector3 = new ƒ.Vector3()): ƒ.Node {
        let camera: ƒ.Node = new ƒ.Node("Camera");
        let cmpTransform: ƒ.ComponentTransform = new ƒ.ComponentTransform();

        cmpTransform.local.translate(_translation);
        cmpTransform.local.lookAt(_lookAt);
        camera.addComponent(cmpTransform);

        let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
        cmpCamera.projectCentral(1, 45, ƒ.FIELD_OF_VIEW.DIAGONAL);
        camera.addComponent(cmpCamera);
        return camera;
    }

    function createBroadleaf(_name: string, _clrTrunk: ƒ.Color, _clrTop: ƒ.Color, _pos: ƒ.Vector3, _scale: ƒ.Vector3): ƒ.Node {
        
        let tree: ƒ.Node = new ƒ.Node(_name);
        
        let treeTrunk: ƒ.Node = createCompleteMeshNode("TreeTrunk", new ƒ.Material("TrunkTree", ƒ.ShaderUniColor, new ƒ.CoatColored(_clrTrunk)), new ƒ.MeshCube);
        
        let cmpTrunkMesh: ƒ.ComponentMesh = treeTrunk.getComponent(ƒ.ComponentMesh);
        
        cmpTrunkMesh.pivot.scale(_scale);
        cmpTrunkMesh.pivot.translateY(_scale.y / 2);
        
        return tree;
    }    
        
    
}
