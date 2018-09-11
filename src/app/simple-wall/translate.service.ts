import { Injectable } from '@angular/core';
import { Dimensions, Axes, CubeData } from './icube';
import { UtilsService } from 'src/app/threejs/utils.service';

@Injectable()
export class TranslateService {

  /**
   * @property
   * Values from sketch-up could not be directly used on threeJS so we use a translation code to make the 
   * rendering similar to sketch-up
   */
  private adaptToSketchUp = true;

  constructor(private utilsService: UtilsService) { }

  /**
   * 
   * @param cubeData 
   */
  public translateCubeData(cubeData: CubeData): CubeData {
    const cubeDataTranslate = { ...cubeData };
    const dimensions = this.translateDimensions(cubeData.width, cubeData.length, cubeData.depth);
    let position = this.translatePosition(cubeData.position);
    const rotation = this.translateRotation(cubeData.rotation);

    // for parts that are rotated 90, offset the positioning of X and Y
    if (Math.abs(cubeData.rotation.y)) {
      position = {
        x: position.x + -((dimensions.width / 2) + (dimensions.length / 2)),
        y: position.y + ((dimensions.width / 2) - (dimensions.length / 2)),
        z: position.z
      };
    }

    return {
      width: dimensions.width,
      length: dimensions.length,
      depth: dimensions.depth,
      rotation,
      position
    };
  }

  /**
   * 
   * @param width 
   * @param length 
   * @param depth 
   */
  public translateDimensions(width: number, length: number, depth: number): Dimensions {

    let newWidth: number;
    let newLength: number;
    let newDepth: number;
    
    if (this.adaptToSketchUp) {
      newWidth = this.utilsService.convertoToMillimeter(length);
      newLength = this.utilsService.convertoToMillimeter(width);
      newDepth = this.utilsService.convertoToMillimeter(depth);
    }    

    return {
      width: newWidth, length: newLength, depth: newDepth
    };
  }

  /**
   * 
   * @param position 
   */
  public translatePosition(position: Axes): Axes {
    if (this.adaptToSketchUp) {
      return {
        x: this.utilsService.convertoToMillimeter(position.x),
        y: this.utilsService.convertoToMillimeter(position.z),
        z: -(this.utilsService.convertoToMillimeter(position.y))
      };
    }
    return position;
  }

  /**
   * 
   * @param rotation 
   */
  public translateRotation(rotation: Axes): Axes {

    let rotateXTranslate: number;
    let rotateYTranslate: number;
    let rotateZTranslate: number;

    if (this.adaptToSketchUp) {
      rotateXTranslate = this.utilsService.radian(rotation.x);
      rotateYTranslate = this.utilsService.radian(rotation.z);
      rotateZTranslate = this.utilsService.radian(rotation.y);
    }

    return {
      x: rotateXTranslate, y: rotateYTranslate, z: rotateZTranslate
    };
    
  }

}
