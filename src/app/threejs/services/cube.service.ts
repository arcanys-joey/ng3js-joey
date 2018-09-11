import { Injectable, Inject, ReflectiveInjector } from '@angular/core';
import { TranslateService } from './translate.service';
import { CubePan } from './cubepan';
import { CubeData } from './icube';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { CUBE_DATA } from '../cube_data_token';
import { Mesh } from 'three';

@Injectable()
export class CubeService {

  constructor(
    private translateService: TranslateService,
    @Inject(THREEJS_TOKEN) private three
  ) { }

  /**
   * 
   * @param cubeData 
   */
  public getCube(cubeData: CubeData): Mesh {
    const cubePan: CubePan = this.getCubePan(cubeData);
    return cubePan.getCube();
  }


  /**
   * 
   * @param cubeData 
   */
  private getCubePan(cubeData: CubeData): CubePan {
    const injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: CUBE_DATA,
        useValue: this.translateService.translateCubeData(cubeData)
      },
      {
        provide: THREEJS_TOKEN,
        useValue: this.three
      },
      CubePan
    ]);

    return injector.get(CubePan);
  }
}
