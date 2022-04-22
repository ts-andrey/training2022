import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss'],
})
export class PlaceFormComponent implements OnInit {
  constructor() {}

  placeName = '';
  placeCountry = '';
  placeCity = '';
  placeCoords = '';
  placeDescription = '';
  placeAuthor = '';
  placeDate = '';

  ngOnInit(): void {}
}
