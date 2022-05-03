import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISortEvent } from 'src/app/model/ISortEvent';

@Component({
  selector: 'app-place-manager',
  templateUrl: './place-manager.component.html',
  styleUrls: ['./place-manager.component.scss'],
})
export class PlaceManagerComponent implements OnInit {
  @Output() managerSortData = new EventEmitter<ISortEvent>();
  constructor() {}
  ngOnInit(): void {}

  managerSortEvent(sortEvent: ISortEvent) {
    this.managerSortData.emit(sortEvent);
  }
}
