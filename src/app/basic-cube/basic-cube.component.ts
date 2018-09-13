import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Main3jsService } from 'src/app/threejs/services/main3js.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh, SpotLight, OrbitControls } from 'three';

@Component({
  selector: 'app-basic-cube',
  templateUrl: './basic-cube.component.html',
  styleUrls: ['./basic-cube.component.scss']
})
export class BasicCubeComponent implements AfterViewInit {

  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private cube: Mesh;
  private light: SpotLight;
  private controls: OrbitControls;

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
    this.startRenderLoop();
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
  private initVars(): void {
    this.scene = this.main3jsService.getScene();
    this.renderer = this.main3jsService.getRenderer(this.canvas, true);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.camera = this.main3jsService.getCamera({
      aspectRatio: this.getAspectRatio(),
      cameraZPos: 10
    });
    this.camera.position.z = 5;
    this.controls = this.main3jsService.getOrbitControls(this.camera, this.canvas);
    this.cube = this.createCube();
    this.light = this.createLight();    
    this.scene.add(this.light);
    this.scene.add(this.cube);
  }

  /**
   * 
   */
  private createLight(): SpotLight {
    const light = new this.THREE.SpotLight(0xffffff);
    light.position.set(30, 100, 30);
    return light;
  }

  /**
   * 
   */
  private createCube(): Mesh {
    const geometry = new this.THREE.BoxBufferGeometry(1, 1, 1);
    const material = new this.THREE.MeshLambertMaterial({ 
      color: 0x8b8b96,
      ambient: 0x8b8b96,
      emissive: 0x8b8b96
    });
    const cube = new this.THREE.Mesh(geometry, material);
    return cube;
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
   */
  private startRenderLoop(): void {
    this.controls.update();
    const animate = () => {
      requestAnimationFrame(animate);    
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;    
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

}
