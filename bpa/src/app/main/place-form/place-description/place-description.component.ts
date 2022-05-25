import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.component.html',
  styleUrls: ['./place-description.component.scss'],
})
export class PlaceDescriptionComponent implements OnInit {
  constructor() {}

  @Input() placeDescription?: string;

  @Output() description = new EventEmitter<{
    description: string | undefined;
  }>();

  onType() {
    this.description.emit({ description: this.placeDescription });
  }
  ngOnInit(): void {}
}
