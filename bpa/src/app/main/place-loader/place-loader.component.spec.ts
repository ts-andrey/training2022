import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceLoaderComponent } from './place-loader.component';

describe('PlaceLoaderComponent', () => {
  let component: PlaceLoaderComponent;
  let fixture: ComponentFixture<PlaceLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceLoaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
