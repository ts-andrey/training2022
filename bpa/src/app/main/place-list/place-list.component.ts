import { DataSource } from '@angular/cdk/collections';
import { IPlace } from './../../model/IPlace';
import { SortDataService } from './../../services/sort-data.service';
import { FilterPlacesService } from './../../services/filter-places.service';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
  dataSource = new PlaceDataSource(this.dataService);
}

export class PlaceDataSource extends DataSource<IPlace> {
  constructor(private dataService: DataService) {
    super();
  }
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<IPlace[]>(this.dataService.places);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IPlace[]> {
    return this.data;
  }

  disconnect() {}
}
