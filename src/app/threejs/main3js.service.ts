import { Injectable, Inject } from '@angular/core';
import { THREEJS_TOKEN, CONFIG_TOKEN } from './threejs.tokens';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, OrbitControls } from 'three';
import { Config } from './config';

@Injectable()
export class Main3jsService {

  constructor(
    @Inject(THREEJS_TOKEN) private THREE,
    @Inject(CONFIG_TOKEN) private config: Config
  ) {
    
  }

  /**
   *
   */
  public getScene(): Scene {
    return new this.THREE.Scene();
  }

  /**
   * 
   * @param config 
   */
  public getCamera(configParam?: Config): PerspectiveCamera {
    const config = this.getConfig(configParam);
    const camera = new this.THREE.PerspectiveCamera(
      config.fov,
      config.aspectRatio,
      config.near,
      config.far
    );
    camera.position.set(0, 0, config.cameraZPos);
    return camera;
  }

  /**
   * 
   * @param config 
   */
  public getConfig(configParam?: Config): Config {
    return Object.assign({}, this.config, configParam);
  }

  /**
   * 
   * @param canvas 
   * @param antiAliasing 
   */
  public getRenderer(canvas?: HTMLCanvasElement, antiAliasing?: boolean): WebGLRenderer {
    let renderer: WebGLRenderer;
    if (!antiAliasing) {
      antiAliasing = this.getConfig().antialiasing;
    }
    if (canvas) {
      renderer = new this.THREE.WebGLRenderer({
        canvas, antialias: antiAliasing
      });
    } else {
      renderer = new this.THREE.WebGLRenderer({
        antialias: antiAliasing
      });
    }
    return renderer;
  }

  /**
   * 
   * @param size 
   */
  public getAxesHelper(size?: Number): AxesHelper | null {
    if (!this.getConfig().enableAxisHelper) {
      return null;
    }
    if (!size) {
      size = this.getConfig().axesSize;
    }
    return new this.THREE.AxesHelper(size);
  }

  /**
   * 
   * @param camera 
   */
  public getOrbitControls(camera: PerspectiveCamera): OrbitControls {
    return new this.THREE.OrbitControls(camera);
  }

}
