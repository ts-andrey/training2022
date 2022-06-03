import { SortDataService } from './../../../services/sort-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
})
export class SorterComponent {
  constructor(private sortDataService: SortDataService) {}

  onClickSort(sortType: string) {
    this.sortDataService.setSortType(sortType);
  }
}
