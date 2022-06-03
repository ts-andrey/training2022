import { IPlace } from './../model/IPlace';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlaces',
})
export class FilterPlacesPipe implements PipeTransform {
  transform(value: IPlace[], filterStr: string): IPlace[] {
    return value.filter((el) => el.placeName.toLowerCase().includes(filterStr));
  }
}