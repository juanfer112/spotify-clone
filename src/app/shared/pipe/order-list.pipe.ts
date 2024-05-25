import { Pipe, PipeTransform } from '@angular/core';
import {TrackModel} from '@core/models/tracks.model'
@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort:string = 'asc'): TrackModel[] {

    try {
      if(args== null) {
        return value
      
      } else {
        const tmpList = value.sort((a, b) => {
          const nameA = a[args].toUpperCase(); // ignore upper and lowercase
          const nameB = b[args].toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        });

        return sort == 'asc' ? tmpList : tmpList.reverse();
      }

    } catch (e) {
      console.log('Algo paso!');
      return value;
    }
  }

}
