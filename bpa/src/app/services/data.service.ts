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
export class DataService {
  campingPlaces!: IPlace[];
  foodPlaces!: IPlace[];
  healPlaces!: IPlace[];
  relaxPlaces!: IPlace[];
  travelPlaces!: IPlace[];
  allPlaces!: IPlace[];
  type: string = 'camping';
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
  getPlace(id: string) {
    let place: IPlace;
    if (this.type === 'camping') {
      place = <IPlace>(
        this.campingPlaces
          .filter((el) => id === el.placeName + el.placeLocation)
          .shift()
      );
    } else if (this.type === 'food') {
      place = <IPlace>(
        this.foodPlaces
          .filter((el) => id === el.placeName + el.placeLocation)
          .shift()
      );
    } else if (this.type === 'relax') {
      place = <IPlace>(
        this.relaxPlaces
          .filter((el) => id === el.placeName + el.placeLocation)
          .shift()
      );
    } else if (this.type === 'heal') {
      place = <IPlace>(
        this.healPlaces
          .filter((el) => id === el.placeName + el.placeLocation)
          .shift()
      );
    } else if (this.type === 'travel') {
      place = <IPlace>(
        this.travelPlaces
          .filter((el) => id === el.placeName + el.placeLocation)
          .shift()
      );
    } else {
      place = <IPlace>(
        this.allPlaces
          .filter((el) => id === el.placeName + el.placeLocation)
          .shift()
      );
    }
    return place;
  }
}
