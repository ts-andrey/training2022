import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-place-type',
  templateUrl: './place-type.component.html',
  styleUrls: ['./place-type.component.scss'],
})
export class PlaceTypeComponent implements OnInit, OnDestroy {
  public placeType = 'Camping places';
  private subscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.split('=')[1] === 'camping') {
          this.placeType = 'Camping places';
        } else if (ev.url.split('=')[1] === 'relax') {
          this.placeType = 'Places to relax';
        } else if (ev.url.split('=')[1] === 'food') {
          this.placeType = 'Places to eat';
        } else if (ev.url.split('=')[1] === 'travel') {
          this.placeType = 'Places to travel';
        } else if (ev.url.split('=')[1] === 'heal') {
          this.placeType = 'Healing places';
        } else if (ev.url.split('=')[1] === 'all') {
          this.placeType = 'All places';
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}