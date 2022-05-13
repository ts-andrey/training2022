import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISortEvent } from '../model/ISortEvent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() headerSortData = new EventEmitter<ISortEvent>();

  constructor() {}

  ngOnInit(): void {}

  headerSortEvent(sortEvent: any) {
    console.log('header start event: ', sortEvent);
     this.headerSortData.emit({
      sortType: sortEvent.sortType,
      sortWay: sortEvent.sortWay,
    });
    console.log('header end event: ', sortEvent);
  }
}
