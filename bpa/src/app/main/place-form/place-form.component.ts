import { DataService } from './../../services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IPlace } from './../../model/IPlace';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss'],
})
export class PlaceFormComponent implements OnInit {
  
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

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
      this.place = Object.assign(
        this.place,
        this.dataService.getPlace(this.id)
      );
    }
  }
  ngOnInit(): void {}

  private updatePlace(data: {
    description: string;
    name: string;
    imgUrl: string;
    location: string;
  }) {
    this.place.placeDescription = data.description;
    this.place.placeName = data.name;
    this.place.placeImg = data.imgUrl;
    this.place.placeLocation = data.location;
  }

  onSubmit(form: NgForm) {
    this.updatePlace(form.value);
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
