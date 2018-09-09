import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCubeComponent } from './basic-cube.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BasicCubeComponent }])
  ],
  declarations: [ BasicCubeComponent ]
})
export class BasicCubeModule { }
