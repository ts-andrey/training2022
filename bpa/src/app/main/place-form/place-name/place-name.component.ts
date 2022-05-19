import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-place-name',
  templateUrl: './place-name.component.html',
  styleUrls: ['./place-name.component.scss'],
})
export class PlaceNameComponent implements OnInit {
  constructor() {}
  @Input() placeName?: string;

  ngOnInit(): void {}
}
