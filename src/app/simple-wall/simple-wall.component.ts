import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Main3jsService } from 'src/app/threejs/main3js.service';
import { UtilsService } from 'src/app/threejs/utils.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh, SpotLight, OrbitControls } from 'three';

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
    const topPlate = this.createCube(
      this.utilsService.convertoToMillimeter(35),
      this.utilsService.convertoToMillimeter(3700),
      this.utilsService.convertoToMillimeter(70),
    );
    topPlate.position.z = this.utilsService.convertoToMillimeter(2405);
    this.scene.add(topPlate);

    // bottom plate
    const bottomPlate = this.createCube(
      this.utilsService.convertoToMillimeter(35),
      this.utilsService.convertoToMillimeter(3700),
      this.utilsService.convertoToMillimeter(70),
    );
    bottomPlate.position.z = this.utilsService.convertoToMillimeter(0);
    this.scene.add(bottomPlate);

    // stud 1
    const stud1 = this.createCube(
      this.utilsService.convertoToMillimeter(35),
      this.utilsService.convertoToMillimeter(3700),
      this.utilsService.convertoToMillimeter(70),
      true
    );

    stud1.position.set(
      this.utilsService.convertoToMillimeter(35),
      0,
      this.utilsService.convertoToMillimeter(35),
    );
    this.scene.add(stud1);
    
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
