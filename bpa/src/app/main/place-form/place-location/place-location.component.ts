import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-place-location',
  templateUrl: './place-location.component.html',
  styleUrls: ['./place-location.component.scss'],
})
export class PlaceLocationComponent implements OnInit {
  constructor() {}

  @Input() placeLocation?: string;

  @Output() location = new EventEmitter<{
    location: string | undefined;
  }>();

  onType() {
    this.location.emit({ location: this.placeLocation });
  }
  ngOnInit(): void {}
}
