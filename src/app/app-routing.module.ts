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
