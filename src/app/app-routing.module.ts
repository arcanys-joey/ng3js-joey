import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic-cube',
    loadChildren: './basic-cube/basic-cube.module#BasicCubeModule'
  },
  {
    path: 'wth-cube',
    loadChildren: './wth-cube/wth-cube.module#WthCubeModule'
  },
  {
    path: 'render-test',
    loadChildren: './render-test/render-test.module#RenderTestModule'
  },
  {
    path: 'simple-wall',
    loadChildren: './simple-wall/simple-wall.module#SimpleWallModule'
  },
  {
    path: 'render-loop',
    loadChildren: './render-loop/render-loop.module#RenderLoopModule'
  },
  { 
    path: '',
    redirectTo: '/wth-cube',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
