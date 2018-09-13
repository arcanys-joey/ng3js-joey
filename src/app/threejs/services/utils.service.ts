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
  public converToMeter(mm: number): number {
    return mm / 1000;
  }

}
