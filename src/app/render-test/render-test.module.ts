import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderTestComponent } from './render-test.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RenderTestComponent }])
  ],
  declarations: [RenderTestComponent]
})
export class RenderTestModule { }
