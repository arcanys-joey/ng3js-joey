import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWallComponent } from './simple-wall.component';
import { RouterModule } from '@angular/router';
import { WallComponentsService, WALL_DATA } from './wall-components.service';
import { Simple_Wall } from '../data/Simple_Wall';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SimpleWallComponent }])
  ],
  declarations: [ SimpleWallComponent ],
  providers: [ 
    {
      provide: WALL_DATA,
      useValue: Simple_Wall
    },
    WallComponentsService
  ]
})
export class SimpleWallModule { }
