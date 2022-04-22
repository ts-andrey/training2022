import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCoordsComponent } from './place-coords.component';

describe('PlaceCoordsComponent', () => {
  let component: PlaceCoordsComponent;
  let fixture: ComponentFixture<PlaceCoordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCoordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
