import { Injectable, InjectionToken, Inject } from '@angular/core';

export const WALL_DATA = new InjectionToken('SimpleWallData');

@Injectable()
export class WallComponentsService {

  /**
   * @property
   */
  private walls: any;

  /**
   * @property
   */
  private wallFrames = [];

  constructor(
    @Inject(WALL_DATA) private wallData: any
  ) {
    this.initWalls();
    this.initWallFrames();    
  }

  /**
   * For now only fetch the first level
   */
  private getLevelData(): any {
    return this.wallData.levels[0];
  }

  /**
   * 
   */
  private initWalls(): void {
    const levelData = this.getLevelData();
    this.walls = levelData.filter((v) => v['^o'] === 'AedGlobal::Structure::Wall');
  }

  /**
   * 
   */
  private initWallFrames(): void {
    for (let i = 0; i < this.walls.length; i++) {
      this.wallFrames = this.wallFrames.concat(
        this.walls[i].wall_frames.filter((v) => v['^o'] === 'AedGlobal::Structure::WallFrame')
      );
    }
  }

  /**
   * 
   */
  public getTopPlates() {
    let topPlates = [];
    for (let i = 0; i < this.wallFrames.length; i++) {      
      topPlates = topPlates.concat(this.wallFrames[i].top_plates);
    }
    return topPlates;
  }
  
}
