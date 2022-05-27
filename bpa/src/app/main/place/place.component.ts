import { IPlace } from './../../model/IPlace';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceComponent implements OnInit {
  public isActive = false;
  @Input() place!: IPlace;
  @Input() id!: string;
  constructor(cdr: ChangeDetectorRef) {
    cdr.markForCheck();
  }

  ngOnInit(): void {}

  onClickActive() {
    this.isActive = !this.isActive;
  }
}
