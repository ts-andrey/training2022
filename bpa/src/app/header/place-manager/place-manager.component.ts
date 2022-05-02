import { Component, OnInit } from '@angular/core';
import { ISortEvent } from 'src/app/model/ISortEvent';

@Component({
  selector: 'app-place-manager',
  templateUrl: './place-manager.component.html',
  styleUrls: ['./place-manager.component.scss'],
})
export class PlaceManagerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sortPlaces(sortEvent: ISortEvent) {
    console.log(sortEvent);
  }
}
