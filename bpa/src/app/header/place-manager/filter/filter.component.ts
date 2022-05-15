import { FilterPlacesService } from './../../../services/filter-places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(private filterPlaceService: FilterPlacesService) {}

  ngOnInit(): void {}

  filterData(value: string) {
    this.filterPlaceService.filterStr = value;
  }
}
