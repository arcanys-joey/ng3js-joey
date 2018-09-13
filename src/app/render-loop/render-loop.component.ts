import { Component, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { ComponentsService } from './components.service';
import { ComponentMapService } from './component-map.service';
import { ComponentDataService } from './component-data.service';
import { CubeService } from 'src/app/threejs/services/cube.service';
import { CubeData } from '../threejs/services/icube';
import { CubeDataService } from 'src/app/threejs/services/cube-data.service';
import { Main3jsService } from 'src/app/threejs/services/main3js.service';
import { UtilsService } from 'src/app/threejs/services/utils.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh, SpotLight, OrbitControls } from 'three';

@Component({
  selector: 'app-render-loop',
  templateUrl: './render-loop.component.html',
  styleUrls: ['./render-loop.component.scss']
})
export class RenderLoopComponent implements AfterViewInit {

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
    private componentsService: ComponentsService,
    private componentMapService: ComponentMapService,
    private componentDataService: ComponentDataService,
    private cubeDataService: CubeDataService,
    private cubeService: CubeService,
    private main3jsService: Main3jsService,
    private utilsService: UtilsService,
    @Inject(THREEJS_TOKEN) private THREE
  ) { }

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
  ngAfterViewInit() {
    this.initVars();
    this.testRender();
    this.startRenderLoop();
  }

  /**
   * 
   */
  testRender(): void {
    const componentsMap = this.componentMapService.getComponentsMap();
    componentsMap.forEach((map) => {
      const componentData = this.componentDataService.getComponentData(map);
      const cubeData: CubeData = this.cubeDataService.extractCubeData(componentData);
      const cube = this.cubeService.getCube(cubeData);
      this.scene.add(cube);
    });    
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
