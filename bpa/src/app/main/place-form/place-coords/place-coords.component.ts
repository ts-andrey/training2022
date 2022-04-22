import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-coords',
  templateUrl: './place-coords.component.html',
  styleUrls: ['./place-coords.component.scss'],
})
export class PlaceCoordsComponent implements OnInit {
  constructor() {}

  @Output()
  coordinates = '';

  ngOnInit(): void {}
}
