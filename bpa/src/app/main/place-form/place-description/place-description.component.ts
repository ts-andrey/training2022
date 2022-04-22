import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.component.html',
  styleUrls: ['./place-description.component.scss'],
})
export class PlaceDescriptionComponent implements OnInit {
  constructor() {}

  @Output()
  description = '';

  ngOnInit(): void {}
}
