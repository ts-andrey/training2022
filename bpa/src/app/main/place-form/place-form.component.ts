import { DataService } from './../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IPlace } from './../../model/IPlace';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss'],
})
export class PlaceFormComponent implements OnInit {
  public place?: IPlace;

  public placeName = '';
  public placeLocation = '';
  public placeDescription = '';
  public placeDate = '';

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    public location: Location
  ) {
    const mode = <string>this.route.snapshot.paramMap.get('mode');
    if (mode === 'edit') {
      const id = <string>this.route.snapshot.paramMap.get('id');
      this.place = this.data.getPlace(id);
      this.placeName = this.place.placeName;
      this.placeLocation = this.place.placeLocation;
      this.placeDescription = this.place.placeDescription;
      this.placeDate = this.place.placeRegisterDate;
    }
  }
  ngOnInit(): void {}
  goBack(event: Event) {
    event.preventDefault();
    this.location.historyGo(-1);
  }
}
