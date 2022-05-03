import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISortEvent } from 'src/app/model/ISortEvent';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
})
export class SorterComponent implements OnInit {
  public isSortRatingStraight: boolean = true;
  public isSortDateStraight: boolean = true;
  public isSortCountryStraight: boolean = true;

  @Output() sortEventData = new EventEmitter<ISortEvent>();

  constructor() {}

  ngOnInit(): void {}
  onClickSortByRating() {
    this.sortEventData.emit({
      sortType: 'rating',
      sortWay: this.isSortRatingStraight ? 'straight' : 'reverse',
    });
    this.isSortRatingStraight = !this.isSortRatingStraight;
  }
  onClickSortByDate() {
    this.sortEventData.emit({
      sortType: 'date',
      sortWay: this.isSortDateStraight ? 'straight' : 'reverse',
    });
    this.isSortDateStraight = !this.isSortDateStraight;
  }
  onClickSortByCountry() {
    this.sortEventData.emit({
      sortType: 'country',
      sortWay: this.isSortCountryStraight ? 'straight' : 'reverse',
    });
    this.isSortCountryStraight = !this.isSortCountryStraight;
  }
}
