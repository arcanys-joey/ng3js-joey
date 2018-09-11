import { Injectable, Inject } from '@angular/core';
import { THREEJS_TOKEN } from 'src/app/threejs/threejs.tokens';
import { CUBE_DATA } from './cube_data_token';
import { Axes, CubeData  } from './icube';
import { Mesh } from 'three';
import { EXPANSION_PANEL_ANIMATION_TIMING } from '@angular/material';

@Injectable()
export class CubePan {

  /**
   * @property
   */
  private position: Axes;

  /**
   * @property
   */
  private rotation: Axes;

  /**
   * @property
   */
  private width: number;

  /**
   * @property
   */
  private length: number;

  /**
   * @property
   */
  private depth: number;

  constructor(
    @Inject(CUBE_DATA) private cubeData: CubeData,
    @Inject(THREEJS_TOKEN) private THREE
  ) {
    this.populateDimensions();
    this.populatePosition();
    this.populateRotation();    
  }

  /**
   * 
   */
  private populateDimensions(): void {
    this.width = this.cubeData.width;
    this.length = this.cubeData.height ? this.cubeData.height : this.cubeData.length;
    this.depth = this.cubeData.depth;
  }

  /**
   * 
   */
  private populatePosition(): void {
    /*
      When rendering Box/Box Buffer Geometry, the default position will be in the center of the axes
      We want to preserve the original position and offset based on the cube dimensions
    */
    const posX = this.getXPos(this.cubeData.position.x, this.width);
    const posY = this.getYPos(this.cubeData.position.y, this.length);
    const posZ = this.getZPos(this.cubeData.position.z, this.depth);
    this.position = {
      x: posX, y: posY, z: posZ
    };
  }

  /**
   * 
   * @param xPos 
   * @param cubeWidth 
   */
  private getXPos(xPos: number, cubeWidth: number): number {
    return xPos + (cubeWidth / 2);
  }

  /**
   * 
   * @param yPos 
   * @param cubeHeight 
   */
  private getYPos(yPos: number, cubeHeight: number): number {
    return yPos + (cubeHeight / 2);
  }

  /**
   * 
   * @param zPos 
   * @param cubeDepth 
   */
  private getZPos(zPos: number, cubeDepth: number): number {
    return zPos + (cubeDepth / 2);
  }

  /**
   * 
   */
  private populateRotation(): void {
    /*
      TODO: work on the rotation logic, probably not that complicated as we already offset the position
      For now return the default rotation data
    */
    this.rotation = {
      x: this.cubeData.rotation.x, y: this.cubeData.rotation.y, z: this.cubeData.rotation.z
    };
  }

  /**
   * Returns the cube instance after calculations
   * @
   */
  // public getCube(): Mesh {
  // }

}
