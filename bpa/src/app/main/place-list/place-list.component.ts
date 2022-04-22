import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class PlaceListComponent implements OnInit {
  constructor() {}

  places = [
    {
      placeName: 'placeName',
      placeDescription: 'placeDescription',
      placeCity: 'placeCity',
      placeCountry: 'placeCountry',
      placeCoords: 'placeCoords',
      placeRegisterDate: 'placeRegisterDate',
    },
  ];

  ngOnInit(): void {}
}
