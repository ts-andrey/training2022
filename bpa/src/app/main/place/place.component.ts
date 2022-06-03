import { IPlace } from './../../model/IPlace';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceComponent {
  public isActive = false;
  @Input() place!: IPlace;
  @Input() id!: string;
  constructor(cdr: ChangeDetectorRef) {
    cdr.markForCheck();
  }

  onClickActive() {
    this.isActive = !this.isActive;
  }
}