import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { IPlace } from './../../model/IPlace';
import { DataService } from './../../services/data.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PlaceListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'country', 'date'];
  dataSource!: MatTableDataSource<IPlace>;
  subscriber!: Subscription;
  expandedElement!: IPlace | null;
  constructor(public dataService: DataService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IPlace>(this.dataService.places);
    this.subscriber = this.dataService.getPlaces().subscribe((data) => {
      this.dataSource = new MatTableDataSource<IPlace>(data);
      this.addDataFeatures();
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngAfterViewInit() {
    this.addDataFeatures();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private addDataFeatures() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortData(sort: Sort) {
    this.dataSource = new MatTableDataSource<IPlace>(
      this.dataService.places.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name':
            return compare(a.placeName, b.placeName, isAsc);
          case 'country':
            return compare(a.placeLocation, b.placeLocation, isAsc);
          case 'date':
            return compare(
              <string>a.placeRegisterDate,
              <string>b.placeRegisterDate,
              isAsc
            );
          default:
            return 0;
        }
      })
    );
    this.addDataFeatures();
  }
}
function compare(a: string, b: string, isAsc: boolean) {
  return a.localeCompare(b) * (isAsc ? 1 : -1);
}