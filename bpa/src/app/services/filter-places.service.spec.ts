import { TestBed } from '@angular/core/testing';

import { FilterPlacesService } from './filter-places.service';

describe('FilterPlacesService', () => {
  let service: FilterPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
