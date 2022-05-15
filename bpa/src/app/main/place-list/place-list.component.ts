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
  constructor(private router: Router, private data: DataService) {}

  places = this.data.campingPlaces;

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.split('=')[1] === 'camping') {
          this.places = this.data.campingPlaces;
        } else if (ev.url.split('=')[1] === 'relax') {
          this.places = this.data.relaxPlaces;
        } else if (ev.url.split('=')[1] === 'food') {
          this.places = this.data.foodPlaces;
        } else if (ev.url.split('=')[1] === 'travel') {
          this.places = this.data.travelPlaces;
        } else if (ev.url.split('=')[1] === 'heal') {
          this.places = this.data.healPlaces;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
