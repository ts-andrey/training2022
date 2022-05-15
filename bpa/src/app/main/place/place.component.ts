import { IPlace } from './../../model/IPlace';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
  public isActive = false;
  @Input() place!: IPlace;
  @Input() id!: string;
  constructor() {}

  ngOnInit(): void {}

  onClickActive() {
    this.isActive = !this.isActive;
  }
}
