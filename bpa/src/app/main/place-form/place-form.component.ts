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
  public place: IPlace = {
    placeName: '',
    placeLocation: '',
    placeImg: '',
    placeDescription: '',
    placeRegisterDate: '',
    placeAuthor: '',
  };

  private id?: string;
  private mode = 'create';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public location: Location
  ) {
    this.mode = <string>this.route.snapshot.paramMap.get('mode');
    if (this.mode === 'edit') {
      this.id = <string>this.route.snapshot.paramMap.get('id');
      this.place = Object.assign(this.place, this.dataService.getPlace(this.id));
    }
  }
  ngOnInit(): void {}
  updateDescription(data: any) {
    this.place.placeDescription = data.description;
  }
  updateName(data: any) {
    this.place.placeName = data.name;
  }
  updateImg(data: any) {
    this.place.placeImg = data.imgUrl;
  }
  updateLocation(data: any) {
    this.place.placeLocation = data.location;
  }
  onSubmit() {
    if (this.place.placeName && this.place.placeLocation) {
      if (this.mode === 'edit') {
        this.dataService.updatePlace(<string>this.id, this.place);
      } else {
        this.dataService.addPlace(this.place);
      }
      this.location.historyGo(-1);
    }
  }
  goBack(event: Event) {
    event.preventDefault();
    this.location.historyGo(-1);
  }
}
