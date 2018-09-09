import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Main3jsService } from 'src/app/threejs/main3js.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh } from 'three';

@Component({
  selector: 'app-basic-cube',
  templateUrl: './basic-cube.component.html',
  styleUrls: ['./basic-cube.component.scss']
})
export class BasicCubeComponent implements AfterViewInit {

  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

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
    this.scene = this.main3jsService.getScene();
    this.renderer = this.main3jsService.getRenderer(this.canvas, true);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.camera = this.main3jsService.getCamera({
      aspectRatio: this.canvas.clientWidth / this.canvas.clientHeight,
      cameraZPos: 10
    });
    this.startRenderLoop();
  }

  /**
   * 
   */
  private createCube(): Mesh {
    const geometry = new this.THREE.BoxBufferGeometry(1, 1, 1);
    const material = new this.THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new this.THREE.Mesh(geometry, material);
    return cube;
  }

  /**
   * 
   */
  private startRenderLoop(): void {
    
    const cube = this.createCube();
    this.scene.add(cube);

    this.camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);    
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;    
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

}
