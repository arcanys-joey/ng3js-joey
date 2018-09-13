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
    console.log('design data', this.designData);
    // console.log('components group map', this.componentMapService.getComponentGroupMap());
    // console.log('components map', this.componentMapService.getComponentsMap());
  }

}
