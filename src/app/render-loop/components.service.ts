import { Injectable, Inject, ReflectiveInjector } from '@angular/core';
import { DESIGN_DATA, WALLFRAME_DATA } from './tokens';
import { ComponentMapService } from './component-map.service';
import { ComponentDataService } from './component-data.service';

@Injectable()
export class ComponentsService {

  constructor(
    @Inject(DESIGN_DATA) private designData: any,
    private componentMapService: ComponentMapService,
    private componentDataService: ComponentDataService
  ) {
    // console.log('design data', this.designData);
    // console.log('component map', this.componentMapService.getComponentMap());
    // const componentMap = this.componentMapService.getComponentMap()[0];
    // console.log('map', componentMap);
    // console.log('data', this.componentDataService.getComponentData(componentMap));
    // console.log('wall transform data', this.componentDataService.getWallTransform(componentMap));
    // console.log('wallframe transform data', this.componentDataService.getWallFrameTransform(componentMap));
  }

}
