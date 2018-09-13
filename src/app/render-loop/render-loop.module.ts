import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderLoopComponent } from './render-loop.component';
import { RouterModule } from '@angular/router';
import { ComponentMapService } from './component-map.service';
import { ComponentDataService } from './component-data.service';
import { ComponentsService } from './components.service';
import { DESIGN_DATA } from './tokens';
import { RendererComponent } from './renderer.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignDataService } from './design-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: RenderLoopComponent }])
  ],
  declarations: [ RenderLoopComponent, RendererComponent ],
  providers: [
    DesignDataService
  ]
})
export class RenderLoopModule { }
