import { Component } from '@angular/core';
import { AppStoreService } from 'app-store-bej';

@Component({
  selector: 'lib-lib-child-one',
  template: `
    <h3>
      Across library data
</h3>
    <input class="form-control" [(ngModel)]="crossCompData" disabled type="text" style="margin-bottom: 20px;">
  `,
  styles: [
  ]
})
export class LibChildOneComponent {

  crossCompData:string  = ''

  constructor(private appStoreService:AppStoreService){

    this.appStoreService.dataSubject.subscribe((data)=>{
      this.crossCompData = data
    })
  }
}
