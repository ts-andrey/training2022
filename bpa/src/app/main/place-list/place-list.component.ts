import { IPlace } from './../../model/IPlace';
import { SortDataService } from './../../services/sort-data.service';
import { FilterPlacesService } from './../../services/filter-places.service';
import { DataService } from './../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class PlaceListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public places: IPlace[];

  constructor(
    private router: Router,
    private data: DataService,
    public filterPS: FilterPlacesService,
    public sortPS: SortDataService
  ) {
    this.places = this.data.campingPlaces;
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.split('=')[1] === 'camping') {
          this.data.type = 'camping';
          this.places = this.data.campingPlaces;
        } else if (ev.url.split('=')[1] === 'relax') {
          this.data.type = 'relax';
          this.places = this.data.relaxPlaces;
        } else if (ev.url.split('=')[1] === 'food') {
          this.data.type = 'food';
          this.places = this.data.foodPlaces;
        } else if (ev.url.split('=')[1] === 'travel') {
          this.data.type = 'travel';
          this.places = this.data.travelPlaces;
        } else if (ev.url.split('=')[1] === 'heal') {
          this.data.type = 'heal';
          this.places = this.data.healPlaces;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
