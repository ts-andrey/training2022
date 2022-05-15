import { IPlace } from './../model/IPlace';
import { Injectable } from '@angular/core';
import {
  placesCamping,
  placesFood,
  placesHeal,
  placesRelax,
  placesTravel,
} from '../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class DataService{
  campingPlaces!: IPlace[];
  foodPlaces!: IPlace[];
  healPlaces!: IPlace[];
  relaxPlaces!: IPlace[];
  travelPlaces!: IPlace[];
  allPlaces!: IPlace[];
  constructor() {
    this.campingPlaces = [...placesCamping];
    this.foodPlaces = [...placesFood];
    this.healPlaces = [...placesHeal];
    this.relaxPlaces = [...placesRelax];
    this.travelPlaces = [...placesTravel];
    this.allPlaces = [
      ...this.campingPlaces,
      ...this.foodPlaces,
      ...this.healPlaces,
      ...this.relaxPlaces,
      ...this.travelPlaces,
    ];
  }
}
