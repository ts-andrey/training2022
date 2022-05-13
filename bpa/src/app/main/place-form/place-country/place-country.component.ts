import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-country',
  templateUrl: './place-country.component.html',
  styleUrls: ['./place-country.component.scss'],
})
export class PlaceCountryComponent implements OnInit {
  constructor() {}

  @Output()
  countryName = '';
  ngOnInit(): void {}
}
