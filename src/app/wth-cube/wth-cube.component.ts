import { Component, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Main3jsService } from 'src/app/threejs/services/main3js.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, OrbitControls, LineBasicMaterial } from 'three';

@Component({
  selector: 'app-wth-cube',
  templateUrl: './wth-cube.component.html',
  styleUrls: ['./wth-cube.component.scss']
})
export class WthCubeComponent implements AfterViewInit {

  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private controls: OrbitControls;
  private axesHelper: AxesHelper;

  /**
   * @property
   */
  @ViewChild('canvas') private canvasRef: ElementRef;

  /**
   * @property
   */
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor(
    private main3jsService: Main3jsService, 
    @Inject(THREEJS_TOKEN) private THREE
  ) { }

  /**
   * 
   */
  ngAfterViewInit() {
    this.initVars();
    this.initTriangleWTHMeshes();
    this.startRenderLoop();
  }

  /**
   * 
   */
  private initVars() {
    this.scene = this.main3jsService.getScene();
    this.renderer = this.main3jsService.getRenderer(this.canvas, true);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.camera = this.main3jsService.getCamera({
      aspectRatio: this.getAspectRatio(),
      cameraZPos: 150
    });
    this.controls = this.main3jsService.getOrbitControls(this.camera, this.canvas);
    this.axesHelper = this.main3jsService.getAxesHelper(100);
    this.scene.add(this.axesHelper);
  }

  /**
   * 
   */
  public initTriangleWTHMeshes(): void {
    (() => {
      /*
        Front face
      */ 
     // tslint:disable-next-line
      const triangle1 = this.createTriangle({ x:-10, y:-10, z:10 }, { x:10, y:-10, z:10 }, { x: -10, y: 10, z:10 }, { x:-10, y:-10, z:10 }, this.getMaterial());
      // tslint:disable-next-line
      const triangle2 = this.createTriangle({ x:10, y:-10, z:10 }, { x:10, y:10, z:10 }, { x:-10, y:10, z:10 }, { x:10, y:-10, z:10 }, this.getMaterial());
      this.scene.add( triangle1 );
      this.scene.add( triangle2 );  
    })();

    
    (() => {
      /*
         Back Face
      */  
      // tslint:disable-next-line
      const triangle1 = this.createTriangle({ x:-10, y:-10, z:-10 }, { x:10, y:-10, z:-10 }, { x: -10, y: 10, z:-10 }, { x:-10, y:-10, z:-10 }, this.getMaterial());
      // tslint:disable-next-line
      const triangle2 = this.createTriangle({ x:10, y:-10, z:-10 }, { x:10, y:10, z:-10 }, { x:-10, y:10, z:-10 }, { x:10, y:-10, z:-10 }, this.getMaterial());
      this.scene.add( triangle1 );
      this.scene.add( triangle2 );  
    })();
      
    (() => {
      /*
         Right Face
      */  
     // tslint:disable-next-line
     const triangle1 = this.createTriangle({ x:10, y:10, z:10 }, { x:10, y:10, z:-10 }, { x:10, y:-10, z:-10 }, { x:10, y:10, z:10 }, this.getMaterial());
     // tslint:disable-next-line
     const triangle2 = this.createTriangle({ x:10, y:10, z:10 }, { x:10, y:-10, z:10 }, { x:10, y:-10, z:-10 }, { x:10, y:10, z:10 }, this.getMaterial());
     this.scene.add( triangle1 );
     this.scene.add( triangle2 );  
    })();
      
    (() => {
      /*
         Left Face
      */  
      // tslint:disable-next-line
      const triangle1 = this.createTriangle({ x:-10, y:10, z:-10 }, { x:-10, y:-10, z:-10  }, {x:-10, y:10, z:10 }, { x:-10, y:10, z:-10 }, this.getMaterial());
      // tslint:disable-next-line
      const triangle2 = this.createTriangle({ x:-10, y:-10, z:-10 }, { x:-10, y:-10, z:10 }, { x:-10, y:10, z:10 }, { x:-10, y:-10, z:-10 }, this.getMaterial());
      this.scene.add( triangle1 );
      this.scene.add( triangle2 );  
    })();
      
    (() => {
      /*
         Top Face
      */  
      // tslint:disable-next-line
      const triangle1 = this.createTriangle({ x:-10, y:10, z:10 }, { x:10, y:10, z:-10  }, { x:10, y:10, z:10 }, { x:-10, y:10, z:10 }, this.getMaterial());
      // tslint:disable-next-line
      const triangle2 = this.createTriangle({ x:-10, y:10, z:10 }, { x:-10, y:10, z:-10 }, { x:10, y:10, z:-10}, { x:-10, y:10, z:10 }, this.getMaterial());
      this.scene.add( triangle1 );
      this.scene.add( triangle2 );  
    })();
      
    (() => {
      /*
         Bottom Face
      */  
      // tslint:disable-next-line
      const triangle1 = this.createTriangle({ x:-10, y:-10, z:10 }, { x:10, y:-10, z:-10  }, { x:10, y:-10, z:10 }, { x:-10, y:-10, z:10 }, this.getMaterial());
      // tslint:disable-next-line
      const triangle2 = this.createTriangle({ x:-10, y:-10, z:10 }, { x:-10, y:-10, z:-10 }, { x:10, y:-10, z:-10}, { x:-10, y:-10, z:10 }, this.getMaterial());
      this.scene.add( triangle1 );
      this.scene.add( triangle2 );  
    })();
  }

  /**
   * 
   */
  private getMaterial(): LineBasicMaterial {
    return new this.THREE.LineBasicMaterial( { color: 0xffe062, 	linewidth: 2 } );
  }

  /**
   * 
   */
  private getAspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * 
   */
  public onResize() {
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  /**
   * 
   * @param lineV3_1 
   * @param lineV3_2 
   * @param lineV3_3 
   * @param lineV3_4 
   * @param material 
   */
  private createTriangle(lineV3_1, lineV3_2, lineV3_3, lineV3_4, material) {
    const geometry = new this.THREE.Geometry();
    geometry.vertices.push(new this.THREE.Vector3(lineV3_1.x, lineV3_1.y, lineV3_1.z));
    geometry.vertices.push(new this.THREE.Vector3(lineV3_2.x, lineV3_2.y, lineV3_2.z));
    geometry.vertices.push(new this.THREE.Vector3(lineV3_3.x, lineV3_3.y, lineV3_3.z));
    geometry.vertices.push(new this.THREE.Vector3(lineV3_4.x, lineV3_4.y, lineV3_4.z));
    return new this.THREE.Line( geometry, material);
  }

  /**
   * 
   */
  private startRenderLoop(): void {
    this.controls.update();
    const animate = () => {
      requestAnimationFrame(animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

}
