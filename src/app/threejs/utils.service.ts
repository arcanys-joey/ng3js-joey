import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  /**
   * 
   * @param degress 
   */
  public radian(degress: number): number {
    return (degress / 180) * Math.PI;
  }

  /**
   * 
   * @param radian 
   */
  public degress(radian: number): number {
    return (radian * 180) / Math.PI;
  }

  /**
   * 
   * @param meter 
   */
  public convertoToMillimeter(meter: number): number {
    return meter / 1000;
  }

}
