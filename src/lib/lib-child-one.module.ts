import { NgModule } from '@angular/core';
import { LibChildOneComponent } from './lib-child-one.component';
import { LibChildOneRoutingModule } from './lib-child-one-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LibChildOneComponent
  ],
  imports: [
    LibChildOneRoutingModule,
    FormsModule
    ],
  exports: [
    LibChildOneComponent
  ]
})
export class LibChildOneModule { }
