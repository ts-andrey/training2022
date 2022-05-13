import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-name',
  templateUrl: './place-name.component.html',
  styleUrls: ['./place-name.component.scss'],
})
export class PlaceNameComponent implements OnInit {
  constructor() {}

  @Output()
  name = '';

  ngOnInit(): void {}
}
