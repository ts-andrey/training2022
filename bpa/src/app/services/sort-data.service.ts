import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortDataService {
  public trigger = false;
  public sortTypeLast: string = '';
  public sortType: string = 'placeRegisterDate';
  public isReversed: boolean = false;

  setSortType(value: string) {
    this.trigger = !this.trigger;
    this.sortType = value;
    if (this.sortTypeLast === this.sortType) {
      this.isReversed = !this.isReversed;
    } else {
      this.isReversed = false;
    }
    this.sortTypeLast = this.sortType;
  }
}