import { Injectable, Inject, ReflectiveInjector } from '@angular/core';
import { TranslateService } from './translate.service';
import { CubePan } from './cubepan';
import { CubeData } from './icube';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { CUBE_DATA } from './cube_data_token';

@Injectable()
export class CubeService {

  constructor(
    private translateService: TranslateService,
    @Inject(THREEJS_TOKEN) private three
  ) { }

  /**
   * 
   */
  public getCube(cubeData: CubeData): void {
    // translate the cubeData
    // 
  }
}
