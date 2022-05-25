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

  private placeIndex!: number;

  constructor() {
    this.campingPlaces = placesCamping;
    this.foodPlaces = placesFood;
    this.healPlaces = placesHeal;
    this.relaxPlaces = placesRelax;
    this.travelPlaces = placesTravel;
    this.allPlaces = [
      ...this.campingPlaces,
      ...this.foodPlaces,
      ...this.healPlaces,
      ...this.relaxPlaces,
      ...this.travelPlaces,
    ];
  }
  getPlace(id: string) {
    let result;
    if (this.type === 'camping') {
      result = findPlace(this.campingPlaces, id);
    } else if (this.type === 'food') {
      result = findPlace(this.foodPlaces, id);
    } else if (this.type === 'relax') {
      result = findPlace(this.relaxPlaces, id);
    } else if (this.type === 'heal') {
      result = findPlace(this.healPlaces, id);
    } else if (this.type === 'travel') {
      result = findPlace(this.travelPlaces, id);
    } else {
      result = findPlace(this.allPlaces, id);
    }
    this.placeIndex = result.placeIndex;
    return result.place;
  }

  updatePlace(id: string, place: IPlace) {
    this.getPlace(id);
    if (this.type === 'camping') {
      this.campingPlaces.splice(this.placeIndex, 1, place);
    } else if (this.type === 'food') {
      this.foodPlaces.splice(this.placeIndex, 1, place);
    } else if (this.type === 'relax') {
      this.relaxPlaces.splice(this.placeIndex, 1, place);
    } else if (this.type === 'heal') {
      this.healPlaces.splice(this.placeIndex, 1, place);
    } else if (this.type === 'travel') {
      this.travelPlaces.splice(this.placeIndex, 1, place);
    } else {
      this.allPlaces.splice(this.placeIndex, 1, place);
    }
  }
  addPlace(place: IPlace) {
    if (this.type === 'camping') {
      this.campingPlaces.push(place);
    } else if (this.type === 'food') {
      this.foodPlaces.push(place);
    } else if (this.type === 'relax') {
      this.relaxPlaces.push(place);
    } else if (this.type === 'heal') {
      this.healPlaces.push(place);
    } else if (this.type === 'travel') {
      this.travelPlaces.push(place);
    } else {
      this.allPlaces.push(place);
    }
  }
  deletePlace(id: string) {
    this.getPlace(id);
    if (this.type === 'camping') {
      this.campingPlaces.splice(this.placeIndex, 1);
    } else if (this.type === 'food') {
      this.foodPlaces.splice(this.placeIndex, 1);
    } else if (this.type === 'relax') {
      this.relaxPlaces.splice(this.placeIndex, 1);
    } else if (this.type === 'heal') {
      this.healPlaces.splice(this.placeIndex, 1);
    } else if (this.type === 'travel') {
      this.travelPlaces.splice(this.placeIndex, 1);
    } else {
      this.allPlaces.splice(this.placeIndex, 1);
    }
  }
}

function findPlace(places: IPlace[], id: string) {
  let placeIndex!: number;
  const place = <IPlace>places
    .filter((el, index) => {
      const result = id === el.placeName + el.placeLocation;
      if (result) {
        placeIndex = index;
      }
      return result;
    })
    .shift();

  return { place, placeIndex };
}
