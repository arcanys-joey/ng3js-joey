import { Injectable } from '@angular/core';
import { Dimensions } from './icube';
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
   *
  public translateDimensions(): Dimensions {
    
  }
  */
}
