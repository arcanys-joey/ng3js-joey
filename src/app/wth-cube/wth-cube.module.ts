import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WthCubeComponent } from './wth-cube.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WthCubeComponent }])
  ],
  declarations: [WthCubeComponent]
})
export class WthCubeModule { }
