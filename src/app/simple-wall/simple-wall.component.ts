import { Component, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Main3jsService } from 'src/app/threejs/main3js.service';
import { UtilsService } from 'src/app/threejs/utils.service';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, Mesh, SpotLight, OrbitControls } from 'three';
import { WallComponentsService } from './wall-components.service';

@Component({
  selector: 'app-simple-wall',
  templateUrl: './simple-wall.component.html',
  styleUrls: ['./simple-wall.component.scss']
})
export class SimpleWallComponent implements AfterViewInit {

  constructor(
    private wallComponentsService: WallComponentsService,
    private main3jsService: Main3jsService,
    private utilsService: UtilsService
  ) { }

  /**
   * 
   */
  ngAfterViewInit() {
    console.log('topplates', this.wallComponentsService.getTopPlates());
  }

}
