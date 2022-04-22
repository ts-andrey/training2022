import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCountryComponent } from './place-country.component';

describe('PlaceCountryComponent', () => {
  let component: PlaceCountryComponent;
  let fixture: ComponentFixture<PlaceCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
