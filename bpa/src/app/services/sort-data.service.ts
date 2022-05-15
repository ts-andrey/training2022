import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortDataService {
  public sortTypeLast: string = '';
  public sortType: string = '';
  public isReversed: boolean = false;
  constructor() {}

  setSortType(value: string) {
    this.sortType = value;
    if (this.sortTypeLast === this.sortType) {
      this.isReversed = !this.isReversed;
    } else {
      this.isReversed = false;
    }
    this.sortTypeLast = this.sortType;
  }
}
