import { FilterPlacesService } from './../../../services/filter-places.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(private filterPlaceService: FilterPlacesService) {}

  filterData(value: string) {
    this.filterPlaceService.filterStr = value;
  }
}