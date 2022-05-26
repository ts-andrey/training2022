import { SortDataService } from './../../services/sort-data.service';
import { FilterPlacesService } from './../../services/filter-places.service';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class PlaceListComponent {
  constructor(
    public dataService: DataService,
    public filterPS: FilterPlacesService,
    public sortPS: SortDataService
  ) {}
}
