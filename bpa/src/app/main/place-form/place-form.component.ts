import { IPlace } from './../../model/IPlace';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss'],
})
export class PlaceFormComponent implements OnInit {
  constructor() {}
  @Input() place?: IPlace;

  placeName = this.place?.placeName || '';
  placeLocation = this.place?.placeLocation || '';
  placeDescription = this.place?.placeDescription || '';
  placeAuthor = this.place?.placeAuthor || '';
  placeDate = this.place?.placeRegisterDate || '';

  ngOnInit(): void {}
}
