import { Injectable } from '@angular/core';
import { CubeData } from './icube';

@Injectable()
export class CubeDataService {

  constructor() { }

  /**
   * 
   * @param data 
   */
  extractCubeData(data: any): CubeData {
    return {
      width: data.width,
        length: data.length,
        depth: data.depth,
        position: {
          x: data.transform.location.x,
          y: data.transform.location.y,
          z: data.transform.location.z,
        },
        rotation: {
          x: data.transform.rotation.x,
          y: data.transform.rotation.y,
          z: data.transform.rotation.z,
        }
    };
  }
}
