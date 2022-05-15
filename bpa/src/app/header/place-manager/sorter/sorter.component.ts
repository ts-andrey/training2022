import { SortDataService } from './../../../services/sort-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
})
export class SorterComponent implements OnInit {
  constructor(private sortDataService: SortDataService) {}

  ngOnInit(): void {}
  onClickSort(sortType: string) {
    this.sortDataService.setSortType(sortType);
  }
}
