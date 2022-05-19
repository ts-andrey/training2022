import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-place-location',
  templateUrl: './place-location.component.html',
  styleUrls: ['./place-location.component.scss'],
})
export class PlaceLocationComponent implements OnInit {
  constructor() {}

  @Input() placeLocation?: string;
  ngOnInit(): void {}
}
