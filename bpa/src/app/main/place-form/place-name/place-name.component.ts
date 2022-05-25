import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-place-name',
  templateUrl: './place-name.component.html',
  styleUrls: ['./place-name.component.scss'],
})
export class PlaceNameComponent implements OnInit {
  constructor() {}
  @Input() placeName?: string;
  @Output() name = new EventEmitter<{
    name: string | undefined;
  }>();

  onType() {
    this.name.emit({ name: this.placeName });
  }

  ngOnInit(): void {}
}
