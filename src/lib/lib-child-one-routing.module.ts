import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibChildOneComponent } from './lib-child-one.component';

const routes: Routes = [
  {
    path:"",
    component:LibChildOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibChildOneRoutingModule { }
