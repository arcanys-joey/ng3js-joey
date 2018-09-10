import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWallComponent } from './simple-wall.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SimpleWallComponent }])
  ],
  declarations: [SimpleWallComponent]
})
export class SimpleWallModule { }
