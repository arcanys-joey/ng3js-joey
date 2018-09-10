import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Main3jsService } from 'src/app/threejs/main3js.service';
import { UtilsService } from 'src/app/threejs/utils.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh, SpotLight, OrbitControls } from 'three';

@Component({
  selector: 'app-render-test',
  templateUrl: './render-test.component.html',
  styleUrls: ['./render-test.component.scss']
})
export class RenderTestComponent implements AfterViewInit {

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
    private main3jsService: Main3jsService, 
    private utilsService: UtilsService,
    @Inject(THREEJS_TOKEN) private THREE
  ) { }

  /**
   * 
   */
  ngAfterViewInit() {
    this.initVars();
    this.createCubes();
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
    this.camera.position.z = 10;
    this.controls = this.main3jsService.getOrbitControls(this.camera, this.canvas);

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
  private createCubes(): void {
    // start at the top plate
    const translateTop = this.utilsService.translateToThree(35, 3700, 70);
    const topPlate = this.createCube(translateTop.width, translateTop.length, translateTop.depth);
    topPlate.position.set(0, this.utilsService.convertoToMillimeter(2405), 0);    
    this.scene.add(topPlate);

    // bottom plate
    const translateBottom = this.utilsService.translateToThree(35, 3700, 70);
    const bottomPlate = this.createCube(translateBottom.width, translateBottom.length, translateBottom.depth);
    bottomPlate.position.set(0, 0, 0);    
    this.scene.add(bottomPlate);

    // stud 1
    const translateStud1 = this.utilsService.translateToThree(35, 2370, 70);
    const stud1 = this.createCube(translateStud1.width, translateStud1.length, translateStud1.depth);
    // location -> 'x': 35, 'y': 0, 'z': 35
    // rotation -> 0, -90, 0
    stud1.position.set(
      this.utilsService.convertoToMillimeter(-1832.5),
      this.utilsService.convertoToMillimeter(1202.5),
      0
    );
    stud1.rotateZ(this.utilsService.radian(90));
    this.scene.add(stud1);

    // nog1
    const translateNog1 = this.utilsService.translateToThree(35, 415, 70);
    const nog1 = this.createCube(translateNog1.width, translateNog1.length, translateNog1.depth, true);
    // location -> 'x': 35, 'y': 0, 'z': 1237.5
    // rotation -> 0, 0, 0
    nog1.position.set(
      this.utilsService.convertoToMillimeter(-1607.5),
      this.utilsService.convertoToMillimeter(1237.5),
      0
    );
    this.scene.add(nog1);
  }

  /**
   * 
   * @param width 
   * width of the timber in millimeters
   * @param height 
   * height of the timber in millimeters
   * @param depth 
   * depth of the timber in millimeters
   */
  private createCube(width: number, length: number, depth: number, distinct?: boolean): Mesh {
    const geometry = new this.THREE.BoxBufferGeometry(width, length, depth);
    const material = new this.THREE.MeshLambertMaterial({ 
      color: !distinct ? 0x8b8b96 : 0x005fbe,
      ambient: !distinct ? 0x8b8b96 : 0x005fbe,
      emissive: !distinct ? 0x8b8b96 : 0x005fbe
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
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

}
