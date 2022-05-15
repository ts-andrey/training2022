import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from '../model/IPlace';

@Pipe({
  name: 'sortPlaces',
})
export class SortPlacesPipe implements PipeTransform {
  transform(value: IPlace[], sortProp: string, isReversed: boolean): IPlace[] {
    if (sortProp === 'placeRegisterDate') {
      if (isReversed) {
        return value
          .sort(
            (a, b) =>
              new Date(<string>a[sortProp]).getTime() -
              new Date(<string>b[sortProp]).getTime()
          )
          .reverse();
      }
      return value.sort(
        (a, b) =>
          new Date(<string>a[sortProp]).getTime() -
          new Date(<string>b[sortProp]).getTime()
      );
    }
    return sortArr(value, sortProp, isReversed);
  }
}

function sortArr(value: any[], sortProp: string, isReversed: boolean) {
  if (isReversed) {
    return value
      .sort((a, b) =>
        (<string>a[sortProp])
          .toLowerCase()
          .localeCompare((<string>b[sortProp]).toLowerCase())
      )
      .reverse();
  }
  return value.sort((a, b) =>
    (<string>a[sortProp])
      .toLowerCase()
      .localeCompare((<string>b[sortProp]).toLowerCase())
  );
}
