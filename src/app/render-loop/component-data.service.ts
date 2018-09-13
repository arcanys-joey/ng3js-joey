import { Injectable, Inject } from '@angular/core';
import { ComponentData, TransformData, ComponentMap } from './component-types';
import { DESIGN_DATA } from './tokens';

@Injectable()
export class ComponentDataService {

  constructor(@Inject(DESIGN_DATA) private designData) { }

  /**
   * Returns the component data based from the component map
   * @param componentMap 
   */
  public getComponentData(componentMap: ComponentMap): ComponentData {
    if (this.designData.levels && this.designData.levels[componentMap.levelIndex]) {
      const level = this.designData.levels[componentMap.levelIndex];
      if (level[componentMap.wallIndex]) {
        const wall = level[componentMap.wallIndex];
        if (wall.wall_frames && wall.wall_frames[componentMap.wallFrameIndex]) {
          const wallFrame = wall.wall_frames[componentMap.wallFrameIndex];
          if (wallFrame[componentMap.partMap] && wallFrame[componentMap.partMap][componentMap.partMapIndex]) {
            return wallFrame[componentMap.partMap][componentMap.partMapIndex];
          }
        }
      }
    }

    return null;
  }

  /**
   * Returns the wall transform data for a specific component
   * @param componentMap 
   */
  public getWallFrameTransform(componentMap: ComponentMap): TransformData {
    if (this.designData.levels && this.designData.levels[componentMap.levelIndex]) {
      const level = this.designData.levels[componentMap.levelIndex];
      if (level[componentMap.wallIndex]) {
        const wall = level[componentMap.wallIndex];
        if (wall.wall_frames && wall.wall_frames[componentMap.wallFrameIndex]) {
          const wallFrame = wall.wall_frames[componentMap.wallFrameIndex];
          return wallFrame.transform;
        }
      }
    }

    return null;
  }

  /**
   * Returns the wallframe transform data for a specific component
   * @param componentMap 
   */
  public getWallTransform(componentMap: ComponentMap): TransformData {
    if (this.designData.levels && this.designData.levels[componentMap.levelIndex]) {
      const level = this.designData.levels[componentMap.levelIndex];
      if (level[componentMap.wallIndex]) {
        const wall = level[componentMap.wallIndex];
        return wall.transform;
      }
    }

    return null;
  }  

}
