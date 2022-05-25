import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-image',
  templateUrl: './place-image.component.html',
  styleUrls: ['./place-image.component.scss'],
})
export class PlaceImageComponent implements OnInit {
  constructor() {}
  @Input() placeImage?: string;
  @Output() placeImgUrl = new EventEmitter<{
    imgUrl: string | undefined;
  }>();

  onType() {
    this.placeImgUrl.emit({ imgUrl: this.placeImage });
  }
  ngOnInit(): void {}
}
