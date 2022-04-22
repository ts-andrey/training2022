import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-type',
  templateUrl: './place-type.component.html',
  styleUrls: ['./place-type.component.scss'],
})
export class PlaceTypeComponent implements OnInit {
  constructor() {}

  @Input()
  placeType = 'placeType';

  ngOnInit(): void {}
}
