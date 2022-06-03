import { Subscription, Subject } from 'rxjs';
import { IPlace } from './../model/IPlace';
import { Injectable, OnDestroy } from '@angular/core';
import {
  placesCamping,
  placesFood,
  placesHeal,
  placesRelax,
  placesTravel,
} from '../../assets/data';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnDestroy {
  public places!: IPlace[];
  public allPlaces!: IPlace[];
  public isData: boolean = true;

  private campingPlaces!: IPlace[];
  private foodPlaces!: IPlace[];
  private healPlaces!: IPlace[];
  private relaxPlaces!: IPlace[];
  private travelPlaces!: IPlace[];
  private placeSubscription!: Subscription;
  private placeIndex!: number;

  private placeSubject = new Subject<IPlace[]>();

  constructor(private router: Router) {
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

    this.placeSubject.next(this.places);

    this.placeSubscription = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (!ev.url.includes('mode')) {
          const placeType = ev.url.split('=')[1];
          this.setPlaces(placeType);
        }
      }
    });
  }

  private setPlaces(placeType: string | null) {
    if (placeType === 'camping') {
      this.places = this.campingPlaces;
    } else if (placeType === 'relax') {
      this.places = this.relaxPlaces;
    } else if (placeType === 'food') {
      this.places = this.foodPlaces;
    } else if (placeType === 'travel') {
      this.places = this.travelPlaces;
    } else if (placeType === 'heal') {
      this.places = this.healPlaces;
    } else {
      this.places = this.allPlaces;
    }
    this.placeSubject.next(this.places);
  }

  private reload() {
    this.isData = false;
    setTimeout(() => (this.isData = true));
  }

  private updateAll() {
    this.allPlaces = [
      ...this.campingPlaces,
      ...this.foodPlaces,
      ...this.healPlaces,
      ...this.relaxPlaces,
      ...this.travelPlaces,
    ];
  }

  ngOnDestroy(): void {
    this.placeSubscription.unsubscribe();
  }

  getPlaces() {
    return this.placeSubject;
  }

  getPlace(id: string) {
    let result = findPlace(this.places, id);
    this.placeIndex = result.placeIndex;
    return result.place;
  }

  updatePlace(id: string, place: IPlace) {
    this.getPlace(id);
    this.places.splice(this.placeIndex, 1, place);
    this.updateAll();
    this.placeSubject.next(this.places);
  }
  addPlace(place: IPlace) {
    place.placeRegisterDate = new Date().toDateString();
    this.places.push(place);
    this.updateAll();
    this.placeSubject.next(this.places);
  }
  deletePlace(id: string) {
    this.getPlace(id);
    this.places.splice(this.placeIndex, 1);
    this.updateAll();
    this.reload();
    this.placeSubject.next(this.places);
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