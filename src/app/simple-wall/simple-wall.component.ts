import { Component, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Main3jsService } from 'src/app/threejs/main3js.service';
import { UtilsService } from 'src/app/threejs/utils.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh, SpotLight, OrbitControls } from 'three';
import { WallComponentsService } from './wall-components.service';
import { CubeData } from './icube';
import { CubeDataService } from './cube-data.service';
import { CubeService } from './cube.service';

@Component({
  selector: 'app-simple-wall',
  templateUrl: './simple-wall.component.html',
  styleUrls: ['./simple-wall.component.scss']
})
export class SimpleWallComponent implements AfterViewInit {

  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private light: SpotLight;
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
    private wallComponentsService: WallComponentsService,
    private main3jsService: Main3jsService,
    private utilsService: UtilsService,
    private cubeDataService: CubeDataService,
    private cubeService: CubeService,
    @Inject(THREEJS_TOKEN) private THREE
  ) { }

  /**
   * 
   */
  ngAfterViewInit() {
    this.initVars();
    this.renderTopPlates();
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
    this.axesHelper = this.main3jsService.getAxesHelper(25);
    this.scene.add(this.axesHelper);
    this.light = this.createLight();    
    this.scene.add(this.light);
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
  public onResize(): void {
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  /**
   * 
   */
  private renderTopPlates(): void {
    const topPlates = this.wallComponentsService.getTopPlates() as any;
    for (let i = 0; i < topPlates.length; i++) {
      const topPlate = topPlates[i];
      const cubeData: CubeData = this.cubeDataService.extractCubeData(topPlate);
      const cube = this.cubeService.getCube(cubeData);
      console.log('cube position', cube.position);
      console.log('cube rotation', cube.rotation);
      this.scene.add(cube);
    }
  }


  /**
   * 
   */
  private startRenderLoop(): void {
    this.controls = this.main3jsService.getOrbitControls(this.camera, this.canvas);
    this.controls.update();
    const animate = () => {
      requestAnimationFrame(animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

}
