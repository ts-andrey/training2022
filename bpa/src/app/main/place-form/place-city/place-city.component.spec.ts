import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCityComponent } from './place-city.component';

describe('PlaceCityComponent', () => {
  let component: PlaceCityComponent;
  let fixture: ComponentFixture<PlaceCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
