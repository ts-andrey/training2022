import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { IPlace } from './../../model/IPlace';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss'],
})
export class PlaceFormComponent implements OnInit {
  private place?: IPlace;

  public placeName = this.place?.placeName || '';
  public placeLocation = this.place?.placeLocation || '';
  public placeDescription = this.place?.placeDescription || '';
  public placeAuthor = this.place?.placeAuthor || '';
  public placeDate = this.place?.placeRegisterDate || '';

  constructor(private route: ActivatedRoute, private data: DataService) {
    const mode = <string>this.route.snapshot.paramMap.get('mode');
    if (mode === 'edit') {
      const id = <string>this.route.snapshot.paramMap.get('id');
      this.place = this.data.getPlace(id);
    }
  }
  ngOnInit(): void {}
}
