import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderLoopComponent } from './render-loop.component';
import { Wall3 } from '../data/Wall3';
import { RouterModule } from '@angular/router';
import { ComponentMapService } from './component-map.service';
import { ComponentDataService } from './component-data.service';
import { ComponentsService } from './components.service';
import { DESIGN_DATA } from './tokens';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RenderLoopComponent }])
  ],
  declarations: [ RenderLoopComponent ],
  providers: [
    { provide: DESIGN_DATA, useValue: Wall3 },
    ComponentMapService,
    ComponentDataService,
    ComponentsService
  ]
})
export class RenderLoopModule { }
