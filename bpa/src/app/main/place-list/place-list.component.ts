import { DataSource } from '@angular/cdk/collections';
import { IPlace } from './../../model/IPlace';
import { SortDataService } from './../../services/sort-data.service';
import { FilterPlacesService } from './../../services/filter-places.service';
import { DataService } from './../../services/data.service';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class PlaceListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'country', 'date'];
  dataSource!: MatTableDataSource<IPlace>;
  subscriber!: Subscription;
  constructor(
    public dataService: DataService,
    public filterPS: FilterPlacesService,
    public sortPS: SortDataService
  ) {
   
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IPlace>(this.dataService.places);
    this.subscriber = this.dataService.getPlaces().subscribe((data) => {
      this.dataSource = new MatTableDataSource<IPlace>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
