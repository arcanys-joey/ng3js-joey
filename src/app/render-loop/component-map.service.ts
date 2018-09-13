import { Injectable, Inject } from '@angular/core';
import { DESIGN_DATA } from './tokens';
import { ComponentMap, DESIGN_COMPONENT_PARTS, WALL_CLASSES, COMPONENT_PART_CLASSES } from './component-types';

@Injectable()
export class ComponentMapService {

  constructor(@Inject(DESIGN_DATA) private designData: any) {
    this.generateMap();
  }

  /**
   * Component map generator method on the class 
   */
  private generateMap(): ComponentMap[] {
    const componentsMap: ComponentMap[] = [];

    this.designData.levels.forEach((level, levelIndex) => {
      level
        .forEach((wall, wallIndex) => {
          if (wall['^o'] !== WALL_CLASSES.WALL) {
            return;
          }
          wall.wall_frames            
            .forEach((wallFrame, wallFrameIndex) => {              
              if (wallFrame['^o'] !== WALL_CLASSES.WALL_FRAME) {
                return;
              }            
              /*
               We have the wallframe data then loop through all properties
               and get all the properties that can be rendered
              */
              for (const prop in wallFrame) {
                if (wallFrame[prop] && DESIGN_COMPONENT_PARTS.includes(prop)) {
                  const wallFrameProp = wallFrame[prop];
                  wallFrameProp.forEach((partData, partIndex) => {
                    componentsMap.push({
                      type: partData['^o'],
                      levelIndex,
                      wallIndex,
                      wallID: wall.id,
                      wallFrameIndex,
                      wallFrameID: wallFrame.id,
                      partMap: prop,
                      partMapIndex: partIndex
                    });
                  });
                }
              }
            });
        });
    });

    return componentsMap;
  }

  /**
   * Returns the component map from the design file
   */
  public getComponentsMap(): ComponentMap[] {
    return this.generateMap();
  }
}
