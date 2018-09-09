import { Injectable, Inject } from '@angular/core';
import { Config } from './config';
import { CONFIG_TOKEN } from './threejs.tokens';

@Injectable()
export class ConfigService {

  /**
   * @property
   */
  static get defaults(): Config {
    return {
      antialiasing: true,
      fov: 45,
      near: 1,
      far: 500,
      enableOrbitControls: true,
      cameraZPos: 75,
      enableAxisHelper: true,
      axesSize: 100
    };
  }

  /**
   * 
   * @param config 
   */
  public static getConfig(config?: Config): Config {
    if (!config) {
      return { ...ConfigService.defaults };
    }
    return Object.assign({}, ConfigService.defaults, config);
  }

}
