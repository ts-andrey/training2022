import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceLocationComponent } from './place-location.component';

describe('PlaceCountryComponent', () => {
  let component: PlaceLocationComponent;
  let fixture: ComponentFixture<PlaceLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
