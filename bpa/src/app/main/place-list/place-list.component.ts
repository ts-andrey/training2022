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
    private dataService: DataService,
    public filterPS: FilterPlacesService,
    public sortPS: SortDataService
  ) {
    this.places = this.dataService.campingPlaces;
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.split('=')[1] === 'camping') {
          this.dataService.type = 'camping';
          this.places = this.dataService.campingPlaces;
        } else if (ev.url.split('=')[1] === 'relax') {
          this.dataService.type = 'relax';
          this.places = this.dataService.relaxPlaces;
        } else if (ev.url.split('=')[1] === 'food') {
          this.dataService.type = 'food';
          this.places = this.dataService.foodPlaces;
        } else if (ev.url.split('=')[1] === 'travel') {
          this.dataService.type = 'travel';
          this.places = this.dataService.travelPlaces;
        } else if (ev.url.split('=')[1] === 'heal') {
          this.dataService.type = 'heal';
          this.places = this.dataService.healPlaces;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
