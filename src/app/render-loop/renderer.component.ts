import { Component, ViewChild, ElementRef, Inject, AfterViewInit, Input, ReflectiveInjector, OnInit } from '@angular/core';
import { ComponentsService } from './components.service';
import { ComponentMapService } from './component-map.service';
import { ComponentDataService } from './component-data.service';
import { CubeService } from 'src/app/threejs/services/cube.service';
import { CubeData } from '../threejs/services/icube';
import { CubeDataService } from 'src/app/threejs/services/cube-data.service';
import { Main3jsService } from 'src/app/threejs/services/main3js.service';
import { UtilsService } from 'src/app/threejs/services/utils.service';
import { TranslateService } from 'src/app/threejs/services/translate.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh, SpotLight, OrbitControls } from 'three';
import { Axes } from '../threejs/services/icube';
import { DESIGN_DATA } from './tokens';
import { DesignDataService } from './design-data.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit {

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

  private componentsService: ComponentsService;
  private componentMapService: ComponentMapService;
  private componentDataService: ComponentDataService;

  constructor(
    private cubeDataService: CubeDataService,
    private cubeService: CubeService,
    private main3jsService: Main3jsService,
    private utilsService: UtilsService,
    private translateService: TranslateService,
    private designDataService: DesignDataService,
    @Inject(THREEJS_TOKEN) private THREE) {
      
    }

  /**
   * 
   */
  ngOnInit() {
    this.designDataService.data$.subscribe((designData) => {
      this.initServices(designData);
      this.initScene();
    });
  }

  /**
   * 
   */
  private initServices(designData): void {
    const injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: DESIGN_DATA,
        useValue: designData
      },
      ComponentsService,
      ComponentMapService,
      ComponentDataService
    ]);
    
    this.componentsService = injector.get(ComponentsService);
    this.componentMapService = injector.get(ComponentMapService);
    this.componentDataService = injector.get(ComponentDataService);
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
  initScene() {
    this.initVars();
    this.render();
    this.startRenderLoop();
  }

  /**
   * 
   */
  render(): void {
    const componentsGroupMap = this.componentMapService.getComponentGroupMap();
    componentsGroupMap.forEach((groupMap) => {
      const group = new this.THREE.Group();
      const componentsMap = this.componentMapService
        .getComponentsMap().filter((map) => 
          map.levelIndex === groupMap.levelIndex 
          && map.wallIndex === groupMap.wallIndex 
          && map.wallFrameIndex === groupMap.wallFrameIndex
        );      

      const wallTransform = this.componentDataService.getWallTransform(groupMap.levelIndex, groupMap.wallIndex);
      const wallFrameTransform = this.componentDataService.getWallFrameTransform(
        groupMap.levelIndex, groupMap.wallIndex, groupMap.wallFrameIndex);

      const wallPositionTransformTranslate = this.translateService.translatePosition(wallTransform.location);
      const wallRotationTransformTranslate = this.translateService.translateRotation(wallTransform.rotation);
      const wallFramePositionTransformTranslate = this.translateService.translatePosition(wallFrameTransform.location);
      const walFrameRotationTransformTranslate = this.translateService.translateRotation(wallFrameTransform.rotation);
      
      this.updateRotation(group, wallRotationTransformTranslate);
      this.updatePosition(group, wallPositionTransformTranslate);
      this.scene.add(group);

      componentsMap.forEach((map) => {
        const componentData = this.componentDataService.getComponentData(map);
        const cubeData: CubeData = this.cubeDataService.extractCubeData(componentData);
        const cube = this.cubeService.getCube(cubeData);
        this.updatePosition(cube, wallFramePositionTransformTranslate);
        group.add(cube);
      });            
    });    
  }

  /**
   * This is temporary, it is ideal that we put this inside a service
   * @param mesh 
   * @param axes 
   */
  updatePosition(mesh: Mesh, axes: Axes): Mesh {
    mesh.position.x += axes.x;
    mesh.position.y += axes.y;
    mesh.position.z += axes.z;

    return mesh;
  }

  /**
   * This is temporary, it is ideal that we put this inside a service
   * @param mesh 
   * @param axes 
   */
  updateRotation(mesh: Mesh, axes: Axes): Mesh {  
    mesh.rotation.x += axes.x;
    mesh.rotation.y += axes.y;
    mesh.rotation.z += axes.z;

    return mesh;
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
