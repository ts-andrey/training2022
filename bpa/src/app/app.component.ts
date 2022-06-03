import { ISortEvent } from './model/ISortEvent';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sortEventMain!: ISortEvent;
  title = 'bpa';

  appSortEvent(sortEventData: any) {
    this.sortEventMain.sortType = sortEventData.sortType;
    this.sortEventMain.sortWay = sortEventData.sortWay;
    console.log('app sort data: ', this.sortEventMain);
  }
}