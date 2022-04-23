import { IPlace } from './../../model/IPlace';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
  constructor() {}

  isActive = false;
  
  @Input()
  place!: IPlace;

  ngOnInit(): void {}
}
