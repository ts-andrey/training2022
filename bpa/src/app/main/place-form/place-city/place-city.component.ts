import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-city',
  templateUrl: './place-city.component.html',
  styleUrls: ['./place-city.component.scss'],
})
export class PlaceCityComponent implements OnInit {
  constructor() {}

  @Output()
  cityName = '';

  ngOnInit(): void {}
}
